import React from "react";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./component/ErrorBoundary.tsx";
import Landing from "./component/Landing.tsx";

const Login = React.lazy(() => import("authapp/Login"));

export default function App() {
  // const abc = 52;
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
      </Routes>
    </BrowserRouter>
  );
}
