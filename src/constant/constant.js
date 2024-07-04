import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Healthpulse from "../assets/Healthpulse.png"
import Flixify from "../assets/Flixify.png"
import Byte from "../assets/Byte.png"

export const navItems = [
  { key: "01", value: "About",id:"about" },
  { key: "02", value: "Experience",id:"experience" },
  { key: "03", value: "Work",id:"projects" },
  { key: "04", value: "Contact",id:"contact" },
];

export const inputs=[
  {key:"1",type:"text",label:"Name"},
  {key:"2",type:"text",label:"Email"},
  {key:"3",type:"text",label:"Message"}
]


export const known_technologies=[
  {key:1,name:"Javascript (ES6+)"},
  {key:2,name:"React.js"},
  {key:3,name:"RTK Query"},
  {key:4,name:"Tailwind CSS"},
  {key:5,name:"Material UI"},
  {key:6,name:"React Router"},
  {key:7,name:"MS SQL Server"},
  {key:8,name:"Mongo DB"},
  {key:9,name:"Express.js"},
  {key:10,name:"Node.js"},
]

export const social_links = [
  {
    name: " Github",
    link: "https://github.com/SalmanNawaz921",
    Icon: FaGithub,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/salmannawazrajput",
    Icon: FaInstagram,
  },
  { name: "Twitter", link: "https://www.x.com/salmanch921", Icon: FaXTwitter },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/salman921",
    Icon: FaLinkedinIn,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/salmanch",
    Icon: FaFacebookF,
  },
];

export const experiences_arr = [
  {
    company_name: "CODSOFT",
    starting_date: "August 2023",
    ending_date: "September 2023",
    role: "Web Developer Intern",
    responsibilites: [
      "Front-End Development Expertise: Developed user interfaces using modern JavaScript frameworks, HTML5, and CSS3, ensuring a contemporary and seamless user experience.",
      "Effective Problem Solver: Demonstrated the ability to prioritize and solve multiple tasks concurrently",
    ],
  },
  {
    company_name: "UET Lahore",
    starting_date: "September 2023",
    ending_date: "Present",
    role: "Teaching Assistant",
    responsibilites: [
      "Guided Learning: Facilitated comprehension of course material for first & second semester students through clear explanations and active engagement.",
      "Administrative Efficiency: Handled grading, student progress tracking, and logistical coordination.",
    ],
  },
];

export const projects_arr = [
  {
    project_name: "HealthPulse",
    description:
      "This project is a comprehensive healthcare data analysis system designed to streamline various healthcare-related tasks and information management.",
    technologies_used: ["React.js", "RTK Query", "Ant Design", "Tailwind CSS", "Chart.js", "Microsoft SQL Server","Node.js","Express.js"],
    img: Healthpulse,
    github: "https://github.com/SalmanNawaz921/Healthcare_Management_System",
    preview: "https://healthcare-data-analysis-sn.netlify.app",
  },
  {
    project_name: "Flixify",
    description:
      "A web application designed to provide users with a seamless experience for exploring movies, discovering new releases, and managing their favorites and watchlists.",
    technologies_used: ["React.js", "Redux Toolkit", "Material UI", "TMDB API"],
    img: Flixify,
    github: "https://github.com/SalmanNawaz921/flixify",
    preview: "https://flixify-sn.netlify.app",
  },
  {
    project_name: "Byte",
    description:
      "A modern news app offering real-time updates from News API. It features a sleek, responsive design inspired by Vox to deliver an engaging user experience across all devices.",
    technologies_used: ["React.js", "RTK Query", "Material UI", "React-Router", "News API"],
    img: Byte,
    github: "https://github.com/SalmanNawaz921/Byte",
    preview: "https://byte-sn.netlify.app",
  },
  {
    project_name: "xCafe",
    description:
      "A simple landing page features a welcoming introduction, a section showcasing popular menu items, and a reservation form for convenient table booking.",
    technologies_used: ["HTML", "CSS", "Javascript"],
    img: "/",
    github: "https://github.com/SalmanNawaz921/xCafe",
    preview: "https://xcafe-sn.netlify.app",
  },
  {
    project_name: "Nike Landing Page",
    description:
      "A modern landing page which showcases Tailwind CSS and React.js combined in a Vite React app. It features a elagant design inspired by Nike's official website.",
    technologies_used: ["React.js", "Tailwind CSS", "Vite"],
    img: "",
    github: "https://github.com/SalmanNawaz921/Nike_Landing_Page",
    preview: "https://nike-landing-page-sn.netlify.app",
  },
  
  {
    project_name: "AI Text to Speech",
    description:
      "A minimal app that allows users to input text and convert it to speech, providing an intuitive and interactive experience for text-to-audio conversion.",
    technologies_used: ["React.js", "Tailwind CSS", "SpeechSynthesis API"],
    img: "/",
    github: "https://github.com/SalmanNawaz921/AI_Text_To_Speech",
    preview: "https://xspeech.netlify.app",
  },
  {
    project_name: "Text Analyzer",
    description:
      "A simple text analyzer web application built with React and Bootstrap. This tool allows users to perform basic text operations such as removing lines, managing spaces, and converting case.",
    technologies_used: ["React.js", "React Router", "Bootstrap"],
    img: "/",
    github: "https://github.com/SalmanNawaz921/Txt-Analyzer",
    preview: "https://salmannawaz921.github.io/Txt-Analyzer",
  },
  {
    project_name: "iNotebook",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    technologies_used: [" VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
    img: "/",
    github: "/",
    preview: "/",
  },
  {
    project_name: "Currency Exchange",
    description:
      "A dynamic web app built that allows users to seamlessly convert between different currencies, making it perfect for travelers, investors, and anyone dealing with international finance.",
    technologies_used: ["React.js", "Currency Exchange API", "Bootstrap"],
    img: "/",
    github: "https://github.com/SalmanNawaz921/Currency-Converter",
    preview: "https://salmannawaz921.github.io/Currency-Converter",
  },
];
