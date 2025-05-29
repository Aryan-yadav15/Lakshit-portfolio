"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const LinkBox = ({ imageUrl, text, href, isExternal }) => {
  return (
    <motion.div
      className="flex-1 bg-white rounded-2xl h-16 flex flex-row justify-center overflow-hidden items-center gap-6"
      whileHover="hover"
      transition={{ duration: 0.3 }}
    >
      {/* Use <a> instead of <Link> for external links */}
      <a
        href={href}
        target={isExternal ? "_blank" : "_self"} // Open in new tab if it's an external link
        rel={isExternal ? "noopener noreferrer" : ""}
      >
        <div className="mt-16 flex flex-row justify-center items-center gap-6 overflow-hidden">
          <motion.div
            className="flex flex-col items-center space-y-6"
            initial={{ y: -8 }}
            variants={{
              hover: { y: -56 },
            }}
          >
            <Image src={imageUrl} alt="Image1" width={30} height={30} />
            <Image
              src="/arrow.svg"
              alt="Arrow Icon"
              width={30}
              height={30}
              className="text-black"
            />
          </motion.div>

          <motion.div
            className="text-center text-gray-700 font-montserrat font-medium text-2xl flex flex-col space-y-12 pb-1"
            initial={{ y: -70 }}
            variants={{
              hover: { y: 10 },
            }}
          >
            <p>Visit Link</p>
            <p>{text}</p>
          </motion.div>
        </div>
      </a>
    </motion.div>
  );
};

export default LinkBox;
