// import { ReactElement } from "react";
// import { Navigate } from "react-router-dom";
// import { getAuthToken } from "../../utils/authUtils.ts";

// function PrivateRoute({ element }: { element: ReactElement }) {
//   const token = getAuthToken();
//   return token ? element : <Navigate to="/login" />;
// }

// export default PrivateRoute;

import { Navigate, Outlet } from "react-router-dom";
import { getAuthToken } from "../../utils/authUtils.ts";

function PrivateRoutes() {
  const token = getAuthToken();
  return token ? <Outlet /> : <Navigate to="/login" />;
}
export default PrivateRoutes;
