import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import {cn} from "@/lib/utils";

export const Footer = () => {
  return (
    <footer className="flex justify-center items-center h-24 w-full bg-white text-white p-32">
      <div className={"flex w-full max-w-screen-xl justify-between text-black"}>
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold mb-4">Links</h2>
          <div className={"flex flex-row gap-2"}>
            <div>
              <Link href={"https://www.linkedin.com/in/clement-garro/"}
                    className={cn(buttonVariants({variant: "link"}), "flex flex-row gap-2 text-xl justify-start w-fit")}
                    target={"_blank"} rel={"noreferrer"}>
                <p>Linkedin</p>
                <img src="/linkedin.svg" alt="LinkedIn" className="h-6 w-6"/>
              </Link>
              <Link href={"https://github.com/Clement-Garro"} target={"_blank"} rel={"noreferrer"}
                    className={cn(buttonVariants({variant: "link"}), "flex flex-row gap-2 text-xl justify-start w-fit")}>
                <p>Github</p>
                <img src="/github.svg" alt={"GitHub"} className="h-6 w-6"/>
              </Link>
              <Link href={"/cv.pdf"} target={"_blank"} rel={"noreferrer"}
                    className={cn(buttonVariants({variant: "link"}), "flex flex-row gap-2 text-xl justify-start w-fit")}>
                <p>CV</p>
                <img src="/cvSvg.svg" alt={"CV"} className="h-6 w-6"/>
              </Link>
            </div>
            <div>
              <Link href={"/projects"} rel={"noreferrer"}
                    className={cn(buttonVariants({variant: "link"}), "flex flex-row gap-2 text-xl justify-start w-fit")}>
                <p>Projects</p>
              </Link>
              <Link href={"/contact"} rel={"noreferrer"}
                    className={cn(buttonVariants({variant: "link"}), "flex flex-row gap-2 text-xl justify-start w-fit")}>
                <p>Contact</p>
              </Link>
              <Link href={"/about"} rel={"noreferrer"}
                    className={cn(buttonVariants({variant: "link"}), "flex flex-row gap-2 text-xl justify-start w-fit")}>
                <p>About</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold mb-4">Un projet ?</h2>
          <Link href={"mailto:garro.clement83@gmail.com"} target={"_blank"} rel={"noreferrer"}
                className={cn(buttonVariants({variant: "link"}), "flex flex-row gap-2 text-xl start-0 justify-start w-fit")}>
            <p className={"text-black font-bold text-xl"}>
              garro.clement83@gmail.com
            </p>
            <img src={"/mail.svg"} alt={"Email"} className="h-6 w-6"/>
          </Link>
          <Link href={"/contact"} rel={"noreferrer"}
                className={cn(buttonVariants({variant: "link"}), "flex flex-row gap-2 text-xl justify-start w-fit")}>
            <p>Contact</p>
          </Link>
        </div>
      </div>
    </footer>
  )
}