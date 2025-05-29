import React from "react";
import Herosection from "../Herosection";
import { TimelineWrapper } from "../MyWork";
import Projects from "../Projects";
import TechStack from "../TechStack";
import Contact from "../Contact";

export default function Right({ projectsRef, experienceRef, contactRef }) {
  return (
    <div className="lg:px-20 pt-10">
      <div className="flex flex-col">
        <Herosection />
        <TechStack />
        <Projects ref={projectsRef} /> {/* Assign the projects ref here */}
        <TimelineWrapper ref={experienceRef} /> {/* Assign the experience ref here */}
        <div ref={contactRef}> {/* Contact section, if created */}<Contact/></div>
      </div>
    </div>
  );
}
