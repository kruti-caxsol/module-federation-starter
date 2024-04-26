/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export enum Department {
  Account = 'Account',
  Admin = 'Admin',
  Hr = 'HR',
  It = 'IT',
  Sales = 'Sales'
}

export type Employee = {
  __typename?: 'Employee';
  createdBy: Scalars['String']['output'];
  creationDateTime: Scalars['String']['output'];
  department: Department;
  id: Scalars['ID']['output'];
  modificationDateTime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedBy: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Any authenticated user */
  addEmployee: Employee;
  /** Only admin users */
  createUser: User;
  deleteUser?: Maybe<Scalars['Boolean']['output']>;
  /** No auth */
  getToken: Scalars['String']['output'];
  removeEmployee?: Maybe<Scalars['Boolean']['output']>;
  updateEmployee: Employee;
  updateUser: User;
};


export type MutationAddEmployeeArgs = {
  customer: NewEmployee;
};


export type MutationCreateUserArgs = {
  user: NewUser;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationGetTokenArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationRemoveEmployeeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateEmployeeArgs = {
  customer: UpdateEmployee;
};


export type MutationUpdateUserArgs = {
  user: UpdateUser;
};

export type NewEmployee = {
  department?: InputMaybe<Department>;
  name: Scalars['String']['input'];
};

export type NewUser = {
  password: Scalars['String']['input'];
  role?: InputMaybe<Role>;
  username: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getEmployee?: Maybe<Employee>;
  /** Any authenticated user */
  getEmployees: Array<Maybe<Employee>>;
  /** Only admin users */
  getUsers: Array<Maybe<User>>;
};


export type QueryGetEmployeeArgs = {
  id: Scalars['ID']['input'];
};

export enum Role {
  Admin = 'ADMIN',
  Normal = 'NORMAL'
}

export type UpdateEmployee = {
  department?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUser = {
  id: Scalars['ID']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  role: Role;
  username: Scalars['String']['output'];
};

export type GetEmployees3QueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmployees3Query = { __typename?: 'Query', getEmployees: Array<{ __typename?: 'Employee', id: string, name: string, department: Department, createdBy: string, updatedBy: string } | null> };

export type AddEmployeeMutationVariables = Exact<{
  name: Scalars['String']['input'];
  department?: InputMaybe<Department>;
}>;


export type AddEmployeeMutation = { __typename?: 'Mutation', addEmployee: { __typename?: 'Employee', id: string, name: string, department: Department, createdBy: string, creationDateTime: string, updatedBy: string, modificationDateTime: string } };

export type RemoveEmployeeMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveEmployeeMutation = { __typename?: 'Mutation', removeEmployee?: boolean | null };

export type UpdateEmployeeMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateEmployeeMutation = { __typename?: 'Mutation', updateEmployee: { __typename?: 'Employee', id: string, name: string, department: Department, createdBy: string, creationDateTime: string, updatedBy: string, modificationDateTime: string } };


export const GetEmployees3Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEmployees3"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"department"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"}}]}}]}}]} as unknown as DocumentNode<GetEmployees3Query, GetEmployees3QueryVariables>;
export const AddEmployeeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddEmployee"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"department"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Department"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addEmployee"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"customer"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"department"},"value":{"kind":"Variable","name":{"kind":"Name","value":"department"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"department"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"creationDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"}},{"kind":"Field","name":{"kind":"Name","value":"modificationDateTime"}}]}}]}}]} as unknown as DocumentNode<AddEmployeeMutation, AddEmployeeMutationVariables>;
export const RemoveEmployeeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveEmployee"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeEmployee"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<RemoveEmployeeMutation, RemoveEmployeeMutationVariables>;
export const UpdateEmployeeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateEmployee"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"department"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateEmployee"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"customer"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"department"},"value":{"kind":"Variable","name":{"kind":"Name","value":"department"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"department"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"creationDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"}},{"kind":"Field","name":{"kind":"Name","value":"modificationDateTime"}}]}}]}}]} as unknown as DocumentNode<UpdateEmployeeMutation, UpdateEmployeeMutationVariables>;