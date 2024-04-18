import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3c8c8a",
    },
    secondary: {
      main: "#d11a2a",
    },
    background: {
      default: "#fbffff",
      paper: "#c8fbdf",
    },
    divider: "rgba(0,0,0,0.15)",
  },
});

// function theme(value:string) {
//     console.log("teme Functin is called", value)
// }

export default theme;
