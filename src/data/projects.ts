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
  apiLive?: string;
  videoSrc: string;
  features: string[];
  contributors: string[];
}

export const projectsData: {
  professional: Project[], personal: Project[], school: Project[], autodidacte: Project[]
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
      videoSrc: "/img/projectImg/cines/cinesHomeNew.webp",
      features: [
        "Interface utilisateur conviviale et intuitive",
        "Fonctionnalités avancées de recherche et de filtrage",
        "Vérification de la validité des documents numériques",
        "Intégration avec les normes et standards en vigueur",
        "Convertisseur et correcteur de documents pdf",
        "Responsive design pour une utilisation sur tous les appareils",
        "Système de gestion des erreurs pours les tickets",
      ],
      contributors: [],
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
      videoSrc: "/img/projectImg/portfolio/home.mp4",
      features: [
        "Présentation de mes projets personnels et professionnels",
        "Détails sur mes compétences et expériences",
        "Intégration avec les réseaux sociaux et les plateformes de développement",
        "Design moderne et responsive pour une expérience utilisateur optimale",
        "Experimentation de nouvelles technologies et outils de développement",
      ],
      contributors: [],
    },
    {
      id: "bot-vinted",
      title: "Bot Vinted - Discord",
      description: "Un bot Discord pour suivre les annonces Vinted et traquer les bonnes affaires.",
      longDescription: "Bot Vinted est un bot Discord développé pour suivre les annonces Vinted et traquer les bonnes affaires. Il génère des comptes afin de les utiliser pour effectuer des recherches sur Vinted, car l'API n'est pas publique, permettant ainsi aux utilisateurs de trouver rapidement les articles qui les intéressent. Le bot offre plusieurs services, tels qu'un système d'embed pour intégrer les messages dans un webhook Discord, ainsi qu'un système de filtrage avancé pour trier les dernières offres. Ce bot me permettait de trouver rapidement des offres Vinted susceptibles de m'intéresser, afin de les acheter pour les revendre à un meilleur prix.",
      tags: ["python", "api", "discord", "vinted", "webhook", "vite"],
      github: "",
      live: "https://clementgarro.com",
      videoSrc: "/img/projectImg/bot/img.png",
      features: [
        "Présentation de mes projets personnels et professionnels",
        "Détails sur mes compétences et expériences",
        "Intégration avec les réseaux sociaux et les plateformes de développement",
        "Design moderne et responsive pour une expérience utilisateur optimale",
        "Experimentation de nouvelles technologies et outils de développement",
      ],
      contributors: [],
    },
    {
      id: "proto-trader-bot",
      title: "Proto Trader Bot",
      description: "Un bot telegram permettant d'automatiser un trade crypto.",
      longDescription: "Proto Trader Bot est un bot Telegram qui permet d'automatiser les trades de crypto-monnaies. Ce bot possède une interface permettant de suivre l'avancée des trades que l'on a mis en place, ainsi qu'un tableau de contrôle pour pouvoir acheter ou vendre la crypto-monnaie ou le token que l'on souhaite. De plus, ce bot permet d'automatiser l'achat de crypto-monnaies en définissant le montant que l'on veut investir par trade pour chaque \"baleine\" que l'on a configurée. Autrement dit, le bot achète automatiquement une quantité de crypto-monnaie que l'une des baleines paramétrées doit acheter. Pour utiliser le bot, il suffit de connecter son portefeuille et de configurer les différents paramètres disponibles, ou sinon de générer son portefeuille crypto en fonction de la chaîne que l'on veut utiliser. Ce bot permet pour l'instant d'utiliser uniquement les chaînes Solana, TRX et Ethereum.",
      tags: ["python", "api", "telegram", "crypto"],
      github: "",
      live: "",
      videoSrc: "/img/projectImg/bot/img.png",
      features: [
        "Automatisation des trades de crypto-monnaies",
        "Interface utilisateur pour suivre les trades en cours",
        "Tableau de contrôle pour acheter ou vendre des crypto-monnaies",
        "Configuration des paramètres de trading et des baleines",
        "Génération de portefeuille crypto pour différentes chaînes",
        "Connexion sécurisée avec le portefeuille pour effectuer les trades",
      ],
      contributors: ["Killian Rammus", "Tom Rivillon"],
    },
    {
      id: "ftx-bot",
      title: "Trading bot pour FTX",
      description: "Bot python pour trader en cryptomonnaie sur la plateforme FTX, avec des stratégies de trading basé sur du backtesting via les données de binance",
      longDescription: "Trading bot pour FTX est un bot python qui permet de trader en cryptomonnaie sur la plateforme FTX. Il utilise des stratégies de trading basées sur du backtesting via les données de binance pour prendre des décisions de trading. Le bot est conçu pour être facile à utiliser et à configurer, avec des paramètres personnalisables pour chaque stratégie de trading. Il offre également des fonctionnalités avancées telles que la gestion des risques, le suivi des performances et la génération de rapports de trading. Le bot est conçu pour être évolutif et maintenable, facilitant son intégration dans l'infrastructure existante de FTX.",
      tags: ["python", "api", "crypto", "ai", "backtesting"],
      github: "",
      live: "",
      videoSrc: "/img/projectImg/bot/img.png",
      features: [
        "Stratégies de trading basées sur du backtesting",
        "Paramètres personnalisables pour chaque stratégie",
        "Gestion des risques et suivi des performances",
        "Génération de rapports de trading",
      ],
      contributors: [],
    },
  ],
  school: [
    {
      id: "annuaire",
      title: "Annuaire + HAPI trail",
      description: "Conception d'un annuaire pour voir les évenements aux quelles on participent, automatiquement relié au site des évenements via son API",
      longDescription: "Annuaire est une application web conçue pour permettre aux utilisateurs de voir les événements auxquels ils participent. L'application est automatiquement reliée au site des événements via son API, ce qui permet aux utilisateurs de consulter les détails des événements, les dates et les lieux, ainsi que les informations sur les participants. L'application est conçue pour être évolutive et maintenable grâce a son API, facilitant son intégration dans l'infrastructure existante du site des événements.",
      tags: ["vite", "react", "ts", "js", "api", "css", "git", "php", "twig", "docker"],
      github: "https://github.com/3Guys1Project/Rendu",
      live: "https://webinfo.iutmontp.univ-montp2.fr/~garroc/annuaire/public/",
      apiLive: "https://webinfo.iutmontp.univ-montp2.fr/~garroc/front/",
      videoSrc: "/img/projectImg/annuaire/homeHapi.png",
      features: [
        "Conception et développement web",
        "Intégration avec l'API du site des événements",
        "Affichage des détails des événements et des participants",
        "Gestion des dates et des lieux des événements",
        "Interface utilisateur conviviale et intuitive",
        "Design moderne et responsive pour une expérience utilisateur optimale",
      ],
      contributors: ["Daniil Hirchyts", "Marius Brouty"],
    },
    {
      id: "gradhire",
      title: "Gradhire",
      description: "Conception d'un site web pour aider les étudiants en informatiques de montpellier à trouver un stage/alternance",
      longDescription: "L'objectif en cours de ce projet est de concevoir une plateforme web dédiée à la recherche de stages et d'alternances, exclusivement destinée aux étudiants du département informatique de Montpellier.   Pour garantir un accès restreint aux seuls étudiants, professeurs, secrétaires et entreprises souhaitant publier leurs offres sur notre site, nous sommes en train de déployer un système d'authentification basé sur LDAP et de hachage de mots de passe. L'élégance du design et la réactivité de l'interface permet à chacun de naviguer facilement et de tirer le meilleur parti de notre plateforme. De plus, le site propose une gestion efficace des données grâce à une base de données performante et un backend PHP robuste. Cela garantie une utilisation fluide et une réponse rapide.",
      tags: ["php", "js", "api", "figma", "postgresql", "ldap", "tailwindcss", "scrum", "git"],
      github: "",
      live: "",
      videoSrc: "/img/projectImg/gradhire/acceuil.webp",
      features: [
        "Mise en œuvre de solutions",
        "Conception de bases de données",
        "Systèmes de gestion de la sécurité",
        "Travail d'équipe",
        "Gestion de projet agile",
        "Développement full-stack",
        "Analyse et évaluation du client et de ces besoins",
      ],
      contributors: ["Daniil Hirchyts", "Giovanni Gozzo", "Marius Brouty"],
    },
    {
      id: "train",
      title: "Jeux vidéo java \"Les aventurier du rail\"",
      description: "Jeu en JavaFX pour jouer à une version Informatique du jeu de société \"Les aventuriers du rail\"",
      longDescription: "Les Aventuriers du Rail est un jeu de société qui se joue sur un plateau de jeu représentant une carte géographique. Le but du jeu est de relier des villes entre elles en construisant des voies ferrées. Le jeu se joue en plusieurs manches, et le joueur qui a le plus de points à la fin de la partie remporte la victoire. Dans cette version informatique du jeu, les joueurs peuvent affronter des adversaires contrôlés par l'ordinateur ou par d'autres joueurs en ligne. Le jeu offre une expérience de jeu immersive avec des graphismes de haute qualité et des animations fluides. Le jeu est conçu pour être facile à apprendre et à jouer, tout en offrant un défi stimulant pour les joueurs de tous niveaux.",
      tags: ["java", "javafx"],
      github: "https://github.com/Clement-Garro/Aventuriers-du-Rail---Autour-du-Monde-2023",
      live: "",
      videoSrc: "/img/projectImg/railihm/start.webp",
      features: [
        "Développement orienté objets",
        "Développement de tests unitaires",
        "Gestion de version avec Git",
        "Conception et réalisation d'interfaces homme-machine",
      ],
      contributors: ["Daniil Hirchyts"],
    },
    {
      id: "escape-game",
      title: "Escape Game \"La Grotte Obscure\"",
      description: "Conception d'un site web pour l'Escape Game \"La Grotte Obscure\"",
      longDescription: "Escape Game \"La Grotte Obscure\" est un site web conçu pour promouvoir un escape game situé dans une grotte mystérieuse. Le site offre aux visiteurs une expérience immersive avec des images, ainsi qu'une narration intrigante pour les plonger dans l'univers du jeu. Les visiteurs peuvent explorer les différentes salles de la grotte. Le site est conçu pour être interactif et engageant, offrant aux visiteurs une expérience unique et mémorable.",
      tags: ["html", "css", "figma"],
      github: "https://github.com/Clement-Garro/SAE-1.5",
      live: "",
      videoSrc: "/img/projectImg/grotte/home.png",
      features: [
        "Conception et structure en HTML",
        "Stylisation et mise en page avec CSS",
        "Travail collaboratif en équipe",
        "Compréhension des besoins du client",
      ],
      contributors: ["Julien Costa-castro", "Daniil Hirchyts"],
    },
    {
      id: "controverse",
      title: "Site web \"La Controverse\"",
      description: "Rédaction d'une controverse répondant à la question : Le numérique favorise-t-il la participation démocratique ? Ainsi que la conception du Site web vitrine pour les articles",
      longDescription: "La Controverse est un site web conçu pour présenter une controverse sur le thème de la participation démocratique dans le contexte numérique. Les articles sont rédigés par des étudiants de l'Université de Montpellier, qui proposent des points de vue différents sur la question. Le site offre aux visiteurs une expérience interactive avec des articles pour les aider à se forger leur propre opinion. Le site est conçu pour être informatif, engageant et accessible à tous les publics.",
      tags: ["html", "css", "figma"],
      github: "https://github.com/Clement-Garro/SAE-1.6",
      live: "",
      videoSrc: "/img/projectImg/controverse/home.png",
      features: [
        "Rédaction d'article web",
        "Élaboration d'architecture de site web",
        "Conception et réalisation d'interfaces homme-machine",
      ],
      contributors: ["Julien Costa-castro", "Daniil Hirchyts"],
    }
  ],
  autodidacte: [
    {
      id: "shadow-of-memory",
      title: "Jeux vidéo \"Shadow of Memory\"",
      description: "Jeu vidéo conçu sur UnrealEngine5 lors de la 8ᵉ édition du Code Game Jam 2024 à Montpellier",
      longDescription: "Shadow of Memory propose un gameplay simple mais captivant, malgré les contraintes de temps de la jam. Les joueurs explorent un monde mystique en 3D, où ils peuvent interagir avec des personnages non-joueurs et des éléments environnementaux pour avancer dans l'histoire. Bien que nous n'ayons pas pu intégrer toutes nos idées dans le jeu en 24 heures, nous avons réussi à mettre en place un système de déplacement fluide et une mécanique de score qui représente le niveau de légende du personnage principal.\n\nEn visitant des villages dispersés dans une vaste carte 3D, les joueurs peuvent hanter certaines maisons et accomplir des actions héroïques pour augmenter leur score de légende. Pour ajouter une couche de tension et d'excitation, nous avions prévu un système de Quick Time Events (QTE) lors des phases de hantise des maisons. Si les joueurs réussissent ces QTE, ils gagnent du score de légende, mais s'ils échouent, ils en perdent. Cette mécanique encourage les joueurs à rester engagés et attentifs tout en explorant le monde du jeu.\n\nDe plus, les joueurs peuvent également traverser les murs et les maisons en utilisant un pouvoir d'intangibilité. En appuyant sur une touche spécifique, ils peuvent activer cette capacité, ce qui leur permet de passer à travers les obstacles physiques et d'explorer de nouvelles zones autrement inaccessibles. Cette fonctionnalité ajoute une dimension supplémentaire à l'exploration du monde du jeu, permettant aux joueurs de découvrir des secrets cachés et de résoudre des énigmes pour progresser dans l'histoire.",
      tags: ["UE5", "BluePrint", "3D", "game"],
      github: "https://github.com/Clement-Garro/CGJ2024",
      live: "",
      videoSrc: "/img/projectImg/cgj24/img.png",
      features: [
        "Conception de jeu vidéo en 3D",
        "Mécaniques de score et de progression",
        "Système de déplacement fluide et intuitif",
        "Mécanique de Quick Time Events (QTE)",
        "Pouvoir d'intangibilité pour traverser les obstacles",
        "Exploration de monde ouvert avec des secrets cachés",
        "World Building et Level Design",
        "Material Design et 3D Modeling",
      ],
      contributors: ["Killian Rammus"],
    },
    {
      id: "ndi-2023",
      title: "Nuit de L'info 2023",
      description: "Conception d'un site web sur l'importance de la prévention contre le changement climatique pour la Nuit de l'Info 2023.",
      longDescription: "Pendant la Nuit de l'Info 2022, notre équipe a conçu un site web centré sur la prévention climatique. Notre objectif était de sensibiliser le public aux enjeux environnementaux et de promouvoir des actions concrètes. En combinant nos compétences en conception, développement et rédaction, nous avons créé un site interactif comprenant un serious game engageant, un chatbot répondant aux questions des utilisateurs, ainsi qu'une carte illustrant l'impact des entreprises françaises sur le climat. Cette expérience a été une fusion gratifiante de compétences techniques et d'innovation pour un impact environnemental positif.",
      tags: ["vite", "ts", "react", "tailwindcss", "figma", "git"],
      github: "https://github.com/Clement-Garro/NDI",
      live: "",
      videoSrc: "/img/projectImg/ndi2023/Home.webp",
      features: [
        "Conception et développement web",
        "Intégration d'un serious game",
        "Développement d'un chatbot",
        "Représentation visuelle des données avec une carte interactive",
        "Collaboration et travail d'équipe",
      ],
      contributors: ["Daniil Hirchyts", "Giovanni Gozzo", "Norman François", "Soren Starck", "Julien Costa castro", "Marius Brouty", "Loris Czx"],
    },
    {
      id: "fate-of-the-same",
      title: "Fate of the same",
      description: "Jeu vidéo conçu lors de la 7ᵉ édition du Code Game Jam 2023 à l'IUT de Montpellier-Sète.",
      longDescription: "Fate of the same est un jeu vidéo conçu lors de la 7ᵉ édition du Code Game Jam 2023 à l'IUT de Montpellier-Sète. Le jeu propose une expérience immersive et interactive, où les joueurs doivent résoudre des énigmes et des puzzles pour progresser dans l'histoire. Le jeu est conçu pour être stimulant et engageant, avec des graphismes de haute qualité et des animations fluides. Les joueurs peuvent explorer un monde fantastique rempli de mystères et de dangers, où chaque décision compte et influence le déroulement de l'histoire. Fate of the same offre une expérience de jeu unique et mémorable, qui plonge les joueurs dans un univers riche en surprises et en rebondissements.",
      tags: ["unity", "c#", "game"],
      github: "https://github.com/Clement-Garro/Game-jam-2023",
      live: "",
      videoSrc: "/img/projectImg/fts/img.png",
      features: [
        "Conception et développement web",
        "COnception graphique",
        "Rédaction de contenus",
        "Travail d'équipe",
      ],
      contributors: ["Daniil Hirchyts", "Soren Starck", "Giovanni Gozzo", "Julien Costa castro"],
    },
    {
      id: "ndi-2022",
      title: "Nuit de L'info 2022",
      description: "Conception d'un site web sur la prévention des MST lors de la Nuit de l'info 2022",
      longDescription: "Pendant la Nuit de l'Info 2022, notre équipe a conçu un site web centré sur la prévention des MST. Notre objectif était de sensibiliser le public aux risques et aux conséquences des maladies sexuellement transmissibles, ainsi que de promouvoir des actions de prévention. En combinant nos compétences en conception, développement et rédaction, nous avons créé un site interactif comprenant des informations sur les MST, des conseils de prévention et des ressources utiles. Cette expérience a été une fusion gratifiante de compétences techniques et d'innovation pour un impact social positif.",
      tags: ["php", "js", "tailwindcss", "figma", "git"],
      github: "https://github.com/Clement-Garro/Nuit-de-l-info-2022",
      live: "",
      videoSrc: "/img/projectImg/ndi2022/home.mp4",
      features: [
        "Conception et développement web",
        "Conception graphique",
        "Rédaction de contenus",
        "Travail d'équipe",
      ],
      contributors: ["Daniil Hirchyts", "Soren Starck", "Giovanni Gozzo", "Julien Costa castro"],
    }
  ],
}

export function findProjectDataById(id: string): Project | undefined {
  const allProjects = [...projectsData.professional, ...projectsData.personal, ...projectsData.school, ...projectsData.autodidacte];
  return allProjects.find((project) => project.id === id);
}
