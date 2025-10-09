import React from "react";
import { Download, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full h-20 p-2 flex gap-6 justify-center items-center bg-gray-100 shadow-inner">
      <a href="https://www.linkedin.com/in/4furkancengiz4/" target="_blank" rel="noreferrer">
        <Linkedin />
      </a>
      <a href="/CV.pdf" target="_blank" rel="noreferrer">
        CV <Download size={18} />
      </a>
      <a href="https://github.com/4furki4" target="_blank" rel="noreferrer">
        <Github />
      </a>
      <a href="mailto:muhammedcengiz1@gmail.com">
        <Mail />
      </a>
    </footer>
  );
}
