// src/redux/movies/movieSlice.js
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
  searchResult: {
    title: "",
    list: [],
    loading: false,
    error: null,
  },
};

// 🔁 Helper function to DRY up thunk handlers
const handleAsyncCases = (builder, thunk, key) => {
  builder
    .addCase(thunk.pending, (state) => {
      state[key].loading = true;
      state[key].error = null;
    })
    .addCase(thunk.fulfilled, (state, action) => {
      state[key].loading = false;
      state[key].list = Array.isArray(action.payload) ? action.payload : [];
    })
    .addCase(thunk.rejected, (state, action) => {
      state[key].loading = false;
      state[key].error = action.payload;
    });
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearchLoading: (state) => {
      state.searchResult.loading = true;
      state.searchResult.error = null;
    },
    setSearchSuccess: (state, action) => {
      state.searchResult.loading = false;
      state.searchResult.list = action.payload.list;
      state.searchResult.title = action.payload.title;
    },
    setSearchError: (state, action) => {
      state.searchResult.loading = false;
      state.searchResult.error = action.payload;
    },
    clearSearchResults: (state) => {
      state.searchResult = {
        title: "",
        list: [],
        loading: false,
        error: null,
      };
    },
  },
  extraReducers: (builder) => {
    handleAsyncCases(builder, fetchNowPlaying, "nowPlaying");
    handleAsyncCases(builder, fetchPopular, "popular");
    handleAsyncCases(builder, fetchTopRated, "topRated");
    handleAsyncCases(builder, fetchUpcoming, "upcoming");
  },
});

export const {
  setSearchLoading,
  setSearchSuccess,
  setSearchError,
  clearSearchResults,
} = movieSlice.actions;

export default movieSlice.reducer;
