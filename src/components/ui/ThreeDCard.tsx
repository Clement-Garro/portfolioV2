"use client";

import React from "react";
import {CardBody, CardContainer, CardItem} from "../ui/3d-card";
import Link from "next/link";
import {Badge} from "@/components/ui/badge";
import {Github} from "lucide-react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

interface ThreeDCardProps {
  videoSrc: string;
  title: string;
  description: string;
  linkGit: string;
  tags: string[];
  className: string;
  id: string;
}

function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function ThreeDCard({videoSrc, title, description, linkGit, tags, className, id}: ThreeDCardProps) {
  const isVideo = videoSrc.includes('.mp4');
  const isImage = videoSrc.includes('.png') || videoSrc.includes('.jpg') || videoSrc.includes('.jpeg') || videoSrc.includes('.webp');
  const videoOrImageExist = videoSrc !== "";

  return (
    <CardContainer className="inter-var h-full">
      <CardBody
        className={cn("bg-gray-50 relative group/card dark:hover:shadow-2xl h-full dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] rounded-xl p-6 border", className)}>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          {description}
        </CardItem>
        {videoOrImageExist && (
          <>
            {isVideo && (
              <CardItem translateZ="100" className="w-full mt-4">
                <video
                  src={videoSrc}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl pointer-events-none"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </CardItem>
            )}
            {isImage && (
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={videoSrc}
                  alt={title}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl pointer-events-none"
                />
              </CardItem>
            )}
          </>
        )}
        <div className="flex flex-wrap mt-4 gap-2">
          {tags.map((tag, index) => (
            <CardItem translateZ={Math.floor(Math.random() * 81) + 30} key={index}>
              <Badge key={index} variant={tag.toLowerCase().replace(' ', '') as never}
                     className={"shadow-xl"}>{tag}</Badge>
            </CardItem>
          ))}
        </div>

        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={30}
            as={Link}
            href={`/projects/${id}`}
            rel={"noopener noreferrer"}
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
            <Button variant="outline" size="sm" className={"shadow-2xl"}>
              View Details
            </Button>
          </CardItem>
          {isValidUrl(linkGit) && (
            <CardItem
              translateZ={30}
              as={Link}
              href={linkGit}
              target="__blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
              <Button variant="outline" size="sm" className={"shadow-2xl"}>
                <Github className="mr-2 h-4 w-4"/>
                GitHub
              </Button>
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
}