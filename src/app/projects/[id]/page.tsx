import {notFound} from 'next/navigation'
import {Badge} from "@/components/ui/badge"
import {ArrowLeft, ExternalLink, Github} from 'lucide-react'
import Link from 'next/link'
import {findProjectDataById} from '@/data/projects'
import {Button} from "@/components/ui/button";


const isValidUrl = (url: string): boolean => {
  try {
    return Boolean(new URL(url));
  } catch (e) {
    return false;
  }
};

export default function ProjectPage({params}: { params: { id: string } }) {
  const project = findProjectDataById(params.id)

  console.log(project)

  if (!project) {
    notFound()
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
        Back to Projects
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
          <p className="text-gray-600 dark:text-gray-300">Contributors:</p>
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
              View on GitHub
            </a>
          </Button>
        )}
        {liveLink && (
          <Button asChild variant="outline">
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4"/>
              Live Demo
            </a>
          </Button>
        )}
        {apiLiveLink && (
          <Button asChild variant="outline">
            <a href={apiLiveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4"/>
              Frontend API
            </a>
          </Button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-gray-700 dark:text-gray-200">{project.longDescription}</p>
        </div>
        {project.features && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
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
          <div>
            <h2 className="text-2xl font-semibold mb-4">Context</h2>
            <p className="text-gray-700 dark:text-gray-200">{project.context}</p>
          </div>
        )}
        {project.idea && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Genèse de l'idée</h2>
            <p className="text-gray-700 dark:text-gray-200">{project.idea}</p>
          </div>
        )}
      </div>
      <div
        className={`grid grid-cols-1 ${project.mission && project.fonctionnalites && project.usage ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-8 mb-8`}>
        {project.mission && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Mission</h2>
            <ul className="gap-2 flex flex-col text-justify">
              {project.mission.map((mission, index) => (
                <li key={index}>{mission}</li>
              ))}
            </ul>
          </div>
        )}
        {project.fonctionnalites && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Fonctionnalités Principales</h2>
            <ul className="gap-2 flex flex-col text-justify">
              {project.fonctionnalites.map((fonctionnalite, index) => (
                <li key={index}>{fonctionnalite}</li>
              ))}
            </ul>
          </div>
        )}
        {project.usage && (
          <div className="grid grid-cols-1 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Simplicité d'utilisation et efficacité</h2>
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
          <h2 className="text-2xl font-semibold mb-4">Gameplay</h2>
          <ul className="gap-2 flex flex-col text-justify">
            {project.gameplay.map((game, index) => (
              <li key={index}>{game}</li>
            ))}
          </ul>
        </div>
      )}
      {project.experience && (
        <div className="grid grid-cols-1 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Expérience Utilisateur</h2>
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
          <h2 className="text-2xl font-semibold mb-4">Les Enseignements Tirés de cette Expérience</h2>
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
    </div>
  )
}

