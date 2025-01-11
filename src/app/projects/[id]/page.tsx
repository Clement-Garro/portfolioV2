import {notFound} from 'next/navigation'
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {ArrowLeft, ExternalLink, Github} from 'lucide-react'
import Link from 'next/link'
import {findProjectDataById} from '@/data/projects'


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

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col">
      <Link href="/projects" className="inline-flex items-center text-blue-500 hover:text-blue-700 mb-4">
        <ArrowLeft className="mr-2 h-4 w-4"/>
        Back to Projects
      </Link>
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag, index) => (
          <Badge key={index} variant={tag.toLowerCase().replace(' ', '') as never}>{tag}</Badge>
        ))}
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
      <div className="flex gap-4">
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
      </div>
    </div>
  )
}

