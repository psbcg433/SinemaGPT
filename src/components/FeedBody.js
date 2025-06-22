import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Avatar,
  Grid,
  useTheme,
} from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import { useSelector } from "react-redux";
import BrowseHero from "./BrowseHero";
import SearchSection from "./SearchSection";
import MovieSection from "./MovieSection";

export const trendingMovies = [
  {
    title: "Avatar: The Way of Water",
    tagline: "Return to Pandora",
    poster:
      "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
  },
  {
    title: "Black Panther",
    tagline: "Wakanda Forever",
    poster:
      "https://images.pexels.com/photos/7991492/pexels-photo-7991492.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
  },
  {
    title: "Spider-Man",
    tagline: "No Way Home",
    poster:
      "https://images.pexels.com/photos/7991668/pexels-photo-7991668.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
  },
  {
    title: "Dune",
    tagline: "Dreams are messages",
    poster:
      "https://images.pexels.com/photos/7991741/pexels-photo-7991741.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
  },
  {
    title: "The Batman",
    tagline: "Vengeance awaits",
    poster:
      "https://images.pexels.com/photos/7991825/pexels-photo-7991825.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
  },
  {
    title: "Top Gun: Maverick",
    tagline: "Feel the need",
    poster:
      "https://images.pexels.com/photos/7991901/pexels-photo-7991901.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
  },
];

export const recentlyPlayed = [
  {
    title: "Inception",
    tagline: "Dreams within dreams",
    poster:
      "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
  },
  {
    title: "Interstellar",
    tagline: "Mankind's next step",
    poster:
      "https://images.pexels.com/photos/7991492/pexels-photo-7991492.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
  },
  {
    title: "The Dark Knight",
    tagline: "Why so serious?",
    poster:
      "https://images.pexels.com/photos/7991668/pexels-photo-7991668.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
  },
  {
    title: "Parasite",
    tagline: "Act like you own the place",
    poster:
      "https://images.pexels.com/photos/7991741/pexels-photo-7991741.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
  },
  {
    title: "Mad Max: Fury Road",
    tagline: "What a lovely day",
    poster:
      "https://images.pexels.com/photos/7991825/pexels-photo-7991825.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
  },
];

export const recommendedMovies = [
  {
    title: "Blade Runner 2049",
    tagline: "The future is now",
    poster:
      "https://images.pexels.com/photos/7991901/pexels-photo-7991901.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
  },
  {
    title: "The Matrix",
    tagline: "Free your mind",
    poster:
      "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
  },
  {
    title: "Joker",
    tagline: "Put on a happy face",
    poster:
      "https://images.pexels.com/photos/7991492/pexels-photo-7991492.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
  },
  {
    title: "1917",
    tagline: "Time is the enemy",
    poster:
      "https://images.pexels.com/photos/7991668/pexels-photo-7991668.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
  },
  {
    title: "Oppenheimer",
    tagline: "The world forever changes",
    poster:
      "https://images.pexels.com/photos/7991741/pexels-photo-7991741.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
  },
];

const FeedBody = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: isDark
          ? `
            radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(124, 58, 237, 0.15) 0%, transparent 40%),
            linear-gradient(to bottom, ${theme.palette.dark?.background?.default || '#0F172A'} 0%, ${theme.palette.dark?.background?.paper || '#1E293B'} 100%)
          `
          : `
            radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.08) 0%, transparent 40%),
            linear-gradient(to bottom, #fafafa 0%, #ffffff 100%)
          `,
        backgroundAttachment: "fixed",
        color: isDark ? theme.palette.dark?.text?.primary : theme.palette.text.primary,
      }}
    >
      {/* Hero Video Banner */}
      <BrowseHero />

      {/* Search Section */}
      <SearchSection />

      {/* Movie Discovery Lists */}
      <Box sx={{ py: 4 }}>
        <MovieSection title="🔥 Trending Now" movies={trendingMovies} />
        <MovieSection title="⏰ Recently Played" movies={recentlyPlayed} />
        <MovieSection
          title="🎯 Because You Watched Inception"
          movies={recommendedMovies}
        />
      </Box>
    </Box>
  );
};

export default FeedBody;