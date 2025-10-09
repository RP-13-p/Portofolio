import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const sections = ["hero", "about", "education", "experience", "projects"];

  const [openLang, setOpenLang] = React.useState(false);
  const current = i18n.language === "en" ? "EN" : "FR";

  const setLang = (lng: "en" | "fr") => {
    i18n.changeLanguage(lng);
    setOpenLang(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow z-50">
      {/* full width, pas de container centré → icônes vraiment à gauche */}
      <div className="px-0 py-3 grid grid-cols-3 items-center">
        {/* Icônes collées au bord gauche */}
        <div className="flex items-center gap-4 justify-start pl-2">
          <a href="https://www.linkedin.com/in/raphael-partouche-325709208" target="_blank" rel="noreferrer" className="hover:text-blue-600">
            <Linkedin />
          </a>
          <a href="/CV.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-600">
            <span>CV</span> <Download size={18} />
          </a>
          <a href="https://github.com/RP-13-p" target="_blank" rel="noreferrer" className="hover:text-blue-600">
            <Github />
          </a>
          <a href="mailto:raphaelpartouchepcs@gmail.com" className="hover:text-blue-600">
            <Mail />
          </a>
        </div>

        {/* Menu centré */}
        <motion.ul
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="hidden md:flex justify-center gap-8"
        >
          {sections.map((id) => (
            <li key={id}>
              <a href={`#${id}`} className="hover:text-blue-600">
                {t(`nav.${id === "hero" ? "home" : id}`)}
              </a>
            </li>
          ))}
        </motion.ul>

        {/* Sélecteur de langue à droite → dropdown */}
        <div className="flex justify-end items-center pr-2 relative">
          <button
            onClick={() => setOpenLang((v) => !v)}
            className="px-3 py-1 rounded-md border border-gray-300 bg-white hover:bg-gray-50 text-sm font-medium"
            aria-haspopup="listbox"
            aria-expanded={openLang}
            aria-label="Language"
          >
            {current}
          </button>

          {openLang && (
            <ul
              role="listbox"
              className="absolute right-2 top-11 w-28 rounded-md border border-gray-200 bg-white shadow-md text-sm"
            >
              <li>
                <button
                  className={`w-full text-left px-3 py-2 hover:bg-gray-100 ${current === "FR" ? "font-semibold" : ""}`}
                  onClick={() => setLang("fr")}
                >
                  FR
                </button>
              </li>
              <li>
                <button
                  className={`w-full text-left px-3 py-2 hover:bg-gray-100 ${current === "EN" ? "font-semibold" : ""}`}
                  onClick={() => setLang("en")}
                >
                  EN
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
