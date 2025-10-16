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
    <div
        className={`relative p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-black bg-white/70 backdrop-blur-sm shadow-sm transform transition-all duration-500 ease-in-out ${
          expanded ? "scale-[1.02] shadow-md" : "scale-100"
        } ${className}`}
      >
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            expanded ? 'max-h-[2000px]' : 'sm:max-h-48'
          }`}
        >
          {React.Children.map(children, child => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                className: `${child.props.className || ''} ${
                  !expanded ? '[&_.mobile-description]:hidden sm:[&_.mobile-description]:block' : ''
                }`
              });
            }
            return child;
          })}
        </div>
        {!expanded && (
          <div className="hidden sm:block pointer-events-none absolute inset-x-0 bottom-12 sm:bottom-16 h-16 bg-gradient-to-t from-white/80 to-transparent rounded-b-2xl sm:rounded-b-3xl" />
        )}

        <div className="mt-3 sm:mt-4 flex justify-end">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            className="text-xs sm:text-sm font-medium underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            {expanded ? t("ui.read_less") : t("ui.read_more")}
          </button>
        </div>
      </div>

  );
}