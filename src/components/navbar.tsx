import React from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Github, Linkedin, Mail, Menu, X } from "lucide-react";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const sections = ["hero", "experience", "projects", "education", "skills"];

  const [openLang, setOpenLang] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);
  const current = i18n.language === "en" ? "EN" : "FR";

  const setLang = (lng: "en" | "fr") => {
    i18n.changeLanguage(lng);
    setOpenLang(false);
  };

  const handleNavClick = () => {
    setOpenMenu(false);
  };
 
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-6xl px-3 sm:px-4">
        <div className="mt-3 mb-2 flex items-center justify-between rounded-2xl border border-black/70 bg-white/60 backdrop-blur-md shadow-navbar px-3 py-2">
          
          {/* Social Links - cachés sur très petit écran */}
          <div className="hidden sm:flex items-center gap-2 md:gap-3 text-gray-700">
            <a href="https://www.linkedin.com/in/raphael-partouche-325709208" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/RP-13-p" target="_blank" rel="noreferrer" className="hover:text-blue-600">
              <Github size={20} />
            </a>
            <a href="mailto:raphaelpartouchepcs@gmail.com" className="hover:text-blue-600">
              <Mail size={20} />
            </a>
          </div>

          
          <motion.ul
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="hidden md:flex justify-center gap-4 lg:gap-8 text-sm font-medium text-gray-700"
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

          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {openMenu ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="flex items-center gap-2 sm:gap-3 relative text-gray-700">
            <a 
              href="/Resume_FALL_2025.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-1 px-2 py-1.5 rounded-xl border border-black/20 hover:border-black/30 bg-white/80 hover:bg-white text-xs sm:text-sm font-medium shadow-sm transition-colors ring-0 hover:ring-1 hover:ring-black/20"
            >
              <span className="hidden sm:inline">{t("nav.resume")}</span>
              <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>
            
            <button
              onClick={() => setOpenLang((v) => !v)}
              className="px-2 sm:px-3 py-1.5 rounded-xl border border-black/20 hover:border-black/30 bg-white/80 hover:bg-white text-xs sm:text-sm font-medium shadow-sm ring-0 hover:ring-1 hover:ring-black/20"
              aria-haspopup="listbox"
              aria-expanded={openLang}
              aria-label="Language"
            >
              {current}
            </button>

            {openLang && (
              <ul
                role="listbox"
                className="absolute right-0 top-12 w-24 sm:w-28 rounded-xl border border-black-200 bg-white/95 shadow-lg text-xs sm:text-sm overflow-hidden"
              >
                <li>
                  <button
                    className={`w-full text-left px-3 py-2 hover:bg-black-50 ${current === "FR" ? "font-semibold" : ""}`}
                    onClick={() => setLang("fr")}
                  >
                    FR
                  </button>
                </li>
                <li>
                  <button
                    className={`w-full text-left px-3 py-2 hover:bg-black-50 ${current === "EN" ? "font-semibold" : ""}`}
                    onClick={() => setLang("en")}
                  >
                    EN
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>

    
        <AnimatePresence>
          {openMenu && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-2 rounded-2xl border border-white/40 bg-white/95 backdrop-blur-md shadow-lg overflow-hidden"
            >
              <ul className="flex flex-col text-center text-base font-medium text-gray-700">
                {sections.map((id) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={handleNavClick}
                      className="block py-3 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                    >
                      {t(`nav.${id === "hero" ? "home" : id}`)}
                    </a>
                  </li>
                ))}
              </ul>
              
              
              <div className="flex sm:hidden justify-center gap-6 py-4 border-t border-gray-200 text-gray-700">
                <a href="https://www.linkedin.com/in/raphael-partouche-325709208" target="_blank" rel="noreferrer">
                  <Linkedin size={22} />
                </a>
                <a href="https://github.com/RP-13-p" target="_blank" rel="noreferrer">
                  <Github size={22} />
                </a>
                <a href="mailto:raphaelpartouchepcs@gmail.com">
                  <Mail size={22} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}