import React from "react";

export type Publication = {
  title: string;
  description: string;
  pdf: string;
  repo?: string;
  cover?: string;
};

type Props = {
  publication: Publication;
  onClick: () => void;
};

export default function PublicationCard({ publication, onClick }: Props) {
  const cover = publication.cover ?? "/projects/placeholder.jpg";

  return (
    <article
      onClick={onClick}
      className="cursor-pointer rounded-2xl sm:rounded-3xl border border-black bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-transform duration-300 overflow-hidden flex flex-col hover:scale-[1.01] focus:outline-none"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick()}
    >
      <img
        src={cover}
        alt={publication.title}
        className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-contain bg-white"
        loading="eager"
        decoding="async"
      />
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
          {publication.title}
        </h3>
      </div>
    </article>
  );
}
