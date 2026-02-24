export const en = {
  // Header & Navigation
  nav: {
    home: "Home",
    learning: "Learning",
    about: "About",
    projects: "Projects",
    cv: "CV",
    contact: "Contact",
  },

  // Hero Section
  hero: {
    subtitle: "Software Engineering Student at IMT Mines Alès",
    viewProjects: "View Projects",
    aboutMe: "About Me",
  },

  // Skills Section
  skills: {
    title: "Skills",
    languages: {
      title: "Languages",
      content: "Proficient in Java, JavaScript, TypeScript and C. Experienced with PHP",
    },
    frontend: {
      title: "Frontend Technologies",
      content: "Proficient in React, TypeScript, modern Tailwindcss for building reactive web applications, PHP with Symfony and Java with Primefaces.",
    },
    databases: {
      title: "Databases",
      content: "Experienced with SQL and NoSQL databases, including PostgreSQL, MySQL and MongoDB.",
    },
    tools: {
      title: "Tools",
      content: "Proficient in Git, Docker, and other development tools to improve development workflow.",
    },
  },

  // Footer
  footer: {
    links: "Links",
    haveProject: "Have a project?",
  },

  // Contact
  contact: {
    title: "Contact me",
    yourName: "Your Name",
    yourEmail: "Your Email",
    yourMessage: "Your Message",
    sendMessage: "Send Message",
    messageSent: "Message sent successfully!",
    messageFailed: "Failed to send message.",
  },

  // About Page
  about: {
    greeting: "Hello, I'm Clément 👋",
    intro: "Software Engineering student at IMT Mines Alès, passionate about technology and innovation. With a solid background in computer science and enriching professional experiences, I am fully committed to designing and developing high-performance software solutions. My curiosity and dedication drive me to continuously explore new technical domains.",
    personalityTraits: "Personality Traits",
    personalityText: "My {words} enable me to approach each project with method and determination. Autonomous and proactive, I adapt quickly to new work environments. My interpersonal skills and team spirit foster effective collaboration and contribute to achieving collective goals.",
    whatILike: "Interests",
    whatILikeText1: "My passion for technology naturally led me to computer science, from building hardware configurations to mastering multiple programming languages. I am also very interested in artificial intelligence, which is set to revolutionize the world in every sense, as well as in physics, the study of stars, and the quantum world, which fascinates me with its radically different rules that seem to defy logic. In parallel, I cultivate a strong interest in Japanese culture, video games, and sports, which nurture my creativity and open-mindedness. Cooking also represents a creative outlet where I enjoy experimenting and discovering new flavors.",
    whatILikeText2: "Playing volleyball since middle school has allowed me to develop essential transferable skills: communication, coordination, and focus. This sport has instilled in me the values of teamwork and perseverance, which I apply daily in my professional projects. Recently, I also discovered snowboarding, a discipline that allows me to push my limits and maintain personal balance.",
    capabilities: "Key Skills",
    capabilitiesText1: "My academic background and personal projects have provided me with a comprehensive vision of software development. I adopt a methodical approach in solution design, systematically analyzing different options and anticipating technical constraints before committing to implementation.",
    capabilitiesText2: "My sports practice has strengthened my team spirit and leadership abilities. I know how to work within multidisciplinary teams, encourage collaboration, and contribute to collective problem-solving.",
    capabilitiesText3: "Video games have developed my responsiveness and ability to adapt quickly, valuable assets in a constantly evolving technological environment.",
    currentGoal: "Current Goal",
    currentGoalText: "I am currently seeking an international internship to complete my engineering curriculum and gain enriching professional experience in a multicultural context.",
    futureGoal: "Career Objective",
    futureGoalText: "My ambition is to become a software engineer and contribute to innovative high-impact projects. Through my training at IMT Mines Alès, I am developing solid technical expertise and a deep understanding of modern software development challenges. I aim to leverage these skills within a dynamic company where I can continue to grow and deliver real added value.",
    flipWords: ["rigor", "curiosity", "creativity", "determination", "perseverance"],
  },

  // Formation
  formation: {
    title: "Education",
    iut: {
      institution: "IUT Montpellier-Sète",
      location: "Montpellier, France",
      degree: "BUT Computer Science over 3 years",
      skills: [
        "Teamwork",
        "Java",
        "HTML/CSS",
        "Development Quality",
        "Client Requirements Management",
        "Databases",
        "Project Management",
        "Data Processing"
      ],
      period: "September 2022 - Present",
    },
    lycee: {
      institution: "Lycée Thomas Edison",
      degree: "STI2D Baccalaureate",
      mention: "With Honors",
      skills: [
        "Arduinos",
        "Databases",
        "HTML/CSS",
        "Data Processing"
      ],
      period: "September 2019 - June 2022",
    },
  },

  // Projects
  projects: {
    title: "Projects",
    professional: "Professional",
    personal: "Personal",
    school: "School",
    autodidact: "Self-taught",
    viewMore: "View More",
    features: "Features",
    contributors: "Contributors",
    date: "Date",
    context: "Context",
    mission: "Mission",
    idea: "Idea",
    functionalities: "Functionalities",
    usage: "Usage",
    learnings: "Learnings",
    strategy: "Strategy",
    gallery: "Gallery",
    history: "History",
    gameplay: "Gameplay",
    experience: "Experience",
  },

  // Common
  common: {
    readMore: "Read More",
    close: "Close",
    loading: "Loading...",
  },

  // Language Switcher
  language: {
    switch: "Language",
    en: "English",
    fr: "French",
  },
} as const;

export type Translations = typeof en;

