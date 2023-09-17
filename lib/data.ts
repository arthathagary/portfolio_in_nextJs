import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Edu & Exp",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bsc (Hons) in Software Engineering",
    location: "Cardiff Metropolitan University",
    description:
      "Currently in end of the 2nd year",
    icon: React.createElement(LuGraduationCap),
    date: " 2022 - 2025",
  },
  {
    title: "Intern Software Engineer",
    location: "Clancodes Lab",
    description:
      "I worked as a full stack developer for 2 months. Focused tech stacks are NextJs, ReactJs, ExpressJs, NodeJs and DynamoDB",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
  {
    title: "GCE A/L",
    location: "T/Kinniya Central College",
    description:
      "Engineering Technology Stream",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
] as const;

export const projectsData = [
  {
    title: "Snow Removal Side",
    description:
      "Designed and implemented frontend and backend systems for Snow Removal app (Backend still in development). Add Stripe Payment Gateway for the webApp.",
    liveSide : "https://snow-removal-side.vercel.app/",
    gitHub : "https://github.com/arthathagary/snowRemovalSide",
    tags: ["NextJs", "DynamoDB", "Tailwind", "Framer Motion"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Clancods Lab Site",
    description:
      "Built entire web application using NextJS Designed landing page using Tailwind CSS for designing purpose. Add animation via framer motion",
    liveSide : "https://clancode-labs-side.vercel.app/",
    gitHub : "https://github.com/arthathagary/clancode-labs-side",
    tags: ["NextJs", "Tailwind", "Framer Motion"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Ecommerce",
    description:
      "Built a eCommerce webApp. (Still Work On The Project).Completed CRUD operations for the eCommerce WebApp.",
    liveSide : "https://github.com/arthathagary/ecommerceWeb",
    gitHub : "https://github.com/arthathagary/ecommerceWeb",
    tags: ["React", "NodeJs", "Tailwind", "Framer Motion"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Framer Motion",
] as const;
