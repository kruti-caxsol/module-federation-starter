import { ApolloProvider } from "@apollo/client";
import { client } from "services/apollo_SR";
import LoginCard from "../component/Login.tsx";

export default function Login() {
  return (
    <ApolloProvider client={client}>
      <LoginCard />
    </ApolloProvider>
  );
}
