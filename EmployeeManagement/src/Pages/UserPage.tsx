import { ApolloProvider } from "@apollo/client";
import { client } from "services/apollo_SR";
import UsersList from "../Components/Users.tsx";

export default function EmployeePage() {
  return (
    <ApolloProvider client={client}>
      <div>
        <UsersList />
      </div>
    </ApolloProvider>
  );
}
