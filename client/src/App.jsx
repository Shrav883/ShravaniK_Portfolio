import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Each page controls its own layout */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
