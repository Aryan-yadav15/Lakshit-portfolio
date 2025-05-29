import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProjectCard = ({ title, duration, details, image, website }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative rounded-full w-full h-72 [perspective:1000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full [transform-style:preserve-3d] transition-all duration-500"
        animate={{ rotateX: isFlipped ? 180 : 0 }}
      >
        {/* Front Side */}
        <Link href={website } >
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
          <div className="absolute inset-0 flex items-end justify-end bg-slate-800 bg-opacity-60 rounded-lg px-4 font-syne pb-2">
            <h3
              className="text-2xl font-semibold text-center text-white rounded-2xl"
              style={{
                backdropFilter: "blur(10px)", // Frosted glass effect
                backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent background for glass effect
                border: "1px solid rgba(255, 255, 255, 0.2)", // Subtle border
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Light shadow to enhance depth
              }}
            >
              {title}
            </h3>
          </div>
        </div>
        </Link>

        {/* Back Side */}
        <div
          style={{
            backdropFilter: "blur(10px)", // Frosted glass effect
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent background for glass effect
            border: "1px solid rgba(255, 255, 255, 0.2)", // Subtle border
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Light shadow to enhance depth
          }}
          className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateX(180deg)] bg-slate-800 rounded-lg flex flex-col items-center justify-center p-4"
        >
          <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-lg text-gray-300 mb-4">{duration}</p>          <ul className="list-disc list-inside text-gray-200 mb-4">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-orangeShade text-white rounded-full hover:bg-opacity-80 transition-all duration-300 mt-auto"
            >
              Visit Site
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
