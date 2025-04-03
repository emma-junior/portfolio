import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaAt } from "react-icons/fa";

export const main = [
  {
    id: 1,
    title: "Afiari Shop",
    technologies: ["REACT", "TYPESCRIPT", "TAILWIND", "RTK"],
    desc: "An eCommerce app that allows different stores to sell their products.",
    live: "https://shop.afiari.com/",
    github: "",
  },
  {
    id: 2,
    title: "Prince Oti",
    technologies: ["REACT", "TYPESCRIPT", "SASS", "GSAP"],
    desc: "Personal site for a lawyer, fintech expert and music minister",
    live: "https://princeotiamarachukwu.com/",
    github: "",
  },
  {
    id: 3,
    title: "Udo Lagos",
    technologies: ["REACT", "TYPESCRIPT", "TAILWIND", "RTK"],
    desc: "An eCommerce platform for a fashion design business.",
    live: "https://udolagos.ng/",
    github: "",
  },
  {
    id: 4,
    title: "Afiari Business",
    technologies: ["REACT", "SASS"],
    desc: "An app that enables users to seamlessly register their businesses on Afiari.",
    live: "https://business.afiari.com/",
    github: "",
  },
];

export const others = [
  {
    id: 1,
    title: "SneakersVille",
    technologies: [
      "REACT",
      "TYPESCRIPT",
      "REDUX",
      "SASS",
      "EXPRESS",
      "MONGO DB",
    ],
    desc: "An Ecommerce App for sneakers",
    live: "https://sneakersvilleapp.vercel.app/",
    github: "",
  },
  {
    id: 2,
    title: "Emken",
    technologies: ["REACT", "TYPESCRIPT", "SASS"],
    desc: "A Medical Emergency Application",
    live: "https://emken.vercel.app/",
    github: "https://github.com/emma-junior/emken",
  },
  {
    id: 3,
    title: "Drive",
    technologies: ["NEXTJS", "TYPESCRIPT", "SASS", "GSAP"],
    desc: "Landing page for a technological(Hardware) company",
    live: "https://drive-olive.vercel.app/",
    github: "https://github.com/emma-junior/drive",
  },
  {
    id: 4,
    title: "My Movie Box",
    technologies: ["REACT", "CONTEXT API"],
    desc: "A Movie app with various genre of movies",
    live: "https://mymoviebox.vercel.app/",
    github: "",
  },
  // {
  //   id: 4,
  //   title: "Trafalgar",
  //   technologies: ["REACT", "TAILWIND"],
  //   desc: "Landing page for a medical company",
  //   live: "https://trafalgar-services.netlify.app/",
  //   github: "",
  // },
];

export const articles = [
  {
    id: 1,
    title: "Beginners Guide to Coding",
    date: "October 25, 2022",
    duration: "3 mins read",
    url: "https://emmanuel-eze.hashnode.dev/beginners-guide-to-coding",
  },
];

//skills
export const skills = [
  { name: " CSS3/SASS" },
  { name: "Bootstrap/Tailwind" },
  { name: "React/Next js" },
  { name: "Git Version Control" },
  { name: "Vanilla Javascript/ES6" },
  { name: "Typescript" },
  { name: "Cypress" },
];

//experience
export const experience = [
  {
    company: "Kobo 360",
    role: "Frontend developer",
    date: "FEBRUARY 2022 - NOVEMBER 2022",
    description:
      "I joined Kobo 360 as a frontend developer, while learning new skills I also collaborated with other developers in building amazing features, maintained existing features and contributed in TDD and BDD software testing.",
  },
  {
    company: "Afiari Technologies",
    role: "Frontend developer",
    date: "DECEMBER 2021 - MARCH 2022",
    description:
      "I worked closely with a senior engineer to develop the user interfaces for a sophisticated ecommerce web application. During such time i contributed in building complex layouts and components, and also managed app state with Redux and React redux.",
  },
];

//links
export const links = [
  {
    url: "https://github.com/emma-junior",
    icon: <BsGithub />,
  },
  {
    url: "https://www.linkedin.com/in/eze-emmanuel-355897237",
    icon: <BsLinkedin />,
  },
  {
    url: "mailto:emma.c.techy@gmail.com",
    icon: <FaAt />,
  },
];
