// All portfolio content for Darshan Hulamani

import { color } from "framer-motion";

// export const DECOR = {
//   hero: "/assets/images/hero-transparent.png",
//   moon: "https://static.prod-images.emergentagent.com/jobs/f3effe2e-91cf-4e64-81de-bd037ca8a980/images/29f0c720ffa98d39378f3ed7c3c8bd2f457bb29fef19fa85a5d24960a74047b5.png",
//   blob: "https://static.prod-images.emergentagent.com/jobs/f3effe2e-91cf-4e64-81de-bd037ca8a980/images/0a7de88f5451c74ada92f6764fd033dc00ea1ac32f9077631c6b8200c31ac8f7.png",
//   blocks: "https://static.prod-images.emergentagent.com/jobs/f3effe2e-91cf-4e64-81de-bd037ca8a980/images/2e1ad1e6358fb400430d2a89fbfc099e5a978e596d05bb66dc976fa4f3750004.png",
//   torus: "https://static.prod-images.emergentagent.com/jobs/f3effe2e-91cf-4e64-81de-bd037ca8a980/images/45088224a345a8187b6ed0f4f1b04270833d8044401472ef3c9301fa5ea34492.png",
// };

export const DECOR = {
  hero: "/assets/images/hero-transparent.png",
  moon: "/assets/images/moon.png",
  blob: "/assets/images/blob.png",
  blocks: "/assets/images/blocks.png",
  torus: "/assets/images/tortus.png",
};

