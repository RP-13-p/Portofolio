import React from "react";
import { Download, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center bg-gray-100 shadow-inner py-4">
      <div className="flex gap-10 md:gap-16 justify-center items-center mb-2">
        <a href="https://www.linkedin.com/in/raphael-partouche-325709208" target="_blank" rel="noreferrer">
          <Linkedin />
        </a>
        <a href="/CV.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-1">
          <span>CV</span> <Download size={18} />
        </a>
        <a href="https://github.com/RP-13-p" target="_blank" rel="noreferrer">
          <Github />
        </a>
        <a href="mailto:raphaelpartouchepcs@gmail.com">
          <Mail />
        </a>
      </div>
      <p className="text-xs text-gray-600 mt-3">
        © 2025 Raphael Partouche. All rights reserved.
      </p>
    </footer>
  );
}
