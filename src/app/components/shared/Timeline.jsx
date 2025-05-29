"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useLayoutEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useLayoutEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.scrollHeight);
    }
  }, [data]); // Run only when data changes

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 25%", "end 100%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "95%"]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-montserrat px-4 sm:px-6 md:px-10 text-white rounded-[48px] relative overflow-hidden"
      ref={containerRef}
    >
      <div className="relative max-w-7xl mx-auto pb-10 md:pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-start pt-10 md:pt-40 gap-6 md:gap-10 relative"
          >
            {/* Left Side - Company Details */}
            <div className="sticky flex flex-col items-start md:flex-row z-40 top-12 md:top-40 max-w-full md:max-w-xs lg:max-w-sm w-full md:w-auto">
              <div className="h-10 absolute left-3 w-10 rounded-full bg-white dark:bg-orangeShade flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700" />
              </div>
              <div className="pl-14 md:pl-20 flex flex-col gap-1 items-start">
                <h3 className="text-lg sm:text-xl md:text-4xl font-bold text-neutral-500 dark:text-white">
                  {item.company}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-neutral-400">
                  {item.role}
                </p>
                <p className="text-sm sm:text-base md:text-lg text-neutral-400">
                  {item.location}
                </p>
                <p className="text-sm sm:text-base md:text-lg text-neutral-400">
                  {item.duration}
                </p>
              </div>
            </div>

            {/* Right Side - Task Details */}
            <div className="relative pl-12 sm:pl-16 md:pl-20 pr-4 w-full mt-8 md:mt-12">
              {item.responsibilities.map((task, idx) => (
                <div key={idx} className="mb-2 rounded-2xl">
                  <motion.div
                    whileHover={{
                      backgroundColor: "rgba(255, 255, 255, 0.2)", // Light frosted look on hover
                      scale: 1.05, // Optional: slight scale-up on hover
                      backdropFilter: "blur(15px)", // Increase blur on hover
                    }}
                    transition={{ duration: 0.3 }}
                    className="bg-white bg-opacity-10 rounded-2xl p-6 shadow-lg"
                    style={{
                      backdropFilter: "blur(10px)", // Frosted glass effect
                      border: "1px solid rgba(255, 255, 255, 0.2)", // Subtle border to enhance glassmorphism
                    }}
                  >
                    <motion.p
                      whileHover={{
                        color: "#ffffff", // Change text color on hover
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-sm sm:text-base md:text-lg text-gray-300"
                    >
                      {task}
                    </motion.p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Timeline Styling */}
        <div
          style={{
            height: `calc(${containerHeight}px - 5rem)`,
          }}
          className="absolute left-8 top-0 w-[2px] bg-neutral-200 dark:bg-neutral-700"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-orange-500 via-gray-400 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
