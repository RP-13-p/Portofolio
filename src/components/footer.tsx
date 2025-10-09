import React from "react";
import { Download, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full h-20 p-2 flex gap-6 justify-center items-center bg-gray-100 shadow-inner">
      <a href="www.linkedin.com/in/raphael-partouche-325709208" target="_blank" rel="noreferrer">
        <Linkedin />
      </a>
      <a href="/CV.pdf" target="_blank" rel="noreferrer">
        CV <Download size={18} />
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
