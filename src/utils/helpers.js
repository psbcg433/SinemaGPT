import axios from "axios";
import {
  setSearchLoading,
  setSearchSuccess,
  setSearchError,
  setSuggestionsLoading,
  setSuggestionsSuccess,
  setSuggestionsError,
  setRecentSearchSuggestionLoading,
  setRecentSearchSuggestionSuccess,
  setRecentSearchSuggestionError,
} from "../store/movieSlice/movieSlice";
import { updateRecentSearchesThunk } from "../store/userSlice/userSlice";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

const DEFAULT_USER = {
  name: null,
  email: null,
  bio: null,
  coverpic: "https://placehold.co/600x200",
  favourites: [],
  watchlist: [],
  recentSearches: "",
};

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
  },
};

export const searchTMDB = async (movieName) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie`,
      {
        ...API_OPTIONS,
        params: {
          query: movieName,
          include_adult: false,
          language: "en-US",
          page: 1,
        },
      }
    );

    const topResult = response.data?.results?.[0];
    if (!topResult) {
      console.warn(`⚠️ No TMDB results found for: "${movieName}"`);
      return null;
    }
    return topResult;
  } catch (err) {
    console.error("❌ TMDB Search Error:", err.response?.data || err.message);
    return null;
  }
};

let lastCallTime = 0;
const RATE_LIMIT_DELAY = 10000;

export const searchWithGPT = async (query, dispatch) => {
  const now = Date.now();
  if (now - lastCallTime < RATE_LIMIT_DELAY) {
    console.warn("⏳ GPT rate limit hit");
    return null;
  }

  lastCallTime = now;
  dispatch(setSearchLoading());

  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            `Bearer ${process.env.REACT_APP_GPT_API_KEY}`,
        },
        body: JSON.stringify({
          model: "mistralai/mistral-7b-instruct:free",
          messages: [
            {
              role: "user",
              content: `Act as a movie recommendation engine.

Recommend exactly 13 movie names based on: "${query}". Ensure that **each movie exists in The Movie Database (TMDB)**. If you're unsure, do not include it.

⚠️ Output must be a single-line, comma-separated list of movie titles only.

❌ No numbering  
❌ No explanations  
❌ No extra formatting  

✅ Correct format: Movie 1, Movie 2, ..., Movie 13`,
            },
          ],
          temperature: 0.7,
        }),
      }
    );

    const data = await response.json();
    let resultText = data.choices?.[0]?.message?.content?.trim() || "";

    let movieNames = [];

    if (resultText.includes("\n") || resultText.match(/^\d+[.)]\s/)) {
      movieNames = resultText
        .split("\n")
        .filter((line) => /^\d+[.)]\s/.test(line))
        .map((line) =>
          line
            .replace(/^\d+[.)]\s*/, "")
            .replace(/\(\d{4}\)/, "")
            .trim()
        );
    } else {
      movieNames = resultText
        .split(",")
        .map((name) => name.trim())
        .filter(Boolean);
    }

    console.log("🧠 GPT Returned Movie Names:", movieNames);

    const movieResults = await Promise.all(movieNames.map((m) => searchTMDB(m)));
    const filteredResults = movieResults.filter(Boolean);
    dispatch(setSearchSuccess({ title: query, list: filteredResults }));
  } catch (err) {
    dispatch(setSearchError(err.message));
  }
};

export const searchNormally = async (query, dispatch) => {
  dispatch(setSearchLoading());
  try {
    const result = await searchTMDB(query);
    if (!result) {
      dispatch(setSearchError("No results found."));
      return null;
    }

    dispatch(setSearchSuccess({ title: query, list: [result] }));
    dispatch(updateRecentSearchesThunk(query));
  } catch (err) {
    dispatch(setSearchError(err.message));
  }
};

export const fetchOrCreateUser = async (user) => {
  if (!user || !user.uid) return null;

  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    return { id: user.uid, ...userSnap.data() };
  } else {
    const userData = {
      ...DEFAULT_USER,
      email: user.email,
      name: user.displayName,
    };
    await setDoc(userRef, userData);
    return { id: user.uid, ...userData };
  }
};

export const getGPTRecommendationsFromFavourites = async (favourites, dispatch) => {
  if (!Array.isArray(favourites) || favourites.length === 0) return;

  dispatch(setSuggestionsLoading());

  try {
    const movieTitles = favourites
      .map((m) => m.original_title || m.title)
      .filter(Boolean)
      .slice(0, 10)
      .join(", ");

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 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",
        },
        body: JSON.stringify({
          model: "mistralai/mistral-7b-instruct:free",
          messages: [
            {
              role: "user",
              content: `Act as a movie recommendation engine.

Recommend exactly 12 movies similar to: ${movieTitles}. Only list names that exist in TMDB.

✅ Output format: comma-separated, no numbers, no extra formatting.`,
            },
          ],
          temperature: 0.7,
        }),
      }
    );

    const data = await response.json();
    const resultText = data.choices?.[0]?.message?.content?.trim() || "";
    const movieNames = resultText
      .split(",")
      .map((name) => name.trim())
      .filter(Boolean);

    const movieResults = await Promise.all(movieNames.map((m) => searchTMDB(m)));
    const filtered = movieResults.filter(Boolean);

    dispatch(setSuggestionsSuccess(filtered));
  } catch (err) {
    console.error("❌ GPT Suggestion Fetch Error:", err.message);
    dispatch(setSuggestionsError(err.message));
  }
};

export const getRecommendationsFromRecentSearch = async (recentSearch, dispatch) => {
  if (!recentSearch) return;

  dispatch(setRecentSearchSuggestionLoading());

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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",
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct:free",
        messages: [
          {
            role: "user",
            content: `Suggest 10 movies similar to "${recentSearch}". They must all exist on TMDB. Only respond with a comma-separated list of movie titles.`,
          },
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    const rawText = data.choices?.[0]?.message?.content || "";
    const movieNames = rawText
      .split(",")
      .map((m) => m.trim())
      .filter(Boolean);

    const results = await Promise.all(movieNames.map((name) => searchTMDB(name)));
    const filtered = results.filter(Boolean);

    dispatch(setRecentSearchSuggestionSuccess(filtered));
  } catch (err) {
    console.error("❌ GPT Recent Search Error:", err.message);
    dispatch(setRecentSearchSuggestionError(err.message));
  }
};
