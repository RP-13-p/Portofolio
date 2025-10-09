import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const sections = ["hero", "about", "experience", "education", "projects"];

  const [openLang, setOpenLang] = React.useState(false);
  const current = i18n.language === "en" ? "EN" : "FR";

  const setLang = (lng: "en" | "fr") => {
    i18n.changeLanguage(lng);
    setOpenLang(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-3 mb-2 grid grid-cols-3 items-center rounded-2xl border border-white/40 bg-white/60 backdrop-blur-md shadow-navbar">
          <div className="flex items-center gap-3 justify-start pl-3 py-2 text-gray-700">
            <a href="https://www.linkedin.com/in/raphael-partouche-325709208" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
              <Linkedin />
            </a>
            <a href="https://github.com/RP-13-p" target="_blank" rel="noreferrer" className="hover:text-blue-600">
              <Github />
            </a>
            <a href="mailto:raphaelpartouchepcs@gmail.com" className="hover:text-blue-600">
              <Mail />
            </a>
          </div>

          <motion.ul
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="hidden md:flex justify-center gap-8 text-sm font-medium text-gray-700"
          >
            {sections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="relative hover:text-blue-600 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-300"
                >
                  {t(`nav.${id === "hero" ? "home" : id}`)}
                </a>
              </li>
            ))}
          </motion.ul>

          <div className="flex justify-end items-center gap-3 pr-3 py-2 relative text-gray-700">
            <a href="/CV.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-1 px-2 py-1.5 rounded-xl border border-black/20 hover:border-black/30 bg-white/80 hover:bg-white text-sm font-medium shadow-sm transition-colors ring-0 hover:ring-1 hover:ring-black/20">
              <span>CV</span> <Download size={18} />
            </a>
            <button
              onClick={() => setOpenLang((v) => !v)}
              className="px-3 py-1.5 rounded-xl border border-black/20 hover:border-black/30 bg-white/80 hover:bg-white text-sm font-medium shadow-sm ring-0 hover:ring-1 hover:ring-black/20"
              aria-haspopup="listbox"
              aria-expanded={openLang}
              aria-label="Language"
            >
              {current}
            </button>

            {openLang && (
              <ul
                role="listbox"
                className="absolute right-3 top-12 w-28 rounded-xl border border-gray-200 bg-white/95 shadow-lg text-sm overflow-hidden"
              >
                <li>
                  <button
                    className={`w-full text-left px-3 py-2 hover:bg-gray-50 ${current === "FR" ? "font-semibold" : ""}`}
                    onClick={() => setLang("fr")}
                  >
                    FR
                  </button>
                </li>
                <li>
                  <button
                    className={`w-full text-left px-3 py-2 hover:bg-gray-50 ${current === "EN" ? "font-semibold" : ""}`}
                    onClick={() => setLang("en")}
                  >
                    EN
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
