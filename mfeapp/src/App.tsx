import "../src/style.css";
import ErrorBoundary from "./ErrorBoundary";
import Login from "./pages/Login";
const App = () => {
  const testenv = process.env.TEST_ENV;
console.log(`test env: ${testenv}`,  process.env.NODE_ENV);
  return (
    <>
      <ErrorBoundary>
        <Login />
      </ErrorBoundary>
    </>
  );
};
export default App;
