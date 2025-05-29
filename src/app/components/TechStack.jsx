import { coreCompetencies, databaseAndAnalyticalTools, technicalSkills } from "@/lib/imageCarousel";
import React from "react";
import { InfiniteMovingCards } from "./shared/InfiniteMovingCards";

const TechStack = () => {
  return (
    <div>
      <InfiniteMovingCards items={technicalSkills} direction="left" speed="fast" pauseOnHover={true} className="my-4" />

      <InfiniteMovingCards items={databaseAndAnalyticalTools} direction="reverse" speed="fast" pauseOnHover={true} className="my-4" />

      <InfiniteMovingCards items={coreCompetencies} direction="left" speed="fast" pauseOnHover={true} className="my-4" />
    </div>
  );
};

export default TechStack;
