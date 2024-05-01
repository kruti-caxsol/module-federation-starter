import { gql } from "@apollo/client";

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
    addEmployee(customer: { name: $name, department: $department }) {
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
      customer: { id: $id, name: $name, department: $department }
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
