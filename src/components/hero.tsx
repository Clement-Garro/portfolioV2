import {buttonVariants} from "@/components/ui/button";
import {ArrowRight} from 'lucide-react';
import Link from "next/link";
import {BackgroundLines} from "@/components/ui/background-lines";
import {cn} from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 flex justify-center items-center !pt-0">
      <BackgroundLines className={"bg-transparent"}>
        <div className="relative z-10 flex items-center justify-center w-full flex-col px-4 bg-transparent">
          <div className="container px-4 md:px-6 flex justify-center">
            <div
              className="flex flex-col items-center space-y-4 text-center bg-background w-fit p-10 rounded-3xl shadow-2xl">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Clément Garro
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Fullstack Java Developer specializing in application development.
                </p>
              </div>
              <div className="space-x-4">
                <Link className={cn(buttonVariants({variant: "sketch"}), " transition duration-200 cursor-pointer ")}
                      href={"/projects"}>
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4"/>
                </Link>
                <Link className={cn(buttonVariants({variant: "sketch"}), " transition duration-200 cursor-pointer ")}
                      href={"/about"}>
                  About Me
                  <ArrowRight className="ml-2 h-4 w-4"/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </BackgroundLines>
    </section>
  );
}