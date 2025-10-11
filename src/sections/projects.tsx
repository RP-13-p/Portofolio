import React from "react";
import { useTranslation } from "react-i18next";
import ProjectCard, { Project } from "../components/project_card";

export default function Projects() {
  const { t } = useTranslation();
  
  const projects: Project[] = [
    {
      title: t("projects.civibot.title"),
      description: t("projects.civibot.description"),
      images: ["/CiviBot_logo.png", "/projects/civibot/civibot2.png", "/projects/civibot/civibot3.png"],
      tech: ["React", "FastAPI", "PostgreSQL", "i18n", "AI"],
      site: "https://civibot.io/",
      repo: "https://github.com/yourname/civibot"
    },
    {
      title: t("projects.othello.title"),
      description: t("projects.othello.description"),
      images: ["/projects/othello/othello_1.png", "/projects/othello/othello_2.png","/projects/othello/othello_3.png","/projects/othello/othello_4.png"],
      tech: ["JavaScript", "HTML", "CSS", "Algorithms"],
      repo: "https://github.com/temporary-link-othello"
    },
    {
      title: t("projects.sightsense.title"),
      description: t("projects.sightsense.description"),
      images: ["/projects/visual_impair/visual_impair_1.png", "/projects/visual_impair/visual_impair_2.png"],
      tech: ["React", "FastAPI", "OpenAI API", "PostgreSQL"],
      demo: "https://example.com/medbot",
      repo: "https://github.com/yourname/medbot"
    }
  ];

  const [current, setCurrent] = React.useState(0);
  const [direction, setDirection] = React.useState<"left" | "right">("right");

  // Modal
  const [open, setOpen] = React.useState(false);
  const [animateModal, setAnimateModal] = React.useState(false);
  const project = projects[current];

  const nextProject = () => {
    setDirection("right");
    setCurrent((i) => (i + 1) % projects.length);
  };
  const prevProject = () => {
    setDirection("left");
    setCurrent((i) => (i - 1 + projects.length) % projects.length);
  };

  // clavier: navigation + fermer modal
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextProject();
      if (e.key === "ArrowLeft") prevProject();
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // ouverture modal avec petite anim (fade + scale)
  const openModal = () => {
    setOpen(true);
    // déclenche la transition après le render
    requestAnimationFrame(() => setAnimateModal(true));
  };
  const closeModal = () => {
    setAnimateModal(false);
    setTimeout(() => setOpen(false), 200); // laisse le temps à l'anim de se jouer (~150ms)
  };

  // animation slide pour la carte (traduction + fade)
  const slideClass =
    direction === "right"
      ? "animate-[slideInRight_280ms_ease-out]"
      : "animate-[slideInLeft_280ms_ease-out]";

  return (
    <section id="projects" className="py-12 px-6 md:px-20 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-10">{t("projects.title")}</h2>

      <div className="relative w-full max-w-4xl">
        {/* CARTE visible (une seule), avec anim de slide */}
        <div className={`will-change-transform ${slideClass}`}>
          <ProjectCard project={project} onClick={openModal} />
        </div>

        {/* Flèches visibles */}
        <button
          onClick={prevProject}
          aria-label={t("projects.ui.previous")}
          className="hidden md:flex items-center justify-center
                     absolute left-[-5rem] top-1/2 -translate-y-1/2
                     h-12 w-12 rounded-full bg-white/95 backdrop-blur border border-gray-200
                     shadow-lg hover:shadow-xl hover:scale-105 active:scale-95
                     text-gray-900 text-2xl transition"
        >
          ‹
        </button>
        <button
          onClick={nextProject}
          aria-label={t("projects.ui.next")}
          className="hidden md:flex items-center justify-center
                     absolute right-[-5rem] top-1/2 -translate-y-1/2
                     h-12 w-12 rounded-full bg-white/95 backdrop-blur border border-gray-200
                     shadow-lg hover:shadow-xl hover:scale-105 active:scale-95
                     text-gray-900 text-2xl transition"
        >
          ›
        </button>

        {/* index */}
        <p className="text-center text-sm text-gray-500 mt-4">
          {current + 1} / {projects.length}
        </p>
      </div>

      {/* MODAL + anim fade/scale */}
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
            className={`relative w-full max-w-5xl max-h-[90vh] rounded-2xl bg-white shadow-xl overflow-hidden flex flex-col
                        transform transition-transform duration-150
                        ${animateModal ? "scale-100" : "scale-95"}`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 flex-shrink-0">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <button
                onClick={closeModal}
                aria-label={t("projects.ui.close")}
                className="rounded-full p-2 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            {/* Carousel simple dans le modal */}
            <div className="flex-shrink-0">
              <ModalCarousel images={project.images} t={t} />
            </div>

            {/* Body avec défilement */}
            <div className="px-6 py-5 flex-1 overflow-y-auto">
              <div className="text-gray-700 text-base leading-relaxed text-justify space-y-4 mb-6">
                {project.description.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              
              {/* Boutons d'action */}
              <div className="flex gap-4 justify-center">
                {project.site && (
                  <button
                    onClick={() => window.open(project.site!, '_blank', 'noopener,noreferrer')}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {t("projects.ui.visit_site")}
                  </button>
                )}
                {project.repo && (
                  <button
                    onClick={() => window.open(project.repo!, '_blank', 'noopener,noreferrer')}
                    className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    {t("projects.ui.view_repo")}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* keyframes Tailwind ad hoc */}
      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}

/** Petit carrousel interne au modal (défilement léger) */
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
