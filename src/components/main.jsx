import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import axios from "axios";
import { RouterProvider } from "react-router-dom";
import { router } from "../config/Router";

axios.defaults.baseURL = "http://localhost:3000";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
