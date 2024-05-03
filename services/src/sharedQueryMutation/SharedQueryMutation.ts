import { gql } from "@apollo/client";
// import { graphql } from "../gql/gql.ts";

// GraphQL query to fetch employees
export const GET_EMPLOYEES = gql`
  query GetEmployees3 {
    getEmployees {
      id
      name
      department
      createdBy
      updatedBy
    }
  }
`;

// GraphQL mutation to add an employee
export const ADD_EMPLOYEE = gql`
  mutation AddEmployee($name: String!, $department: Department) {
    addEmployee(employee: { name: $name, department: $department }) {
      id
      name
      department
      createdBy
      creationDateTime
      updatedBy
      modificationDateTime
    }
  }
`;

export const REMOVE_EMPLOYEE = gql`
  mutation RemoveEmployee($id: ID!) {
    removeEmployee(id: $id)
  }
`;

export const UPDATE_EMPLOYEE = gql`
  mutation UpdateEmployee($id: ID!, $name: String, $department: String) {
    updateEmployee(
      employee: { id: $id, name: $name, department: $department }
    ) {
      id
      name
      department
      createdBy
      creationDateTime
      updatedBy
      modificationDateTime
    }
  }
`;

// // import { gql } from "@apollo/client";
// // import { graphql } from "../gql";
// import { graphql } from "../gql/gql.ts";

// // GraphQL query to fetch employees
// export const GET_EMPLOYEES = graphql(`
//   query GetEmployees3 {
//     getEmployees {
//       id
//       name
//       department
//       createdBy
//       updatedBy
//     }
//   }
// `);

// // GraphQL mutation to add an employee
// export const ADD_EMPLOYEE = graphql(`
//   mutation AddEmployee($name: String!, $department: Department) {
//     addEmployee(employee: { name: $name, department: $department }) {
//       id
//       name
//       department
//       createdBy
//       creationDateTime
//       updatedBy
//       modificationDateTime
//     }
//   }
// `);

// export const REMOVE_EMPLOYEE = graphql(`
//   mutation RemoveEmployee($id: ID!) {
//     removeEmployee(id: $id)
//   }
// `);

// export const UPDATE_EMPLOYEE = graphql(`
//   mutation UpdateEmployee($id: ID!, $name: String, $department: String) {
//     updateEmployee(
//       employee: { id: $id, name: $name, department: $department }
//     ) {
//       id
//       name
//       department
//       createdBy
//       creationDateTime
//       updatedBy
//       modificationDateTime
//     }
//   }
// `);