export const PROFILE = {
  name: "Darshan Hulamani",
  firstName: "Darshan",
  role: "MCA Student & Developer",
  heroTagline:
    "a developer driven by crafting clean, intelligent and unforgettable digital experiences",
  location: "Bengaluru, Karnataka, India",
  email: "darshanhulamani77@gmail.com",
  phone: "+91 88671 09603",
  resume:
    "https://drive.google.com/file/d/1lNnhhDd22VS8CLPmn9bI9HCfLmle1Udp/view?usp=sharing",
  socials: {
    github: "https://github.com/Darshan-Hulamani",
    linkedin: "https://www.linkedin.com/in/darshan-hulamani",
    whatsapp:
      "https://wa.me/8867109603?text=Hello%20Darshan%2C%20I%20want%20to%20connect%20with%20you.",
  },
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const ABOUT_TEXT =
  "I'm an MCA student at BMSIT&M with a passion for technology and innovation. My journey spans programming, machine learning and web development. From building deep-learning projects like emotion recognition to crafting modern web experiences, I love turning ideas into solutions that stand out. Let's build something incredible together!";

// export const SKILLS = [
//   {
//     no: "01",
//     title: "Programming Languages",
//     desc: "Building robust logic and data-driven applications across multiple languages.",
//     items: [
//       { name: "C", level: 85 },
//       { name: "PHP", level: 90 },
//       { name: "MySQL", level: 80 },
//       { name: "Python", level: 75 },
//     ],
//   },
//   {
//     no: "02",
//     title: "Web Technologies",
//     desc: "Designing and developing responsive, modern and conversion-focused websites.",
//     items: [
//       { name: "HTML / CSS", level: 90 },
//       { name: "JavaScript", level: 75 },
//       { name: "WordPress", level: 80 },
//     ],
//   },
//   {
//     no: "03",
//     title: "Tools & Machine Learning",
//     desc: "Exploring computer vision and ML to bring intelligence into applications.",
//     items: [
//       { name: "VS Code", level: 85 },
//       { name: "OpenCV", level: 50 },
//       { name: "Machine Learning", level: 35 },
//     ],
//   },
// ];

export const SKILLS = [
  {
    no: "01",
    title: "Frontend",
    level: 88,
    desc: "Designing and building responsive, modern and conversion-focused interfaces.",
    items: ["HTML5", "CSS3", "JavaScript", "WordPress", "Elementor"],
  },
  {
    no: "02",
    title: "Backend & Databases",
    level: 78,
    desc: "Building robust server-side logic and managing data-driven applications.",
    items: ["PHP", "Python", "C", "MySQL"],
  },
  {
    no: "03",
    title: "Machine Learning & Tools",
    level: 55,
    desc: "Exploring computer vision and ML to bring intelligence into applications.",
    items: ["Python", "OpenCV", "Streamlit", "Machine Learning", "VS Code"],
  },
];

export const PROJECTS = [
  {
    no: "01",
    name: "Safe Route",
    category: "Hackathon Winner",
    desc: "A community-powered safety navigation platform that helps users identify and avoid unsafe areas through real-time reporting, smart route planning, danger-zone alerts and one-tap SOS support.",
    tech: ["React + Vite", "Firebase", "Leaflet", "OSRM", "Mapbox", "PWA"],
    source: "https://github.com/Darshan-Hulamani/Safe-Route",
    demo: "https://saferoute-gray-phi.vercel.app/",
  },
  {
    no: "02",
    name: "Mano-Raaga",
    category: "Machine Learning",
    desc: "An AI-based emotion music player built with OpenCV and MySQL that detects user emotions via webcam and plays mood-based music. Independently developed the system, integrating facial emotion recognition with personalized music recommendations.",
    tech: ["Python", "Streamlit", "OpenCV", "MySQL", "HTML/CSS"],
    source: "https://github.com/darshan-hulamani/mano-raaga",
    demo: "https://drive.google.com/file/d/1sBowkJGrD3bUlDW9e7Dhl3LNAjpFuCCC/view?usp=sharing",
  },
  {
    no: "03",
    name: "Threadie Tales",
    category: "Frontend",
    desc: "A responsive business website for a handcrafted embroidery brand, featuring product galleries, custom order requests, pricing details, and customer engagement tools.",
    tech: ["HTML", "CSS", "JavaScript", "EmailJS"],
    source: " ",
    demo: "https://threadietales-design.github.io/threadie_tales/",
  },
  {
    no: "04",
    name: "The Vyle — Storefront",
    category: "Frontend",
    desc: "A responsive e-commerce frontend featuring intuitive navigation, product listings and a seamless checkout interface, built from scratch with vanilla web technologies.",
    tech: ["HTML", "CSS", "JavaScript"],
    source:
      "https://github.com/darshan-hulamani/E-Commerce-Website-The-Vyle-Frontend",
    demo: "https://the-vyle-fashion-brand.on.drv.tw/www.TheVyle!Brand.com/",
  },
  {
    no: "05",
    name: "The Vyle — Full Store",
    category: "Full-Stack",
    desc: "A fully developed and hosted e-commerce website built with WordPress, designed in Elementor and powered by WooCommerce — fully manageable from the backend without coding.",
    tech: ["WordPress", "Elementor", "WooCommerce", "HTML/CSS"],
    source: "https://github.com/darshan-hulamani/The_Vyle_E-Commerce_Website/",
    demo: "https://the-vyle-business.42web.io/",
  },
  {
    no: "06",
    name: "Weather Forecast",
    category: "Web App",
    desc: "A weather app using the OpenWeatherMap API to show real-time data with unit conversion, handling front-end integration, API calls and feature logging.",
    tech: ["OpenWeatherMap API", "HTML", "CSS", "JavaScript"],
    source: "https://github.com/darshan-hulamani/Weather-Forecast",
    demo: "https://darshan-hulamani.github.io/Weather-Forecast/",
  },
];

export const EXPERIENCE = [
  {
    role: "Data Annotator",
    company: "Triye Technologies",
    location: "Bengaluru (Remote)",
    date: "Dec 2025 — Feb 2026",
    website: "https://www.triyetech.com/",
    points: [
      "Annotated 100+ video datasets using CVAT for production-grade computer vision model training.",
      "Improved annotation workflow efficiency and consistency in a fast-paced, deadline-driven environment.",
      "Collaborated and led a team of 3 annotators ensuring high-quality output under strict deadlines.",
      <a href="https://drive.google.com/file/d/1tQLupCyn1bCS9v9CgUL8Risb4-mjmHqi/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: "#79BAEC" }} ><b>Click to view Experienced Letter</b></a>,
      <a href="https://drive.google.com/file/d/1hcK0fFtYtsH_9kOB6bTAGa-gq3M5fHcM/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: "#79BAEC" }}><b>Click to view Certificate of Internship</b></a>,
    ],
    tags: ["Data Annotation", "Video Annotation", "CVAT", "AI / ML"],
  },
];

export const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "BMS Institute of Technology and Management",
    location: "Yelahanka, Bengaluru",
    date: "2025 — Present",
    score: "CGPA 9.0",
    desc: "Pursuing MCA with a focus on industry-based learning, aiming for a successful career in computer science.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "JSS Shri Manjunatheshwara Institute of UG & PG College, Dharwad (KUD)",
    location: "Dharwad, Karnataka",
    date: "2022 — 2025",
    score: "CGPA 9.04",
    desc: "Focused on software development, web technologies and machine learning. Completed projects including Mano-Raaga (Emotion Recognition Music Player).",
  },
  {
    degree: "Senior Secondary (XII)",
    school: "JSS R S Hukkerikar College, Dharwad",
    location: "Dharwad, Karnataka",
    date: "2021 — 2022",
    score: "89.33% (536/600)",
    desc: "Completed XII choosing EBAS as combination under the Karnataka State Board.",
  },
  {
    degree: "Secondary (X) — SSLC",
    school: "JSS Shri Manjunatheshwara English Medium School, Dharwad",
    location: "Dharwad, Karnataka",
    date: "2019 — 2020",
    score: "81.6% (510/625)",
    desc: "Completed SSLC under the Karnataka State Board.",
  },
];

