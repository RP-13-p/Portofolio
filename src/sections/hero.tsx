import React from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const { t } = useTranslation();
  const titleText = t("hero.title");
  const [isTypingDone, setIsTypingDone] = React.useState(false);
  const [displayedText, setDisplayedText] = React.useState("");

  // Effet pour l'animation de typing au montage du composant
  React.useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= titleText.length) {
        setDisplayedText(titleText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingDone(true);
      }
    }, 70); 

    return () => clearInterval(typingInterval);
  }, [titleText]);

  // Calculer le délai total pour synchroniser les animations
  const totalTypingDuration = titleText.length * 0.1;

  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center px-4 py-16 pt-24 will-change-transform"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <img
            src="/portrait.jpg"
            alt="Portrait"
            className="h-48 w-48 md:h-56 md:w-56 rounded-full object-cover border border-black shadow-lg transition-transform duration-300 hover:scale-[1.05] hover:shadow-xl"
          />
        </div>

        <div className="flex-grow text-center md:text-left">
          <motion.h1 
              className="text-5xl font-bold mb-3 relative inline-block"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              {displayedText}
              <motion.span
                className="inline-block w-[2px] h-[1em] bg-black ml-[2px] align-middle"
                animate={{
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.h1>
          <motion.p 
            className="text-lg text-gray-700 text-justify"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 180,
              delay: totalTypingDuration + 0.1,
            }}
          >
            {t("hero.subtitle")}
          </motion.p>
        </div>
      </div> 
    </section>
  );
}
