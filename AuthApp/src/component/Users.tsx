import { useQuery, gql } from "@apollo/client";
import { eventPub } from "services/PubSub_SR";

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
    onCompleted(data1) {
      const users = data1.getUsers;
      const firstUser = users.length > 0 ? users[0] : null;
      if (firstUser) {
        const { username } = firstUser;
        eventPub("userName", username);
      }
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
