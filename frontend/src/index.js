import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          spacing: {
            xs: "1rem",
            sm: "1.2rem",
            md: "1.8rem",
            lg: "2.2rem",
            xl: "2.8rem",
          },
        }}
      >
        <App />
      </MantineProvider>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
