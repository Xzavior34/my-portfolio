// src/App.js
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(true); // default: dark

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
      {/* Pass darkMode + setDarkMode to Navbar so it controls toggle */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <Hero darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Testimonials darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </div>
  );
}

export default App;
