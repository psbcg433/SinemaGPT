// src/redux/movies/movieActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_OPTIONS } from '../../utils/helpers';

// Fetch Now Playing Movies
export const fetchNowPlaying = createAsyncThunk(
  'movies/fetchNowPlaying',
  async (_, thunkAPI) => {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    try {
      const response = await fetch(url, API_OPTIONS);
      const data = await response.json();
      if (!response.ok) throw new Error(data.status_message || 'Failed to fetch now playing movies');
      return data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Fetch Popular Movies
export const fetchPopular = createAsyncThunk(
  'movies/fetchPopular',
  async (_, thunkAPI) => {
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    try {
      const response = await fetch(url, API_OPTIONS);
      const data = await response.json();
      if (!response.ok) throw new Error(data.status_message || 'Failed to fetch popular movies');
      return data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Fetch Top Rated Movies
export const fetchTopRated = createAsyncThunk(
  'movies/fetchTopRated',
  async (_, thunkAPI) => {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
    try {
      const response = await fetch(url, API_OPTIONS);
      const data = await response.json();
      if (!response.ok) throw new Error(data.status_message || 'Failed to fetch top rated movies');
      return data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Fetch Upcoming Movies
export const fetchUpcoming = createAsyncThunk(
  'movies/fetchUpcoming',
  async (_, thunkAPI) => {
    const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
    try {
      const response = await fetch(url, API_OPTIONS);
      const data = await response.json();
      if (!response.ok) throw new Error(data.status_message || 'Failed to fetch upcoming movies');
      return data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
