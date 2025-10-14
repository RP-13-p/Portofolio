import React from "react";
import { Download, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center bg-gray-100 shadow-inner py-4 sm:py-6">
      <div className="flex gap-6 sm:gap-10 md:gap-16 justify-center items-center mb-2">
        <a 
          href="https://www.linkedin.com/in/raphael-partouche-325709208" 
          target="_blank" 
          rel="noreferrer"
          className="hover:text-blue-600 transition-colors"
        >
          <Linkedin size={20} className="sm:w-6 sm:h-6" />
        </a>
        <a 
          href="/Resume_FALL_2025.pdf" 
          target="_blank" 
          rel="noreferrer" 
          className="flex items-center gap-1 hover:text-blue-600 transition-colors"
        >
          <span className="text-sm sm:text-base">CV</span> 
          <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
        </a>
        <a 
          href="https://github.com/RP-13-p" 
          target="_blank" 
          rel="noreferrer"
          className="hover:text-blue-600 transition-colors"
        >
          <Github size={20} className="sm:w-6 sm:h-6" />
        </a>
        <a 
          href="mailto:raphaelpartouchepcs@gmail.com"
          className="hover:text-blue-600 transition-colors"
        >
          <Mail size={20} className="sm:w-6 sm:h-6" />
        </a>
      </div>
      <p className="text-xs sm:text-sm text-gray-600 mt-2 sm:mt-3 px-4 text-center">
        © 2025 Raphael Partouche. All rights reserved.
      </p>
    </footer>
  );
}