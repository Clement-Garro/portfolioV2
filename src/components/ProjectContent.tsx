"use client";

import {Badge} from "@/components/ui/badge"
import {ArrowLeft, ExternalLink, Github} from 'lucide-react'
import Link from 'next/link'
import {findLocalizedProjectById, Project} from '@/data/projects'
import {Button} from "@/components/ui/button";
import {AllCompetences} from "@/data/learning";
import {useLanguage} from "@/lib/i18n/LanguageContext";
import {notFound} from "next/navigation";

const isValidUrl = (url: string): boolean => {
  try {
    return Boolean(new URL(url));
  } catch (e) {
    return false;
  }
};

// Translations for the project detail page
const translations = {
  en: {
    backToProjects: "Back to Projects",
    contributors: "Contributors:",
    projectOverview: "Project Overview",
    keyFeatures: "Key Features",
    context: "Context",
    ideaGenesis: "Idea Genesis",
    mission: "Mission",
    mainFeatures: "Main Features",
    usageSimplicity: "Simplicity of Use and Efficiency",
    gameplay: "Gameplay",
    userExperience: "User Experience",
    learnings: "Lessons Learned from this Experience",
    acRelations: "Relations between personal achievements and the",
    butProgram: "program",
    butInformatique: "of BUT Computer Science",
    level: "Level:",
    projectLink: "Link with the project",
    viewOnGithub: "View on GitHub",
    liveDemo: "Live Demo",
    frontendApi: "Frontend API",
  },
  fr: {
    backToProjects: "Retour aux Projets",
    contributors: "Contributeurs :",
    projectOverview: "Aperçu du Projet",
    keyFeatures: "Fonctionnalités Clés",
    context: "Contexte",
    ideaGenesis: "Genèse de l'idée",
    mission: "Mission",
    mainFeatures: "Fonctionnalités Principales",
    usageSimplicity: "Simplicité d'utilisation et efficacité",
    gameplay: "Gameplay",
    userExperience: "Expérience Utilisateur",
    learnings: "Les Enseignements Tirés de cette Expérience",
    acRelations: "Relations entre les réalisations personnelles et le",
    butProgram: "programme",
    butInformatique: "de BUT Informatique",
    level: "Niveau :",
    projectLink: "Lien avec le projet",
    viewOnGithub: "Voir sur GitHub",
    liveDemo: "Démo Live",
    frontendApi: "Frontend API",
  }
};

