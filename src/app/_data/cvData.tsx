export const cvData = {
  personalData: {
    name: "Sonny Nguyen",
    title: "Software Engineer",
    contacts: [
      { type: "email", value: "sonnynguyen163@gmail.com" },
      { type: "phone", value: "626-863-5972" },
      { type: "location", value: "Los Angeles, CA" },
      {
        type: "linkedin",
        value: "https://www.linkedin.com/in/sonny-nguyen163/",
      },
      { type: "github", value: "https://github.com/sn163" },
    ],
  },
  jobs: [
    {
      company: "Dropps",
      title: "Software Engineer",
      date: "May 2022 - Present",
      link: "https://www.dropps.com/",
      description: [
        "Transformed mockup designs into refined, production-ready components and layouts for new website features",
        "Developed user interfaces that adhered to UI/UX best practices and utilized A/B testing, leading to an uplift in conversion rates and a reduction in bounce rate",
        "Facilitated the migration of 500k+ subscriptions to serverless product flows on Google Cloud Platform and Node.js",
        "Leveraged REST/GraphQL APIs in Shopify to streamline product attribute management and product listing efficiency",
        "Led website bug triage across cross-functional teams, utilizing troubleshooting, testing, and remediation techniques to enhance stability and reduce support ticket volumes",
        "Revitalized site SEO with a series of strategies elevating keyword optimizations, restructuring the heading hierarchy, and crafting descriptive alt tags, resulting in an increase in organic traffic and higher search engine rankings",
        "Executed WCAG-compliant accessibility measures to protect against drive-by lawsuits and mitigate expenses",
        "Implemented automated front-end testing using Jest and React Testing Library, resulting in an increase in code coverage and reduction in production bugs",
      ],
    },
    {
      company: "OverVue",
      title: "Software Engineer",
      date: "September 2021 - May 2022",
      location: "",
      link: "https://www.overvue.org/",
      description: [
        "Architected and integrated drag & drop functionality, adaptive component resizing, and real-time updates in Vue to optimize UX, resulting in a 36% decrease in user workflow completion time and increased platform efficiency",
        "Spearheaded the creation of a duplication feature, integrating conditional Vuex state mutations and relational mapping, allowing users to reproduce consistent components, increasing development efficiency by 28%",
        "Employed Electron framework to manufacture a multi-platform desktop application, utilizing Electron’s integrated Node.js to perform asynchronous I/O operations reducing load times and increasing responsiveness 12%",
        "Integrated Slack OAuth to promote team collaboration & OS deeplink redirect for validated webhook configuration",
      ],
    },
  ],
  projects: [
    {
      project_title: "Pomoparty",
      subtitle: "Social Pomodoro App - TypeScript, React, Next, Node, PostgreSQL",
      description: [
        "Designed and implemented a Social Pomodoro App leveraging React's component-based architecture, powered by Next.js, to ensure swift load times, SEO enhancement, and server-side rendering capabilities",
        "Integrated PostgreSQL for data storage, designing schemas for user profiles and activity logs, ensuring efficient querying",
        "Pioneered seamless CI/CD pipeline by deploying app on Vercel for front-end hosting and Render for back-end services, ensuring scalable and reliable app performance; increased app loading speeds by 40% and reduced downtime by 25%",
      ],
    },
    {
      project_title: "Portfolio",
      subtitle: "Personal Website - TypeScript, React, Next",
      description: [
        "Constructed a high-performance React SPA portfolio, incorporating Next.js to enhance speed and content delivery",
        "Streamlined site deployment on Netlify, guaranteeing high availability and 29% reduction in page load time",
      ],
    },
    {
      project_title: "Interview Hub",
      subtitle: "Interview Review & Preparation Platform - JavaScript PERN Stack",
      description: [
        "Developed a web community platform with the PERN stack (PostgreSQL, Express.js, React.js, Node.js) for users to share interview experiences, advice, and review",
        "Applied React Router’s client-side routing to minimize server calls & improve UI/browser URL sync consistency by 15%",
        "Incorporated WebRTC API and Cloud Firestore to enable video chat features used for conducting mock interviews",
      ],
    },
    {
      project_title: "Space",
      subtitle: "Project Tracker Application - JavaScript, React",
      description: [
        "Upgraded an existing React-based class component structure to utilize functional components and React Hooks, resulting in enhanced code maintainability and the creation of reusable components while eliminating redundant logic by 12%",
        "Overhauled pre-existing front-end UI/UX with TailwindCSS, revitalizing visual appeal and reducing user friction by 24%",
      ],
    },
  ],
  achievements: [
    {
      title: "Co-developer of OverVue",
      link: "",
      description:
        "An open source prototyping tool with 2.4k+ stars on Github, designed for creating and visualizing Vue apps dynamically",
    },
    {
      title: "SingleSprout's Tech Talk Featured Speaker",
      link: "",
      description:
        "Fall 2021 Series Topic: “Continuous Integration/Continuous Delivery (CI/CD), Software Development Life Cycle (SDLC), & DevOps",
    },
  ],
  education: [
    {
      school_name: "Codesmith",
      major: "Computer Science",
      description: "Advanced Software Engineering Immersive",
      location: "Los Angeles, CA",
    },
    {
      school_name: "Cal State University, Fullerton",
      major: "",
      description: "",
      location: "Fullerton, CA",
    },
  ],
  skills: {
    languages: ["TypeScript", "JavaScript", "HTML", "CSS", "JSON", "HTTP", "GraphQL", "REST APIs", "CI/CD", "OOP"],
    frameworks: [
      "React.js",
      "React Native",
      "Next.js",
      "Vue.js",
      "Express.js",
      "Redux.js",
      "jQuery",
      "Jest",
      "Testing Library",
    ],
    tools: ["Node.js", "Docker", "Git", "Vercel", "Render", "Netlify", "Vite", "Webpack", "Shopify Plus"],
    ui: [
      "TailwindCSS",
      "Daisy UI",
      "Storybook",
      "Bootstrap",
      "Material UI",
      "Radix UI",
      "SASS",
      "A/B Testing",
      "WCAG / Accessibility",
      "SEO",
      "Google Tag Manager",
      "Google Analytics 4",
    ],
    databases: ["SQL", "NoSQL", "PostgreSQL", "MongoDB", "Mongoose", "Google Cloud (GCP)", "Amazon Web Services (AWS)"],
  },
};
