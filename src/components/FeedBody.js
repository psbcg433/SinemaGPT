import React from 'react';
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
} from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import { useSelector } from 'react-redux';
import BrowseHero from './BrowseHero';
import SearchSection from './SearchSection';
import MovieSection from './MovieSection';


export const trendingMovies = [
  {
    title: "Avatar: The Way of Water",
    tagline: "Return to Pandora",
    poster: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
  },
  {
    title: "Black Panther",
    tagline: "Wakanda Forever",
    poster: "https://images.pexels.com/photos/7991492/pexels-photo-7991492.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
  },
  {
    title: "Spider-Man",
    tagline: "No Way Home",
    poster: "https://images.pexels.com/photos/7991668/pexels-photo-7991668.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
  },
  {
    title: "Dune",
    tagline: "Dreams are messages",
    poster: "https://images.pexels.com/photos/7991741/pexels-photo-7991741.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
  },
  {
    title: "The Batman",
    tagline: "Vengeance awaits",
    poster: "https://images.pexels.com/photos/7991825/pexels-photo-7991825.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
  },
  {
    title: "Top Gun: Maverick",
    tagline: "Feel the need",
    poster: "https://images.pexels.com/photos/7991901/pexels-photo-7991901.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
  }
];

export const recentlyPlayed = [
  {
    title: "Inception",
    tagline: "Dreams within dreams",
    poster: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
  },
  {
    title: "Interstellar",
    tagline: "Mankind's next step",
    poster: "https://images.pexels.com/photos/7991492/pexels-photo-7991492.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
  },
  {
    title: "The Dark Knight",
    tagline: "Why so serious?",
    poster: "https://images.pexels.com/photos/7991668/pexels-photo-7991668.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
  },
  {
    title: "Parasite",
    tagline: "Act like you own the place",
    poster: "https://images.pexels.com/photos/7991741/pexels-photo-7991741.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
  },
  {
    title: "Mad Max: Fury Road",
    tagline: "What a lovely day",
    poster: "https://images.pexels.com/photos/7991825/pexels-photo-7991825.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
  }
];

export const recommendedMovies = [
  {
    title: "Blade Runner 2049",
    tagline: "The future is now",
    poster: "https://images.pexels.com/photos/7991901/pexels-photo-7991901.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
  },
  {
    title: "The Matrix",
    tagline: "Free your mind",
    poster: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
  },
  {
    title: "Joker",
    tagline: "Put on a happy face",
    poster: "https://images.pexels.com/photos/7991492/pexels-photo-7991492.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
  },
  {
    title: "1917",
    tagline: "Time is the enemy",
    poster: "https://images.pexels.com/photos/7991668/pexels-photo-7991668.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
  },
  {
    title: "Oppenheimer",
    tagline: "The world forever changes",
    poster: "https://images.pexels.com/photos/7991741/pexels-photo-7991741.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
  }
];


const FeedBody = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <Container maxWidth="xl" sx={{ mt: 10, mb: 6 ,p:2}}>
     <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
        {/* Hero Video Banner */}
        <BrowseHero />
        
        {/* Search Section */}
        <SearchSection />
        
        {/* Movie Discovery Lists */}
        <Box sx={{ py: 4 }}>
          <MovieSection title="Trending Now" movies={trendingMovies} />
          <MovieSection title="Recently Played" movies={recentlyPlayed} />
          <MovieSection title="Because You Watched Inception" movies={recommendedMovies} />
        </Box>
      </Box>

       
    </Container>
  );
};

export default FeedBody;