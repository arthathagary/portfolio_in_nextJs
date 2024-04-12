"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a Software Engineer , I applied my strong foundation in front-end
        technologies, such as HTML, CSS, and JavaScript, to create dynamic and
        responsive user interfaces using React, Tailwind CSS, Material-UI (MUI),
        Bootstrap, Shadcn, RadixUI, MantineUI and Next.js. I also leveraged my
        proficiency in back-end development, particularly in Node.js,
        Express.js, and MongoDB, mySql, to seamlessly bridge the gap between
        front-end and back-end development. I am currently pursuing a BS degree
        in Software Engineering. I am passionate about crafting exceptional web
        applications, paying equal attention to front-end aesthetics and
        back-end functionality. I thrive in group settings and enjoy working
        with cross-functional teams to bring creative ideas to life.
      </p>
    </motion.section>
  );
}
