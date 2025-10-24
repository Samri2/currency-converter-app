import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Converter from "./pages/Converter";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <nav style={{ background: "#eee", padding: "10px" }}>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About</button>
        <button onClick={() => setPage("converter")}>Converter</button>
      </nav>

      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "converter" && <Converter />}
    </div>
  );
}
