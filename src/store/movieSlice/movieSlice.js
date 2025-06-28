// src/redux/movies/MovieSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchNowPlaying,
  fetchPopular,
  fetchTopRated,
  fetchUpcoming,
} from "./movieActions";

const initialState = {
  nowPlaying: {
    list: [],
    loading: false,
    error: null,
  },
  popular: {
    list: [],
    loading: false,
    error: null,
  },
  topRated: {
    list: [],
    loading: false,
    error: null,
  },
  upcoming: {
    list: [],
    loading: false,
    error: null,
  },
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNowPlaying.pending, (state) => {
        state.nowPlaying.loading = true;
        state.nowPlaying.error = null;
      })
      .addCase(fetchNowPlaying.fulfilled, (state, action) => {
        state.nowPlaying.loading = false;
        state.nowPlaying.list = action.payload;
      })
      .addCase(fetchNowPlaying.rejected, (state, action) => {
        state.nowPlaying.loading = false;
        state.nowPlaying.error = action.payload;
      });

    builder
      .addCase(fetchPopular.pending, (state) => {
        state.popular.loading = true;
        state.popular.error = null;
      })
      .addCase(fetchPopular.fulfilled, (state, action) => {
        state.popular.loading = false;
        state.popular.list = action.payload;
      })
      .addCase(fetchPopular.rejected, (state, action) => {
        state.popular.loading = false;
        state.popular.error = action.payload;
      });

    builder
      .addCase(fetchTopRated.pending, (state) => {
        state.topRated.loading = true;
        state.topRated.error = null;
      })
      .addCase(fetchTopRated.fulfilled, (state, action) => {
        state.topRated.loading = false;
        state.topRated.list = action.payload;
      })
      .addCase(fetchTopRated.rejected, (state, action) => {
        state.topRated.loading = false;
        state.topRated.error = action.payload;
      });

    builder
      .addCase(fetchUpcoming.pending, (state) => {
        state.upcoming.loading = true;
        state.upcoming.error = null;
      })
      .addCase(fetchUpcoming.fulfilled, (state, action) => {
        state.upcoming.loading = false;
        state.upcoming.list = action.payload;
      })
      .addCase(fetchUpcoming.rejected, (state, action) => {
        state.upcoming.loading = false;
        state.upcoming.error = action.payload;
      });
  },
});

export default movieSlice.reducer;
