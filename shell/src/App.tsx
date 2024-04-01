import React from "react";
import "../src/style.css";
const Login = React.lazy(() => import("authapp/Login"));
import ErrorBoundary from "./component/ErrorBoundary";

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Landing from "./component/Landing";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index={true} element={<Landing />} />
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
    </>
  );
};
