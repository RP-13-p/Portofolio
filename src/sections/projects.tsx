import React from "react";
import { useTranslation } from "react-i18next";
import {Github} from "lucide-react";
import ProjectCard, { Project } from "../components/project_card";

export default function Projects() {
  const { t } = useTranslation();
  
  const projects: Project[] = [
    
    {
      title: t("projects.othello.title"),
      description: t("projects.othello.description"),
      images: ["/projects/othello/othello_1.png", "/projects/othello/othello_2.png","/projects/othello/othello_3.png","/projects/othello/othello_4.png"],
      tech: ["JavaScript", "HTML", "CSS", "Algorithms"],
      repo: "https://github.com/RP-13-p/Othello_browser"
    },
    
    {
      title: t("projects.civibot.title"),
      description: t("projects.civibot.description"),
      images: ["/projects/civibot/civibot4.png", "/projects/civibot/civibot2.png","/projects/civibot/civibot3.png"],
      tech: ["React", "FastAPI", "PostgreSQL", "i18n", "AI"],
      site: "https://civibot.io/",
    },
    {
      title: t("projects.sightsense.title"),
      description: t("projects.sightsense.description"),
      images: ["/projects/visual_impair/visual_impair_1.png", "/projects/visual_impair/visual_impair_2.png"],
      tech: ["React", "FastAPI", "OpenAI API", "PostgreSQL"],
      repo: "https://github.com/yourname/medbot"
    }
  ];

  const [current, setCurrent] = React.useState(0);
  const [direction, setDirection] = React.useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const [animateModal, setAnimateModal] = React.useState(false);
  const project = projects[current];

  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null);
  const [swipeOffset, setSwipeOffset] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);

  const minSwipeDistance = 50;

  const nextProject = () => {
    if (isAnimating) return;
    setDirection("right");
    setIsAnimating(true);
    setCurrent((i) => (i + 1) % projects.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevProject = () => {
    if (isAnimating) return;
    setDirection("left");
    setIsAnimating(true);
    setCurrent((i) => (i - 1 + projects.length) % projects.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    const currentTouch = e.targetTouches[0].clientX;
    setTouchEnd(currentTouch);
    
    if (touchStart !== null) {
      const diff = currentTouch - touchStart;
      // Limiter le déplacement à +/- 100px pour éviter un défilement trop important
      setSwipeOffset(Math.max(-100, Math.min(100, diff)));
    }
  };

  const onTouchEnd = () => {
    setIsDragging(false);
    setSwipeOffset(0);
    
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) nextProject();
    if (isRightSwipe) prevProject();
  };

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextProject();
      if (e.key === "ArrowLeft") prevProject();
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isAnimating]);

  const openModal = () => {
    setOpen(true);
    requestAnimationFrame(() => setAnimateModal(true));
  };
  const closeModal = () => {
    setAnimateModal(false);
    setTimeout(() => setOpen(false), 200);
  };

  const getTransformStyle = () => {
    if (isDragging) {
      return {
        transform: `translateX(${swipeOffset}px) scale(${1 - Math.abs(swipeOffset) * 0.0005})`,
        transition: 'none'
      };
    }
    
    if (isAnimating) {
      const slideDirection = direction === "right" ? "translateX(24px)" : "translateX(-24px)";
      return {
        animation: `slideIn${direction === "right" ? "Right" : "Left"} 300ms ease-out`
      };
    }
    
    return {
      transform: 'translateX(0) scale(1)',
      transition: 'transform 0.3s ease-out'
    };
  };

  return ( 
    <section id="projects" className="py-8 mt-[-12] sm:py-16 px-4 md:px-12 lg:px-20 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10">{t("projects.title")}</h2>

      <div className="relative w-full max-w-4xl">
        <div 
          className="will-change-transform"
          style={getTransformStyle()}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <ProjectCard project={project} onClick={openModal} />
        </div>

        <button
          onClick={prevProject}
          disabled={isAnimating}
          aria-label={t("projects.ui.previous")}
          className="hidden lg:flex items-center justify-center
                     absolute left-[-5rem] top-1/2 -translate-y-1/2
                     h-12 w-12 rounded-full bg-white/95 backdrop-blur border border-gray-200
                     shadow-lg hover:shadow-xl hover:scale-105 active:scale-95
                     text-gray-900 text-2xl transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ‹
        </button>
        <button
          onClick={nextProject}
          disabled={isAnimating}
          aria-label={t("projects.ui.next")}
          className="hidden lg:flex items-center justify-center
                     absolute right-[-5rem] top-1/2 -translate-y-1/2
                     h-12 w-12 rounded-full bg-white/95 backdrop-blur border border-gray-200
                     shadow-lg hover:shadow-xl hover:scale-105 active:scale-95
                     text-gray-900 text-2xl transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ›
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          {current + 1} / {projects.length}
        </p>
      </div>

      {open && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4
                      bg-black/60 transition-opacity duration-150
                      ${animateModal ? "opacity-100" : "opacity-0"}`}
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div
            className={`relative w-full max-w-5xl max-h-[95vh] md:max-h-[90vh] rounded-none md:rounded-2xl bg-white shadow-xl overflow-hidden flex flex-col
                        transform transition-transform duration-150
                        ${animateModal ? "scale-100" : "scale-95"}`}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 flex-shrink-0">
              <h3 className="text-xl font-semibold text-center w-full">{project.title}</h3>
              <button
                onClick={closeModal}
                aria-label={t("projects.ui.close")}
                className="rounded-full p-2 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            <div className="flex-shrink-0">
              <ModalCarousel images={project.images} t={t} />
            </div>

            <div className="px-6 py-5 flex-1 overflow-y-auto">
              <div className="text-gray-700 text-base leading-relaxed text-justify space-y-4 mb-6">
                {project.description.split("\n\n").map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>

              <div className="flex gap-4 justify-center">
                {project.site && (
                  <button
                    onClick={() => window.open(project.site!, '_blank', 'noopener,noreferrer')}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
                  >
                   {t("projects.ui.visit_site")}
                  </button>
                )}
                {project.repo && (
                  <button
                    onClick={() => window.open(project.repo!, '_blank', 'noopener,noreferrer')}
                    className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium flex items-center gap-2"
                  >
                  <Github className="w-5 h-5" />{t("projects.ui.view_repo")}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(24px) scale(0.95); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-24px) scale(0.95); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
      `}</style>
    </section>
  );
}

function ModalCarousel({ images, t }: { images: string[]; t: (key: string) => string }) {
  const [i, setI] = React.useState(0);
  const next = () => setI((x) => (x + 1) % images.length);
  const prev = () => setI((x) => (x - 1 + images.length) % images.length);

  return (
    <div className="relative bg-gray-50">
      <img
        key={images[i]}
        src={images[i]}
        alt={`slide ${i + 1}`}
        className="w-full h-64 object-contain bg-white transition-opacity duration-300"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label={t("projects.ui.previous_image")}
            className="absolute left-3 top-1/2 -translate-y-1/2
                       rounded-full bg-white/95 border border-gray-200
                       shadow p-2 text-xl hover:scale-105 active:scale-95 transition"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label={t("projects.ui.next_image")}
            className="absolute right-3 top-1/2 -translate-y-1/2
                       rounded-full bg-white/95 border border-gray-200
                       shadow p-2 text-xl hover:scale-105 active:scale-95 transition"
          >
            ›
          </button>
        </>
      )}
      {images.length > 1 && (
        <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`h-2.5 w-2.5 rounded-full transition
                ${idx === i ? "bg-gray-900" : "bg-gray-300"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}