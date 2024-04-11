import { BrowserRouter as Router, Link } from "react-router-dom";
import "./sidebar.css";

interface RouteConfig {
  path: string;
  label: string;
}

const routes: RouteConfig[] = [
  {
    path: "/Link1",
    label: "Link1",
  },
  {
    path: "/Link2",
    label: "Link2",
  },
  {
    path: "/Link3",
    label: "Link3",
  },
];

function Sidebar() {
  return (
    <Router>
      <div>
        <ul style={{ listStyleType: "none", padding: 0, paddingLeft: "50px" }}>
          {routes.map((route) => (
            <li className="link-style">
              <Link to={route.path}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Router>
  );
}
export default Sidebar;
