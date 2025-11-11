// src/App.jsx

import React from "react";
import Navigation from "./components/Navigation"; // Assuming you renamed Navbar to Navigation
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  // NOTE: Dark mode logic has been removed as all components are styled for the light-mode theme
  // We rely on the global CSS/Tailwind configuration for fonts and base colors.
  
  return (
    <div className="min-h-screen antialiased bg-white">
      <Navigation />
      <main className="pt-20"> {/* pt-20 added for fixed header clearance */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      
      {/* Footer component for professional completion */}
      <footer className="py-8 bg-gray-50 border-t border-gray-200 text-center text-gray-500">
        <div className="max-w-6xl mx-auto px-6">
            <p>&copy; {new Date().getFullYear()} Philip Inem. All rights reserved.</p>
            <p className="mt-1 text-sm">Engineered with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
