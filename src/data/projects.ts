export const projects = {
  ecommerce: {
    id: "ecommerce",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with Spring Boot backend and React frontend.",
    tags: ["Java", "Js", "React", "Tailwind CSS"],
    github: "https://github.com/johndoe/ecommerce",
    live: "https://ecommerce-demo.johndoe.dev",
    videoSrc: "/grosCaillouQuiTombe.mp4",
  },
  taskApi: {
    id: "task-api",
    title: "Task Management API",
    description: "RESTful API for task management built with Spring Boot and secured with JWT.",
    tags: ["Java"],
    github: "https://github.com/Clement-Garro",
    videoSrc: "/grosCaillouQuiTombe.mp4",
  },
  weather: {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description: "React-based weather dashboard integrating with multiple weather APIs.",
    tags: ["React", "TypeScript"],
    github: "https://github.com/Clement-Garro",
    live: "https://weather.johndoe.dev",
    videoSrc: "/grosCaillouQuiTombe.mp4",
  }
}

export const professionalProjects = {
  facile: {
    id: "cines",
    title: "F.A.C.I.L.E Cines",
    description: "Développement et Migration d'une application de verification pour la validité des documents pour un archivage pèrenne au sein de Cines.",
    tags: ["Java", "Primefaces", "JSF", "Primeflex", "XHTML", "CSS", "Maven", "Docker", "JavaEE"],
    github: "https://github.com/Clement-Garro",
    live: "https://facile.cines.fr",
    videoSrc: "/grosCaillouQuiTombe.mp4",
    date: "Avril 2024 - Aujourd'hui"
  }
}

export const mainProjects = [
  'facile'
]

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  github: string;
  live?: string;
  videoSrc: string;
  features: string[];
}

