import "./style.css";
import ErrorBoundary from "./ErrorBoundary.tsx";

function App() {
  return (
    <ErrorBoundary>
      <div>
        <h1>Employee Management</h1>
      </div>
    </ErrorBoundary>
  );
}
export default App;
