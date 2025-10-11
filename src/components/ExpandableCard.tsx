import React from "react";
import { useTranslation } from "react-i18next";

type ExpandableCardProps = {
  children: React.ReactNode;
  initiallyExpanded?: boolean;
  className?: string;
};

export default function ExpandableCard({
  children,
  initiallyExpanded = false,
  className = ""
}: ExpandableCardProps) {
  const { t } = useTranslation();
  const [expanded, setExpanded] = React.useState(initiallyExpanded);

  return (
    <div className={`relative p-8 rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-sm shadow-sm ${className}`}>
      {/* Contenu contraint quand replié */}
      <div className={`transition-all duration-300 ${expanded ? "" : "max-h-40 overflow-hidden"}`}>
        {children}
      </div>

      {/* Dégradé visuel quand replié */}
      {!expanded && (
        <div className="pointer-events-none absolute inset-x-0 bottom-16 h-16 bg-gradient-to-t from-white/80 to-transparent rounded-b-3xl" />
      )}

      {/* Bouton Lire plus / Read more */}
      <div className="mt-4 flex justify-end">
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className="text-sm font-medium underline underline-offset-4 hover:opacity-80"
        >
          {expanded ? t("ui.read_less") : t("ui.read_more")}
        </button>
      </div>
    </div>
  );
}
