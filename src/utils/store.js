// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../store/authSlice/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});


