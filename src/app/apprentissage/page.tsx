//affiche toutes les apprentissage critique et les compétences acquises
import {AllCompetences} from "@/data/learning";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import Link from "next/link";


export default function Learning() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-2 sm:p-24 h-min w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative !pt-0">
      <div className="relative z-10 flex items-center justify-center w-full flex-col sm:px-4 px-0 bg-transparent py-12">
        <div className="container px-1 sm:px-4 md:px-6 flex justify-center">
          <div
            className="flex flex-col items-center space-y-4 text-center bg-background w-fit p-10 rounded-3xl shadow-2xl">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Bienvenue dans la section d'apprentissage critique
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Ici vous retrouverais toutes les compétences acquises lors de mes projets que je vous invite à consulter
              les projets de type "school"
              dans
              la section <a href="/projects" className="text-blue-500">Projets</a>
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {/*prendre que les apprentissage de 3eme année donc annuaire et API REST*/}
        {AllCompetences.filter(comp => comp.projectName === "Annuaire" || comp.projectName === "API REST").map(comp => (
          <div key={comp.projectName} className="mb-16">
            <div className="text-lg font-semibold mb-8 grid grid-cols-2">
              <h1
                className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl/none">{comp.projectName}</h1>
              <Link className={cn(buttonVariants({variant: "sketch"}), " transition duration-200 cursor-pointer")}
                    href={comp.linkProject}>
                Voir le projet
                <ArrowRight className="ml-2 h-4 w-4"/>
              </Link>
            </div>
            <div
              className={`grid ${comp.competences.length === 1 ? 'grid-cols-1' : comp.competences.length === 2 ? 'grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-4`}
            >
              {comp.competences.map((competence, index) => (
                <div key={index} className="p-4 border rounded-lg shadow-md bg-amber-50">
                  <p><span className="font-semibold">{competence.AC}</span> : {competence.ACtxt}</p>
                  <p className="font-semibold">Niveau: {competence.lvl}</p>
                  <p className="font-semibold">Lien avec le projet</p>
                  <p>{competence.why}</p>
                  {competence.relatedCE.map((ce, ceIndex) => (
                    <div key={ceIndex} className="mt-4">
                      <p><span className="font-semibold">{ce.CE}</span> : {ce.CEtxt}</p>
                      <p>{ce.why}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
