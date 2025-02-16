import {Metadata} from 'next'
import Projects from '@/components/projects'

export const metadata: Metadata = {
  title: 'Project | Clement Garro - Fullstack Java Developer',
  description: 'Explore the projects of Clément Garro, a Fullstack Java Developer',
}

export default function ProjectsPage() {
  return (
    <main
      className="flex min-h-screen flex-col items-center sm:p-24 p-4 h-min w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
      <Projects/>
    </main>
  )
}

