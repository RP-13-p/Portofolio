import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm shadow z-50">
      <motion.ul
        className="flex justify-center gap-8 p-4"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <li><a href="#hero" className="hover:text-blue-500">Accueil</a></li>
        <li><a href="#about" className="hover:text-blue-500">À propos</a></li>
        <li><a href="#education" className="hover:text-blue-500">Formation</a></li>
        <li><a href="#experience" className="hover:text-blue-500">Expérience</a></li>
        <li><a href="#projects" className="hover:text-blue-500">Projets</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
      </motion.ul>
    </nav>
  );
}
