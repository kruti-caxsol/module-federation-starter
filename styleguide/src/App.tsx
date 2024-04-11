import { ThemeProvider, createTheme } from "@mui/material";
import ErrorBoundary from "./ErrorBoundary.tsx";
import "./style.css";
import BasicCard from "./Component/BasicCard.tsx";

function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#3c8c8a",
      },
      secondary: {
        main: "#f50057",
      },
      background: {
        default: "#fbffff",
        paper: "#c8fbdf",
      },
      divider: "rgba(0,0,0,0.15)",
    },
  });
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <h1> Style guide {process.env.NODE_ENV}</h1>
        <BasicCard />
      </ThemeProvider>
    </ErrorBoundary>
  );
}
export default App;
