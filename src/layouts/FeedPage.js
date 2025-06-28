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

const FeedPage = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNowPlaying());
    dispatch(fetchPopular());
    dispatch(fetchTopRated());
    dispatch(fetchUpcoming());
  }, [dispatch]);

  const nowPlaying = useSelector((state) => state.movies.nowPlaying.list);
  const popular = useSelector((state) => state.movies.popular.list);
  const topRated = useSelector((state) => state.movies.topRated.list);
  const upcoming = useSelector((state) => state.movies.upcoming.list);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: isDark
          ? `
            radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(124, 58, 237, 0.15) 0%, transparent 40%),
            linear-gradient(to bottom, ${theme.palette.dark?.background?.default || '#0F172A'} 0%, ${theme.palette.dark?.background?.paper || '#1E293B'} 100%)`
          : `
            radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.08) 0%, transparent 40%),
            linear-gradient(to bottom, #fafafa 0%, #ffffff 100%)`,
        backgroundAttachment: "fixed",
        color: isDark ? theme.palette.dark?.text?.primary : theme.palette.text.primary,
      }}
    >
      <BrowseHero />
      <SearchSection />
      <Box sx={{ py: 4 }}>
        <MovieSection title="🔥 Trending Now" movies={nowPlaying} />
        <MovieSection title="📈 Popular" movies={popular} />
        <MovieSection title="⭐ Top Rated" movies={topRated} />
        <MovieSection title="🎬 Upcoming" movies={upcoming} />
      </Box>
    </Box>
  );
};

export default FeedPage;
