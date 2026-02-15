'use client'

import Link from 'next/link'
import {Breadcrumbs} from "@/components/breadcrumbs";
import {buttonVariants} from "@/components/ui/button";
import {LanguageSwitcher} from "@/components/LanguageSwitcher";
import {useLanguage} from "@/lib/i18n/LanguageContext";
import {useEffect, useState} from "react";

const Header = () => {
  const {t} = useLanguage();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <header
      className={`flex gap-2 border-b sm:p-4 sm:px-24 sticky top-0 w-screen backdrop-blur-3xl bg-white/80 z-20 p-4 px-0 justify-between `}>
      <div className={"hidden sm:flex items-center"}>
        <Breadcrumbs/>
      </div>
      <div className="flex flex-row justify-between sm:justify-normal w-full sm:w-fit items-center">
        <Link className={buttonVariants({variant: "link"})} href={"/"}>{t.nav.home}</Link>
        <Link className={buttonVariants({variant: "link"})} href={"/about"}>{t.nav.about}</Link>
        <Link className={buttonVariants({variant: "link"})} href={"/projects"}>{t.nav.projects}</Link>
        <Link className={buttonVariants({variant: "link"})} href={"/cv.pdf"} target={"_blank"}>{t.nav.cv}</Link>
        <Link className={buttonVariants({variant: "link"})} href={"/contact"}>{t.nav.contact}</Link>
        <LanguageSwitcher/>
      </div>

    </header>
  );
}

export default Header;