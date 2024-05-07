import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export enum Department {
  Account = "Account",
  Admin = "Admin",
  Hr = "HR",
  It = "IT",
  Sales = "Sales",
}

export type Employee = {
  __typename?: "Employee";
  createdBy: Scalars["String"]["output"];
  creationDateTime: Scalars["String"]["output"];
  department: Department;
  id: Scalars["ID"]["output"];
  modificationDateTime: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  updatedBy: Scalars["String"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  /** Any authenticated user */
  addEmployee: Employee;
  /** Only admin users */
  createUser: User;
  deleteUser?: Maybe<Scalars["Boolean"]["output"]>;
  /** No auth */
  getToken: Scalars["String"]["output"];
  removeEmployee?: Maybe<Scalars["Boolean"]["output"]>;
  updateEmployee: Employee;
  updateUser: User;
};

export type MutationAddEmployeeArgs = {
  employee: NewEmployee;
};

export type MutationCreateUserArgs = {
  user: NewUser;
};

export type MutationDeleteUserArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationGetTokenArgs = {
  password: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
};

export type MutationRemoveEmployeeArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateEmployeeArgs = {
  employee: UpdateEmployee;
};

export type MutationUpdateUserArgs = {
  user: UpdateUser;
};

export type NewEmployee = {
  department?: InputMaybe<Department>;
  name: Scalars["String"]["input"];
};

export type NewUser = {
  password: Scalars["String"]["input"];
  role?: InputMaybe<Role>;
  username: Scalars["String"]["input"];
};

export type Query = {
  __typename?: "Query";
  getEmployee?: Maybe<Employee>;
  /** Any authenticated user */
  getEmployees: Array<Maybe<Employee>>;
  /** Only admin users */
  getUsers: Array<Maybe<User>>;
};

export type QueryGetEmployeeArgs = {
  id: Scalars["ID"]["input"];
};

export enum Role {
  Admin = "ADMIN",
  Normal = "NORMAL",
}

export type Subscription = {
  __typename?: "Subscription";
  employeeAdded: Array<Maybe<Employee>>;
};

export type UpdateEmployee = {
  department?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateUser = {
  id: Scalars["ID"]["input"];
  password?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<Role>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"]["output"];
  role: Role;
  username: Scalars["String"]["output"];
};

export type GetEmployeesQueryVariables = Exact<{ [key: string]: never }>;

export type GetEmployeesQuery = {
  __typename?: "Query";
  getEmployees: Array<{
    __typename?: "Employee";
    id: string;
    name: string;
    department: Department;
    createdBy: string;
    updatedBy: string;
  } | null>;
};

export type AddEmployeeMutationVariables = Exact<{
  name: Scalars["String"]["input"];
  department?: InputMaybe<Department>;
}>;

export type AddEmployeeMutation = {
  __typename?: "Mutation";
  addEmployee: {
    __typename?: "Employee";
    id: string;
    name: string;
    department: Department;
    createdBy: string;
    creationDateTime: string;
    updatedBy: string;
    modificationDateTime: string;
  };
};

export type RemoveEmployeeMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type RemoveEmployeeMutation = {
  __typename?: "Mutation";
  removeEmployee?: boolean | null;
};

export type UpdateEmployeeMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  department?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type UpdateEmployeeMutation = {
  __typename?: "Mutation";
  updateEmployee: {
    __typename?: "Employee";
    id: string;
    name: string;
    department: Department;
    createdBy: string;
    creationDateTime: string;
    updatedBy: string;
    modificationDateTime: string;
  };
};

export const GetEmployeesDocument = gql`
  query GetEmployees {
    getEmployees {
      id
      name
      department
      createdBy
      updatedBy
    }
  }
`;

/**
 * __useGetEmployeesQuery__
 *
 * To run a query within a React component, call `useGetEmployeesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEmployeesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEmployeesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEmployeesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetEmployeesQuery,
    GetEmployeesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetEmployeesQuery, GetEmployeesQueryVariables>(
    GetEmployeesDocument,
    options,
  );
}
export function useGetEmployeesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetEmployeesQuery,
    GetEmployeesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetEmployeesQuery, GetEmployeesQueryVariables>(
    GetEmployeesDocument,
    options,
  );
}
export function useGetEmployeesSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetEmployeesQuery,
    GetEmployeesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetEmployeesQuery, GetEmployeesQueryVariables>(
    GetEmployeesDocument,
    options,
  );
}
export type GetEmployeesQueryHookResult = ReturnType<
  typeof useGetEmployeesQuery
>;
export type GetEmployeesLazyQueryHookResult = ReturnType<
  typeof useGetEmployeesLazyQuery
>;
export type GetEmployeesSuspenseQueryHookResult = ReturnType<
  typeof useGetEmployeesSuspenseQuery
>;
export type GetEmployeesQueryResult = Apollo.QueryResult<
  GetEmployeesQuery,
  GetEmployeesQueryVariables
>;
export const AddEmployeeDocument = gql`
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
export type AddEmployeeMutationFn = Apollo.MutationFunction<
  AddEmployeeMutation,
  AddEmployeeMutationVariables
>;

/**
 * __useAddEmployeeMutation__
 *
 * To run a mutation, you first call `useAddEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addEmployeeMutation, { data, loading, error }] = useAddEmployeeMutation({
 *   variables: {
 *      name: // value for 'name'
 *      department: // value for 'department'
 *   },
 * });
 */
export function useAddEmployeeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddEmployeeMutation,
    AddEmployeeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddEmployeeMutation, AddEmployeeMutationVariables>(
    AddEmployeeDocument,
    options,
  );
}
export type AddEmployeeMutationHookResult = ReturnType<
  typeof useAddEmployeeMutation
>;
export type AddEmployeeMutationResult =
  Apollo.MutationResult<AddEmployeeMutation>;
export type AddEmployeeMutationOptions = Apollo.BaseMutationOptions<
  AddEmployeeMutation,
  AddEmployeeMutationVariables
>;
export const RemoveEmployeeDocument = gql`
  mutation RemoveEmployee($id: ID!) {
    removeEmployee(id: $id)
  }
`;
export type RemoveEmployeeMutationFn = Apollo.MutationFunction<
  RemoveEmployeeMutation,
  RemoveEmployeeMutationVariables
>;

/**
 * __useRemoveEmployeeMutation__
 *
 * To run a mutation, you first call `useRemoveEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeEmployeeMutation, { data, loading, error }] = useRemoveEmployeeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveEmployeeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveEmployeeMutation,
    RemoveEmployeeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RemoveEmployeeMutation,
    RemoveEmployeeMutationVariables
  >(RemoveEmployeeDocument, options);
}
export type RemoveEmployeeMutationHookResult = ReturnType<
  typeof useRemoveEmployeeMutation
>;
export type RemoveEmployeeMutationResult =
  Apollo.MutationResult<RemoveEmployeeMutation>;
export type RemoveEmployeeMutationOptions = Apollo.BaseMutationOptions<
  RemoveEmployeeMutation,
  RemoveEmployeeMutationVariables
>;
export const UpdateEmployeeDocument = gql`
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
export type UpdateEmployeeMutationFn = Apollo.MutationFunction<
  UpdateEmployeeMutation,
  UpdateEmployeeMutationVariables
>;

/**
 * __useUpdateEmployeeMutation__
 *
 * To run a mutation, you first call `useUpdateEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEmployeeMutation, { data, loading, error }] = useUpdateEmployeeMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      department: // value for 'department'
 *   },
 * });
 */
export function useUpdateEmployeeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateEmployeeMutation,
    UpdateEmployeeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateEmployeeMutation,
    UpdateEmployeeMutationVariables
  >(UpdateEmployeeDocument, options);
}
export type UpdateEmployeeMutationHookResult = ReturnType<
  typeof useUpdateEmployeeMutation
>;
export type UpdateEmployeeMutationResult =
  Apollo.MutationResult<UpdateEmployeeMutation>;
export type UpdateEmployeeMutationOptions = Apollo.BaseMutationOptions<
  UpdateEmployeeMutation,
  UpdateEmployeeMutationVariables
>;
