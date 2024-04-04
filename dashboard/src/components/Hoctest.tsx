import React from "react";
// import { ApolloClient, InMemoryCache, ApolloProvider as Provider } from '@apollo/client';

// // Define the type for the props if needed, for example:
// interface ApolloProviderProps {
//   children: React.ReactNode;
// }

// // Create the Apollo Client instance
// const client = new ApolloClient({
//   uri: 'YOUR_GRAPHQL_API_URI', // Replace with your GraphQL API URI
//   cache: new InMemoryCache(),
// });

// // Create a component that wraps its children with ApolloProvider
// const ApolloProvider: React.FC<ApolloProviderProps> = ({ children }) => {
//   return <Provider client={client}>{children}</Provider>;
// };

// export default ApolloProvider;

interface props {
  children: React.ReactNode;
}

// Create a component that wraps its children with ApolloProvider
const Hoctest: React.FC<props> = ({ children }) => {
  return (
    <div
      style={{
        height: "80px",
        width: "80px",
        backgroundColor: "#d0d0d0",
      }}
    >
      {children}
    </div>
  );
};

export default Hoctest;