const A = "/assets/Achievements";
export const ACHIEVEMENTS = [
  {
    title: "National Level Paper Presentation — 1st",
    issuer: "KLE IT, Hubballi",
    date: "2024",
    desc: "Secured 1st position presenting on Light Fidelity (Li-Fi) among 20+ teams at the National Level Paper Presentation Competition.",
    img: `${A}/Advitiya/presentation.jpg`,
    photos: [
      `${A}/Advitiya/presentation.jpg`,
      `${A}/Advitiya/award_fun.jpg`,
      `${A}/Advitiya/group.jpg`,
      `${A}/Advitiya/pre-post.jpg`,
      `${A}/Advitiya/Anusandhana_Certificate.jpg`,
    ],
  },
  {
    title: "Hackverse 2.O (Hackathon) — 2nd",
    issuer: "BMSIT&M, Bengaluru",
    date: "2026",
    desc: "Secured 2nd position among 25+ teams showcasing Safe Route — a community-powered safety navigation platform.",
    img: `${A}/Hackverse_2.O/img1.jpeg`,
    photos: [
      `${A}/Hackverse_2.O/img1.jpeg`,
      `${A}/Hackverse_2.O/img2.jpeg`,
      `${A}/Hackverse_2.O/Hackverse_2_O_Certificate.png`,
    ],
  },
  {
    title: "Annual Alumni Meet 2026 — Volunteer",
    issuer: "BMS Institute of Technology & Management Alumni Association",
    date: "2026",
    desc: "Volunteered in the successful organization and execution of the Annual Alumni Meet 2026, contributing to event coordination and participant engagement. Awarded a Certificate of Appreciation.",
    img: `${A}/Alumni_Meet_2026/group.jpeg`,
    photos: [
      `${A}/Alumni_Meet_2026/making2.jpeg`,
      `${A}/Alumni_Meet_2026/making1.jpeg`,
      `${A}/Alumni_Meet_2026/certificate.jpeg`,
    ],
  },
  {
    title: "Cyber Security Finalist — 4th",
    issuer: "KLS Gogte College, Belagavi",
    date: "2025",
    desc: "Reached the finals (4th position) of Abhimanyu's Chakravyuh after four challenging rounds of cyber security events.",
    img: `${A}/Evogen/group.jpg`,
    photos: [
      `${A}/Evogen/group.jpg`,
      `${A}/Evogen/IMG-20250412-WA0058.jpg`,
      `${A}/Evogen/IMG-20250412-WA0040.jpg`,
      `${A}/Evogen/WhatsApp_Image_2025-04-13_at_23.43.57_165e0b2d.jpg`,
      `${A}/Evogen/WhatsApp_Image_2025-04-13_at_23.44.00_d106163c.jpg`,
      `${A}/Evogen/certificate.jpg`,
    ],
  },
  {
    title: "Trends & Technologies — 2nd",
    issuer: "JSS SMI College, Dharwad",
    date: "2025",
    desc: "Runner-up with a working model on Li-Fi Technology at the Trends & Technologies Competition.",
    img: `${A}/Trends_Technologies/3rd_year_LiFi.jpg`,
    photos: [
      `${A}/Trends_Technologies/3rd_year_LiFi.jpg`,
      `${A}/Trends_Technologies/1.jpg`,
      `${A}/Trends_Technologies/2.jpg`,
      `${A}/Trends_Technologies/3.jpg`,
    ],
  },
  {
    title: "Best Organiser Award",
    issuer: "JSS SMI College, Dharwad",
    date: "2025",
    desc: "Recognised for outstanding organisation and problem-solving across department events and initiatives.",
    img: `${A}/Best_Organiser.jpg`,
    photos: [`${A}/Best_Organiser.jpg`, `${A}/Best_Organiser2.jpg`],
  },
  {
    title: "Winner — Infinity 8.0",
    issuer: "Jain College, Hubballi",
    date: "2022",
    desc: "Awarded for creative solutions and strong problem-solving abilities at Infinity 8.0.",
    img: `${A}/Jain_College/infinity-8-1.jpg`,
    photos: [
      `${A}/Jain_College/infinity-8-1.jpg`,
      `${A}/Jain_College/infinity-8-7.jpg`,
      `${A}/Jain_College/1.jpg`,
      `${A}/Jain_College/2.jpg`,
      `${A}/Jain_College/me.jpg`,
    ],
  },
  {
    title: "Science Exhibition — 1st",
    issuer: "JSS SM English Medium School",
    date: "2020",
    desc: "Secured 1st position with a Hologram model creating a 3D illusion at the school Science Exhibition.",
    img: `${A}/10th-Science.jpg`,
    photos: [`${A}/10th-Science.jpg`],
  },
  {
    title: "Collage Making — 1st",
    issuer: "JSS SMI College, Dharwad",
    date: "2023",
    desc: "Won 1st position in the Collage Making event on the theme 'Crime'.",
    img: `${A}/1st_year_collage.jpg`,
    photos: [`${A}/1st_year_collage.jpg`],
  },
];

