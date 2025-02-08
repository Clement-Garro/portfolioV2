import {Metadata} from 'next'
import Hero from '@/components/hero'
import Skills from '@/components/skills'
import {TimelineFormation} from "@/components/TimelineFormation";

export const metadata: Metadata = {
  title: 'Clément Garro - Fullstack Java Developer',
  description: 'Portfolio of Clément Garro, a Fullstack Java Developer',
}

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-2 sm:p-24 h-min w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative !pt-0">
      <Hero/>
      <Skills/>
      <TimelineFormation className={"mt-16"}/>
    </main>
  )
}