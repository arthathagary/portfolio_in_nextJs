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
      Passionate Full-Stack Developer with a strong foundation in front-end technologies, including HTML, CSS, and JavaScript. Experienced in building dynamic and responsive user interfaces using React, Tailwind CSS, Material-UI (MUI), Bootstrap and Proficient in NextJs. 

Currently, I am expanding my skill set in back-end development with a focus on NodeJs, ExpressJs, and MongoDB.

I am constantly staying updated with the latest industry trends and technologies, ensuring that I can deliver cutting-edge solutions that meet modern standards. 

      </p>

      <p>
      Collaborative by nature, I thrive in team environments and enjoy working with cross-functional teams to bring ideas to life.

If you are looking for a Full-Stack Developer who can deliver exceptional web applications with a focus on both front-end aesthetics and back-end functionality, let's connect and discuss how I can contribute to your projects.
      </p>
    </motion.section>
  );
}
