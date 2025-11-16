import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import { motion } from 'framer-motion';
import { Mail, Github, Download, ArrowRight } from 'lucide-react'; 

export default function Hero() {

  const PUBLIC_URL = typeof process !== 'undefined' && process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "";
  
  // --- FIX 1: Correctly define paths for BOTH files in 'public' folder ---
  const heroBackgroundImagePath = PUBLIC_URL + "/pic.jpg"; 
  const cvPath = PUBLIC_URL + "/Philip_Inem_CV_Summary.pdf"; // Correct path for CV

  // --- FIX 2: Add state to track if image has loaded ---
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // --- FIX 2 (Continued): UseEffect to load image and add error handling ---
  useEffect(() => {
    const img = new Image();
    img.src = heroBackgroundImagePath;
    
    // Image loaded successfully
    img.onload = () => setIsImageLoaded(true);
    
    // Image failed to load (e.g., 404 Not Found)
    img.onerror = () => {
      console.error(`Error: Background image failed to load from: ${heroBackgroundImagePath}. 
      Please make sure 'pic.jpg' is in your 'public' folder.`);
      setIsImageLoaded(false);
    };
  }, [heroBackgroundImagePath]); // Re-run if the path ever changes

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  
  return (
    <section
      id="hero"
      // --- FIX 1 (Continued): Added bg-gray-100 as a fallback ---
      // This fallback background will show if the image fails to load.
      className="relative h-screen flex items-center justify-center text-gray-800 overflow-hidden bg-gray-100" 
      style={{
        // --- FIX 2 (Continued): Only apply background image if it loaded successfully ---
        backgroundImage: isImageLoaded ? `url(${heroBackgroundImagePath})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.3s ease-in-out', // Optional: nice fade-in
      }}
    >
      {/* Hero Content - Split Layout */}
      <motion.div
        className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between w-full max-w-7xl mx-auto px-6 gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* --- Left Column (Text Content - Aligned Left) --- */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left pt-20 lg:pt-0">
          
          <motion.p 
            className="text-xl md:text-2xl font-medium mb-2 text-blue-700"
            variants={itemVariants}
          >
            Hi, I am
          </motion.p>
          
          <motion.h1
            className="text-5xl md:text-7xl font-black mb-2 leading-tight text-gray-900"
            variants={itemVariants}
          >
            <span className="text-blue-500">Philip</span> Inem
          </motion.h1>

          <motion.p
            className="text-2xl md:text-4xl text-gray-700 font-semibold mb-6 tracking-wide"
            variants={itemVariants}
          >
            Full-Stack Developer | UI/UX Architect
          </motion.p>

          <motion.p 
            className="text-md md:text-lg text-gray-600 max-w-lg mb-8 leading-relaxed"
            variants={itemVariants}
          >
            I specialize in engineering <span className="font-semibold text-blue-700">high-performance, full-stack architectures</span>. My focus lies in delivering <span className="font-semibold text-blue-500">low-latency solutions</span> and exceptional user experiences, translating complex requirements into reliable, scalable code.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8"
            variants={itemVariants}
          >
            {/* Button 1: Hire Me (Primary CTA) */}
            <a
              href="#contact" 
              className="flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg font-bold text-lg shadow-xl shadow-blue-300/30 hover:bg-blue-700 hover:scale-[1.05] transition-transform duration-300"
            >
              Hire Me <ArrowRight className="w-5 h-5 ml-2"/>
            </a>
            
            {/* Button 2: Let's Talk (Secondary CTA) */}
            <a
              href="#contact" 
              className="flex items-center justify-center px-8 py-3 bg-gray-200 text-gray-800 rounded-lg font-bold text-lg shadow-xl shadow-gray-300/30 hover:bg-gray-300 hover:scale-[1.05] transition-transform duration-300"
            >
              <Mail className="w-5 h-5 mr-3"/> Let's Talk
            </a>
          </motion.div>

          {/* Socials & CV Links */}
          <motion.div 
            className="flex items-center justify-center lg:justify-start gap-8 mt-4"
            variants={itemVariants}
          >
            <a 
              // --- FIX 3: Use the correct cvPath variable ---
              href={cvPath}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Download className="w-5 h-5" /> Download CV
            </a>
            <a 
              href="https://github.com/Xzavior34"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </motion.div>

        </div>

        {/* --- Right Column (Visual placeholder to help push content left) --- */}
        <div className="flex-1 hidden lg:block">
          {/* Empty */}
        </div>
      </motion.div>
    </section>
  );
}
