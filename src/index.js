import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { customTheme, darkTheme } from "./theme";
import { Provider, useSelector } from "react-redux";
import { store } from "./utils/store";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

// ThemeWrapper handles theme selection using useSelector inside a component
const ThemeWrapper = () => {
  // const user = useSelector((state) => state.auth.user);

  return (
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={routes}>
        <App />
      </RouterProvider>
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <Provider store={store}>
      <ThemeWrapper />
    </Provider>
 
);
