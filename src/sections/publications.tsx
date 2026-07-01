import React from "react";
import { useTranslation } from "react-i18next";
import { Github, Download } from "lucide-react";
import PublicationCard, { Publication } from "../components/publication_card";
import ScrollReveal from "../components/ScrollReveal";

export default function Publications() {
  const { t } = useTranslation();

  const publications: Publication[] = [
    {
      title: t("publications.article1.title"),
      description: t("publications.article1.description"),
      pdf: "/publications/article1.pdf",
      repo: "https://github.com/RP-13-p/GraphRAG-Hallucination-Analysis",
      cover: "/publications/cover.png",
    },
  ];

  const [current, setCurrent] = React.useState(0);
  const [direction, setDirection] = React.useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const [animateModal, setAnimateModal] = React.useState(false);
  const publication = publications[current];
  const cover = publication.cover ?? "/projects/placeholder.jpg";

  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null);
  const [swipeOffset, setSwipeOffset] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);

  const minSwipeDistance = 50;

  const nextPublication = () => {
    if (isAnimating) return;
    setDirection("right");
    setIsAnimating(true);
    setCurrent((i) => (i + 1) % publications.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevPublication = () => {
    if (isAnimating) return;
    setDirection("left");
    setIsAnimating(true);
    setCurrent((i) => (i - 1 + publications.length) % publications.length);
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

    if (isLeftSwipe) nextPublication();
    if (isRightSwipe) prevPublication();
  };

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) {
        if (e.key === "ArrowRight") nextPublication();
        if (e.key === "ArrowLeft") prevPublication();
      } else {
        if (e.key === "ArrowRight") nextPublicationInModal();
        if (e.key === "ArrowLeft") prevPublicationInModal();
      }
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isAnimating, open]);

  const openModal = () => {
    setOpen(true);
    requestAnimationFrame(() => setAnimateModal(true));
  };
  const closeModal = () => {
    setAnimateModal(false);
    setTimeout(() => setOpen(false), 200);
  };

  const nextPublicationInModal = () => {
    setDirection("right");
    setCurrent((i) => (i + 1) % publications.length);
  };

  const prevPublicationInModal = () => {
    setDirection("left");
    setCurrent((i) => (i - 1 + publications.length) % publications.length);
  };

  const getTransformStyle = () => {
    if (isDragging) {
      return {
        transform: `translateX(${swipeOffset}px) scale(${1 - Math.abs(swipeOffset) * 0.0005})`,
        transition: 'none'
      };
    }

    if (isAnimating) {
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
    <section id="publications" className="py-8 sm:py-16 px-4 md:px-12 lg:px-20 flex flex-col items-center">
      <ScrollReveal className="w-full flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10">{t("publications.title")}</h2>

        <div className="relative w-full max-w-4xl">
          <div
            className="will-change-transform"
            style={getTransformStyle()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <PublicationCard publication={publication} onClick={openModal} />
          </div>

          {publications.length > 1 && (
            <>
              <button
                onClick={prevPublication}
                disabled={isAnimating}
                aria-label={t("publications.ui.previous")}
                className="hidden lg:flex items-center justify-center
                           absolute left-[-5rem] top-1/2 -translate-y-1/2
                           h-12 w-12 rounded-full bg-white/95 backdrop-blur border border-gray-200
                           shadow-lg hover:shadow-xl hover:scale-105 active:scale-95
                           text-gray-900 text-2xl transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ‹
              </button>
              <button
                onClick={nextPublication}
                disabled={isAnimating}
                aria-label={t("publications.ui.next")}
                className="hidden lg:flex items-center justify-center
                           absolute right-[-5rem] top-1/2 -translate-y-1/2
                           h-12 w-12 rounded-full bg-white/95 backdrop-blur border border-gray-200
                           shadow-lg hover:shadow-xl hover:scale-105 active:scale-95
                           text-gray-900 text-2xl transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ›
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                {current + 1} / {publications.length}
              </p>
            </>
          )}
        </div>
      </ScrollReveal>

      {open && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4
                      bg-black/60 transition-opacity duration-150
                      ${animateModal ? "opacity-100" : "opacity-0"}`}
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          {publications.length > 1 && (
            <button
              onClick={prevPublicationInModal}
              aria-label={t("publications.ui.previous")}
              className="hidden md:flex items-center justify-center
                         absolute left-4 lg:left-8 top-1/2 -translate-y-1/2
                         h-14 w-14 rounded-full bg-white/95 backdrop-blur border border-gray-300
                         shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95
                         text-gray-900 text-3xl font-bold transition-all duration-200 z-10
                         hover:bg-white"
            >
              ‹
            </button>
          )}

          <div
            className={`relative w-full max-w-5xl max-h-[95vh] md:max-h-[90vh] rounded-none md:rounded-2xl bg-white shadow-xl overflow-hidden flex flex-col
                        transform transition-transform duration-150
                        ${animateModal ? "scale-100" : "scale-95"}`}
          >
            <div className="relative flex items-center justify-between px-6 py-4 border-b border-gray-200 flex-shrink-0">
              <div className="flex items-center gap-2 z-10">
                {publication.repo && (
                  <button
                    onClick={() => window.open(publication.repo!, '_blank', 'noopener,noreferrer')}
                    aria-label={t("publications.ui.view_repo")}
                    title={t("publications.ui.view_repo")}
                    className="rounded-full p-2 hover:bg-gray-100 flex-shrink-0"
                  >
                    <Github className="w-5 h-5" />
                  </button>
                )}
              </div>
              <h3 className="absolute left-1/2 -translate-x-1/2 w-full max-w-[70%] text-xl font-semibold text-center">{publication.title}</h3>
              <div className="flex items-center z-10">
                <button
                  onClick={closeModal}
                  aria-label={t("publications.ui.close")}
                  className="rounded-full p-2 hover:bg-gray-100 flex-shrink-0"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="overflow-y-auto">
              <div>
                <button
                  onClick={() => window.open(publication.pdf, '_blank', 'noopener,noreferrer')}
                  aria-label={t("publications.ui.view_article")}
                  title={t("publications.ui.view_article")}
                  className="block w-full bg-gray-50 cursor-pointer"
                >
                  <img
                    src={cover}
                    alt={publication.title}
                    className="w-full h-64 object-contain bg-white hover:opacity-90 transition-opacity"
                    loading="eager"
                    decoding="async"
                  />
                </button>
                <div className="px-6 py-5">
                  <div className="text-gray-700 text-base leading-relaxed text-justify space-y-4 mb-6">
                    {publication.description.split("\n\n").map((p, i) => (
                      <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                    ))}
                  </div>

                  <div className="flex gap-4 justify-center flex-wrap">
                    <a
                      href={publication.pdf}
                      download
                      className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium flex items-center gap-2"
                    >
                      <Download className="w-5 h-5" />{t("publications.ui.download")}
                    </a>
                    {publication.repo && (
                      <button
                        onClick={() => window.open(publication.repo!, '_blank', 'noopener,noreferrer')}
                        className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium flex items-center gap-2"
                      >
                        <Github className="w-5 h-5" />{t("publications.ui.view_repo")}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {publications.length > 1 && (
            <button
              onClick={nextPublicationInModal}
              aria-label={t("publications.ui.next")}
              className="hidden md:flex items-center justify-center
                         absolute right-4 lg:right-8 top-1/2 -translate-y-1/2
                         h-14 w-14 rounded-full bg-white/95 backdrop-blur border border-gray-300
                         shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95
                         text-gray-900 text-3xl font-bold transition-all duration-200 z-10
                         hover:bg-white"
            >
              ›
            </button>
          )}
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
