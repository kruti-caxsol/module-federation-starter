import React from "react";
import { useNavigate } from "react-router-dom";

const Users = React.lazy(() => import("authapp/UserList"));

export default function Landing() {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.clear();
    navigate("/login");
  }
  return (
    <div>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
      <Users />
    </div>
  );
}
