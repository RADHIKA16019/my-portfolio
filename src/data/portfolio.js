// ── PORTFOLIO DATA ──
// Replace all [PLACEHOLDERS] with your actual info

export const personalInfo = {
  name: "Radhika",
  role: "CS Student",
  college: "J.C.Bose University of Science & Technology, YMCA Faridabad",
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
  bio: "Hey! I'm a first-year CS student who loves building things for the web. I'm currently learning modern web development, exploring new technologies, and sharing what I learn along the way. Still early in my journey — but moving fast. 🚀",
  currently: [
    { icon: "📚", label: "Learning", value: "Web Dev + Node.js" },
    { icon: "🎯", label: "Goal", value: "Land my first internship" },
    { icon: "🏅", label: "Role", value: "ChaiCode Campus Ambassador" },
    { icon: "🎬", label: "YouTube", value: "Node.js content" },
  ],
};

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "HTML5", icon: "devicon-html5-plain colored", level: "know" },
      { name: "CSS3", icon: "devicon-css3-plain colored", level: "know" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored", level: "know" },
      { name: "C", icon: "devicon-c-plain colored", level: "know" },
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
      { name: "Node.js", icon: "devicon-nodejs-plain colored", level: "learning" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored", level: "learning" },
      { name: "React", icon: "devicon-react-original colored", level: "learning" },
      { name: "DSA", icon: "devicon-cplusplus-plain colored", level: "learning" },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "[PROJECT_NAME]",
    description: "[Short description of what this project does]",
    tags: ["HTML", "CSS", "JavaScript"],
    badge: "Self Built",          // "Self Built" | "AI Assisted" | "Schema Design"
    github: "https://github.com/[username]/[repo]",
    live: "[live-link-or-null]",
    featured: true,
  },
  {
    id: 2,
    title: "[PROJECT_NAME]",
    description: "[Short description of what this project does]",
    tags: ["HTML", "CSS"],
    badge: "AI Assisted",
    github: "https://github.com/[username]/[repo]",
    live: null,
    featured: false,
  },
  {
    id: 3,
    title: "[PROJECT_NAME]",
    description: "[Short description of what this project does]",
    tags: ["Node.js", "MongoDB"],
    badge: "Self Built",
    github: "https://github.com/[username]/[repo]",
    live: null,
    featured: false,
  },
];

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
    institution: "[COLLEGE_NAME]",
    year: "2024 — 2028",
    grade: "Current",
    type: "college",
  },
  {
    id: 2,
    degree: "Class 12th",
    institution: "[SCHOOL_NAME]",
    year: "[YEAR]",
    grade: "[PERCENTAGE/GRADE]",
    type: "school",
  },
  {
    id: 3,
    degree: "Class 10th",
    institution: "[SCHOOL_NAME]",
    year: "[YEAR]",
    grade: "[PERCENTAGE/GRADE]",
    type: "school",
  },
];

export const stats = [
  { label: "GitHub Repos", value: 15, suffix: "+" },
  { label: "Certificates", value: 5, suffix: "+" },
  { label: "YouTube Videos", value: 1, suffix: "" },
  { label: "Campus Events", value: 1, suffix: "+" },
];