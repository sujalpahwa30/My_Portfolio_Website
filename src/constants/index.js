import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    threejs,
    linux,
    mysql,
    nike,
    car,
    gaming,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
        name: "Linux",
        icon: linux,
    },
    {
        name: "MySQL",
        icon: mysql,
    }
  ];
  
  const projects = [
    {
      name: "Zentry : A Gaming Website",
      description:
        "Created a Metaverse Gaming website using React and GSAP having cool and nice animations in it.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "gsap",
          color: "pink-text-gradient",
        },
      ],
      image: gaming,
      live_project_link: "https://zentry-gaming-website-psi.vercel.app/",
    },
    {
      name: "Nike : A Landing Page Website",
      description:
        "Created a Nike Landing Page using React and Tailwind CSS which includes a responsive design to enhance user experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: nike,
      live_project_link: "https://nike-landing-page-website.vercel.app/",
    },
    {
      name: "Self Driving Car Simulation Website",
      description:
        "Developed a self-driving car simulation with vanilla JavaScript, featuring a neural network for autonomous driving behavior.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: car,
      live_project_link: "https://self-driving-car-js-mu.vercel.app/",
    },
  ];
  
  export { services, technologies, projects };