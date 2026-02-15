"use client";

import {FlipWords} from "@/components/ui/flip-words";
import {ShootingStars} from "@/components/ui/shooting-stars";
import {StarsBackground} from "@/components/ui/stars-background";
import {RandomizedTextEffect} from "@/components/ui/text-randomized";
import {useLanguage} from "@/lib/i18n/LanguageContext";

function getAges() {
  const birthday = new Date("2004-09-29");
  const diff = Date.now() - birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export default function About() {
  const {t} = useLanguage();

  return (
    <main
      className="rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full gap-16 gap-y-32 py-32">

      <h1 className={"text-white font-bold text-5xl flex"}>
        <RandomizedTextEffect text={t.about.greeting}/>
      </h1>

      <p
        className={"sm:p-10 p-4 text-xl relative md:flex-row z-10 md:text-2xl md:leading-tight max-w-5xl mx-auto text-justify tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 via-white to-white items-center gap-2 md:gap-8"}>
        {t.about.intro.replace("{age}", String(getAges()))}
      </p>

      <h2
        className="sm:p-10 p-4 relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
        {t.about.personalityTraits}
      </h2>

      <div
        className={"sm:p-10 p-4 text-xl relative md:flex-row z-10 md:text-2xl md:leading-tight max-w-5xl mx-auto tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 via-white to-white items-center gap-2 md:gap-8 text-justify"}>
        <span className="inline">
          {t.about.personalityText.split("{words}")[0]}
          <FlipWords words={t.about.flipWords as unknown as string[]} className={"!text-neutral-200 font-bold inline"}/>
          {t.about.personalityText.split("{words}")[1]}
        </span>
      </div>

      <h2
        className="sm:p-10 p-4 relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
        {t.about.whatILike}
      </h2>

      <p
        className={"sm:p-10 p-4 text-xl relative md:flex-row z-10 md:text-2xl md:leading-tight max-w-5xl mx-auto tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 via-white to-white items-center gap-2 md:gap-8 text-justify"}>
        {t.about.whatILikeText1}
        <br/><br/>
        {t.about.whatILikeText2}
      </p>

      <h2
        className="sm:p-10 p-4 relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
        {t.about.capabilities}
      </h2>

      <p
        className={"sm:p-10 p-4 text-xl relative md:flex-row z-10 md:text-2xl md:leading-tight max-w-5xl mx-auto tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 via-white to-white items-center gap-2 md:gap-8 text-justify"}>
        {t.about.capabilitiesText1}
        <br/><br/>
        {t.about.capabilitiesText2}
        <br/><br/>
        {t.about.capabilitiesText3}
      </p>

      <h2
        className="sm:p-10 p-4 relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
        {t.about.currentGoal}
      </h2>
      <p
        className={"sm:p-10 p-4 text-xl relative md:flex-row z-10 md:text-2xl md:leading-tight max-w-5xl mx-auto tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 via-white to-white items-center gap-2 md:gap-8 text-justify"}>
        {t.about.currentGoalText}
      </p>

      <h2
        className="sm:p-10 p-4 relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
        {t.about.futureGoal}
      </h2>
      <p
        className={"sm:p-10 p-4 text-xl relative md:flex-row z-10 md:text-2xl md:leading-tight max-w-5xl mx-auto tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 via-white to-white items-center gap-2 md:gap-8 text-justify"}>
        {t.about.futureGoalText}
      </p>

      <ShootingStars className={"h-full"}/>
      <StarsBackground/>
    </main>
  )
}