export default function ProjectContent({projectId}: { projectId: string }) {
  const {locale} = useLanguage();
  const t = translations[locale];
  const project = findLocalizedProjectById(projectId, locale);

  if (!project) {
    notFound();
  }

  const githubLink = isValidUrl(project.github) ? project.github : null;
  const liveLink = project.live && isValidUrl(project.live) ? project.live : null;
  const apiLiveLink = project.apiLive && isValidUrl(project.apiLive) ? project.apiLive : null;
  const nbContributors = project.contributors.length;
  const textContributors = project.contributors.map((contributor) => contributor).join(', ');

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col text-justify">
      <Link href="/projects" className="inline-flex items-center text-blue-500 hover:text-blue-700 mb-4">
        <ArrowLeft className="mr-2 h-4 w-4"/>
        {t.backToProjects}
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        {project.date && (
          <p className="text-gray-600 dark:text-gray-300">{project.date}</p>
        )}
      </div>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
      {nbContributors > 0 && (
        <div className={"flex flex-row gap-4 pb-4"}>
          <p className="text-gray-600 dark:text-gray-300">{t.contributors}</p>
          <div className="flex gap-2">
            <p className="text-gray-700 dark:text-gray-200">{textContributors}</p>
          </div>
        </div>
      )}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag, index) => (
          <Badge key={index} variant={tag.toLowerCase().replace(' ', '') as never}>{tag}</Badge>
        ))}
      </div>
      <div className="flex gap-4 pb-4">
        {githubLink && (
          <Button asChild>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4"/>
              {t.viewOnGithub}
            </a>
          </Button>
        )}
        {liveLink && (
          <Button asChild variant="outline">
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4"/>
              {t.liveDemo}
            </a>
          </Button>
        )}
        {apiLiveLink && (
          <Button asChild variant="outline">
            <a href={apiLiveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4"/>
              {t.frontendApi}
            </a>
          </Button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">{t.projectOverview}</h2>
          <p className="text-gray-700 dark:text-gray-200">{project.longDescription}</p>
        </div>
        {project.features && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">{t.keyFeatures}</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div
        className={`"grid grid-cols-1 ${project.context && project.idea ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-8 mb-8"`}>
        {project.context && (
          <div className={"mb-8"}>
            <h2 className="text-2xl font-semibold mb-4">{t.context}</h2>
            <p className="text-gray-700 dark:text-gray-200">{project.context}</p>
          </div>
        )}
        {project.idea && (
          <div className={"mb-8"}>
            <h2 className="text-2xl font-semibold mb-4">{t.ideaGenesis}</h2>
            <p className="text-gray-700 dark:text-gray-200">{project.idea}</p>
          </div>
        )}
      </div>
      <div
        className={`grid grid-cols-1 ${project.mission && project.fonctionnalites && project.usage ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-8 mb-8`}>
        {project.mission && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">{t.mission}</h2>
            <ul className="gap-2 flex flex-col text-justify">
              {project.mission.map((mission, index) => (
                <li key={index}>{mission}</li>
              ))}
            </ul>
          </div>
        )}
        {project.fonctionnalites && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">{t.mainFeatures}</h2>
            <ul className="gap-2 flex flex-col text-justify">
              {project.fonctionnalites.map((fonctionnalite, index) => (
                <li key={index}>{fonctionnalite}</li>
              ))}
            </ul>
          </div>
        )}
        {project.usage && (
          <div className="grid grid-cols-1 mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t.usageSimplicity}</h2>
            <ul className="gap-2 flex flex-col text-justify">
              {project.usage.map((use, index) => (
                <li key={index}>{use}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {project.gameplay && (
        <div className="grid grid-cols-1 mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.gameplay}</h2>
          <ul className="gap-2 flex flex-col text-justify">
            {project.gameplay.map((game, index) => (
              <li key={index}>{game}</li>
            ))}
          </ul>
        </div>
      )}
      {project.experience && (
        <div className="grid grid-cols-1 mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.userExperience}</h2>
          <ul className="gap-2 flex flex-col text-justify">
            {project.experience.map((exp, index) => (
              <li key={index}>{exp}</li>
            ))}
          </ul>
        </div>
      )}
      {project.mainVideo && (
        <div className="grid grid-cols-1 mb-8">
          <video
            src={project.mainVideo}
            className="w-full h-auto rounded-lg shadow-2xl depth-effect"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      )}
      {project.ytVideo && (
        <div className="grid grid-cols-1 mb-8">
          <iframe
            src={project.ytVideo}
            className="w-full h-screen rounded-lg shadow-2xl depth-effect"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      {project.learning && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.learnings}</h2>
          <ul className="gap-2 flex flex-col text-justify">
            {project.learning.map((learn, index) => (
              <li key={index}>{learn}</li>
            ))}
          </ul>
        </div>
      )}
      {project.galerie && (
        <div className="flex flex-col gap-20 my-10">
          {project.galerie.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              className="w-full h-auto rounded-lg shadow-2xl depth-effect"
            />
          ))}
        </div>
      )}
      {project.AC && project.AC.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t.acRelations} <span> </span>
            <a href={"/infoAC.pdf"} target="_blank" className="underline">{t.butProgram}</a> {t.butInformatique}
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {AllCompetences.filter(comp => project.AC!.includes(comp.projectName)).map(comp => (
              <div key={comp.projectName}>
                <div className="text-lg font-semibold mb-8"><a href={comp.linkProject}>{comp.projectName}</a></div>
                <div
                  className={`grid ${comp.competences.length === 1 ? 'grid-cols-1' : comp.competences.length === 2 ? 'grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-4`}
                >
                  {comp.competences.map((competence, index) => (
                    <div key={index} className="p-4 border rounded-lg shadow-md bg-amber-50">
                      <p><span className="font-semibold">{competence.AC}</span> : {competence.ACtxt}</p>
                      <p className="font-semibold">{t.level} {competence.lvl}</p>
                      <p className="font-semibold">{t.projectLink}</p>
                      <p>{competence.why}</p>
                      {competence.relatedCE.map((ce, ceIndex) => (
                        <div key={ceIndex} className="mt-4">
                          <p><span className="font-semibold">{ce.CE}</span> : {ce.CEtxt}</p>
                          <p>{ce.why}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

