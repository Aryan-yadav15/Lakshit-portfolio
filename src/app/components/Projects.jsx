import React, { forwardRef } from "react";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { Card, Carousel } from "./shared/appleCardCarousel";

const Projects = forwardRef((props, ref) => {
  const ProjectContent = ({ project }) => (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <h3 className="text-2xl font-bold text-neutral-700 dark:text-neutral-200 mb-4">
        {project.title}
      </h3>
      <p className="text-neutral-600 dark:text-neutral-400 text-base mb-4">
        Duration: {project.duration}
      </p>
      <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-400 text-base md:text-lg">
        {project.details.map((detail, index) => (
          <li key={index} className="mb-2">{detail}</li>
        ))}
      </ul>
      <Image
        src={project.image}
        alt={project.title}
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-cover rounded-lg mt-6"
      />
    </div>
  );

  const cards = projects.projects.map((project, index) => (
    <Card 
      key={project.title} 
      card={{
        category: "Project",
        title: project.title,
        src: project.image,
        content: <ProjectContent project={project} />
      }} 
      index={index} 
    />
  ));

  return (
    <div ref={ref} className="w-full h-full py-20">
      <div className="text-7xl font-syne font-bold max-w-7xl pl-4 mx-auto">
        <h1>Recent</h1>
        <h1 className="text-slate-500">Projects</h1>
      </div>
      <Carousel items={cards} />
    </div>
  );
});

Projects.displayName = 'Projects';

export default Projects;