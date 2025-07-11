# SinemaGPT

> **AI-powered movie discovery platform** powered by React, Redux, Firebase, GPT, and TMDB.

![Login Page](/public/FeedPageScreenshot.png)
![Feed Page](/public/LoginPageScreenshot.png)
![Trending Movies](/public/TrendingMoviesScreenshot.png)


---

## ✨ Overview

**SinemaGPT** is a dynamic movie exploration platform that combines TMDB movie data and OpenAI-powered GPT recommendations. Users can log in, explore trending and personalized movies, search the entire TMDB catalog, and manage favourites. The app uses **Material UI** for polished UI, **Redux Toolkit** for global state management, and **Firebase** for backend services like authentication and Firestore.

---

## 🚀 Features Breakdown (with Internals)

### 1. **User Authentication** (Firebase)

* **Email/password login** using Firebase Auth.
* **PublicOnlyRoute** and **ProtectedRoute** wrappers enforce route-level access control.
* On login, user data is fetched or created in Firestore (`users` collection).

### 2. **Search Movies** (TMDB API)

* Users can search movies using a query bar.
* TMDB API is queried live, results stored in Redux (`searchResult` inside `movieSlice`).
* Each search term is appended to `recentSearches` in Firestore and Redux.

### 3. **GPT-Powered AI Recommendations**

* Uses **OpenRouter API** to query GPT models with prompts:

  * `getGPTRecommendationsFromFavourites`: uses `original_title` of favourite movies.
  * `getRecommendationsFromRecentSearch`: uses most recent user search.
* GPT returns titles which are then searched via TMDB.
* Results are stored in `suggestions` and `recentSearchSuggestion` in Redux.

### 4. **Movie Sections** (Modular Movie Rows)

Each section on the feed page:

* Now Playing — `fetchNowPlaying()` from TMDB
* Popular, Top Rated, Upcoming — TMDB-based rows
* Results for Search
* Suggestions from:

  * **Favourites** (`suggestions.list`)
  * **Recent Searches** (`recentSearchSuggestion.list`)

### 5. **Favourites Management**

* Users can mark/unmark favourites from any MovieCard.
* Stored in Firestore under `users/{uid}/favourites` and synced to Redux (`userSlice.favourites`).
* Used to derive GPT suggestions.

### 6. **Profile Page**

* Displays basic user info and allows updating cover image.
* Cover image is uploaded via file input and stored to Firebase Storage.
* Updates Firestore `coverImage` field in user's doc.

### 7. **Dark Mode UI (MUI + Theme Palette)**

* Fully dark-themed UI using custom MUI palette.
* Hero backgrounds, overlays, and gradients adapt dynamically.

### 8. **Skeleton Loaders + Lazy Loading**

* While data is fetched via Redux, `Skeleton` components show loading states.
* Route-based lazy loading for `FeedPage`, `ProfilePage`, `MoviePage`.
* Custom MUI-based fallback components ensure UI continuity.

---

## 📂 Folder Structure

```bash
src/
├── components/            # MovieCard, MovieSection, BrowseHero, Footer, Skeletons
├── layouts/               # FeedPage, MoviePage, ProfilePage
├── routes/                # routes.js, route guards (ProtectedRoute.js)
├── store/                 # movieSlice, userSlice, authSlice, actions
├── utils/                 # helpers.js (GPT logic, TMDB fetchers)
├── App.js                 # Layout with <Outlet/>
├── main.jsx               # Entry point
```

---

## 🎓 Technologies Used

| Tech             | Purpose                              |
| ---------------- | ------------------------------------ |
| React            | Frontend component framework         |
| Material UI      | Theming, responsiveness, UI elements |
| Redux Toolkit    | Global state management              |
| Firebase         | Auth, Firestore, Storage, Hosting    |
| TMDB API         | Movie data source                    |
| OpenRouter (GPT) | AI-powered movie title generation    |
| React Router     | Client-side routing                  |

---

## 🚧 Setup Guide

### 1. Clone and Install

```bash
git clone https://github.com/psbcg433/sinemagpt.git
cd sinemagpt
npm install
```

### 2. Setup Environment Variables

Create `.env` file and add:

```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_TMDB_API_KEY=...
VITE_GPT_API_KEY=...
VITE_TMDB_IMAGE_PATH=https://image.tmdb.org/t/p/original/
```

### 3. Run the App

```bash
npm run dev
```

---

## 🛎️ Deployment (Firebase Hosting)

```bash
firebase login
firebase init
firebase deploy
```

---

