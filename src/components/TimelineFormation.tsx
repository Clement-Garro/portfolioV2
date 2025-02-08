import React from "react";
import Image from "next/image";
import {Timeline} from "@/components/ui/timeline";
import {cn} from "@/lib/utils";

export function TimelineFormation({className}: { className?: string }) {
  const data = [
    {
      title: "2022 - Today",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-lg font-normal mb-8 items-center">
            En cours - BUT Informatique en 3 ans - Montpellier, France
            Actuellement dans la dernière année de mes études, j'ai acquis beaucoup de connaissances dans le domaine de
            l'informatique.
            Compétences acquises : Java, HTML/CSS, Base de données, Gestion de projet, Traitement des données, Travail
            d'équipe, Qualité du développement, Gestion des besoins des clients.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/img/projectImg/annuaire/homeHapi.png"
              alt="annuaire home"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/img/projectImg/gradhire/dashboard.webp"
              alt="gradhire dashboard"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/img/projectImg/railihm/game.webp"
              alt="railihm game"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/img/projectImg/cines/cinesHomeNew.webp"
              alt="cines home"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/img/projectImg/ndi2023/Home.webp"
              alt="ndi2023 home"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/img/projectImg/controverse/home.png"
              alt="controverse home"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2019 - 2022",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-lg font-normal mb-4 items-center">
            Achèvement d'un Baccalauréat STI2D avec Mention Très Bien et des connaissances en Arduinos, bases de
            données, HTML/CSS, traitement des données et plus au Lycée Thomas Edison
          </p>
        </div>
      ),
    },
  ];
  return (
    <section
      className={cn(className, "w-full my-12 md:my-24 lg:my-32 bg-gray-100 dark:bg-gray-800 items-center flex justify-center rounded-xl")}>
      <Timeline data={data} title={"Formation"}/>
    </section>
  );
}
