import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Converter from "./pages/Converter";
import About from "./pages/About";
import "./App.css"; // import the CSS

export default function App() {
  return (
    <Router>
      <nav className="navbar">
        <h1>💸 FX Converter</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/converter">Converter</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/converter" element={<Converter />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer className="footer">
        © 2025 SamSec — React + Tailwind + ExchangeRate API
      </footer>
    </Router>
  );
}
