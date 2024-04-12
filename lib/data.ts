import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import snowRemovalImg from "@/public/snowremoval.png";
import eduKinniya from "@/public/edukinniya.png";

import clanCodesImg from "@/public/clancodes.png";
import issueImg from "@/public/issue.png";

import staySyncImg from "@/public/staysync.png";

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
    description: "2nd Year Completed",
    icon: React.createElement(LuGraduationCap),
    date: " 2022 - 2025",
  },
  {
    title: "Intern Software Engineer",
    location: "Clancodes Lab",
    description:
      "I worked as a full stack developer. Focused tech stacks are NextJs, ReactJs, ExpressJs, NodeJs and MongoDB",
    icon: React.createElement(CgWorkAlt),
    date: "2023 Aug - 2024 Feb",
  },
  {
    title: "GCE A/L",
    location: "T/Kinniya Central College",
    description: "Engineering Technology Stream, District Rank-25",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
] as const;

export const projectsData = [
  {
    title: "Edu Kinniya - Results Checking Side",
    description: "Result verification via NIC or certificate numbers.",
    liveSide: "https://www.edukinniya.com/",
    gitHub: "https://github.com/arthathagary/result-checker",
    tags: [
      "NextJs",
      "MongoDB",
      "TailwindCss",
      "ShadcnUi",
      "NextAuth",
      "NodeJs",
    ],
    imageUrl: eduKinniya,
  },
  {
    title: "Snow Removal Side",
    description:
      "Designed and implemented frontend and backend systems for Snow Removal app. Add Stripe Payment Gateway for the webApp.",
    liveSide: "https://snow-removal-side.vercel.app/",
    gitHub: "https://github.com/arthathagary/snowRemovalSide",
    tags: ["NextJs", "TailwindCss", "Framer Motion", "Stripe"],
    imageUrl: snowRemovalImg,
  },
  {
    title: "Clancods Lab Site",
    description:
      "Built entire web application using NextJS Designed landing page using Tailwind CSS for designing purpose. Add animation via framer motion",
    liveSide: "https://clancode-labs-side.vercel.app/",
    gitHub: "https://github.com/arthathagary/clancode-labs-side",
    tags: ["NextJs", "TailwindCss", "Framer Motion"],
    imageUrl: clanCodesImg,
  },
  {
    title: "Issue Tracker",
    description: "Track issues and assign issues to diffrent person",
    liveSide: "https://github.com/arthathagary/issue-tracker",
    gitHub: "https://github.com/arthathagary/issue-tracker",
    tags: ["NextJs", "NodeJs", "TailwindCss", "MySql", "Prisma"],
    imageUrl: issueImg,
  },
  {
    title: "Stay-Sync",
    description:
      "A hotel management system. Diffrent User Roles available in app like customer and admin",
    liveSide: "https://github.com/arthathagary/staySync",
    gitHub: "https://github.com/arthathagary/staySync",
    tags: ["ReactJs", "NodeJs", "TailwindCss", "MySql"],
    imageUrl: staySyncImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "ReactJs",
  "NextJs",
  "NodeJs",
  "Git",
  "TailwindCss",
  "ShadcnUi",
  "Material UI",
  "MantineUi",
  "RadixUi",
  "MongoDB",
  "MySql",
  "Firebase",
  "ExpressJs",
  "Framer Motion",
] as const;
