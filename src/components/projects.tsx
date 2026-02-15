"use client";

import {getLocalizedProjects} from '@/data/projects';
import {ThreeDCard} from "@/components/ui/ThreeDCard";
import {useLanguage} from "@/lib/i18n/LanguageContext";

const categoryTranslations: Record<string, { en: string; fr: string }> = {
  professional: { en: "Professional", fr: "Professionnel" },
  personal: { en: "Personal", fr: "Personnel" },
  school: { en: "School", fr: "Scolaire" },
  autodidacte: { en: "Self-taught", fr: "Autodidacte" },
};

export default function Projects() {
  const {locale} = useLanguage();
  const projectsData = getLocalizedProjects(locale);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
      <div className="container px-4 md:px-6">
        {Object.keys(projectsData).map((category) => {
          const projectCount = projectsData[category as keyof typeof projectsData].length;
          const categoryLabel = categoryTranslations[category]?.[locale] || category;

          const gridCols =
            projectCount === 1
              ? "grid-cols-1"
              : "grid-cols-1 md:grid-cols-2"

          return (
            <div key={category}>
              <h2
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center mb-12 capitalize py-20">
                {categoryLabel}
              </h2>
              <div className={`grid ${gridCols} gap-6 justify-center`}>
                {projectsData[category as keyof typeof projectsData].map((project: any, index: number) => (
                  <ThreeDCard
                    key={index}
                    videoSrc={project.videoSrc}
                    title={project.title}
                    description={project.description}
                    linkGit={project.github}
                    tags={project.tags}
                    className={"shadow-2xl"}
                    id={project.id}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}