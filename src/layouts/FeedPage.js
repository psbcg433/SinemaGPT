import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNowPlaying,
  fetchPopular,
  fetchTopRated,
  fetchUpcoming,
} from "../store/movieSlice/movieActions";
import { Box, useTheme } from "@mui/material";
import BrowseHero from "../components/BrowseHero";
import SearchSection from "../components/SearchSection";
import MovieSection from "../components/MovieSection";
import {
  getGPTRecommendationsFromFavourites,
  getRecommendationsFromRecentSearch,
} from "../utils/helpers";

const FeedPage = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const dispatch = useDispatch();

  const {
    nowPlaying,
    popular,
    topRated,
    upcoming,
    searchResult,
    suggestions,
    recentSearchSuggestion,
  } = useSelector((state) => state.movies);

  const { favourites, recentSearches } = useSelector((state) => state.user);

  // Initial TMDB lists
  useEffect(() => {
    dispatch(fetchNowPlaying());
    dispatch(fetchPopular());
    dispatch(fetchTopRated());
    dispatch(fetchUpcoming());
  }, [dispatch]);

  // GPT Suggestions from Favourites
  useEffect(() => {
    if (favourites.length > 0) {
      getGPTRecommendationsFromFavourites(favourites, dispatch);
    }
  }, [favourites, dispatch]);

  // GPT Suggestions from Recent Search
  useEffect(() => {
    if (recentSearches) {
      getRecommendationsFromRecentSearch(recentSearches, dispatch);
    }
  }, [recentSearches, dispatch]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: isDark
          ? `
            radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(124, 58, 237, 0.15) 0%, transparent 40%),
            linear-gradient(to bottom, ${
              theme.palette.dark?.background?.default || "#0F172A"
            } 0%, ${theme.palette.dark?.background?.paper || "#1E293B"} 100%)`
          : `
            radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.08) 0%, transparent 40%),
            linear-gradient(to bottom, #fafafa 0%, #ffffff 100%)`,
        backgroundAttachment: "fixed",
        color: isDark
          ? theme.palette.dark?.text?.primary
          : theme.palette.text.primary,
      }}
    >
      <BrowseHero />
      <section id="search">
      <SearchSection />
      </section>

      <Box sx={{ py: 4 }}>
        {/* 🔍 Search Result */}
        {searchResult?.list?.length > 0 ||
        searchResult.loading ||
        searchResult.error ? (
          <MovieSection
            title={`🔍 Results for "${searchResult.title}"`}
            movies={searchResult.list}
            loading={searchResult.loading}
            error={searchResult.error}
          />
        ) : null}

        {/* 🔥 Now Playing */}
        <section id="trending">
        <MovieSection
          title="🔥 Trending Now"
          movies={nowPlaying.list}
          loading={nowPlaying.loading}
          error={nowPlaying.error}
        />
        </section>
        {/* 📈 Popular */}
        <MovieSection
          title="📈 Popular"
          movies={popular.list}
          loading={popular.loading}
          error={popular.error}
        />

        {/* 🎥 Suggested From Favourites */}
        {suggestions?.list?.length > 0 && (
          <Box
            sx={{
              position: "relative",
              my: 3,
              mx: { xs: 2, md: 4 },
              p: { xs: 2, md: 3 },
              borderRadius: 2,
              background: isDark
                ? "linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(124, 58, 237, 0.05) 100%)"
                : "linear-gradient(135deg, rgba(99, 102, 241, 0.03) 0%, rgba(139, 92, 246, 0.02) 100%)",
              border: isDark
                ? "1px solid rgba(139, 92, 246, 0.15)"
                : "1px solid rgba(99, 102, 241, 0.1)",
              backdropFilter: "blur(10px)",
            }}
          >
            <MovieSection
              title="🎥 Suggested For You"
              movies={suggestions.list}
              loading={suggestions.loading}
              error={suggestions.error}
            />
          </Box>
        )}

        {/* ⭐ Top Rated */}
        <MovieSection
          title="⭐ Top Rated"
          movies={topRated.list}
          loading={topRated.loading}
          error={topRated.error}
        />

        {/* 🧠 Suggestions from Recent Search */}
        {recentSearchSuggestion?.list?.length > 0 && (
          <MovieSection
            title={`🎯 Because you searched for "${recentSearches}"`}
            movies={recentSearchSuggestion.list}
            loading={recentSearchSuggestion.loading}
            error={recentSearchSuggestion.error}
          />
        )}

        {/* 🎬 Upcoming */}
        <MovieSection
          title="🎬 Upcoming"
          movies={upcoming.list}
          loading={upcoming.loading}
          error={upcoming.error}
        />
      </Box>
    </Box>
  );
};

export default FeedPage;
