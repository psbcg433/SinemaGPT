import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./theme";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <RouterProvider router={routes}>
          <App />
        </RouterProvider>
      </ThemeProvider>
    </Provider>

  </React.StrictMode >
);
