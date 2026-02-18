import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./app/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="826399908958-nn2ifkfg8lkne6c83fhq6c0cdnoth860.apps.googleusercontent.com">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GoogleOAuthProvider>
);
