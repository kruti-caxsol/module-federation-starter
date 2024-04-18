import React from "react";

const Users = React.lazy(() => import("employee/UserList"));

export default function Landing() {
  return (
    <div>
      <Users />
    </div>
  );
}
