import {Metadata} from 'next'
import React from "react";

export const metadata: Metadata = {
  title: 'Projects | Clément Garro - Fullstack Java Developer',
  description: 'Explore the projects of Clément Garro, a Fullstack Java Developer',
}

export default function ProjectsLayout({
                                         children,
                                       }: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <main className="flex-1">{children}</main>
    </div>
  )
}

