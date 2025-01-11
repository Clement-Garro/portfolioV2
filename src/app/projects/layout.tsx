import {Metadata} from 'next'
import React from "react";

export const metadata: Metadata = {
    title: 'Projects | John Doe - Fullstack Java Developer',
    description: 'Explore the projects of John Doe, a Fullstack Java Developer specializing in Spring Boot, React, and cloud technologies.',
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

