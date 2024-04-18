import React from "react";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@mui/material";
import { client } from "services/apollo_SR";
import theme from "styleguide/theme";
import ErrorBoundary from "./component/ErrorBoundary.tsx";
import Landing from "./component/Landing.tsx";
import Layout from "./component/Layout/Layout.tsx";

const Login = React.lazy(() => import("authapp/Login"));
const DemoPubSub = React.lazy(() => import("authapp/DemoPubSub"));
const ProtectedRoute = React.lazy(() => import("services/ProtectedRoute"));
const Employee = React.lazy(() => import("employee/TotalEmployee"));
// const Layout = React.lazy(() => import("styleguide/Layout"));

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
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
                <Route
                  path="/employee"
                  element={
                    <ErrorBoundary>
                      <React.Suspense fallback="Loading">
                        <Employee />
                      </React.Suspense>
                    </ErrorBoundary>
                  }
                />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
}
