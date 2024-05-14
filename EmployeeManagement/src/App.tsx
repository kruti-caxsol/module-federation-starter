import "./style.css";
import ErrorBoundary from "./ErrorBoundary.tsx";
import DemoForms from "./Components/DemoForm.tsx";
function App() {
  return (
    <ErrorBoundary>
      <div>
        <h1>Employee Management</h1>
        <DemoForms/>
      </div>
    </ErrorBoundary>
  );
}
export default App;
