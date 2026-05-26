// ── PORTFOLIO DATA ──

export const personalInfo = {
  name: "Radhika",
  role: "CS Student",
  college: "J.C.Bose University of Science & Technology, (YMCA) Faridabad",
  batch: "2025-2029",
  location: "Faridabad, India",
  email: "radhika16019@gmail.com",
  resumeLink: "/resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/RADHIKA16019",
  linkedin: "https://linkedin.com/in/radhika-a6a84837a",
  twitter: "https://x.com/radhika16019",
  instagram: "https://instagram.com/r4dh1k4_28",
  youtube: "https://youtube.com/@Radhika_Codes",
};

export const typingStrings = [
  "Web Developer",
  "Campus Ambassador",
  "CS Student",
  "Content Creator",
];

export const aboutInfo = {
  bio: "Hey! I'm a first-year CS student who loves building things for the web. I'm currently learning web development, exploring new technologies, and sharing what I learn along the way. Still early in my journey — but moving fast. 🚀",
  currently: [
    { icon: "📚", label: "Learning", value: "Web Dev + DSA" },
    { icon: "🎯", label: "Goal", value: "Land my first internship" },
    { icon: "🏅", label: "Role", value: "ChaiCode Campus Ambassador" },
    { icon: "🎬", label: "YouTube", value: "Node.js content" },
  ],
};



export const certificates = [
  {
    id: 1,
    name: "[CERTIFICATE_NAME]",       // e.g. "Web Development Bootcamp"
    issuer: "[ISSUER_NAME]",          // e.g. "ChaiCode"
    date: "[MONTH YEAR]",             // e.g. "Jan 2025"
    category: "Tech",                 // "Tech" | "Social" | "Campus"
    thumbnail: "/certs/cert1.jpg",    // put images in public/certs/
    fullImage: "/certs/cert1.jpg",
  },
  {
    id: 2,
    name: "[CERTIFICATE_NAME]",
    issuer: "[ISSUER_NAME]",
    date: "[MONTH YEAR]",
    category: "Campus",
    thumbnail: "/certs/cert2.jpg",
    fullImage: "/certs/cert2.jpg",
  },
  {
    id: 3,
    name: "[CERTIFICATE_NAME]",
    issuer: "[ISSUER_NAME]",
    date: "[MONTH YEAR]",
    category: "Social",
    thumbnail: "/certs/cert3.jpg",
    fullImage: "/certs/cert3.jpg",
  },
];

export const education = [
  {
    id: 1,
    degree: "B.Tech — Computer Science & Engineering",
    institution: "J.C.Bose University of Science & Technology, (YMCA) Faridabad",
    year: "2025 — 2029",
    grade: "Current",
    type: "University",
  },
  {
    id: 2,
    degree: "Class 12th",
    institution: "Shamrock Public School, Kaithal",
    year: "2025",
    grade: "91%",
    type: "School",
  },
  {
    id: 3,
    degree: "Class 10th",
    institution: "[SCHOOL_NAME]",
    year: "2023",
    grade: "98%",
    type: "School",
  },
];

export const stats = [
  { label: "GitHub Repos", value: 15, suffix: "+" },
  { label: "Certificates", value: 5, suffix: "+" },
  { label: "YouTube Videos", value: 1, suffix: "+" },
  { label: "Campus Events", value: 1, suffix: "+" },
];

export const funFacts = [
  {
    emoji: "🌙",
    title: "Night Owl",
    desc: "My best code gets written after midnight. Mornings? Not so much.",
  },
  {
    emoji: "🥛",
    title: "Milk Over Chai",
    desc: "ChaiCode ambassador who doesn't drink chai. Yes, I drink milk instead.",
  },
  {
    emoji: "📵",
    title: "Social Media? Barely.",
    desc: "While everyone chases trends, I am too busy actually building things.",
  },
  // {
  //   emoji: "🗣️",
  //   title: "Hinglish Speaker",
  //   desc: "Friends expect Haryanvi, they get fluent Hindi-English mix instead.",
  // },
];

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "C", icon: "devicon-c-plain colored", level: "know" },
      { name: "C++", icon: "devicon-cplusplus-plain colored", level: "know" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored", level: "know" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored", level: "know" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: "devicon-html5-plain colored", level: "know" },
      { name: "CSS3", icon: "devicon-css3-plain colored", level: "know" },
      { name: "React", icon: "devicon-react-original colored", level: "know" },
      { name: "Next.js", icon: "devicon-nextjs-plain", level: "learning" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored", level: "know" },
      { name: "Express", icon: "devicon-express-original", level: "know" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored", level: "know" },
      { name: "Prisma", icon: "devicon-prisma-plain", level: "know" },
      { name: "Drizzle", icon: "devicon-postgresql-plain colored", level: "know" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "devicon-git-plain colored", level: "know" },
      { name: "GitHub", icon: "devicon-github-original", level: "know" },
      { name: "VS Code", icon: "devicon-vscode-plain colored", level: "know" },
    ],
  },
  {
    category: "Learning Next",
    items: [
      { name: "Next.js", icon: "devicon-nextjs-plain", level: "learning" },
      { name: "DSA in C++", icon: "devicon-cplusplus-plain colored", level: "learning" },
    ],
  },
];


export const projects = [
  {
    id: 1,
    title: "Mintlify Clone",
    description: "Pixel-perfect clone of the Mintlify landing page.",
    category: "HTML",
    tech: ["HTML", "CSS"],
    github: "https://github.com/radhika/minlify-clone",
    live: "",
    featured: false,
  },
  {
    id: 2,
    title: "Cursor Clone",
    description: "Static clone of the Cursor.sh landing page.",
    category: "HTML",
    tech: ["HTML", "CSS"],
    github: "https://github.com/radhika/cursor-clone",
    live: "",
    featured: false,
  },
  {
    id: 3,
    title: "BMI Calculator",
    description: "Clean BMI calculator with result category display.",
    category: "JavaScript",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/radhika/bmi-calculator",
    live: "",
    featured: false,
  },
  {
    id: 4,
    title: "Digital Watch",
    description: "Live digital clock with date display and styling.",
    category: "JavaScript",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/radhika/digital-watch",
    live: "",
    featured: false,
  },
  {
    id: 5,
    title: "Color Switch Game",
    description: "Tap-based color matching game built in vanilla JS.",
    category: "JavaScript",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/radhika/color-switch",
    live: "",
    featured: false,
  },
  {
    id: 6,
    title: "Portfolio",
    description: "Personal portfolio site built with React + Vite + Tailwind.",
    category: "React",
    tech: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/radhika/portfolio",
    live: "",
    featured: false,
  },
  {
    id: 7,
    title: "CafeMate",
    description: "AI-powered cafe management fullstack app with smart ordering.",
    category: "Fullstack",
    tech: ["React", "Node.js", "MongoDB", "AI"],
    github: "https://github.com/radhika/cafemate",
    live: "",
    featured: true,
  },
  {
    id: 8,
    title: "Eventify",
    description: "Fullstack event management platform with auth and dashboards.",
    category: "Fullstack",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/radhika/eventify",
    live: "",
    featured: true,
  },
  {
    id: 9,
    title: "DB Schema Diagrams",
    description: "Collection of database schema diagrams for various use cases.",
    category: "Other",
    tech: ["dbdiagram.io", "SQL"],
    github: "https://github.com/radhika/db-schemas",
    live: "",
    featured: false,
  },
  {
    id: 10,
    title: "Polling App",
    description: "Fullstack polling app with real-time votes — fixes in progress.",
    category: "Fullstack",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/radhika/polling-app",
    live: "",
    featured: false,
  },
];