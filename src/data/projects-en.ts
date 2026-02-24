// English translations for projects
export const projectsEN = {
  professional: [
    {
      id: "esgbu",
      title: "ESGBU - French Ministry of Higher Education",
      description: "Contributing to the ongoing development of a national data-management web application used by the French Ministry of Higher Education.",
      longDescription: "ESGBU is a national data-management web application used by the French Ministry of Higher Education. As part of my current apprenticeship as a software engineer at CINES, I contribute to the ongoing development of this application, working on both backend and frontend components to improve features, maintain the codebase, and support upcoming version upgrades.",
      features: [
        "Backend development with Symfony, MySQL and Mercure",
        "Frontend development with Angular",
        "Advanced search with Elasticsearch",
        "Real-time communication with Mercure",
        "MariaDB database",
        "Deployment across dev, pre-prod and production environments",
        "CI/CD and DevOps practices",
      ],
      date: "September 2025 - Present",
      context: "As part of my current apprenticeship as a software engineer at CINES, I contribute to the ongoing development of ESGBU, a national data-management web application used by the French Ministry of Higher Education.",
      mission: [
        "- Working on both backend (Symfony, MySQL, Mercure) and frontend (Angular) components to improve features, maintain the codebase, and support upcoming version upgrades.",
        "- Collaborating with another apprentice to modernize the project's technical stack: Angular 14→20, Symfony 5.4→6/7, MariaDB, Elasticsearch, Mercure.",
        "- Participating in debugging, dependency updates, environment installations, and enhancements of communication flows between the API and Elasticsearch.",
        "- Supporting deployments across development, pre-production, and production environments, following existing CI/CD and DevOps practices."
      ]
    },
    {
      id: "cines",
      title: "F.A.C.I.L.E Cines",
      description: "Development, modernization and migration of a digital archiving platform for document validation at CINES.",
      longDescription: "F.A.C.I.L.E Cines is a web application developed for the National Computing Center for Higher Education (CINES) as part of its permanent archiving project. The application verifies the validity of digital documents before archiving, ensuring they comply with current standards. It offers a user-friendly interface with advanced search, filtering, and result visualization features. The application is designed to be scalable and maintainable, facilitating integration into CINES existing infrastructure.",
      features: [
        "PDF document validation and correction",
        "Integration with CINES format validator and DROID",
        "Modern user interface with PrimeFaces and AJAX",
        "Error management and ticketing system",
        "Dashboards and PDF correction pages",
        "Deployment on Kubernetes cluster for high availability",
        "Enhanced security: Docker hardening, CVE fixes, Ingress configuration",
      ],
      date: "June 2024 - August 2025",
      context: "At CINES, I contributed to the modernization and migration of FACILE, a digital archiving platform. This project took place in two phases: a 3-month internship followed by a one-year apprenticeship as a software developer.",
      mission: [
        "**Internship (June 2024 - Sept 2024):**",
        "- Modernization and migration of FACILE to Java 11 with server configuration updates (Tomcat, Ghostscript).",
        "- Web interface and user experience improvements: PDF correction pages, dashboards, ticketing system.",
        "- Fullstack development: frontend (PrimeFaces, AJAX, HTML/CSS) and backend (Java, Maven, REST API).",
        "- Implementation of technical and functional specifications, ensuring performance, security and maintainability.",
        "",
        "**Apprenticeship (Sept 2024 - Aug 2025):**",
        "- Contributed to the development and optimization of the FACILE web application and its Kubernetes cluster, improving scalability and availability.",
        "- Enhanced core features (PDF validation, correction, printing) and integrated them with the CINES format validator and DROID.",
        "- Fullstack development using JEE, PrimeFaces, JSF, Maven, Tomcat, and applied security best practices (Docker hardening, CVE fixes, Ingress configuration).",
        "- Assisted with configuration management, CI/CD workflows, and automated cluster deployments.",
        "- Gained experience in project methodology, version control, testing, and quality assurance."
      ]
    },
  ],
  personal: [
    {
      id: "portfolio",
      title: "Portfolio",
      description: "Where all my projects are gathered.",
      longDescription: "Portfolio is a web application developed to present my personal projects, you are currently viewing it. The application allows you to discover my achievements, skills and professional experiences. It also allows me to test new technologies and put my web development knowledge into practice. The application is designed to be scalable and maintainable, facilitating its integration into my professional career.",
      features: [
        "Presentation of my personal and professional projects",
        "Details about my skills and experiences",
        "Integration with social networks and development platforms",
        "Modern and responsive design for optimal user experience",
        "Experimentation with new technologies and development tools",
      ],
      date: "January 2025",
      context: "This project is a redesign of my old personal portfolio, which brings together my professional, academic and personal projects. It represents an immersive experience designed with passion and powered by diverse and interesting technologies. This platform relies on a powerful combination of frameworks and development tools to deliver an exceptional and professional user experience."
    },
    {
      id: "bot-vinted",
      title: "Vinted Bot - Discord",
      description: "A Discord bot to track Vinted listings and find good deals.",
      longDescription: "Vinted Bot is a Discord bot developed to track Vinted listings and find good deals. It generates accounts to use for searches on Vinted, since the API is not public, allowing users to quickly find items of interest. The bot offers several services, such as an embed system for integrating messages into a Discord webhook, and an advanced filtering system for sorting the latest offers. This bot allowed me to quickly find Vinted offers that might interest me, to buy them and resell at a better price.",
      features: [
        "Presentation of my personal and professional projects",
        "Details about my skills and experiences",
        "Integration with social networks and development platforms",
        "Modern and responsive design for optimal user experience",
        "Experimentation with new technologies and development tools",
      ],
      date: "March 2023",
      context: "In a world where online shopping has become commonplace, searching for lucrative offers can quickly become tedious. Faced with this problem, I embarked on creating a Discord bot dedicated to Vinted, a platform for selling second-hand clothes and accessories. The goal? Facilitate the search for interesting offers and maximize resale opportunities, all with a simple and user-friendly interface.",
      idea: "Tired of spending hours scrutinizing listings to find rare gems on Vinted, I decided to put my programming skills to work on this issue. Noting that Vinted bots already existed, I had the idea to create my own, but with a different approach: integrating it into Discord for easy use through simple commands.",
      fonctionnalites: [
        "The bot is used through Discord commands. To start, users must invite the bot to their server, then use the /create command to create search categories. These categories include 'Brand Clothing', 'Luxury Clothing', 'Football Jerseys' and 'Sneakers'. The bot then browses the latest available offers, analyzes prices and displays in the corresponding channels the items deemed interesting.",
        "A key feature of the bot is the ability to set personalized alerts for specific items. Using the /add_vinted_alert command, users can specify the brand, size, category, desired condition and attractive price. The bot then monitors new offers meeting these criteria and alerts users when opportunities arise.",
        "All actions performed are then automatically updated in a file containing the data necessary for the bot to function."
      ],
      usage: [
        "One of the priorities when developing the bot was to make it as easy to use as possible, while offering powerful features. Thanks to an intuitive interface based on Discord commands, users can easily navigate and take advantage of advanced features without difficulty.",
        "In summary, the Vinted Discord bot offers an effective solution for simplifying the search for interesting offers on the Vinted platform. By combining automation, customization and user-friendliness, it allows users to optimize their chances of finding the best deals and maximize their resale opportunities."
      ],
      learning: [
        "Creating the Vinted Discord bot was not limited to a simple software solution; it was also a tremendous opportunity for learning and personal growth. Among the many lessons learned from this experience, two aspects stand out particularly: deepening my Python skills and developing a thoughtful strategy for buying and reselling.",
        "Python is a versatile and powerful tool, with its clear syntax and great versatility, it proved to be the ideal tool for bringing my project to life. By diving into the code, I was able to explore new programming features and techniques. Concepts such as file manipulation, HTTP requests and data management were deepened, thus strengthening my understanding of the language.",
        "Thanks to this experience, I also learned to use Python libraries such as Discord.py, which allowed me to interact effectively with the Discord API and create a fluid and intuitive user interface.",
        "Beyond programming, creating the Vinted bot confronted me with more conceptual challenges, notably formulating an effective strategy for buying and reselling products online. Analyzing data, evaluating market trends and anticipating opportunities are all key elements for success in this field.",
        "In developing the bot, I had to think about how to filter relevant offers, identify good deals and maximize potential profits. This strategic thinking allowed me to better understand the mechanisms of online commerce and develop valuable skills in analysis and decision-making.",
        "Creating the Vinted Discord bot was much more than a simple programming project; it was an enriching adventure that allowed me to explore new domains and acquire valuable skills. Thanks to this experience, I deepened my mastery of Python and developed a thoughtful strategy for navigating the complex world of online commerce. These lessons will continue to guide my future projects and fuel my passion for continuous learning and innovation."
      ]
    },
    {
      id: "proto-trader-bot",
      title: "Proto Trader Bot",
      description: "A Telegram bot to automate crypto trading.",
      longDescription: "Proto Trader Bot is a Telegram bot that automates cryptocurrency trades. This bot has an interface for tracking the progress of trades that have been set up, as well as a control panel for buying or selling the cryptocurrency or token you want. Additionally, this bot automates the purchase of cryptocurrencies by setting the amount you want to invest per trade for each 'whale' you have configured. In other words, the bot automatically buys a quantity of cryptocurrency that one of the configured whales is about to buy. To use the bot, simply connect your wallet and configure the various available parameters, or generate your crypto wallet based on the chain you want to use. This bot currently only supports Solana, TRX and Ethereum chains.",
      features: [
        "Cryptocurrency trade automation",
        "User interface for tracking ongoing trades",
        "Control panel for buying or selling cryptocurrencies",
        "Trading parameters and whale configuration",
        "Crypto wallet generation for different chains",
        "Secure connection with wallet for trading",
      ],
      date: "September 2024 - October 2024",
      context: "Proto Trader Bot is an innovative project that aims to simplify and automate cryptocurrency trading. In full expansion, the crypto market offers many investment opportunities, but it can be difficult to follow trends and make quick and effective trading decisions. That's why we decided to create a Telegram bot that will allow traders of all levels to maximize their performance and minimize risks.",
      idea: "The idea for this project came from the desire to simplify and automate cryptocurrency trading. Indeed, the crypto market is constantly evolving, and it can be difficult to follow trends and make quick and effective trading decisions. Proto Trader Bot aims to solve this problem by offering an automated and user-friendly solution for traders of all levels.",
      fonctionnalites: [
        "The bot allows you to configure multiple cryptocurrency chains, such as Solana, TRX and Ethereum. Each chain can be individually configured according to user preferences, including the amount to invest per trade, whales to follow, alerts to activate, etc.",
        "An advanced crypto wallet management system is integrated into the bot, allowing the generation of wallets for each cryptocurrency chain. These wallets are secured and encrypted, ensuring the confidentiality and security of transactions. The user can also generate their wallet on their side and link it to the bot for trading.",
        "The bot offers complete management of buy (BUY) and sell (SELL) order features, allowing the user to customize its behavior according to their needs. It is possible to define general parameters, such as activating or not specific modes, and to manage precise restrictions, such as not buying if the market capitalization (MC) is below a predefined threshold. The user can adjust criteria such as minimum or maximum price, liquidity, slippage, or configure alerts to monitor price impact. For sales, advanced options such as automatic sales at high or low thresholds, percentage management sold, and automatic retries in case of failure are also available. These features allow great flexibility and optimized order automation.",
        "A monitor is integrated in the bot that allows real-time tracking of the status of ongoing transactions. This panel displays all essential information about tracked trades, such as current price, market capitalization (MC), percentage gain or loss, initial and current transaction value, as well as time elapsed since launch. You can also view price impact, expected payments, and configure automatic actions such as buying on a price drop or automatic selling based on defined thresholds. The monitor offers options such as slippage adjustment, sale by percentage or precise amount, and offers advanced management tools such as profit and loss tracking (PnL Card), dynamic thresholds, and the ability to refresh or reset data at any time. With this clear and intuitive interface, the user maintains full control over their trades and can adjust parameters with one click to maximize performance and minimize risks.",
        "Finally, a copy trading feature is available on the bot that allows you to automatically follow the trades of other users or whales with complete customization of parameters, such as enabling automatic buying, setting a maximum purchase amount, purchase percentage, global slippage, gas price and minimum and maximum market capitalization thresholds as well as liquidity, it is also possible to configure automatic selling with thresholds defined for increases or decreases, adjusting amounts or percentages to sell according to conditions, excluded transactions such as airdrops or those not from followed addresses can be bypassed with the Blind Follow option, thus offering a flexible and adapted experience to maximize gains and minimize risks while benefiting from the expertise of other traders."
      ],
    },
    {
      id: "ftx-bot",
      title: "Trading bot for FTX",
      description: "Python bot for cryptocurrency trading on the FTX platform, with trading strategies based on backtesting via Binance data",
      longDescription: "Trading bot for FTX is a Python bot that allows cryptocurrency trading on the FTX platform. It uses trading strategies based on backtesting via Binance data to make trading decisions. The bot is designed to be easy to use and configure, with customizable parameters for each trading strategy. It also offers advanced features such as risk management, performance tracking and trading report generation. The bot is designed to be scalable and maintainable, facilitating its integration into FTX's existing infrastructure.",
      features: [
        "Backtesting-based trading strategies",
        "Customizable parameters for each strategy",
        "Risk management and performance tracking",
        "Trading report generation",
      ],
      date: "2021 - 2022",
      context: "My fascination with the world of cryptocurrency took root at the beginning of my senior year, attracted by the lucrative possibilities it offered. After exploring the investment opportunities it proposed, I decided to create a customizable cryptocurrency trading bot, capable of following specific buy and sell strategies on selected cryptocurrencies. This bot was designed to operate on the FTX cryptocurrency trading platform, although it has since closed its doors.",
      strategy: [
        "To effectively develop this solution, I undertook extensive backtests of different trading strategies. Using Python libraries such as Pandas and PyTorch, I analyzed trading data from the Binance platform to refine the strategies.",
        "To feed the bot with data, I used the Binance API to retrieve historical data on chosen cryptocurrencies, covering a period from 2010 to the current date. This abundance of data allowed refining trading strategies through advanced techniques such as deep learning with PyTorch, thus ensuring a more precise approach in decision-making."
      ],
      fonctionnalites: [
        "The bot also offered advanced features, including the ability to generate charts and statistics on profits made during backtests. This preliminary analysis of the bot's performance was essential before starting real transactions on the platform."
      ],
      learning: [
        "Developing this cryptocurrency trading bot was an exciting adventure that combined my interests in finance and technology. Despite the challenges encountered, I found the process rewarding and enriching. This project allowed me to develop my programming and data analysis skills while exploring the dynamic world of cryptocurrency trading. I am grateful to have had the opportunity to participate in this venture and am proud of the results I was able to accomplish. This trading bot remains an important milestone in my professional journey and a source of inspiration for my future projects."
      ]
    },
  ],
  school: [
    {
      id: "autocomplete",
      title: "Autocomplete AI in Scala",
      description: "Creation of an autocomplete artificial intelligence capable of predicting the following words from a given text.",
      longDescription: "The project consisted of developing an autocomplete artificial intelligence in Scala. The AI trained on a textual dataset to analyze contextual relationships between words. When a user entered text, the model dynamically determined the appropriate n-gram based on the length of the input or its context, to adjust its training and improve prediction relevance. The algorithms used statistical and probabilistic models to predict the most coherent word or sequence of words after input. The goal was to ensure smooth and accurate results while optimizing performance and resource consumption.",
      features: [
        "Training a model on custom text datasets",
        "Dynamic n-gram determination based on user input",
        "Probabilistic algorithms for evaluating prediction coherence",
        "Using Scala and SBT for efficient dependency management",
        "Performance optimization for processing large datasets",
        "Simple user interface for testing autocomplete capabilities",
        "Technical documentation and usage examples"
      ],
      date: "March 2025 - April 2025",
      context: "This project was completed as a pair collaboration to explore the capabilities of Scala and Machine Learning in natural language processing (NLP). The AI was designed to analyze texts and predict words smoothly, learning from contextual relationships in a given corpus. Dynamic n-gram determination allowed adjusting training for predictions adapted to each user context. This project helped consolidate our skills in machine learning, Scala and data manipulation.",
      learning: [
        "Mastery of n-grams and probabilistic models for NLP.",
        "Development and debugging of machine learning algorithms in Scala.",
        "Dataset management for efficient learning and prediction.",
        "Performance optimization for fast prediction execution.",
        "Deepening of dynamic processing logic based on user input.",
        "Collaboration and task distribution in a team project."
      ],
    },
    {
      id: "annuaire",
      title: "Directory + HAPI trail",
      description: "Design of a directory to view events you participate in, automatically linked to the events site via its API",
      longDescription: "Directory is a web application designed to allow users to view events they participate in. The application is automatically linked to the events site via its API, which allows users to consult event details, dates and locations, as well as information about participants. The application is designed to be scalable and maintainable thanks to its API, facilitating its integration into the existing infrastructure of the events site. Each user can create a profile, manage their information, and customize their profile visibility (visible or hidden).",
      features: [
        "User registration and authentication with profile management",
        "Event management via a REST API developed in Symfony",
        "Display of event details: name, dates, locations, number of participants, etc.",
        "Ability for organizers to create, modify and delete events",
        "Profile visibility management (visible/hidden) and public participant lists",
        "Event registration and unregistration system with schedule conflict verification",
        "Secure authentication via JWT",
        "Modern and responsive user interface",
        "Real-time data validation (unique codes, availabilities, etc.)",
        "API connection with automatic generation of validation groups and serialization"
      ],
      date: "October 2024 - December 2024",
      context: "University project completed as a trio to develop an online directory application coupled with an event management API. This project relies on the use of the Gesdinet JWT Refresh Token Bundle for efficient and secure token management, based on a PostgreSQL database.",
      mission: [
        "Design an online directory web application with Symfony and Twig",
        "Create a REST API to manage events and users with Symfony and API Platform",
        "Ensure communication between the website and the API for smooth data synchronization"
      ],
      fonctionnalites: [
        "User profile creation with visibility management",
        "Display of profiles listed on the main page",
        "Consultation of events and registrations for each user",
        "Unregistration possibility and available places management",
        "Role system (users, organizers, administrators) to control available actions"
      ],
      learning: [
        "I deepened my mastery of Symfony, a PHP framework renowned for its flexibility and integrated tools, by combining it with API Platform. API Platform, thanks to its advanced features (such as automatic documentation via Swagger or GraphQL integration), allowed structuring a robust REST API respecting modern standards. This process also involved in-depth reflections on REST concepts, such as endpoint structuring, use of appropriate HTTP methods (GET, POST, PUT, DELETE), and HTTP response code management for better communication between client and server.",
        "Securing authentication was a major focus of the project. By implementing JSON Web Tokens (JWT), the team ensured secure and scalable user session management. This choice avoided vulnerabilities related to traditional approaches based on cookies or server sessions. Additionally, JWT offers significant advantages, including the ability to store encoded information directly in the token (claims), which optimizes access rights verification. The team also worked on integrating refresh tokens to provide a smooth user experience while maintaining a high level of security.",
        "One of the major challenges was modeling and managing complex relationships between project entities, such as relationships between users, comments, and other associated data. The team used Doctrine annotations to establish these relationships (OneToMany, ManyToOne, ManyToMany, etc.), while respecting REST principles. For example, using identifiers in relationships and serialization minimized response size and improved API readability.",
        "I learned to leverage serialization groups offered by Symfony to meet specific client needs. This approach allowed customizing data returned by the API based on contexts (example: an authenticated user sees more details than an unauthenticated user). Additionally, denormalization was used to optimize performance when retrieving complex data, particularly in scenarios where nested queries were necessary. These techniques not only improved performance but also made the API more adaptable to front-end consumer needs."
      ],
    },
    {
      id: "gradhire",
      title: "Gradhire",
      description: "Design of a website to help computer science students in Montpellier find internships/apprenticeships",
      longDescription: "The current objective of this project is to design a web platform dedicated to internship and apprenticeship search, exclusively intended for students of the Montpellier computer science department. To ensure access restricted to only students, professors, secretaries and companies wishing to publish their offers on our site, we are deploying an LDAP-based authentication system and password hashing. The design elegance and interface responsiveness allows everyone to navigate easily and get the most out of our platform. Additionally, the site offers efficient data management through a performant database and robust PHP backend. This ensures smooth usage and quick response.",
      features: [
        "Solution implementation",
        "Database design",
        "Security management systems",
        "Teamwork",
        "Agile project management",
        "Full-stack development",
        "Client analysis and evaluation of needs",
      ],
      date: "September 2023 - December 2023",
      context: "The current objective of this project is to design a web platform dedicated to internship and apprenticeship search, exclusively intended for students of the Montpellier computer science department. To ensure access restricted to only students, professors, secretaries and companies wishing to publish their offers on our site, we are deploying an LDAP-based authentication system and password hashing. The design elegance and interface responsiveness allows everyone to navigate easily and get the most out of our platform. Additionally, the site offers efficient data management through a performant database and robust PHP backend. This ensures smooth usage and quick response.",
    },
    {
      id: "train",
      title: "Java Video Game \"Ticket to Ride\"",
      description: "JavaFX game to play a computer version of the board game \"Ticket to Ride\"",
      longDescription: "Ticket to Ride is a board game played on a game board representing a geographic map. The goal of the game is to connect cities by building railways. The game is played over several rounds, and the player with the most points at the end of the game wins. In this computer version of the game, players can face opponents controlled by the computer or by other online players. The game offers an immersive gaming experience with high-quality graphics and fluid animations. The game is designed to be easy to learn and play, while offering a stimulating challenge for players of all levels.",
      features: [
        "Object-oriented development",
        "Unit test development",
        "Version control with Git",
        "Human-machine interface design and implementation",
      ],
      date: "February 2023 - April 2023",
      context: "The 'Ticket to Ride Around the World' project is part of the development of a Java implementation of the eponymous board game. Focusing on the 'World' board, the project was completed in several phases, implementing object-oriented development principles and graph algorithms.",
    },
    {
      id: "escape-game",
      title: "Escape Game \"The Dark Cave\"",
      description: "Design of a website for the Escape Game \"The Dark Cave\"",
      longDescription: "Escape Game 'The Dark Cave' is a website designed to promote an escape game located in a mysterious cave. The site offers visitors an immersive experience with images, as well as an intriguing narration to immerse them in the game universe. Visitors can explore the different rooms of the cave. The site is designed to be interactive and engaging, offering visitors a unique and memorable experience.",
      features: [
        "HTML design and structure",
        "CSS styling and layout",
        "Collaborative teamwork",
        "Understanding client needs",
      ],
      date: "November 2022 - December 2022",
      context: "During this exciting project, my team and I engaged in creating a website for the Escape Game 'The Dark Cave', following a request from another group of IUT students. Our mission was to respond to their needs by presenting them with ideas and design concepts for their website. Acting as service providers, we transformed their vision into an interactive site that would capture the unique essence of their escape game. This inter-group collaboration was an extremely enriching experience, especially since we were also clients of another group for our own escape game website project. Through this dynamic, we were able to exchange ideas and needs, thus contributing to the realization of two unique and exciting projects.",
    },
    {
      id: "controverse",
      title: "Website \"The Controversy\"",
      description: "Writing a controversy answering the question: Does digital technology promote democratic participation? As well as designing the showcase website for the articles",
      longDescription: "The Controversy is a website designed to present a controversy on the theme of democratic participation in the digital context. The articles are written by students from the University of Montpellier, who propose different points of view on the question. The site offers visitors an interactive experience with articles to help them form their own opinion. The site is designed to be informative, engaging and accessible to all audiences.",
      features: [
        "Web article writing",
        "Website architecture development",
        "Human-machine interface design and implementation",
      ],
      date: "November 2022 - December 2022",
      context: "Our project was born from an exciting collaboration during our first year of BUT studies. The main objective was to perfect our article writing skills while immersing ourselves in the world of professional website creation. Throughout this project, we worked hand in hand to write a series of articles. Each of us brought their expertise and unique ideas, thus enriching the diversity and quality of our content. Once our writings were complete, we undertook the design of the website that would serve as a showcase for our work. Setting up navigation, dynamic pages and the contact section required close collaboration and meticulous teamwork.",
      mission: ["My specific role in this project was the design and implementation of the website's contact section. I ensured it was both functional and aesthetic, to create a user-friendly interface allowing visitors to contact us easily while preserving the professionalism of our project."],
    }
  ],
  autodidacte: [
    {
      id: "shadow-of-memory",
      title: "Video Game \"Shadow of Memory\"",
      description: "Video game designed on UnrealEngine5 during the 8th edition of Code Game Jam 2024 in Montpellier",
      longDescription: "Shadow of Memory offers simple but captivating gameplay, despite the jam's time constraints. Players explore a 3D mystical world, where they can interact with non-player characters and environmental elements to advance the story. Although we couldn't integrate all our ideas into the game in 24 hours, we managed to set up a fluid movement system and a score mechanic representing the main character's legend level.\n\nBy visiting villages scattered across a vast 3D map, players can haunt certain houses and perform heroic actions to increase their legend score. To add a layer of tension and excitement, we had planned a Quick Time Events (QTE) system during house haunting phases. If players succeed in these QTEs, they gain legend score, but if they fail, they lose it. This mechanic encourages players to stay engaged and attentive while exploring the game world.\n\nAdditionally, players can also pass through walls and houses using an intangibility power. By pressing a specific key, they can activate this ability, allowing them to pass through physical obstacles and explore new areas otherwise inaccessible. This feature adds an additional dimension to exploring the game world, allowing players to discover hidden secrets and solve puzzles to progress through the story.",
      features: [
        "3D video game design",
        "Score and progression mechanics",
        "Fluid and intuitive movement system",
        "Quick Time Events (QTE) mechanics",
        "Intangibility power to pass through obstacles",
        "Open world exploration with hidden secrets",
        "World Building and Level Design",
        "Material Design and 3D Modeling",
      ],
      date: "January 2024",
      context: "During CodeGameJam2024, our team embarked on a bold adventure on Unreal Engine 5: creating Shadow of Memory, a third-person 3D video game that transports players into a mysterious world where time and memory intertwine.",
      history: "In Shadow of Memory, players embody an ethereal being whose existence is in danger of being engulfed by oblivion. To survive, they must rebuild their own legend by exploring mystical lands and interacting with spirits from the past. Each player choice influences the ethereal's destiny: acts of compassion transform them into a memorable legend, while succumbing to indifference leads to total disappearance. The duality between becoming a mythical figure or vanishing into the darkness of oblivion is at the heart of the adventure. Each action tints the narrative in this adventure where the boundary between light and shadow, legend and oblivion, is as fragile as the very essence of the ethereal protagonist.",
      gameplay: [
        "Shadow of Memory offers simple but captivating gameplay, despite the jam's time constraints. Players explore a 3D mystical world, where they can interact with non-player characters and environmental elements to advance the story. Although we couldn't integrate all our ideas into the game in 24 hours, we managed to set up a fluid movement system and a score mechanic representing the main character's legend level.",
        "By visiting villages scattered across a vast 3D map, players can haunt certain houses and perform heroic actions to increase their legend score. To add a layer of tension and excitement, we had planned a Quick Time Events (QTE) system during house haunting phases. If players succeed in these QTEs, they gain legend score, but if they fail, they lose it. This mechanic encourages players to stay engaged and attentive while exploring the game world.",
        "Additionally, players can also pass through walls and houses using an intangibility power. By pressing a specific key, they can activate this ability, allowing them to pass through physical obstacles and explore new areas otherwise inaccessible. This feature adds an additional dimension to exploring the game world, allowing players to discover hidden secrets and solve puzzles to progress through the story."
      ],
      experience: [
        "CodeGameJam2024 was an exciting experience for me, as it brought together my two professional and personal passions: video games and programming. Working on Shadow of Memory allowed me to combine my technical programming skills with my creativity and passion for video games.",
        "Even though we had to face challenges and time constraints, I found the game development process extremely rewarding. Collaborating with a passionate team to bring our vision to life was an enriching and inspiring experience.",
        "I am grateful to have had the opportunity to participate in this jam and am proud of the result our team was able to accomplish in such a short time. Shadow of Memory will remain for me a precious memory and a source of inspiration for future projects.",
      ],
    },
    {
      id: "ndi-2023",
      title: "Night of Information 2023",
      description: "Design of a website on the importance of climate change prevention for the Night of Information 2023.",
      longDescription: "During the Night of Information 2022, our team designed a website focused on climate prevention. Our goal was to raise public awareness of environmental issues and promote concrete actions. By combining our skills in design, development and writing, we created an interactive site including an engaging serious game, a chatbot answering user questions, as well as a map illustrating the impact of French companies on the climate. This experience was a rewarding fusion of technical skills and innovation for a positive environmental impact.",
      features: [
        "Web design and development",
        "Serious game integration",
        "Chatbot development",
        "Visual data representation with interactive map",
        "Collaboration and teamwork",
      ],
      date: "December 2023",
      context: "During the Night of Information 2022, our team designed a website focused on climate prevention. Our goal was to raise public awareness of environmental issues and promote concrete actions. By combining our skills in design, development and writing, we created an interactive site including an engaging serious game, a chatbot answering user questions, as well as a map illustrating the impact of French companies on the climate. This experience was a rewarding fusion of technical skills and innovation for a positive environmental impact.",
    },
    {
      id: "fate-of-the-same",
      title: "Fate of the Same",
      description: "Video game designed during the 7th edition of Code Game Jam 2023 at IUT Montpellier-Sète.",
      longDescription: "Fate of the Same is a video game designed during the 7th edition of Code Game Jam 2023 at IUT Montpellier-Sète. The game offers an immersive and interactive experience, where players must solve riddles and puzzles to progress through the story. The game is designed to be stimulating and engaging, with high-quality graphics and fluid animations. Players can explore a fantastic world filled with mysteries and dangers, where each decision counts and influences the course of the story. Fate of the Same offers a unique and memorable gaming experience, which immerses players in a universe rich in surprises and twists.",
      features: [
        "Web design and development",
        "Graphic design",
        "Content writing",
        "Teamwork",
      ],
      date: "January 2023",
      context: "During CodeGameJam2023, our team embarked on an ambitious challenge on Unity in 2D: creating Fate of the Same, an immersive adventure game where players explore a world where time and identity intertwine. The game is animated with dynamic sprites, especially for attacks and special abilities, bringing action and adventure to life.",
      history: "In Fate of the Same, players embody a hero appearing in the heart of a celestial platform, surrounded by stars. Their mission? Defeat Chronos, the master of time. To achieve this, they must use teleporters to explore the map and face various challenges. From mysterious forests to arid deserts, each zone reveals a fragment of Chronos' history, leading to a surprising final confrontation. The narrative takes an unexpected turn when the player discovers that Chronos is actually a future version of themselves, trapped in a time loop. The final confrontation raises questions about identity and destiny, revealing an intriguing duality between the hero and their antagonist.",
      gameplay: [
        "Fate of the Same offers dynamic gameplay centered on time management. Players must fight enemies and solve puzzles while monitoring a time bar. Each monster elimination allows recovering temporal power, while a special ability allows freezing time temporarily, at the cost of temporal resource consumption. Although we didn't have time to integrate all our ideas, our intention was to include the possibility of sending temporal projectiles, thus offering an even more dynamic and strategic combat mechanic."
      ],
      experience: [
        "Participating in CodeGameJam2023 was an exciting adventure for me, combining my interests in programming and video games. Working on Fate of the Same allowed me to push my limits and explore new gameplay ideas as a team. Despite technical challenges and time constraints, I am proud of the result our team accomplished. This collaborative experience allowed me to develop my programming skills while sharing a common passion for video game creation. Fate of the Same will remain for me a memorable and stimulating experience, and I hope to continue exploring new ideas and collaborating with creative talents in the future.",
      ],
    },
    {
      id: "ndi-2022",
      title: "Night of Information 2022",
      description: "Design of a website on STI prevention during the Night of Information 2022",
      longDescription: "During the Night of Information 2022, our team designed a website focused on STI prevention. Our goal was to raise public awareness of the risks and consequences of sexually transmitted infections, as well as promote prevention actions. By combining our skills in design, development and writing, we created an interactive site including information about STIs, prevention tips and useful resources. This experience was a rewarding fusion of technical skills and innovation for a positive social impact.",
      features: [
        "Web design and development",
        "Graphic design",
        "Content writing",
        "Teamwork",
      ],
      date: "December 2022",
      context: "During the Night of Information 2022, our team undertook an exciting project focused on creating a website dedicated to STI prevention. Our goal was to provide a complete and accessible online resource, intended to raise public awareness of the risks of sexually transmitted infections and encourage safe sexual behavior.",
    }
  ],
};

