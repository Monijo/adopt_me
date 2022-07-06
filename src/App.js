import SearchParams from "./components/SearchParams";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ThemeContext from "./components/ThemeContext";
import "./App.css";

import WrappedDetails from "./components/Details";
import { useState } from "react";

function App() {
  const theme = useState("green");
  const theme2 = useState("red");
  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <header>
          <Link to="/">
            <h1>Adopt me</h1>
          </Link>
        </header>

        <Routes>
          <Route path="/" element={<SearchParams />} />
          <Route path="/details/:id" element={<WrappedDetails />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
