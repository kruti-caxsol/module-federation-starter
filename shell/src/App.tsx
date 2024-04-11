import React from "react";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "services/apollo_SR";
import ErrorBoundary from "./component/ErrorBoundary.tsx";
import Landing from "./component/Landing.tsx";
import Layout from "./component/Layout/Layout.tsx";

const Login = React.lazy(() => import("authapp/Login"));
const DemoPubSub = React.lazy(() => import("authapp/DemoPubSub"));
const ProtectedRoute = React.lazy(() => import("services/ProtectedRoute"));
// const Layout = React.lazy(() => import("styleguide/Layout"));

export default function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
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
            path="/"
            element={
              <ErrorBoundary>
                <React.Suspense fallback="Loading">
                  <ProtectedRoute />
                </React.Suspense>
              </ErrorBoundary>
            }
          >
            <Route
              element={
                <ErrorBoundary>
                  <React.Suspense fallback="Loading">
                    <Layout />
                  </React.Suspense>
                </ErrorBoundary>
              }
            >
              <Route
                path="/dashboard"
                element={
                  <ErrorBoundary>
                    <React.Suspense fallback="Loading">
                      <Landing />
                    </React.Suspense>
                  </ErrorBoundary>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}
