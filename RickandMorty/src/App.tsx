import "./style.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { AnimationClient } from "services/apollo_SR";
import ErrorBoundary from "./ErrorBoundary.tsx";

const AnimationList = React.lazy(() => import("./component/Animation.tsx"));

function App() {
  return (
    <ApolloProvider client={AnimationClient}>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route
              path="/login"
              element={
                <ErrorBoundary>
                  <React.Suspense fallback="Loading">
                    {/* <Login /> */}
                  </React.Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path="/dash"
              element={
                <ErrorBoundary>
                  <React.Suspense fallback="Loading">
                    <AnimationList />
                  </React.Suspense>
                </ErrorBoundary>
              }
            />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </ApolloProvider>
  );
}
export default App;
