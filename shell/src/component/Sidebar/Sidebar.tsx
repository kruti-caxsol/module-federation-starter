import { Link } from "react-router-dom";
import "./sidebar.css";

interface RouteConfig {
  path: string;
  label: string;
}

const routes: RouteConfig[] = [
  {
    path: "/dashboard",
    label: "Dashboard",
  },
  {
    path: "/employee",
    label: "Employee",
  },
  {
    path: "/Link3",
    label: "Link3",
  },
];

function Sidebar() {
  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0, paddingLeft: "50px" }}>
        {routes.map((route) => (
          <li className="link-style">
            <Link to={route.path}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Sidebar;
