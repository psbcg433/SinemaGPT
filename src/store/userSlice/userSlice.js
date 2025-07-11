import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import { db, auth } from "../../utils/firebase";

const initialState = {
  id: null,
  name: null,
  email: null,
  photoURL: null,
  bio: null,
  coverpic: null,
  favourites: [],
  watchlist: [],
  recentSearches: null,
};

export const updateUserProfileThunk = createAsyncThunk(
  "user/updateUserProfile",
  async (updates, { getState, rejectWithValue }) => {
    try {
      const state = getState().user;
      const { id } = state;
      const updateFields = {};

      if (updates.name !== undefined) {
        await updateProfile(auth.currentUser, { displayName: updates.name });
        updateFields.name = updates.name;
      }

      if (updates.bio !== undefined) {
        updateFields.bio = updates.bio;
      }

      if (id && Object.keys(updateFields).length > 0) {
        const userRef = doc(db, "users", id);
        await updateDoc(userRef, updateFields);
      }

      return updateFields;
    } catch (err) {
      console.error("❌ Profile update error:", err);
      return rejectWithValue(err.message);
    }
  }
);

export const updateProfilePictureThunk = createAsyncThunk(
  "user/updateProfilePicture",
  async (photoURL, { getState, rejectWithValue }) => {
    try {
      const { id } = getState().user;
      if (!id) throw new Error("User ID not found");

      await updateProfile(auth.currentUser, { photoURL });

      const userRef = doc(db, "users", id);
      await updateDoc(userRef, { photoURL });

      return { photoURL };
    } catch (err) {
      console.error("❌ Profile picture update error:", err);
      return rejectWithValue(err.message);
    }
  }
);

export const updateCoverPictureThunk = createAsyncThunk(
  "user/updateCoverPicture",
  async (coverpicURL, { getState, rejectWithValue }) => {
    try {
      const { id } = getState().user;
      if (!id) throw new Error("User ID not found");

      const userRef = doc(db, "users", id);
      await updateDoc(userRef, { coverpic: coverpicURL });

      return { coverpic: coverpicURL };
    } catch (err) {
      console.error("❌ Cover picture update error:", err);
      return rejectWithValue(err.message);
    }
  }
);

export const toggleFavouriteThunk = createAsyncThunk(
  "user/toggleFavourite",
  async (movie, { getState, rejectWithValue }) => {
    const { id, favourites } = getState().user;
    if (!id) return rejectWithValue("User ID not found");
    const userRef = doc(db, "users", id);
    const isFavourite = favourites.some((m) => m.id === movie.id);

    try {
      await updateDoc(userRef, {
        favourites: isFavourite ? arrayRemove(movie) : arrayUnion(movie),
      });

      return { movie, isRemoving: isFavourite, type: "favourites" };
    } catch (err) {
      console.error("Failed to toggle favourite", err);
      return rejectWithValue(err.message);
    }
  }
);

export const toggleWatchlistThunk = createAsyncThunk(
  "user/toggleWatchlist",
  async (movie, { getState, rejectWithValue }) => {
    const { id, watchlist } = getState().user;
    if (!id) return rejectWithValue("User ID not found");
    const userRef = doc(db, "users", id);
    const isInWatchlist = watchlist.some((m) => m.id === movie.id);

    try {
      await updateDoc(userRef, {
        watchlist: isInWatchlist ? arrayRemove(movie) : arrayUnion(movie),
      });

      return { movie, isRemoving: isInWatchlist, type: "watchlist" };
    } catch (err) {
      console.error("Failed to toggle watchlist", err);
      return rejectWithValue(err.message);
    }
  }
);

// ✅ NEW: Update Recent Search (Single string value)
export const updateRecentSearchesThunk = createAsyncThunk(
  "user/updateRecentSearches",
  async (searchTerm, { getState, rejectWithValue }) => {
    try {
      const { id } = getState().user;
      if (!id) throw new Error("User ID not found");

      const userRef = doc(db, "users", id);
      await updateDoc(userRef, { recentSearches: searchTerm });

      return searchTerm;
    } catch (err) {
      console.error("❌ Failed to update recent search:", err);
      return rejectWithValue(err.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => ({ ...state, ...action.payload }),
    clearUserData: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUserProfileThunk.fulfilled, (state, action) => {
        return { ...state, ...action.payload };
      })
      .addCase(updateProfilePictureThunk.fulfilled, (state, action) => {
        state.photoURL = action.payload.photoURL;
      })
      .addCase(updateCoverPictureThunk.fulfilled, (state, action) => {
        state.coverpic = action.payload.coverpic;
      })
      .addCase(toggleFavouriteThunk.fulfilled, (state, action) => {
        const { movie, isRemoving } = action.payload;
        if (isRemoving) {
          state.favourites = state.favourites.filter((m) => m.id !== movie.id);
        } else {
          state.favourites.push(movie);
        }
      })
      .addCase(toggleWatchlistThunk.fulfilled, (state, action) => {
        const { movie, isRemoving } = action.payload;
        if (isRemoving) {
          state.watchlist = state.watchlist.filter((m) => m.id !== movie.id);
        } else {
          state.watchlist.push(movie);
        }
      })
      .addCase(updateRecentSearchesThunk.fulfilled, (state, action) => {
        state.recentSearches = action.payload;
      });
  },
});

export const { setUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;
