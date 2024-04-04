import React from "react";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./component/ErrorBoundary.tsx";
import Landing from "./component/Landing.tsx";

const Login = React.lazy(() => import("authapp/Login"));
const DemoPubSub = React.lazy(() => import("eventpublisher/DemoPubSub"));
const Subscriber = React.lazy(() => import("app1/Subscriber"));
const Publisher = React.lazy(() => import("eventpublisher/Publisher"));
const CounterAppOne = React.lazy(() => import("app1/CounterAppOne"));

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
        <Route
          path="/DemoPubSub"
          element={
            <ErrorBoundary>
              <React.Suspense fallback="Loading">
                <DemoPubSub />
                <CounterAppOne />
              </React.Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="/Publisher"
          element={
            <ErrorBoundary>
              <React.Suspense fallback="Loading">
                <Publisher />
                {/* <Subscriber /> */}
              </React.Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="/subscriber"
          element={
            <ErrorBoundary>
              <React.Suspense fallback="Loading">
                <Subscriber />
              </React.Suspense>
            </ErrorBoundary>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ErrorBoundary>
              <React.Suspense fallback="Loading">
                <CounterAppOne />
              </React.Suspense>
            </ErrorBoundary>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
