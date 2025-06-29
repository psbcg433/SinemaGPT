// src/routes.js
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../layouts/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import PublicOnlyRoute from "./PublicOnlyRoute";
import FeedPage from "../layouts/FeedPage";
import MoviePage from "../layouts/MoviePage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        index: true,
        element: (
          <PublicOnlyRoute>
            <LoginPage />
          </PublicOnlyRoute>
        ),
      },
      {
        path: "feed",
        element: (
          <ProtectedRoute>
            <FeedPage />
          </ProtectedRoute>
        ),
      },
       {
        path: "movie/:movieId",
        element: (
          <ProtectedRoute>
            <MoviePage/>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default routes;
