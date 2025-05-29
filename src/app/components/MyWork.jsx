import React, { forwardRef } from "react";
import { workExperience } from "@/lib/workExperience";
import { Timeline } from "./shared/Timeline";

export const TimelineWrapper = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className="w-full pb-4 pt-10"> 
        <div className="text-5xl lg:text-7xl font-syne font-bold ">
          <h1>Work</h1>
          <h1 className="text-slate-500">Experience</h1>
        </div>
        <p className="py-3 text-lg max-w-2xl font-montserrat text-gray-400">
          Here is a brief overview of my professional journey, showcasing the
          roles and experiences that have shaped my career.
        </p>
      </div>
      <Timeline data={workExperience.workExperience} />
    </div>
  );
});

// Add a display name for better debugging in development tools
TimelineWrapper.displayName = "TimelineWrapper";

export default TimelineWrapper;
