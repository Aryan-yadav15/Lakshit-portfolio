"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Left from "./components/Left/Left";
import Right from "./components/Right/Right";
import Header from "./components/Header";

export default function Home() {
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="py-10 px-5 sm:px-8 md:px-12 lg:px-20 text-white max-w-8xl mx-auto">
      <Header
        projectsRef={projectsRef}
        experienceRef={experienceRef}
        contactRef={contactRef}
      />
      <div className="relative flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-2/6 mb-10 lg:mb-0">
          <Left />
        </div>
        <div className="w-full lg:w-2/3 xl:w-3/5">
          <Right
            projectsRef={projectsRef}
            experienceRef={experienceRef}
            contactRef={contactRef}
          />
        </div>
      </div>
    </div>
  );
}
