import SearchParams from "./components/SearchParams";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import WrappedDetails from "./components/Details";

function App() {
  return (
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
  );
}

export default App;
