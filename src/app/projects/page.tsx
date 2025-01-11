import {Metadata} from 'next'
import Projects from '@/components/projects'

export const metadata: Metadata = {
  title: 'Projects | John Doe - Fullstack Java Developer',
  description: 'Explore the projects of John Doe, a Fullstack Java Developer specializing in Spring Boot, React, and cloud technologies.',
}

export default function ProjectsPage() {
  return (
    <main
      className="flex min-h-screen flex-col items-center p-24 h-min w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
      <Projects/>
    </main>
  )
}

