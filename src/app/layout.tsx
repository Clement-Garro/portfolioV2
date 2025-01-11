import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import Header from "@/components/header";
import {GeistSans} from "geist/font/sans";
import {Footer} from "@/components/Footer";

export const metadata: Metadata = {
  title: 'John Doe - Fullstack Java Developer',
  description: 'Portfolio of John Doe, a Fullstack Java Developer specializing in Spring Boot, React, and cloud technologies.',
}
export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"h-full"}>
    <body
      suppressHydrationWarning
      className={`${GeistSans.className} antialiased h-full`}
    >
    <Header/>
    {children}
    <Footer/>
    </body>
    </html>
  );
}
