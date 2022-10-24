import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SearchAppBar from "./components/SearchAppBar";
import Tour from "./pages/Tour";

const myTheme = createTheme({
  typography: {
    body2: {
      fontSize: 11,
    },
    // new variant
    body3: {
      fontSize: 9,
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <CssBaseline />
        <SearchAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Tour />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
