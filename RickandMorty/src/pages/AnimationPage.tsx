import { ApolloProvider } from "@apollo/client";
import { AnimationClient } from "services/apollo_SR";
import AnimationList from "../component/Animation.tsx";

export default function AnimationPage() {
  return (
    <ApolloProvider client={AnimationClient}>
      <AnimationList />
    </ApolloProvider>
  );
}
