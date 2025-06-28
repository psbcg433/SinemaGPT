// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../store/authSlice/authSlice';
import movieReducer from '../store/movieSlice/movieSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: movieReducer, 
  },
});
