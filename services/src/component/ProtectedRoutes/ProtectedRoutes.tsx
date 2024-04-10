import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { getAuthToken } from "../../utils/authUtils.ts";

function PrivateRoute({ element }: { element: ReactElement }) {
  const token = getAuthToken();
  return token ? element : <Navigate to="/login" />;
}

export default PrivateRoute;
