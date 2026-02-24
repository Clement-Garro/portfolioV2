"use client";

import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {useLanguage} from "@/lib/i18n/LanguageContext";

export const Footer = () => {
  const {t} = useLanguage();

  return (
    <footer
      className="flex justify-center items-center sm:h-24 w-full bg-white text-white sm:p-32 p-4 ">
      <div className={"flex w-full max-w-screen-xl justify-between text-black flex-col sm:flex-row gap-4 sm:gap-0"}>
        <div className="flex flex-col">
          <h2 className="flex text-2xl font-semibold mb-4">{t.footer.links}</h2>
          <div className={"flex flex-row gap-2"}>
            <div>
              <Link href={"https://www.linkedin.com/in/clement-garro/"}
                    className={cn(buttonVariants({variant: "link"}), "flex flex-row gap-2 text-xl justify-start w-fit")}
                    target={"_blank"} rel={"noreferrer"}>
                <p className="flex">Linkedin</p>
                <img src="/linkedin.svg" alt="LinkedIn" className="flex h-6 w-6"/>
              </Link>
              <Link href={"https://github.com/Clement-Garro"} target={"_blank"} rel={"noreferrer"}
                    className={cn(buttonVariants({variant: "link"}), "flex flex-row gap-2 text-xl justify-start w-fit")}>
                <p className="flex">Github</p>
                <img src="/github.svg" alt={"GitHub"} className="flex h-6 w-6"/>
              </Link>
              <Link href={"/cv.pdf"} target={"_blank"} rel={"noreferrer"}
                    className={cn(buttonVariants({variant: "link"}), "flex flex-row gap-2 text-xl justify-start w-fit")}>
                <p className="flex">{t.nav.cv}</p>
                <img src="/cvSvg.svg" alt={"CV"} className="flex h-6 w-6"/>
              </Link>
            </div>
            <div>
              <Link href={"/projects"} rel={"noreferrer"}
                    className={cn(buttonVariants({variant: "link"}), "flex flex-row gap-2 text-xl justify-start w-fit")}>
                <p className="flex">{t.nav.projects}</p>
              </Link>
              <Link href={"/contact"} rel={"noreferrer"}
                    className={cn(buttonVariants({variant: "link"}), "flex flex-row gap-2 text-xl justify-start w-fit")}>
                <p className="flex">{t.nav.contact}</p>
              </Link>
              <Link href={"/about"} rel={"noreferrer"}
                    className={cn(buttonVariants({variant: "link"}), "flex flex-row gap-2 text-xl justify-start w-fit")}>
                <p className="flex">{t.nav.about}</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="flex text-2xl font-semibold mb-4">{t.footer.haveProject}</h2>
          <Link href={"mailto:garro.clement83@gmail.com"} target={"_blank"} rel={"noreferrer"}
                className={cn(buttonVariants({variant: "link"}), "flex flex-row gap-2 text-xl start-0 justify-start w-fit")}>
            <p className={"text-black font-bold text-xl flex"}>
              garro.clement83@gmail.com
            </p>
            <img src={"/mail.svg"} alt={"Email"} className="flex h-6 w-6"/>
          </Link>
          <Link href={"/contact"} rel={"noreferrer"}
                className={cn(buttonVariants({variant: "link"}), "flex flex-row gap-2 text-xl justify-start w-fit")}>
            <p className="flex">{t.nav.contact}</p>
          </Link>
        </div>
      </div>
    </footer>
  )
}