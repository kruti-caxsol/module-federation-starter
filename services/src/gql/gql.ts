/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetEmployees3 {\n    getEmployees {\n      id\n      name\n      department\n      createdBy\n      updatedBy\n    }\n  }\n": types.GetEmployees3Document,
    "\n  mutation AddEmployee($name: String!, $department: Department) {\n    addEmployee(employee: { name: $name, department: $department }) {\n      id\n      name\n      department\n      createdBy\n      creationDateTime\n      updatedBy\n      modificationDateTime\n    }\n  }\n": types.AddEmployeeDocument,
    "\n  mutation RemoveEmployee($id: ID!) {\n    removeEmployee(id: $id)\n  }\n": types.RemoveEmployeeDocument,
    "\n  mutation UpdateEmployee($id: ID!, $name: String, $department: String) {\n    updateEmployee(\n      employee: { id: $id, name: $name, department: $department }\n    ) {\n      id\n      name\n      department\n      createdBy\n      creationDateTime\n      updatedBy\n      modificationDateTime\n    }\n  }\n": types.UpdateEmployeeDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetEmployees3 {\n    getEmployees {\n      id\n      name\n      department\n      createdBy\n      updatedBy\n    }\n  }\n"): (typeof documents)["\n  query GetEmployees3 {\n    getEmployees {\n      id\n      name\n      department\n      createdBy\n      updatedBy\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddEmployee($name: String!, $department: Department) {\n    addEmployee(employee: { name: $name, department: $department }) {\n      id\n      name\n      department\n      createdBy\n      creationDateTime\n      updatedBy\n      modificationDateTime\n    }\n  }\n"): (typeof documents)["\n  mutation AddEmployee($name: String!, $department: Department) {\n    addEmployee(employee: { name: $name, department: $department }) {\n      id\n      name\n      department\n      createdBy\n      creationDateTime\n      updatedBy\n      modificationDateTime\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RemoveEmployee($id: ID!) {\n    removeEmployee(id: $id)\n  }\n"): (typeof documents)["\n  mutation RemoveEmployee($id: ID!) {\n    removeEmployee(id: $id)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateEmployee($id: ID!, $name: String, $department: String) {\n    updateEmployee(\n      employee: { id: $id, name: $name, department: $department }\n    ) {\n      id\n      name\n      department\n      createdBy\n      creationDateTime\n      updatedBy\n      modificationDateTime\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateEmployee($id: ID!, $name: String, $department: String) {\n    updateEmployee(\n      employee: { id: $id, name: $name, department: $department }\n    ) {\n      id\n      name\n      department\n      createdBy\n      creationDateTime\n      updatedBy\n      modificationDateTime\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;