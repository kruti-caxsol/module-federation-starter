import "./style.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
// import { client } from "services/apollo_SR";
import ErrorBoundary from "./ErrorBoundary.tsx";
import DemoPubSub from "./component/DemoPubSub.tsx";

const Login = React.lazy(() => import("./component/Login.tsx"));

const UserList = React.lazy(() => import("./component/Users.tsx"));

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:8090/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <ErrorBoundary>
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
              path="/dash"
              element={
                <ErrorBoundary>
                  <React.Suspense fallback="Loading">
                    <UserList />
                  </React.Suspense>
                </ErrorBoundary>
              }
            />
          </Routes>
        </BrowserRouter>
        <div>
          <DemoPubSub />
        </div>
      </ErrorBoundary>
    </ApolloProvider>
  );
}
export default App;
