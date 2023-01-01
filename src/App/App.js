import { Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createBrowserHistory } from "@remix-run/router";
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Cards from "./Pages/MyCards/Cards";

const theme = createTheme();
const history = createBrowserHistory();
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <HashRouter history={history}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/myCards" element={<Cards />} />
          </Routes>
        </HashRouter>
      </Container>
    </ThemeProvider>
  );
}
