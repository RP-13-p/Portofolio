import React from "react";
import { Download, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full h-20 p-2 flex gap-10 md:gap-16 justify-center items-center bg-gray-100 shadow-inner">
      <a href="www.linkedin.com/in/raphael-partouche-325709208" target="_blank" rel="noreferrer">
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
    </footer>
  );
}
