import "./style.css";
import ErrorBoundary from "./ErrorBoundary.tsx";

function App() {
  return (
    <ErrorBoundary>
      <div>
        <h1>Services</h1>
      </div>
    </ErrorBoundary>
  );
}
export default App;
