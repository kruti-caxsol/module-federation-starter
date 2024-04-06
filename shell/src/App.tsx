import React from "react";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Login } from "@authapp/Login";
import ErrorBoundary from "./component/ErrorBoundary.tsx";
import Landing from "./component/Landing.tsx";

const Login = React.lazy(() => import("authapp/Login"));
const DemoPubSub = React.lazy(() => import("authapp/DemoPubSub"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
        </Route>

        <Route
          path="/login"
          element={
            <ErrorBoundary>
              <React.Suspense fallback="Loading">
                <Login />
              </React.Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="/DemoPubSub"
          element={
            <ErrorBoundary>
              <React.Suspense fallback="Loading">
                <DemoPubSub />
              </React.Suspense>
            </ErrorBoundary>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
