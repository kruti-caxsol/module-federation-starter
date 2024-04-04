import "./style.css";
import ErrorBoundary from "./ErrorBoundary.tsx";
import Login from "./pages/Login.tsx";

function App() {
  return (
    <ErrorBoundary>
      <Login />
    </ErrorBoundary>
  );
}
export default App;