export const projectsData: {
  professional: Project[], personal: Project[], school: Project[]
} = {
  professional: [
    {
      id: "cines",
      title: "F.A.C.I.L.E Cines",
      description: "Développement et Migration d'une application de verification pour la validité des documents pour un archivage pèrenne au sein de Cines.",
      longDescription: "F.A.C.I.L.E Cines est une application web développée pour le Centre Informatique National de l'Enseignement Supérieur (CINES) dans le cadre de son projet d'archivage pérenne. L'application permet de vérifier la validité des documents numériques avant leur archivage, en s'assurant qu'ils respectent les normes et standards en vigueur. Elle offre une interface conviviale pour les utilisateurs, avec des fonctionnalités avancées de recherche, de filtrage et de visualisation des résultats. L'application est conçue pour être évolutive et maintenable, facilitant son intégration dans l'infrastructure existante du CINES.",
      tags: ["Java", "Js", "primefaces", "primeflex", "css", "maven", "docker", "kubernetes"],
      github: "",
      live: "https://facile.cines.fr",
      videoSrc: "/grosCaillouQuiTombe.mp4",
      features: [
        "Interface utilisateur conviviale et intuitive",
        "Fonctionnalités avancées de recherche et de filtrage",
        "Vérification de la validité des documents numériques",
        "Intégration avec les normes et standards en vigueur",
        "Convertisseur et correcteur de documents pdf",
        "Responsive design pour une utilisation sur tous les appareils",
        "Système de gestion des erreurs pours les tickets",
      ],
    },
  ],
  personal: [
    {
      id: "portfolio",
      title: "Portfolio",
      description: "La où tous mes projets sont regroupés.",
      longDescription: "Portfolio est une application web développée pour présenter mes projets personnels, vous vous y trouvez actuellement. L'application permet de découvrir mes réalisations, mes compétences et mes expériences professionnelles. Elle me permet aussi de tester de nouvelles technologies et de mettre en pratique mes connaissances en développement web. L'application est conçue pour être évolutive et maintenable, facilitant son intégration dans mon parcours professionnel.",
      tags: ["next", "ts", "shadcn", "tailwindcss", "react", "git"],
      github: "https://github.com/Clement-Garro/portfolioV2",
      live: "https://clementgarro.com",
      videoSrc: "/grosCaillouQuiTombe.mp4",
      features: [
        "Présentation de mes projets personnels et professionnels",
        "Détails sur mes compétences et expériences",
        "Intégration avec les réseaux sociaux et les plateformes de développement",
        "Design moderne et responsive pour une expérience utilisateur optimale",
        "Experimentation de nouvelles technologies et outils de développement",
      ],
    },
    {
      id: "bot-vinted",
      title: "Bot Vinted - Discord",
      description: "Un bot Discord pour suivre les annonces Vinted et traquer les bonnes affaires.",
      longDescription: "Bot Vinted est un bot Discord développé pour suivre les annonces Vinted et traquer les bonnes affaires. Il génère des comptes afin de les utiliser pour effectuer des recherches sur Vinted, car l'API n'est pas publique, permettant ainsi aux utilisateurs de trouver rapidement les articles qui les intéressent. Le bot offre plusieurs services, tels qu'un système d'embed pour intégrer les messages dans un webhook Discord, ainsi qu'un système de filtrage avancé pour trier les dernières offres. Ce bot me permettait de trouver rapidement des offres Vinted susceptibles de m'intéresser, afin de les acheter pour les revendre à un meilleur prix.",
      tags: ["python", "api", "discord", "vinted", "webhook", "vite"],
      github: "",
      live: "https://clementgarro.com",
      videoSrc: "/grosCaillouQuiTombe.mp4",
      features: [
        "Présentation de mes projets personnels et professionnels",
        "Détails sur mes compétences et expériences",
        "Intégration avec les réseaux sociaux et les plateformes de développement",
        "Design moderne et responsive pour une expérience utilisateur optimale",
        "Experimentation de nouvelles technologies et outils de développement",
      ],
    },
    {
      id: "proto-trader-bot",
      title: "Proto Trader Bot",
      description: "Un bot telegram permettant d'automatiser un trade crypto.",
      longDescription: "Proto Trader Bot est un bot Telegram qui permet d'automatiser les trades de crypto-monnaies. Ce bot possède une interface permettant de suivre l'avancée des trades que l'on a mis en place, ainsi qu'un tableau de contrôle pour pouvoir acheter ou vendre la crypto-monnaie ou le token que l'on souhaite. De plus, ce bot permet d'automatiser l'achat de crypto-monnaies en définissant le montant que l'on veut investir par trade pour chaque \"baleine\" que l'on a configurée. Autrement dit, le bot achète automatiquement une quantité de crypto-monnaie que l'une des baleines paramétrées doit acheter. Pour utiliser le bot, il suffit de connecter son portefeuille et de configurer les différents paramètres disponibles, ou sinon de générer son portefeuille crypto en fonction de la chaîne que l'on veut utiliser. Ce bot permet pour l'instant d'utiliser uniquement les chaînes Solana, TRX et Ethereum.",
      tags: ["python", "api", "telegram", "crypto"],
      github: "",
      live: "",
      videoSrc: "/grosCaillouQuiTombe.mp4",
      features: [
        "Automatisation des trades de crypto-monnaies",
        "Interface utilisateur pour suivre les trades en cours",
        "Tableau de contrôle pour acheter ou vendre des crypto-monnaies",
        "Configuration des paramètres de trading et des baleines",
        "Génération de portefeuille crypto pour différentes chaînes",
        "Connexion sécurisée avec le portefeuille pour effectuer les trades",
      ],
    },
    {
      id: "ftx-bot",
      title: "Trading bot pour FTX",
      description: "Bot python pour trader en cryptomonnaie sur la plateforme FTX, avec des stratégies de trading basé sur du backtesting via les données de binance",
      longDescription: "Trading bot pour FTX est un bot python qui permet de trader en cryptomonnaie sur la plateforme FTX. Il utilise des stratégies de trading basées sur du backtesting via les données de binance pour prendre des décisions de trading. Le bot est conçu pour être facile à utiliser et à configurer, avec des paramètres personnalisables pour chaque stratégie de trading. Il offre également des fonctionnalités avancées telles que la gestion des risques, le suivi des performances et la génération de rapports de trading. Le bot est conçu pour être évolutif et maintenable, facilitant son intégration dans l'infrastructure existante de FTX.",
      tags: ["python", "api", "crypto", "ai", "backtesting"],
      github: "",
      live: "",
      videoSrc: "/grosCaillouQuiTombe.mp4",
      features: [],
    },
  ],
  school: [
    {
      id: "gradhire",
      title: "Gradhire",
      description: "Conception d'un site web pour aider les étudiants en informatiques de montpellier à trouver un stage/alternance",
      longDescription: "L'objectif en cours de ce projet est de concevoir une plateforme web dédiée à la recherche de stages et d'alternances, exclusivement destinée aux étudiants du département informatique de Montpellier.   Pour garantir un accès restreint aux seuls étudiants, professeurs, secrétaires et entreprises souhaitant publier leurs offres sur notre site, nous sommes en train de déployer un système d'authentification basé sur LDAP et de hachage de mots de passe. L'élégance du design et la réactivité de l'interface permet à chacun de naviguer facilement et de tirer le meilleur parti de notre plateforme. De plus, le site propose une gestion efficace des données grâce à une base de données performante et un backend PHP robuste. Cela garantie une utilisation fluide et une réponse rapide.",
      tags: ["php", "js", "api"],
      github: "",
      live: "",
      videoSrc: "/grosCaillouQuiTombe.mp4",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
  ],
};

export function findProjectDataById(id: string): Project | undefined {
  const allProjects = [...projectsData.professional, ...projectsData.personal, ...projectsData.school];
  return allProjects.find((project) => project.id === id);
}
