import React from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const { t } = useTranslation();
  const titleText = t("hero.title");
  const [isTypingDone, setIsTypingDone] = React.useState(false);
  const [shouldAnimate, setShouldAnimate] = React.useState(false);
  const sectionRef = React.useRef(null);

  // Observer pour détecter quand la section est visible
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldAnimate(true);
          } else {
            setShouldAnimate(false);
            setIsTypingDone(false);
          }
        });
      },
      {
        threshold: 0.3, // Déclenche quand 30% de la section est visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Calculer le délai total pour synchroniser les animations
  const totalTypingDuration = titleText.length * 0.1;

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="flex min-h-screen items-center justify-center px-4 py-16 pt-24"
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
              className="text-5xl font-bold mb-3"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              <AnimatePresence mode="wait">
                {shouldAnimate && titleText.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ 
                      opacity: 0,
                      y: -20,
                    }}
                    animate={{ 
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      type: "spring",
                      damping: 10,
                      stiffness: 100,
                      duration: 0.3,
                      delay: index * 0.1,
                    }}
                    onAnimationComplete={() => {
                      if (index === titleText.length - 1) {
                        setIsTypingDone(true);
                      }
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </AnimatePresence>
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
