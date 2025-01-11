'use client'

import Link from 'next/link'
import {Breadcrumbs} from "@/components/breadcrumbs";
import {buttonVariants} from "@/components/ui/button";

const Header = () => {

  return (
    <header
      className={`flex gap-2 border-b p-4 pl-24 pr-24 sticky top-0 w-screen justify-between backdrop-blur-3xl bg-white/80 z-20`}>
      <div className={"flex items-center"}>
        <Breadcrumbs/>
      </div>
      <div>
        <Link className={buttonVariants({variant: "link"})} href={"/about"}>About</Link>
        <Link className={buttonVariants({variant: "link"})} href={"/projects"}>Projects</Link>
        <Link className={buttonVariants({variant: "link"})} href={"/cv.pdf"} target={"_blank"}>CV</Link>
        <Link className={buttonVariants({variant: "link"})} href={"/contact"}>Contact</Link>
      </div>

    </header>
  );
}

export default Header;