import { createTheme } from "@mui/material";

const lightTheme = createTheme();

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#222222",
    },
  },
});

export { darkTheme, lightTheme };