const C = "/assets/Certificates";
export const CERTIFICATES = [
  {
    title: "Google Cloud GenAI (Hack2Skill)",
    issuer: "Hack2Skill",
    date: "2025",
    img: `${C}/Hack2skill-Certificate.png`,
  },
  {
    title: "Cloud Computing in AWS",
    issuer: "Certo Meter",
    date: "2026",
    img: `${C}/AWS_Certometer.png`,
  },
  {
    title: "DBMS with Oracle & PL/SQL",
    issuer: "SQE Systems & Solutions",
    date: "2026",
    img: `${C}/Oracle_PDC.jpg`,
  },
  {
    title: "HP Life — Data Science & Analytics",
    issuer: "HP",
    date: "2024",
    img: `${C}/Certificate_HP_Life.jpg`,
  },
  {
    title: "Computer Networking",
    issuer: "Simplilearn",
    date: "2025",
    img: `${C}/Certificate_Computer_Networking.jpg`,
  },
  {
    title: "Deloitte Cyber Job Simulation",
    issuer: "Deloitte",
    date: "2025",
    img: `${C}/Certificate_Deliotte_Cyber_Job_Simulation.jpg`,
  },
  {
    title: "Digital Marketing",
    issuer: "Simplilearn",
    date: "2025",
    img: `${C}/Certificate_Digital_Marketing_Course.jpg`,
  },
  {
    title: "Microsoft Office",
    issuer: "ISCT",
    date: "2022",
    img: `${C}/Certificate_MS_Office.jpg`,
  },
  {
    title: "Tally ERP 9.0",
    issuer: "ISCT",
    date: "2022",
    img: `${C}/Certificate_Tally_ERP_9.0.jpg`,
  },
  {
    title: "Digital Productivity",
    issuer: "NIIT Foundation",
    date: "2024",
    img: `${C}/Certificate_Digital_Productivity.jpg`,
  },
  {
    title: "Financial Literacy",
    issuer: "NIIT Foundation",
    date: "2024",
    img: `${C}/Certificate_Financial_Literacy.jpg`,
  },
];

export const BADGES = [
  {
    title: "Prompt Design in Vertex AI",
    img: `${C}/Badges/prompt-design-in-vertex-ai-skill-badge.png`,
  },
  {
    title: "Build Real World AI Apps with Gemini & Imagen",
    img: `${C}/Badges/build-real-world-ai-applications-with-gemini-and-im.png`,
  },
  {
    title: "Develop GenAI Apps with Gemini & Streamlit",
    img: `${C}/Badges/develop-genai-apps-with-gemini-and-streamlit-skill-.png`,
  },
  {
    title: "Inspect Rich Documents — Multimodal RAG",
    img: `${C}/Badges/inspect-rich-documents-with-gemini-multimodality-an.png`,
  },
  {
    title: "Explore GenAI with Vertex AI Gemini API",
    img: `${C}/Badges/explore-generative-ai-with-the-vertex-ai-gemini-api.png`,
  },
];

// Marquee gallery — real photos from the journey
export const MARQUEE_ROW_1 = [
  `${A}/Advitiya/presentation.jpg`,
  `${A}/Advitiya/award_fun.jpg`,
  `${A}/Advitiya/group.jpg`,
  `${A}/Advitiya/pre-post.jpg`,
  `${A}/Hackverse_2.O/img1.jpeg`,
  `${A}/Hackverse_2.O/img2.jpeg`,
  `${A}/Evogen/group.jpg`,
  `${A}/Evogen/IMG-20250412-WA0058.jpg`,
  `${A}/Evogen/IMG-20250412-WA0040.jpg`,
  `${A}/Jain_College/1.jpg`,
  `${A}/Jain_College/2.jpg`,
];

export const MARQUEE_ROW_2 = [
  `${A}/Jain_College/infinity-8-1.jpg`,
  `${A}/Jain_College/infinity-8-7.jpg`,
  `${A}/Trends_Technologies/1.jpg`,
  `${A}/Trends_Technologies/2.jpg`,
  `${A}/Trends_Technologies/3.jpg`,
  `${A}/Trends_Technologies/3rd_year_LiFi.jpg`,
  `${A}/1st_year_collage.jpg`,
  `${A}/2nd_year_Quiz.jpg`,
  `${A}/3rd_year_collage.jpg`,
  `${A}/Best_Organiser.jpg`,
];
