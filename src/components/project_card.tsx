import React from "react";

export type Project = {
  title: string;
  description: string; 
  images: string[];
  tech: string[];
  demo?: string;
  repo?: string;
  site?: string; 
};

type Props = {
  project: Project;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: Props) {
  const cover = project.images?.[0] ?? "/projects/placeholder.jpg";

  return (
    <article
      onClick={onClick}
      className="cursor-pointer rounded-2xl sm:rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-transform duration-300 overflow-hidden flex flex-col hover:scale-[1.01] focus:outline-none"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick()}
    >
      <img 
        src={cover} 
        alt={project.title} 
        className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-contain bg-white" 
      />
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
          {project.title}
        </h3>
      </div>
    </article>
  );
}