// src/routes/routes.js
import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import App from "../App";
import ProtectedRoute from "./ProtectedRoute";
import PublicOnlyRoute from "./PublicOnlyRoute";

import FallbackFeedPage from "../components/FallbackFeedPage";
import FallbackMoviePage from "../components/FallbackMoviePage";
import FallbackProfilePage from "../components/FallbackProfilePage";
import FallbackLoginPage from "../components/FallbackLoginPage"; // Import your new component

// ✅ Lazy-loaded route components
const LoginPage = lazy(() => import("../layouts/LoginPage"));
const FeedPage = lazy(() => import("../layouts/FeedPage"));
const MoviePage = lazy(() => import("../layouts/MoviePage"));
const ProfilePage = lazy(() => import("../layouts/ProfilePage"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <PublicOnlyRoute>
            <Suspense fallback={<FallbackLoginPage />}> {/* Updated fallback */}
              <LoginPage />
            </Suspense>
          </PublicOnlyRoute>
        ),
      },
      {
        path: "feed",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<FallbackFeedPage />}>
              <FeedPage />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "movie/:movieId",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<FallbackMoviePage />}>
              <MoviePage />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<FallbackProfilePage />}>
              <ProfilePage />
            </Suspense>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default routes;