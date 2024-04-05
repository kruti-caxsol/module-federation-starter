import "./style.css";
import ErrorBoundary from "./ErrorBoundary.tsx";
import DemoPubSub from "./component/DemoPubSub.tsx";
// import Login from "./pages/Login.tsx";

function App() {
  return (
    <ErrorBoundary>
      {/* <Login /> */}
      <div>
        <DemoPubSub />
      </div>
    </ErrorBoundary>
  );
}
export default App;
