import React from "react";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "services/apollo_SR";
// import ProtectedRoute from "services/ProtectedRoute";
// import { Login } from "@authapp/Login";
import ErrorBoundary from "./component/ErrorBoundary.tsx";
import Landing from "./component/Landing.tsx";

// const client = React.lazy(() => import("services/client"));

const Login = React.lazy(() => import("authapp/Login"));
const DemoPubSub = React.lazy(() => import("authapp/DemoPubSub"));
const ProtectedRoute = React.lazy(() => import("services/ProtectedRoute"));

export default function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/">
            <Route index element={<Landing />} />
          </Route> */}

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
          <Route
            path="/Dashboard"
            element={
              <ErrorBoundary>
                <React.Suspense fallback="Loading">
                  <ProtectedRoute element={<Landing />} />
                </React.Suspense>
              </ErrorBoundary>
            }
          />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}
