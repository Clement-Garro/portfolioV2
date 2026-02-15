type Locale = "en" | "fr";

interface TechnoItem {
  id: number;
  name: string;
  designation: string;
  image: string;
}

interface CardData {
  codeTitle: string;
  codeContent: string;
  techno: TechnoItem[];
}

const technoItems = {
  languages: [
    { id: 1, name: "Java", designation: "", image: "/img/icons/java.svg" },
    { id: 2, name: "JavaScript", designation: "", image: "/img/icons/javascript.svg" },
    { id: 3, name: "TypeScript", designation: "", image: "/img/icons/typescript.svg" },
    { id: 4, name: "C", designation: "", image: "/img/icons/C.svg" },
    { id: 5, name: "PHP", designation: "", image: "/img/icons/php.svg" },
    { id: 6, name: "Python", designation: "", image: "/img/icons/python.svg" },
  ],
  frontend: [
    { id: 4, name: "React", designation: "", image: "/img/icons/react.svg" },
    { id: 5, name: "Tailwind CSS", designation: "", image: "/img/icons/tailwindcss.svg" },
    { id: 6, name: "Symfony", designation: "", image: "/img/icons/symfony.svg" },
    { id: 7, name: "Primefaces", designation: "", image: "/img/icons/primefaces.svg" },
  ],
  databases: [
    { id: 8, name: "SQL", designation: "", image: "/img/icons/sql.svg" },
    { id: 9, name: "PostgreSQL", designation: "", image: "/img/icons/postgreSQL.svg" },
    { id: 10, name: "MySQL", designation: "", image: "/img/icons/mySQL.svg" },
    { id: 11, name: "MongoDB", designation: "", image: "/img/icons/mongodb.svg" },
  ],
  tools: [
    { id: 12, name: "Git", designation: "", image: "/img/icons/git.svg" },
    { id: 13, name: "Docker", designation: "", image: "/img/icons/docker.svg" },
    { id: 14, name: "Vite", designation: "", image: "/img/icons/vite.svg" },
    { id: 15, name: "Next.js", designation: "", image: "/img/icons/next.svg" },
    { id: 16, name: "Shadcn", designation: "", image: "/img/icons/shadcn.svg" },
  ],
};

const cardDataEN: CardData[] = [
  {
    codeTitle: "Languages",
    codeContent: "Proficient in Java, JavaScript, TypeScript and C. Experienced with PHP",
    techno: technoItems.languages,
  },
  {
    codeTitle: "Frontend Technologies",
    codeContent: "Proficient in React, TypeScript, modern Tailwindcss for building reactive web applications, PHP with Symfony and Java with Primefaces.",
    techno: technoItems.frontend,
  },
  {
    codeTitle: "Databases",
    codeContent: "Experienced with SQL and NoSQL databases, including PostgreSQL, MySQL and MongoDB.",
    techno: technoItems.databases,
  },
  {
    codeTitle: "Other Frameworks & Tools",
    codeContent: "Familiar with Git, Docker. React, Symfony and Primefaces are my main frameworks and tools.",
    techno: technoItems.tools,
  },
];

const cardDataFR: CardData[] = [
  {
    codeTitle: "Languages",
    codeContent: "Compétent en Java, JavaScript, TypeScript et C. Expérimenté avec PHP",
    techno: technoItems.languages,
  },
  {
    codeTitle: "Frontend Technologies",
    codeContent: "Compétent en React, TypeScript, Tailwindcss moderne pour créer des applications web réactives, PHP avec Symfony et aussi Java avec Primefaces.",
    techno: technoItems.frontend,
  },
  {
    codeTitle: "Databases",
    codeContent: "Expérimenté avec les bases de données SQL et NoSQL, y compris PostgreSQL, MySQL et MongoDB.",
    techno: technoItems.databases,
  },
  {
    codeTitle: "Other Frameworks & Tools",
    codeContent: "Familiarisé avec Git, Docker. React, Symfony et Primefaces sont mes principaux frameworks et outils.",
    techno: technoItems.tools,
  },
];

export const getLocalizedCardData = (locale: Locale): CardData[] => {
  return locale === "fr" ? cardDataFR : cardDataEN;
};

// Export pour rétrocompatibilité
export const cardData = cardDataFR;
