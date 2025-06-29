import axios from "axios";
import {
  setSearchLoading,
  setSearchSuccess,
  setSearchError,
} from "../store/movieSlice/movieSlice";

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const GPT_API_KEY = process.env.REACT_APP_GPT_API_KEY;

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMDB_API_KEY}`,
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
          Authorization: `Bearer ${GPT_API_KEY}`,
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

    if (resultText.includes("\n") || resultText.match(/^\d+[\.\)]\s/)) {
      movieNames = resultText
        .split("\n")
        .filter((line) => /^\d+[\.\)]\s/.test(line))
        .map((line) =>
          line
            .replace(/^\d+[\.\)]\s*/, "")
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

    const movieResults = await Promise.all(
      movieNames.map((m) => searchTMDB(m))
    );
    const filteredResults = movieResults.filter(Boolean);
    dispatch(setSearchSuccess({ title: query, list: filteredResults }));
    return filteredResults;
  } catch (err) {
    dispatch(setSearchError(err.message));
    return null;
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
    return [result];
  } catch (err) {
    dispatch(setSearchError(err.message));
    return null;
  }
};
