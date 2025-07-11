
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./theme";
import { Provider} from "react-redux";
import { store } from "./utils/store";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

const ThemeWrapper = () => {
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
