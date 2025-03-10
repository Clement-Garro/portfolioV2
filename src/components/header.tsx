'use client'

import Link from 'next/link'
import {Breadcrumbs} from "@/components/breadcrumbs";
import {buttonVariants} from "@/components/ui/button";

const Header = () => {

  return (
    <header
      className={`flex gap-2 border-b sm:p-4 sm:px-24 sticky top-0 w-screen backdrop-blur-3xl bg-white/80 z-20 p-4 px-0 justify-between `}>
      <div className={"hidden sm:flex items-center"}>
        <Breadcrumbs/>
      </div>
      <div className="flex flex-row justify-between sm:justify-normal w-full sm:w-fit">
        <Link className={buttonVariants({variant: "link"})} href={"/"}>Home</Link>
        {window.innerWidth >= 768 &&
            <Link className={buttonVariants({variant: "link"})} href={"/apprentissage"}>Learning</Link>}
        <Link className={buttonVariants({variant: "link"})} href={"/about"}>About</Link>
        <Link className={buttonVariants({variant: "link"})} href={"/projects"}>Projects</Link>
        <Link className={buttonVariants({variant: "link"})} href={"/cv.pdf"} target={"_blank"}>CV</Link>
        <Link className={buttonVariants({variant: "link"})} href={"/contact"}>Contact</Link>
      </div>

    </header>
  );
}

export default Header;