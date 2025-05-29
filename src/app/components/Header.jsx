import React, { useState, forwardRef } from "react";
import { FiMenu } from "react-icons/fi";
const Header = forwardRef(({ projectsRef, experienceRef, contactRef }, ref) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-2 z-50 flex items-center justify-center w-full px-4 sm:px-8">
      <div
        className="px-8 py-3 shadow-lg rounded-full flex items-center justify-between max-w-4xl"
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Left Side - Dropdown for mobile */}
        <div className="sm:hidden flex items-center justify-between w-full gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
          >
            <FiMenu />
          </button>
          {/* Name visible only on small screens */}
          <div className="text-lg font-syne font-bold text-white">
            LAKSHIT VERMA
          </div>
          {menuOpen && (
            <div className="absolute left-4 top-16 bg-white rounded-lg shadow-lg p-4 space-y-2 flex flex-col justify-start items-">
              <button
                onClick={() => {
                  projectsRef.current.scrollIntoView({ behavior: "smooth" });
                  setMenuOpen(false);
                }}
                className="text-lg font-syne font-bold text-gray-800"
              >
                Projects
              </button>
              <button
                onClick={() => {
                  experienceRef.current.scrollIntoView({ behavior: "smooth" });
                  setMenuOpen(false);
                }}
                className="text-lg font-syne font-bold text-gray-800"
              >
                Experience
              </button>
              <button
                onClick={() => {
                  contactRef.current.scrollIntoView({ behavior: "smooth" });
                  setMenuOpen(false);
                }}
                className="text-lg font-syne font-bold text-gray-800"
              >
                Contact
              </button>
            </div>
          )}
        </div>
        {/* Center - Links for larger screens */}
        <div className="hidden sm:flex space-x-8">
          <button
            onClick={() =>
              projectsRef.current.scrollIntoView({ behavior: "smooth" })
            }
            className="text-lg hover:text-gray-300 font-syne font-bold text-gray-300"
          >
            Projects
          </button>
          <button
            onClick={() =>
              experienceRef.current.scrollIntoView({ behavior: "smooth" })
            }
            className="text-lg hover:text-gray-300 font-syne font-bold text-gray-300"
          >
            Experience
          </button>
          <button
            onClick={() =>
              contactRef.current.scrollIntoView({ behavior: "smooth" })
            }
            className="text-lg hover:text-gray-300 font-syne font-bold text-gray-300"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
});

Header.displayName = "Header";

export default Header;
