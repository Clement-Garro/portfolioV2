import { projectsEN } from './projects-en';

export const mainProjects = [
  'facile'
]

type Locale = "en" | "fr";

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
  date?: string;
  context?: string;
  mission?: string[];
  mainVideo?: string;
  idea?: string;
  fonctionnalites?: string[];
  usage?: string[];
  learning?: string[];
  strategy?: string[];
  galerie?: string[];
  ytVideo?: string;
  history?: string;
  gameplay?: string[];
  experience?: string[];
  AC?: string[]; //name of the project
}

export const projectsData: {
  professional: Project[], personal: Project[], school: Project[], autodidacte: Project[]
} = {
  professional: [
    {
      id: "esgbu",
      title: "ESGBU - Ministère de l'Enseignement Supérieur",
      description: "Contribution au développement d'une application web nationale de gestion de données utilisée par le Ministère de l'Enseignement Supérieur français.",
      longDescription: "ESGBU est une application web nationale de gestion de données utilisée par le Ministère de l'Enseignement Supérieur français. Dans le cadre de mon alternance en tant qu'ingénieur logiciel au CINES, je contribue au développement continu de cette application, en travaillant sur les composants backend et frontend pour améliorer les fonctionnalités et maintenir le code existant.",
      tags: ["Symfony", "Angular", "MySQL", "MariaDB", "Elasticsearch", "Mercure", "Git"],
      github: "",
      live: "https://esgbu.esr.gouv.fr",
      videoSrc: "/img/projectImg/cines/esgbuHome.png",
      features: [
        "Développement backend avec Symfony, MySQL et Mercure",
        "Développement frontend avec Angular",
        "Recherche avancée avec Elasticsearch",
        "Communication temps réel avec Mercure",
        "Base de données MariaDB",
        "Déploiement sur environnements dev, pré-prod et production",
        "Pratiques CI/CD et DevOps",
      ],
      contributors: [],
      date: "Septembre 2025 - Aujourd'hui",
      context: "Dans le cadre de mon alternance en tant qu'ingénieur logiciel au CINES, je contribue au développement continu d'ESGBU, une application web nationale de gestion de données utilisée par le Ministère de l'Enseignement Supérieur français.",
      mission: [
        "- Contribution au développement backend (Symfony, MySQL, Mercure) et frontend (Angular) pour améliorer les fonctionnalités, maintenir le code et supporter les mises à jour de versions à venir.",
        "- Collaboration avec un autre alternant pour moderniser la stack technique du projet : migration Angular 14→20, Symfony 5.4→6/7, MariaDB, Elasticsearch, Mercure.",
        "- Participation au débogage, mises à jour des dépendances, installations d'environnements et améliorations des flux de communication entre l'API et Elasticsearch.",
        "- Support des déploiements sur les environnements de développement, pré-production et production, en suivant les pratiques CI/CD et DevOps existantes."
      ]
    },
    {
      id: "cines",
      title: "F.A.C.I.L.E Cines",
      description: "Développement, modernisation et migration d'une plateforme d'archivage numérique pour la validation de documents au CINES.",
      longDescription: "F.A.C.I.L.E Cines est une application web développée pour le Centre Informatique National de l'Enseignement Supérieur (CINES) dans le cadre de son projet d'archivage pérenne. L'application permet de vérifier la validité des documents numériques avant leur archivage, en s'assurant qu'ils respectent les normes et standards en vigueur. Elle offre une interface conviviale pour les utilisateurs, avec des fonctionnalités avancées de recherche, de filtrage et de visualisation des résultats. L'application est conçue pour être évolutive et maintenable, facilitant son intégration dans l'infrastructure existante du CINES.",
      tags: ["Java", "JEE", "PrimeFaces", "JSF", "Maven", "Tomcat", "Docker", "Kubernetes", "REST API"],
      github: "",
      live: "https://facile.cines.fr",
      videoSrc: "/img/projectImg/cines/cinesHomeNew.webp",
      features: [
        "Validation et correction de documents PDF",
        "Intégration avec le validateur de format CINES et DROID",
        "Interface utilisateur moderne avec PrimeFaces et AJAX",
        "Système de gestion des erreurs et tickets",
        "Tableaux de bord et pages de correction PDF",
        "Déploiement sur cluster Kubernetes pour haute disponibilité",
        "Sécurité renforcée : hardening Docker, correction CVE, configuration Ingress",
      ],
      contributors: [],
      date: "Juin 2024 - Août 2025",
      context: "Au sein du CINES, j'ai contribué à la modernisation et migration de FACILE, une plateforme d'archivage numérique. Ce projet s'est déroulé en deux phases : un stage de 3 mois suivi d'une alternance d'un an en tant que développeur logiciel.",
      mission: [
        "**Stage (Juin 2024 - Sept 2024) :**",
        "- Modernisation et migration de FACILE vers Java 11 avec mise à jour des configurations serveur (Tomcat, Ghostscript).",
        "- Amélioration de l'interface web et de l'expérience utilisateur : pages de correction PDF, tableaux de bord, système de tickets.",
        "- Développement fullstack : frontend (PrimeFaces, AJAX, HTML/CSS) et backend (Java, Maven, REST API).",
        "- Mise en œuvre des spécifications techniques et fonctionnelles, assurance performance, sécurité et maintenabilité.",
        "",
        "**Alternance (Sept 2024 - Août 2025) :**",
        "- Contribution au développement et à l'optimisation de l'application web FACILE et de son cluster Kubernetes, améliorant la scalabilité et la disponibilité.",
        "- Amélioration des fonctionnalités principales (validation PDF, correction, impression) et intégration avec le validateur de format CINES et DROID.",
        "- Développement fullstack avec JEE, PrimeFaces, JSF, Maven, Tomcat et application des bonnes pratiques de sécurité (hardening Docker, corrections CVE, configuration Ingress).",
        "- Assistance à la gestion de configuration, workflows CI/CD et déploiements automatisés du cluster.",
        "- Acquisition d'expérience en méthodologie projet, contrôle de version, tests et assurance qualité."
      ]
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
      date: "Janvier 2025",
      context: "Ce projet est une refonte de mon ancien portfolio personnel, qui regroupe mes projets professionnels, scolaires et personnels. Il représente une expérience immersive conçue avec passion et alimentée par des technologies diverse et intéressante. Cette plateforme repose sur une combinaison puissante de frameworks et d'outils de développement pour offrir une expérience utilisateur exceptionnelle et professionnalisme ."
    },
    {
      id: "bot-vinted",
      title: "Bot Vinted - Discord",
      description: "Un bot Discord pour suivre les annonces Vinted et traquer les bonnes affaires.",
      longDescription: "Bot Vinted est un bot Discord développé pour suivre les annonces Vinted et traquer les bonnes affaires. Il génère des comptes afin de les utiliser pour effectuer des recherches sur Vinted, car l'API n'est pas publique, permettant ainsi aux utilisateurs de trouver rapidement les articles qui les intéressent. Le bot offre plusieurs services, tels qu'un système d'embed pour intégrer les messages dans un webhook Discord, ainsi qu'un système de filtrage avancé pour trier les dernières offres. Ce bot me permettait de trouver rapidement des offres Vinted susceptibles de m'intéresser, afin de les acheter pour les revendre à un meilleur prix.",
      tags: ["python", "api", "discord", "vinted", "webhook", "vite"],
      github: "",
      live: "",
      videoSrc: "/img/projectImg/bot/vinted/img.jpg",
      features: [
        "Présentation de mes projets personnels et professionnels",
        "Détails sur mes compétences et expériences",
        "Intégration avec les réseaux sociaux et les plateformes de développement",
        "Design moderne et responsive pour une expérience utilisateur optimale",
        "Experimentation de nouvelles technologies et outils de développement",
      ],
      contributors: [],
      date: "Mars 2023",
      context: "Dans un monde où le commerce en ligne est devenu monnaie courante, la recherche d'offres lucratives peut rapidement devenir fastidieuse. Face à cette problématique, je me suis lancé dans la création d'un bot Discord dédié à Vinted, plateforme de vente de vêtements et d'accessoires d'occasion. L'objectif ? Faciliter la recherche d'offres intéressantes et maximiser les opportunités de revente, le tout avec une interface simple et conviviale.",
      idea: "Fatigué de passer des heures à scruter les annonces pour dénicher les perles rares sur Vinted, j'ai décidé de mettre mes compétences en programmation au service de cette problématique. Constatant qu'il existait déjà des bots Vinted, j'ai eu l'idée de créer le mien, mais avec une approche différente : l'intégrer à Discord pour permettre une utilisation aisée grâce à des commandes simples.",
      fonctionnalites: [
        "L'utilisation du bot se fait par le biais de commandes Discord. Pour commencer, les utilisateurs doivent inviter le bot sur leur serveur, puis utiliser la commande /create pour créer des catégories de recherche. Ces catégories comprennent \"Vêtements de marque\", \"Vêtements de luxe\", \"Maillots de foot\" et \"Sneakers\". Le bot parcourt ensuite les dernières offres disponibles, analyse les prix et affiche dans les salons correspondants les articles jugés intéressants.",
        "Une fonctionnalité phare du bot est la possibilité de définir des alertes personnalisées pour des articles spécifiques. En utilisant la commande /add_vinted_alert, les utilisateurs peuvent spécifier la marque, la taille, la catégorie, l'état souhaité et le prix jugé attractif. Le bot se charge alors de surveiller les nouvelles offres répondant à ces critères et alerte les utilisateurs lorsque des opportunités se présentent.",
        "Toutes les actions effectuées sont ensuite automatiquement mises à jour dans un fichier contenant les données nécessaires au fonctionnement du bot."
      ],
      usage: [
        "L'une des priorités lors du développement du bot était de le rendre aussi simple d'utilisation que possible, tout en offrant des fonctionnalités puissantes. Grâce à une interface intuitive basée sur des commandes Discord, les utilisateurs peuvent naviguer facilement et tirer parti des fonctionnalités avancées sans difficulté.",
        "En résumé, le bot Vinted Discord offre une solution efficace pour simplifier la recherche d'offres intéressantes sur la plateforme Vinted. En combinant automatisation, personnalisation et convivialité, il permet aux utilisateurs d'optimiser leurs chances de dénicher les meilleures affaires et de maximiser leurs opportunités de revente."
      ],
      learning: [
        "La création du bot Vinted Discord ne s'est pas limitée à une simple solution logicielle ; elle a également été une formidable occasion d'apprentissage et de croissance personnelle. Parmi les nombreux enseignements tirés de cette expérience, deux aspects se démarquent particulièrement : l'approfondissement de mes compétences en Python et le développement d'une stratégie réfléchie pour l'achat et la revente.",
        "Python est un outil polyvalent et puissant, avec sa syntaxe claire et sa grande polyvalence, s'est révélé être l'outil idéal pour donner vie à mon projet. En plongeant dans le code, j'ai pu explorer de nouvelles fonctionnalités et techniques de programmation. Des concepts tels que la manipulation de fichiers, les requêtes HTTP et la gestion des données ont été approfondis, renforçant ainsi ma compréhension du langage.",
        "Grâce à cette expérience, j'ai également appris à utiliser des bibliothèques Python telles que Discord.py, qui m'ont permis d'interagir efficacement avec l'API Discord et de créer une interface utilisateur fluide et intuitive.",
        "Au-delà de la programmation, la création du bot Vinted m'a confronté à des défis plus conceptuels, notamment la formulation d'une stratégie efficace pour l'achat et la revente de produits en ligne. Analyser les données, évaluer les tendances du marché et anticiper les opportunités sont autant d'éléments clés pour réussir dans ce domaine.",
        "En développant le bot, j'ai dû réfléchir à la manière de filtrer les offres pertinentes, d'identifier les bonnes affaires et de maximiser les profits potentiels. Cette réflexion stratégique m'a permis de mieux comprendre les mécanismes du commerce en ligne et de développer des compétences précieuses en matière d'analyse et de prise de décision.",
        "La création du bot Vinted Discord a été bien plus qu'un simple projet de programmation ; c'était une aventure enrichissante qui m'a permis d'explorer de nouveaux domaines et d'acquérir des compétences précieuses. Grâce à cette expérience, j'ai approfondi ma maîtrise de Python et développé une stratégie réfléchie pour naviguer dans le monde complexe du commerce en ligne. Ces enseignements continueront à guider mes futurs projets et à nourrir ma passion pour l'apprentissage continu et l'innovation."
      ]
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
      date: "Septembre 2024 - Octobre 2024",
      context: "Le Proto Trader Bot est un projet innovant qui vise à simplifier et à automatiser le trading de crypto-monnaies. En pleine expansion, le marché des cryptos offre de nombreuses opportunités d'investissement, mais il peut être difficile de suivre les tendances et de prendre des décisions de trading rapides et efficaces. C'est pourquoi nous avons décidé de créer un bot Telegram qui permettra aux traders de tous niveaux de maximiser leurs performances et de minimiser les risques.",
      idea: "L'idée de ce projet est née de la volonté de simplifier et d'automatiser le trading de crypto-monnaies. En effet, le marché des cryptos est en constante évolution, et il peut être difficile de suivre les tendances et de prendre des décisions de trading rapides et efficaces. Le Proto Trader Bot vise à résoudre ce problème en offrant une solution automatisée et conviviale pour les traders de tous niveaux.",
      fonctionnalites: [
        "Le bot permet de configurer plusieurs chaines de crypto-monnaies, telles que Solana, TRX et Ethereum. Chaque chaine peut être paramétrée individuellement en fonction des préférences de l'utilisateur, notamment le montant à investir par trade, les baleines à suivre, les alertes à activer, etc.",
        "Un système de gestion avancée de son wallets crypto est intégré au bot, permettant de générer des portefeuilles pour chaque chaine de crypto-monnaies. Ces portefeuilles sont sécurisés et cryptés, garantissant la confidentialité et la sécurité des transactions. L'utilisateur peux aussi générer son wallet de son coté est le link au bot pour pouvoir trader.",
        "Le bot offre une gestion complète des fonctionnalités liées aux ordres d'achat (BUY) et de vente (SELL), permettant à l'utilisateur de personnaliser son comportement en fonction de ses besoins. Il est possible de définir des paramètres généraux, comme l'activation ou non de modes spécifiques, et de gérer des restrictions précises, telles que ne pas acheter si la capitalisation du marché (MC) est inférieure à un seuil prédéfini. L'utilisateur peut ajuster des critères comme le prix minimum ou maximum, la liquidité, le slippage, ou encore configurer des alertes pour surveiller l'impact des prix. Pour les ventes, des options avancées comme les ventes automatiques à seuils élevés ou faibles, la gestion des pourcentages vendus, et les tentatives automatiques en cas d'échec sont également disponibles. Ces fonctionnalités permettent une grande flexibilité et une automatisation optimisée des ordres.",
        "Un moniteur est intégré dans le bot qui permet de suivre en temps réel l’état des transactions en cours. Ce panneau affiche toutes les informations essentielles sur les trades suivis, comme le prix actuel, la capitalisation du marché (MC), le pourcentage de gain ou de perte, la valeur initiale et actuelle de la transaction, ainsi que le temps écoulé depuis son lancement. Vous pouvez également visualiser l'impact des prix, les paiements attendus, et configurer des actions automatiques telles que l'achat lors d'une baisse de prix ou la vente automatique en fonction des seuils définis. Le moniteur offre des options comme le réglage du slippage, la vente par pourcentage ou par montant précis, et propose des outils de gestion avancée tels que le suivi des profits et pertes (PnL Card), les seuils dynamiques, et la possibilité de rafraîchir ou de réinitialiser les données à tout moment. Grâce à cette interface claire et intuitive, l’utilisateur garde un contrôle total sur ses trades et peut ajuster les paramètres en un clic pour maximiser ses performances et minimiser les risques.",
        "Pour finir une fonctionnalité de copy trading est disponible sur le bot qui permet de suivre automatiquement les trades d'autres utilisateurs ou baleines avec une personnalisation complète des paramètres, tels que l'activation de l'achat automatique, la définition d'un montant maximum d'achat, le pourcentage d'achat, le slippage global, le prix du gas et les seuils de capitalisation boursière minimale et maximale ainsi que de liquidité, il est également possible de configurer la vente automatique avec des seuils définis pour les hausses ou les baisses, en ajustant les montants ou pourcentages à vendre selon les conditions, les transactions exclues comme les airdrops ou celles ne provenant pas des adresses suivies peuvent être contournées grâce à l'option Blind Follow, offrant ainsi une expérience flexible et adaptée pour maximiser les gains et minimiser les risques tout en profitant de l'expertise des autres traders."
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
      videoSrc: "/img/projectImg/bot/ftx/img.jpg",
      features: [
        "Stratégies de trading basées sur du backtesting",
        "Paramètres personnalisables pour chaque stratégie",
        "Gestion des risques et suivi des performances",
        "Génération de rapports de trading",
      ],
      contributors: [],
      date: "2021 - 2022",
      context: "Ma fascination pour le monde de la cryptomonnaie a pris racine dès le début de ma terminale, attiré par les possibilités lucratives qu'il offrait. Après avoir exploré les opportunités d'investissement qu'il proposait, j'ai décidé de créer un bot de trading de cryptomonnaies personnalisable, capable de suivre des stratégies d'achat et de vente spécifiques sur les cryptomonnaies sélectionnées. Ce bot était conçu pour fonctionner sur la plateforme de trading de cryptomonnaie FTX, bien que celle-ci ait depuis fermé ses portes.",
      strategy: [
        "Pour développer efficacement cette solution, j'ai entrepris des backtests approfondis de différentes stratégies de trading. En utilisant des bibliothèques de Python telles que Pandas et PyTorch, j'ai analysé les données de trading de la plateforme Binance afin de perfectionner les stratégies.",
        "Pour alimenter le bot en données, j'ai utilisé l'API de Binance pour récupérer des données historiques sur les cryptomonnaies choisies, couvrant une période allant de 2010 à la date actuelle. Cette abondance de données a permis d'affiner les stratégies de trading grâce à des techniques avancées telles que le deep learning avec PyTorch, garantissant ainsi une approche plus précise dans la prise de décision."
      ],
      fonctionnalites: [
        "Le bot offrait également des fonctionnalités avancées, notamment la capacité de générer des graphiques et des statistiques sur les bénéfices réalisés lors des backtests. Cette analyse préliminaire des performances du bot était essentielle avant d'entamer des transactions réelles sur la plateforme."
      ],
      learning: [
        " Le développement de ce bot de trading de cryptomonnaies a été une aventure passionnante qui a combiné mes intérêts pour la finance et la technologie. Malgré les défis rencontrés, j'ai trouvé le processus gratifiant et enrichissant. Ce projet m'a permis de développer mes compétences en programmation et en analyse de données tout en explorant le monde dynamique du trading de cryptomonnaies. Je suis reconnaissant d'avoir eu l'opportunité de participer à cette entreprise et je suis fier des résultats que j'ai pu accomplir. Ce bot de trading reste un jalon important dans mon parcours professionnel et une source d'inspiration pour mes projets futurs."
      ]
    },
  ],
  school: [
    {
      id: "autocomplete",
      title: "IA d'autocomplétion en Scala",
      description: "Création d'une intelligence artificielle d'autocomplétion capable de prédire les mots suivants à partir d'un texte donné.",
      longDescription: "Le projet consistait à développer une intelligence artificielle d'autocomplétion en Scala. L'IA s'entraînait sur un dataset textuel pour analyser les relations contextuelles entre les mots. Lorsqu'un utilisateur saisissait un texte, le modèle déterminait dynamiquement le n-gramme approprié en fonction de la longueur de la saisie ou de son contexte, afin d'ajuster son entraînement et améliorer la pertinence des prédictions. Les algorithmes utilisaient des modèles statistiques et probabilistes pour prédire le mot ou la séquence de mots la plus cohérente après la saisie. L'objectif était de garantir des résultats fluides et précis tout en optimisant les performances et la consommation de ressources.",
      tags: ["Scala", "IA", "Traitement du langage naturel (NLP)", "Machine Learning", "SBT", "Git", "Big Data"],
      github: "",
      live: "",
      videoSrc: "/img/projectImg/bot/img.png",
      features: [
        "Entraînement d'un modèle sur des ensembles de données textuelles personnalisées",
        "Détermination dynamique des n-grammes en fonction de la saisie utilisateur",
        "Algorithmes probabilistes pour évaluer la cohérence des prédictions",
        "Utilisation de Scala et SBT pour une gestion efficace des dépendances",
        "Optimisation des performances pour traiter des ensembles de données volumineux",
        "Interface utilisateur simple pour tester les capacités d'autocomplétion",
        "Documentation technique et exemples d'utilisation"
      ],
      contributors: ["Clément Garro", "Giovanni Gozzo"],
      date: "Mars 2025 - Avril 2025",
      context: "Ce projet a été réalisé dans le cadre d'une collaboration en binôme pour explorer les capacités de Scala et du Machine Learning dans le traitement du langage naturel (NLP). L'IA a été conçue pour analyser des textes et prédire des mots de manière fluide, en apprenant à partir des relations contextuelles dans un corpus donné. La détermination dynamique des n-grammes a permis d'ajuster l'entraînement pour des prédictions adaptées à chaque contexte utilisateur. Ce projet a permis de consolider nos compétences en apprentissage automatique, en Scala et en manipulation de données.",
      learning: [
        "Maîtrise des n-grammes et des modèles probabilistes pour le NLP.",
        "Développement et débogage d'algorithmes d'apprentissage automatique en Scala.",
        "Gestion des ensembles de données pour un apprentissage et une prédiction efficaces.",
        "Optimisation des performances pour une exécution rapide des prédictions.",
        "Approfondissement de la logique de traitement dynamique basée sur la saisie utilisateur.",
        "Collaboration et répartition des tâches dans un projet d'équipe."
      ],
    },
    {
      id: "annuaire",
      title: "Annuaire + HAPI trail",
      description: "Conception d'un annuaire pour voir les événements auxquels on participe, automatiquement relié au site des événements via son API",
      longDescription: "Annuaire est une application web conçue pour permettre aux utilisateurs de voir les événements auxquels ils participent. L'application est automatiquement reliée au site des événements via son API, ce qui permet aux utilisateurs de consulter les détails des événements, les dates et les lieux, ainsi que les informations sur les participants. L'application est conçue pour être évolutive et maintenable grâce à son API, facilitant son intégration dans l'infrastructure existante du site des événements. Chaque utilisateur peut créer un profil, gérer ses informations, et personnaliser la visibilité de son profil (visible ou masqué).",
      tags: ["Symfony", "Twig", "API Platform", "JWT", "REST", "Vue.js", "docker", "git", "css", "php", "react", "vite", "ts", "js"],
      github: "https://github.com/3Guys1Project/Rendu",
      live: "https://webinfo.iutmontp.univ-montp2.fr/~garroc/annuaire/public/",
      apiLive: "https://webinfo.iutmontp.univ-montp2.fr/~garroc/front/",
      videoSrc: "/img/projectImg/annuaire/homeHapi.png",
      features: [
        "Inscription et authentification des utilisateurs avec gestion de profils",
        "Gestion des événements via une API REST développée en Symfony",
        "Affichage des détails des événements : nom, dates, lieux, nombre de participants, etc.",
        "Possibilité pour les organisateurs de créer, modifier et supprimer des événements",
        "Gestion de la visibilité des profils (visible/masqué) et des listes publiques des participants",
        "Système d'inscription et de désinscription aux événements avec vérification des conflits d'horaires",
        "Authentification sécurisée via JWT",
        "Interface utilisateur moderne et responsive",
        "Validation en temps réel des données (codes uniques, disponibilités, etc.)",
        "Connexion API avec génération automatique de groupes de validation et sérialisation"
      ],
      contributors: ["Clément Garro", "Daniil Hirchyts", "Marius Brouty"],
      date: "Octobre 2024 - Décembre 2024",
      context: "Projet universitaire réalisé en trinôme pour développer une application d'annuaire en ligne couplée à une API de gestion d'événements.  Ce projet repose sur l'utilisation du Gesdinet JWT Refresh Token Bundle pour une gestion efficace et sécurisée des tokens, en s'appuyant sur une base de données PostgreSQL.",
      mission: [
        "Concevoir une application web d'annuaire en ligne avec Symfony et Twig",
        "Créer une API REST pour gérer les événements et les utilisateurs avec Symfony et API Platform",
        "Assurer la communication entre le site web et l'API pour une synchronisation fluide des données"
      ],
      fonctionnalites: [
        "Création de profils d'utilisateurs avec gestion de visibilité",
        "Affichage des profils listés sur la page principale",
        "Consultation des événements et des inscriptions pour chaque utilisateur",
        "Possibilité de désinscription et gestion des places disponibles",
        "Système de rôles (utilisateurs, organisateurs, administrateurs) pour contrôler les actions disponibles"
      ],
      learning: [
        "J'ai pue approfondi ma maîtrise de Symfony, un framework PHP réputé pour sa flexibilité et ses outils intégrés, en le combinant avec API Platform. API Platform, grâce à ses fonctionnalités avancées (comme la documentation automatique via Swagger ou l’intégration de GraphQL), a permis de structurer une API REST robuste et respectueuse des standards modernes. Ce processus a également impliqué des réflexions approfondies sur les concepts de REST, tels que la structuration des endpoints, l'utilisation des méthodes HTTP appropriées (GET, POST, PUT, DELETE), et la gestion des codes de réponse HTTP pour une meilleure communication entre le client et le serveur.",
        "La sécurisation de l’authentification a été un axe majeur du projet. En implémentant les JSON Web Tokens (JWT), l’équipe a garanti une gestion sécurisée et scalable des sessions utilisateurs. Ce choix a permis d’éviter les failles liées aux approches traditionnelles basées sur les cookies ou les sessions serveur. De plus, le JWT offre des avantages significatifs, notamment la possibilité de stocker des informations codées directement dans le token (claims), ce qui optimise la vérification des droits d’accès. L’équipe a également travaillé sur l’intégration de tokens de rafraîchissement pour offrir une expérience utilisateur fluide tout en maintenant un haut niveau de sécurité.",
        "Un des défis majeurs a été de modéliser et de gérer les relations complexes entre les entités du projet, comme les relations entre utilisateurs, commentaires, et autres données associées. L’équipe a utilisé les annotations Doctrine pour établir ces relations (OneToMany, ManyToOne, ManyToMany, etc.), tout en veillant à respecter les principes REST. Par exemple, l’utilisation d’identifiants dans les relations et la sérialisation a permis de minimiser la taille des réponses et d’améliorer la lisibilité de l’API.",
        "J'ai pue apprendre à tirer parti des groupes de sérialisation offerts par Symfony pour répondre aux besoins spécifiques des clients. Cette approche a permis de personnaliser les données renvoyées par l’API en fonction des contextes (exemple : un utilisateur authentifié voit plus de détails qu’un utilisateur non authentifié). Par ailleurs, la dénormalisation a été utilisée pour optimiser les performances lors de la récupération de données complexes, notamment dans les scénarios où des requêtes imbriquées étaient nécessaires. Ces techniques ont non seulement amélioré les performances, mais ont également rendu l’API plus adaptable aux besoins des consommateurs front-end."
      ],
      AC: ["Annuaire", "API REST"]
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
      date: "Septembre 2023 - Décembre 2023",
      context: "L'objectif en cours de ce projet est de concevoir une plateforme web dédiée à la recherche de stages et d'alternances, exclusivement destinée aux étudiants du département informatique de Montpellier.  Pour garantir un accès restreint aux seuls étudiants, professeurs, secrétaires et entreprises souhaitant publier leurs offres sur notre site, nous sommes en train de déployer un système d'authentification basé sur LDAP et de hachage de mots de passe. L'élégance du design et la réactivité de l'interface permet à chacun de naviguer facilement et de tirer le meilleur parti de notre plateforme. De plus, le site propose une gestion efficace des données grâce à une base de données performante et un backend PHP robuste. Cela garantie une utilisation fluide et une réponse rapide.",
      galerie: ["/img/projectImg/gradhire/acceuil.webp", "/img/projectImg/gradhire/dashboard.webp", "/img/projectImg/gradhire/offres.webp"],
      AC: ["Gradhire"]
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
      date: "Février 2023 - Avril 2023",
      context: "Le projet \"Aventuriers du Rail Autour du Monde\" s'inscrit dans le cadre du développement d'une implémentation en Java du jeu de plateau éponyme. Se concentrant sur le plateau \"Monde\", le projet a été réalisé en plusieurs phases, mettant en œuvre les principes du développement orienté objets et les algorithmes de graphes.",
      galerie: ["/img/projectImg/railihm/start.webp", "/img/projectImg/railihm/selection.webp", "/img/projectImg/railihm/game.webp", "/img/projectImg/railihm/end.webp"],
      AC: ["Aventuriers du Rail"]
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
      date: "Novembre 2022 - Décembre 2022",
      context: "Lors de ce passionnant projet, mon équipe et moi nous sommes engagés dans la création d'un site web pour l'Escape Game \"La Grotte Obscure\", suite à la demande d'un autre groupe d'étudiants de l'IUT. Notre mission consistait à répondre à leurs besoins en leur présentant des idées et des concepts de design pour leur site web. Agissant en tant que prestataires, nous avons transformé leur vision en un site interactif qui capturerait l'essence unique de leur escape game. Cette collaboration intergroupe a été une expérience extrêmement enrichissante, d'autant plus que nous étions également clients d'un autre groupe pour notre propre projet de site web pour notre escape game. À travers cette dynamique, nous avons pu échanger des idées et des besoins, contribuant ainsi à la réalisation de deux projets uniques et passionnants.",
      AC: ["Escape Game"]
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
      date: "Novembre 2022 - Décembre 2022",
      context: "Notre projet est né d'une collaboration palpitante lors de notre première année de cursus en BUT. L'objectif principal était de perfectionner nos compétences en rédaction d'articles tout en nous plongeant dans l'univers de la création de sites web professionnels. Au fil de ce projet, nous avons travaillé main dans la main pour écrire une série d'articles. Chacun de nous a apporté son expertise et ses idées uniques, enrichissant ainsi la diversité et la qualité de notre contenu. Une fois nos écrits achevés, nous avons entrepris la conception du site web qui servirait de vitrine à nos travaux. La mise en place de la navigation, des pages dynamiques et de la section de contact a demandé une collaboration étroite et un travail d'équipe minutieux.",
      mission: ["Mon rôle spécifique dans ce projet a été la conception et l'implémentation de la section de contact du site web. J'ai veillé à ce qu'elle soit à la fois fonctionnelle et esthétique, afin de créer une interface conviviale permettant aux visiteurs de nous contacter aisément tout en préservant le professionnalisme de notre projet."],
      AC: ["Controverse"]
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
      date: "Janvier 2024",
      context: "Durant la CodeGameJam2024, notre équipe s'est lancée dans une aventure audacieuse sur Unreal Engine 5 : la création de Shadow of Memory, un jeu vidéo en 3D à la troisième personne qui transporte les joueurs dans un monde mystérieux où le temps et la mémoire s'entremêlent.",
      ytVideo: "https://youtube.com/embed/OoIJkiQOXEQ",
      history: "Dans Shadow of Memory, les joueurs incarnent un être éthéré dont l'existence est en danger d'être engloutie par l'oubli. Pour survivre, ils doivent reconstruire leur propre légende en explorant des contrées mystiques et en interagissant avec des esprits du passé. Chaque choix du joueur influence le destin de l'éthéré : des actes de compassion le transforment en une légende mémorable, tandis que succomber à l'indifférence entraîne une disparition totale. La dualité entre devenir une figure mythique ou s'évanouir dans l'obscurité de l'oubli est au cœur  de l'aventure. Chaque action teinte le récit dans cette aventure où la frontière entre la lumière et l'ombre, la légende et l'oubli, est aussi fragile que l'essence même du protagoniste éthéré.",
      gameplay: [
        "Shadow of Memory propose un gameplay simple mais captivant, malgré les contraintes de temps de la jam. Les joueurs explorent un monde mystique en 3D, où ils peuvent interagir avec des personnages non-joueurs et des éléments environnementaux pour avancer dans l'histoire. Bien que nous n'ayons pas pu intégrer toutes nos idées dans le jeu en 24 heures, nous avons réussi à mettre en place un système de déplacement fluide et une mécanique de score qui représente le niveau de légende du personnage principal.",
        " En visitant des villages dispersés dans une vaste carte 3D, les joueurs peuvent hanter certaines maisons et accomplir des actions héroïques pour augmenter leur score de légende. Pour ajouter une couche de tension et d'excitation, nous avions prévu un système de Quick Time Events (QTE) lors des phases de hantise des maisons. Si les joueurs réussissent ces QTE, ils gagnent du score de légende, mais s'ils échouent, ils en perdent. Cette mécanique encourage les joueurs à rester engagés et attentifs tout en explorant le monde du jeu.",
        "De plus, les joueurs peuvent également traverser les murs et les maisons en utilisant un pouvoir d'intangibilité. En appuyant sur une touche spécifique, ils peuvent activer cette capacité, ce qui leur permet de passer à travers les obstacles physiques et d'explorer de nouvelles zones autrement inaccessibles. Cette fonctionnalité ajoute une dimension supplémentaire à l'exploration du monde du jeu, permettant aux joueurs de découvrir des secrets cachés et de résoudre des énigmes pour progresser dans l'histoire."
      ],
      experience: [
        "La CodeGameJam2024 a été une expérience passionnante pour moi, car elle a réuni mes deux passions professionnelles et personnelles : les jeux vidéo et la programmation. Travailler sur Shadow of Memory m'a permis de combiner mes compétences techniques en programmation avec ma créativité et ma passion pour les jeux vidéo.",
        "Même si nous avons dû faire face à des défis et des contraintes de temps, j'ai trouvé le processus de développement du jeu extrêmement gratifiant. Collaborer avec une équipe passionnée pour donner vie à notre vision a été une expérience enrichissante et inspirante.",
        "Je suis reconnaissant d'avoir eu l'opportunité de participer à cette jam et je suis fier du résultat que notre équipe a pu accomplir en si peu de temps. Shadow of Memory restera pour moi un souvenir précieux et une source d'inspiration pour les projets futurs.",
      ],
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
      date: "Décembre 2023",
      context: "Pendant la Nuit de l'Info 2022, notre équipe a conçu un site web centré sur la prévention climatique. Notre objectif était de sensibiliser le public aux enjeux environnementaux et de promouvoir des actions concrètes. En combinant nos compétences en conception, développement et rédaction, nous avons créé un site interactif comprenant un serious game engageant, un chatbot répondant aux questions des utilisateurs, ainsi qu'une carte illustrant l'impact des entreprises françaises sur le climat. Cette expérience a été une fusion gratifiante de compétences techniques et d'innovation pour un impact environnemental positif.",
      ytVideo: "https://youtube.com/embed/m89LAw4WJwk",
      galerie: ["/img/projectImg/ndi2023/Home.webp", "/img/projectImg/ndi2023/Chatbot.webp", "/img/projectImg/ndi2023/Map.webp", "/img/projectImg/ndi2023/Apro.webp"],
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
      date: "Janvier 2023",
      context: "Durant la CodeGameJam2023, notre équipe s'est lancée dans un défi ambitieux sur Unity en 2D : la création de Fate of the Same, un jeu d'aventure immersif où les joueurs explorent un monde où le temps et l'identité s'entremêlent. Le jeu est animé avec des sprites dynamiques, notamment pour les attaques et les capacités spéciales, donnant vie à l'action et à l'aventure.",
      history: "Dans Fate of the Same, les joueurs incarnent un héros apparaissant au cœur d'une plateforme céleste, entouré d'étoiles. Leur mission ? Défaire Chronos, le maître du temps. Pour y parvenir, ils doivent utiliser des téléporteurs pour explorer la carte et affronter des défis variés. Des forêts mystérieuses aux déserts arides, chaque zone révèle un fragment de l'histoire de Chronos, jusqu'à un affrontement final surprenant. Le récit prend une tournure inattendue lorsque le joueur découvre que Chronos est en réalité une version future de lui-même, piégée dans une boucle temporelle. La confrontation finale soulève des questions sur l'identité et le destin, révélant une dualité intrigante entre le héros et son antagoniste.",
      gameplay: [
        "Fate of the Same propose un gameplay dynamique centré sur la gestion du temps. Les joueurs doivent affronter des ennemis et résoudre des énigmes tout en surveillant une barre de temps. Chaque élimination de monstre permet de récupérer du pouvoir temporel, tandis qu'une capacité spéciale permet de figer le temps temporairement, au prix d'une consommation de ressources temporelles. Bien que nous n'ayons pas eu le temps d'intégrer toutes nos idées, notre intention était d'inclure la possibilité d'envoyer des projectiles temporels, offrant ainsi une mécanique de combat encore plus dynamique et stratégique."
      ],
      experience: [
        " Participer à la CodeGameJam2023 a été une aventure passionnante pour moi, combinant mes intérêts pour la programmation et les jeux vidéo. Travailler sur Fate of the Same m'a permis de repousser mes limites et d'explorer de nouvelles idées de gameplay en équipe. Malgré les défis techniques et les contraintes de temps, je suis fier du résultat que notre équipe a accompli. Cette expérience collaborative m'a permis de développer mes compétences en programmation tout en partageant une passion commune pour la création de jeux vidéo. Fate of the Same restera pour moi une expérience mémorable et stimulante, et j'espère pouvoir continuer à explorer de nouvelles idées et à collaborer avec des talents créatifs dans le futur.",
      ],
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
      date: "Décembre 2022",
      context: "Lors de la Nuit de l'Info 2022, notre équipe a entrepris un projet passionnant axé sur la création d'un site web dédié à la prévention des MST. Notre objectif était de fournir une ressource en ligne complète et accessible, destinée à sensibiliser le public aux risques des maladies sexuellement transmissibles et à encourager des comportements sexuels sûrs.",
    }
  ],
}

export function findProjectDataById(id: string): Project | undefined {
  const allProjects = [...projectsData.professional, ...projectsData.personal, ...projectsData.school, ...projectsData.autodidacte];
  return allProjects.find((project) => project.id === id);
}

// Function to get localized project data
export function getLocalizedProjects(locale: Locale): typeof projectsData {
  if (locale === "en") {
    // Merge English translations with base project data
    const localizedData = {
      professional: projectsData.professional.map((project) => {
        const enProject = projectsEN.professional.find((p) => p.id === project.id);
        return enProject ? { ...project, ...enProject } : project;
      }),
      personal: projectsData.personal.map((project) => {
        const enProject = projectsEN.personal.find((p) => p.id === project.id);
        return enProject ? { ...project, ...enProject } : project;
      }),
      school: projectsData.school.map((project) => {
        const enProject = projectsEN.school.find((p) => p.id === project.id);
        return enProject ? { ...project, ...enProject } : project;
      }),
      autodidacte: projectsData.autodidacte.map((project) => {
        const enProject = projectsEN.autodidacte.find((p) => p.id === project.id);
        return enProject ? { ...project, ...enProject } : project;
      }),
    };
    return localizedData;
  }
  return projectsData;
}

// Function to find a localized project by ID
export function findLocalizedProjectById(id: string, locale: Locale): Project | undefined {
  const localizedData = getLocalizedProjects(locale);
  const allProjects = [...localizedData.professional, ...localizedData.personal, ...localizedData.school, ...localizedData.autodidacte];
  return allProjects.find((project) => project.id === id);
}

