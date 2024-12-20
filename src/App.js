// src/App.js
import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#bb86fc",
    },
    secondary: {
      main: "#03dac6",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    text: {
      primary: "#fff",
      secondary: "#ccc",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Header />
      <Box sx={{ paddingTop: { xs: "56px", sm: "64px" } }}>
        <Home />
      </Box>
    </ThemeProvider>
  );
}

export default App;
