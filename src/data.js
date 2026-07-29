import aberashImg from './assets/aberash.png'
import kebronImg from './assets/kebron.png'
import eueeImg from './assets/euee.png'
import tomiImg from './assets/tomi.png'
import heroImg from './assets/hero.png'

export { heroImg }

export const personalInfo = {
  name: "Behailu Berhanu",
  initials: "B/",
  title: "Frontend Developer & UI/UX Designer",
  tagline: "I build modern, responsive and user-friendly websites that solve real problems and create impact.",
  location: "Ethiopia",
  grade: "Grade 11 Student",
  role: "Problem Solver",
  email: "behailuberhanu2025@gmail.com",
  phone: "+251 965 290 735",
  signature: "Behailu Berhanu",
  cvLink: "#",
  socials: [
    { label: "GitHub", icon: "github", url: "https://github.com/" },
    { label: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/" },
    { label: "Telegram", icon: "telegram", url: "https://t.me/" },
    { label: "Email", icon: "email", url: "mailto:behailuberhanu2025@gmail.com" },
  ],
};

export const stats = [
  { icon: "folder", label: "Projects", value: "10+", sub: "Completed" },
  { icon: "code", label: "Technologies", value: "8+", sub: "Mastered" },
  { icon: "users", label: "Users Impacted", value: "500+", sub: "Students" },
  { icon: "target", label: "Focus", value: "Web Development", sub: "& UI/UX Design" },
];

export const aboutInfo = {
  headline: "A student. A builder.\nA dreamer from Ethiopia.",
  bio: "I'm a Grade 11 student passionate about technology, design and solving real-world problems. I love turning ideas into meaningful digital products. When I'm not coding, I'm leading my club, learning about AI or improving my designs.",
  age: 16,
  from: "Ethiopia",
  fromSub: "Central Ethiopia",
  focus: "Web Development & UI/UX Design",
  founder: "HIGA Coders Club",
  founderSub: "50+ Members",
  creator: "Entrance Exam Bot",
  creatorSub: "500+ Users",
  learning: "AI, Algorithms & System Design",
};

export const skills = [
  { name: "HTML5", icon: "html5", color: "#e34f26" },
  { name: "CSS3", icon: "css3", color: "#264de4" },
  { name: "JavaScript", icon: "javascript", color: "#f7df1e" },
  { name: "Python", icon: "python", color: "#3776ab" },
  { name: "Django", icon: "django", color: "#092e20" },
  { name: "Figma", icon: "figma", color: "#f24e1e" },
  { name: "Git", icon: "git", color: "#f05032" },
  { name: "GitHub", icon: "github", color: "#ffffff" },
  { name: "VS Code", icon: "vscode", color: "#007acc" },
  { name: "Bootstrap", icon: "bootstrap", color: "#7952b3" },
  { name: "Telegram API", icon: "telegram", color: "#26a5e4" },
  { name: "React", icon: "react", color: "#61dafb" },
];

export const projects = [
  {
    id: 1,
    title: "Tomi Fashions",
    description: "E-commerce website for a fashion brand.",
    techStack: ["HTML", "CSS", "JS"],
    image: tomiImg,
    liveUrl: null,
    githubUrl: "https://github.com/BehailuBerhanu/tomi-fashion",
  },
  {
    id: 2,
    title: "Kebron Hotel",
    description: "Modern hotel website with elegant UI/UX.",
    techStack: ["HTML", "CSS", "JS"],
    image: kebronImg,
    liveUrl: "https://kebron-hotel.vercel.app/",
    githubUrl: "https://github.com/BehailuBerhanu/kebron-hotel",
  },
  {
    id: 3,
    title: "Aberash Hotel",
    description: "Hotel website with booking system integration.",
    techStack: ["HTML", "CSS", "JS"],
    image: aberashImg,
    liveUrl: "https://aberash-hotel.vercel.app/",
    githubUrl: "https://github.com/BehailuBerhanu/aberash-hotel",
  },
  {
    id: 4,
    title: "Entrance Exam Bot",
    description: "Telegram bot that provides past exams to 500+ students.",
    techStack: ["Python", "Telegram API"],
    image: eueeImg,
    liveUrl: "https://t.me/EUEE_bot",
    githubUrl: null,
  },
];

export const experience = [
  {
    id: 1,
    icon: "user",
    role: "Founder & President",
    org: "HIGA Coders Club",
    description: "Built a club of 50+ students passionate about coding and technology.",
    period: "2023 – Present",
  },
  {
    id: 2,
    icon: "bot",
    role: "Entrance Exam Bot",
    org: "Project Lead",
    description: "Created a Telegram bot used by 500+ students across Ethiopia.",
    period: "2023 – Present",
  },
  {
    id: 3,
    icon: "code",
    role: "Frontend Developer",
    org: "GeeX",
    description: "Interning as a frontend developer and working on real-world projects.",
    period: "2024",
  },
  {
    id: 4,
    icon: "cpu",
    role: "AI Summer Camp",
    org: "Participant",
    description: "Participated in AI summer camp and assembled a personal computer.",
    period: "2024",
  },
  {
    id: 5,
    icon: "award",
    role: "English Grammar Award",
    org: "2nd Place",
    description: "Won 2nd place in national English grammar competition.",
    period: "2023",
  },
];
