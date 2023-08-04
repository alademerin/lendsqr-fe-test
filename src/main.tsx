import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import SignIn from "./pages/SIGNIN/SignIn.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <SignIn /> */}
    <NavBar />
  </React.StrictMode>
);
