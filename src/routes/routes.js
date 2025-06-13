// src/routes.js
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../layouts/LoginPage";
import FeedBody from "../components/FeedBody";
import ProtectedRoute from "./ProtectedRoute";
import PublicOnlyRoute from "./PublicOnlyRoute";

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
            <FeedBody />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default routes;
