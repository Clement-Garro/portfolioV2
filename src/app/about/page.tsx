import {FlipWords} from "@/components/ui/flip-words";
import {ShootingStars} from "@/components/ui/shooting-stars";
import {StarsBackground} from "@/components/ui/stars-background";
import {RandomizedTextEffect} from "@/components/ui/text-randomized";

function getAges() {
  const birthday = new Date("2004-09-29");
  const diff = Date.now() - birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export default function About() {

  const words = ["rigueur", "curiosité", "créativité", "détermination", "persévérance"];

  return (
    <main
      className="rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full gap-16 gap-y-32 py-32">

      <h1 className={"text-white font-bold text-5xl flex"}>
        <RandomizedTextEffect text={"Bonjour, Je suis Clément 👋"}/>
      </h1>


      <p
        className={"sm:p-10 p-4 text-xl relative md:flex-row z-10 md:text-2xl md:leading-tight max-w-5xl mx-auto text-justify tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 via-white to-white items-center gap-2 md:gap-8"}>Étudiant
        en informatique, <strong>passionné</strong> par la technologie, la culture japonaise,
        les
        jeux vidéo, le
        sport, la cuisine et la musique. J'ai <strong>{getAges()} ans</strong> depuis le 29 septembre 2024 et je
        suis
        actuellement en BUT
        Informatique à l'IUT de Montpellier-Sète. Mes passions me permettent de <strong>m'épanouir pleinement et
          de
          cultiver
          une curiosité sans cesse renouvelée</strong> dans ma vie quotidienne. Mais surtout dans <strong>la
          conception et la réalisation</strong>
        de tous mes projets personnels et professionnels.
      </p>

      <h2
        className="sm:p-10 p-4 relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">Traits
        de
        personnalité</h2>

      <p
        className={"sm:p-10 p-4 text-xl relative md:flex-row z-10 md:text-2xl md:leading-tight max-w-5xl mx-auto tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 via-white to-white items-center gap-2 md:gap-8 text-justify"}>
        Ma <strong><FlipWords words={words} className={"!text-neutral-200"}/></strong>, permettent de mener mes
        projets
        avec une
        approche <strong>logique</strong> et <strong>motivée</strong>, tout
        en restant <strong>dynamique</strong> et <strong>autonome</strong>. Mon bon <strong>relationnel</strong> et
        mon bon <strong>esprit
        d'équipe</strong> me permettent de
        collaborer
        efficacement avec les autres, me pousse à atteindre mes objectifs.
      </p>

      <h2
        className="sm:p-10 p-4 relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
        Qu’est-ce que j’aime ?
      </h2>

      <p
        className={"sm:p-10 p-4 text-xl relative md:flex-row z-10 md:text-2xl md:leading-tight max-w-5xl mx-auto tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 via-white to-white items-center gap-2 md:gap-8 text-justify"}>
        Mon enthousiasme pour la technologie m'a naturellement conduit à explorer l'informatique, que ce soit pour
        <strong>monter mes propres ordinateurs</strong> ou pour <strong>maîtriser plusieurs langages de
        programmation</strong>. En
        parallèle, ma
        fascination pour la <strong>culture japonaise, les jeux vidéo et le sport</strong> enrichit mon quotidien et me
        permet de
        cultiver une curiosité sans cesse renouvelée. De plus, ma passion pour <strong>la cuisine</strong> me pousse à
        expérimenter de
        nouvelles recettes et à découvrir les saveurs du monde, ajoutant ainsi une dimension créative à ma
        vie.<br/><br/>

        Je pratique le <strong>volley-ball</strong> depuis mon entrée au collège, ce qui me permet de développer des
        compétences
        essentielles telles que <strong>la communication, la coordination et la concentration</strong>. En pratiquant ce
        sport,
        j'apprends <strong>l'importance du travail d'équipe et de la persévérance</strong>, des valeurs qui se reflètent
        également dans
        ma vie professionnelle et personnelle. Cela m'offre un environnement stimulant où je peux me surpasser et
        relever de nouveaux défis, ce qui contribue à mon développement personnel et à mon épanouissement. Depuis peu,
        je me suis passionné par le snowboard, deux sports qui me permettent de me dépasser et de me ressourcer.
      </p>


      <h2
        className="sm:p-10 p-4 relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
        Quelles sont mes capacités ?
      </h2>

      <p
        className={"sm:p-10 p-4 text-xl relative md:flex-row z-10 md:text-2xl md:leading-tight max-w-5xl mx-auto tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 via-white to-white items-center gap-2 md:gap-8 text-justify"}>
        Mes projets personnels et mes études en informatique m'ont permis d'<strong>acquérir différents points de vue et
        une
        vision globale</strong> lors de mes travaux, notamment dans le domaine de la programmation. Lorsque je code,
        j'adopte une
        approche méticuleuse en explorant toutes les possibilités et en envisageant divers scénarios avant de
        m'entreprendre dans une nouvelle idée. Cela me permet d'<strong>anticiper les défis potentiels et d'élaborer des
        solutions efficaces</strong>.<br/><br/>

        De plus, ma pratique du volley-ball m'a doté d'un <strong>esprit combatif</strong> et
        d'une <strong>créativité</strong>
        qui alimentent ma passion
        pour l'apprentissage continu. Cette expérience m'a également permis de développer des <strong>compétences
        essentielles pour travailler en équipe</strong> et pour exercer un <strong>leadership efficace</strong>. J'ai
        ainsi développé une
        capacité à travailler
        dans une équipe soudée, à encourager la collaboration et à résoudre les problèmes de manière
        collective.<br/><br/>

        Ma passion pour les jeux vidéo m'a enseigné à être <strong>réactif et dynamique</strong>, des qualités qui se
        révèlent précieuses
        dans mon travail et ma vie quotidienne.
      </p>

      <h2
        className="sm:p-10 p-4 relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
        Objectif actuel</h2>
      <p
        className={"sm:p-10 p-4 text-xl relative md:flex-row z-10 md:text-2xl md:leading-tight max-w-5xl mx-auto tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 via-white to-white items-center gap-2 md:gap-8 text-justify"}>
        Mon objectif actuel est de réussir mon alternance en proposant des solutions correctes et de devenir ingénieur
        en logiciels ou web.</p>

      <h2
        className="sm:p-10 p-4 relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
        Objectif futur</h2>
      <p
        className={"sm:p-10 p-4 text-xl relative md:flex-row z-10 md:text-2xl md:leading-tight max-w-5xl mx-auto tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 via-white to-white items-center gap-2 md:gap-8 text-justify"}>

        Je souhaite poursuivre des études d'ingénierie pour devenir ingénieur logiciel. Mon objectif est de maîtriser
        les compétences nécessaires pour concevoir des solutions informatiques innovantes et contribuer au progrès
        technologique. J'aspire à intégrer une école d'ingénieurs pour développer mes connaissances en programmation et
        acquérir une compréhension approfondie des concepts informatiques fondamentaux. Mon futur est orienté vers une
        carrière où je pourrai mettre en pratique ma passion pour le développement de logiciels.

      </p>

      <ShootingStars className={"h-full"}/>
      <StarsBackground/>
    </main>
  )
}