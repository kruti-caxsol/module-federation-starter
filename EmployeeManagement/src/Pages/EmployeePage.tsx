import { ApolloProvider } from "@apollo/client";
import { client } from "services/apollo_SR";
import Employee from "../Components/Employee.tsx";

export default function EmployeePage() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Employee />
      </div>
    </ApolloProvider>
  );
}
