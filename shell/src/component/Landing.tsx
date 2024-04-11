import React from "react";

const Users = React.lazy(() => import("authapp/UserList"));

export default function Landing() {
  return (
    <div>
      <Users />
    </div>
  );
}
