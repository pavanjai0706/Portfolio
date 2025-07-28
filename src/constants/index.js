// --- STRUCTURAL DATA (We can customize this later if you want) ---

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

// --- YOUR PERSONALIZED CONTENT ---

// Updated with your single experience
const expCards = [
  {
    review:
      "Pavan builds intelligent systems by combining AI development and data science to turn data into smart, deployable solutions.",
    imgPath: "/images/exp1.png", // Placeholder image, we can change later
    logoPath: "/images/logo1.png", // Placeholder logo, we can change later
    title: "AI Developer",
    date: "March 2025 - Present",
    responsibilities: [
      "Design and deploy machine learning models using real-world data.",
      "Build and maintain full-stack applications that integrate AI functionalities.",
      "Analyze complex datasets to drive insights and inform intelligent system design.",
    ],
  },
];

// Updated tech stack with only the skills that have existing, working models.
const techStackIcons = [
  {
    name: "Fullstack Development",
    modelPath: "/models/react_logo-transformed.glb", // Using React logo as a symbol for modern fullstack
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Version Control",
    modelPath: "/models/git-svg-transformed.glb", // Using Git logo for version control
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

// Social links - we will leave this empty for now to avoid any missing image errors.
const socialImgs = [];


// --- EMPTY PLACEHOLDER DATA ---

const logoIconsList = [];
const techStackImgs = [];
const expLogos = [];
const testimonials = [];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};