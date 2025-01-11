import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import Header from "@/components/header";
import {GeistSans} from "geist/font/sans";
import {Footer} from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Clément Garro - Fullstack Java Developer',
  description: 'Portfolio of Clément Garro, a Fullstack Java Developer',
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
