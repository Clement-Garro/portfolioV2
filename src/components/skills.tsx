import {CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {cardData} from "@/data/techno";
import {AnimatedTooltip} from "@/components/ui/animated-tooltip";
import {CardSpotlight} from "@/components/ui/card-spotlight";
import {cn} from "@/lib/utils";

export default function Skills({className}: { className?: string }) {
  return (
    <section
      className={cn({className}, "w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 items-center flex justify-center rounded-xl")}>
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {cardData.map((card, index) => (
            <CardSpotlight key={index} className="flex justify-between flex-col start-0"
                           dotColor={[[50, 205, 50], [144, 238, 144]]} dotSize={6} radius={200}>
              <CardHeader>
                <CardTitle className="flex items-center z-10">
                  {card.codeTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className={"z-10"}>
                <p>{card.codeContent}</p>
              </CardContent>
              <CardFooter className={"gap-2"}>
                <AnimatedTooltip key={index} items={card.techno}/>
              </CardFooter>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  )
}

