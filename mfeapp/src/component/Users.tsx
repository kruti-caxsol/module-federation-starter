import { useQuery, gql } from "@apollo/client";

const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      username
      role
    }
  }
`;

function UsersList() {
  interface User {
    id: number;
    username: string;
    role: string;
  }
  const authToken = localStorage.getItem("authToken");
  const { loading, error, data } = useQuery(GET_USERS, {
    context: {
      headers: {
        authorization: authToken ? `Bearer ${authToken}` : "",
      },
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {data.getUsers.map((user: User) => (
          <li key={user.id}>
            <strong>ID:</strong> {user.id}, <strong>Username:</strong>{" "}
            {user.username}, <strong>Role:</strong> {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
