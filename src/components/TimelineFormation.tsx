"use client";

import React from "react";
import Image from "next/image";
import {Timeline} from "@/components/ui/timeline";
import {cn} from "@/lib/utils";
import {useLanguage} from "@/lib/i18n/LanguageContext";

export function TimelineFormation({className}: { className?: string }) {
  const {locale} = useLanguage();

  const dataEN = [
    {
      title: "2025 - 2028",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-lg font-normal mb-8 items-center">
            In progress - Software Engineering degree at IMT Mines Alès, France.
            Currently in my first year of engineering studies, I am deepening my knowledge in software development, software architecture, and project management.
          </p>
        </div>
      ),
    },
    {
      title: "2022 - 2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-lg font-normal mb-8 items-center">
            Completed - BUT Computer Science over 3 years - IUT Montpellier-Sète, France.
            I acquired a lot of knowledge in the field of computer science during this degree.
            Skills acquired: Java, HTML/CSS, Databases, Project Management, Data Processing, Teamwork, Development Quality, Client Requirements Management.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image src="/img/projectImg/annuaire/homeHapi.png" alt="annuaire home" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"/>
            <Image src="/img/projectImg/gradhire/dashboard.webp" alt="gradhire dashboard" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"/>
            <Image src="/img/projectImg/railihm/game.webp" alt="railihm game" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"/>
            <Image src="/img/projectImg/cines/cinesHomeNew.webp" alt="cines home" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"/>
            <Image src="/img/projectImg/ndi2023/Home.webp" alt="ndi2023 home" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"/>
            <Image src="/img/projectImg/controverse/home.png" alt="controverse home" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"/>
          </div>
        </div>
      ),
    },
    {
      title: "2019 - 2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-lg font-normal mb-4 items-center">
            Completed a STI2D Baccalaureate with High Honors and knowledge in Arduinos, databases, HTML/CSS, data processing and more at Lycée Thomas Edison
          </p>
        </div>
      ),
    },
  ];

  const dataFR = [
    {
      title: "2025 - 2028",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-lg font-normal mb-8 items-center">
            En cours - Diplôme d'Ingénieur en Développement Logiciel à l'IMT Mines Alès, France.
            Actuellement en première année d'études d'ingénieur, j'approfondis mes connaissances en développement logiciel, architecture logicielle et gestion de projet.
          </p>
        </div>
      ),
    },
    {
      title: "2022 - 2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-lg font-normal mb-8 items-center">
            Terminé - BUT Informatique en 3 ans - IUT Montpellier-Sète, France.
            J'ai acquis beaucoup de connaissances dans le domaine de l'informatique durant ce cursus.
            Compétences acquises : Java, HTML/CSS, Base de données, Gestion de projet, Traitement des données, Travail d'équipe, Qualité du développement, Gestion des besoins des clients.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image src="/img/projectImg/annuaire/homeHapi.png" alt="annuaire home" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"/>
            <Image src="/img/projectImg/gradhire/dashboard.webp" alt="gradhire dashboard" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"/>
            <Image src="/img/projectImg/railihm/game.webp" alt="railihm game" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"/>
            <Image src="/img/projectImg/cines/cinesHomeNew.webp" alt="cines home" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"/>
            <Image src="/img/projectImg/ndi2023/Home.webp" alt="ndi2023 home" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"/>
            <Image src="/img/projectImg/controverse/home.png" alt="controverse home" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"/>
          </div>
        </div>
      ),
    },
    {
      title: "2019 - 2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-lg font-normal mb-4 items-center">
            Achèvement d'un Baccalauréat STI2D avec Mention Très Bien et des connaissances en Arduinos, bases de données, HTML/CSS, traitement des données et plus au Lycée Thomas Edison
          </p>
        </div>
      ),
    },
  ];

  const data = locale === "fr" ? dataFR : dataEN;
  const title = locale === "fr" ? "Formation" : "Education";

  return (
    <section className={cn(className, "w-full my-12 md:my-24 lg:my-32 bg-gray-100 dark:bg-gray-800 items-center flex justify-center rounded-xl")}>
      <Timeline data={data} title={title}/>
    </section>
  );
}
