"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className = "", // Default empty string for additional className
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Duplicate items to allow for seamless scrolling
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      // Set animation direction and speed
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (scrollerRef.current) {
      scrollerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "normal" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    const durationMap = {
      fast: "60s",
      normal: "400s",
      slow: "200s",
    };
    const duration = durationMap[speed] || durationMap.fast;

    // Calculate duration based on item count
    const itemWidth = 50; // Adjust based on your image size
    const totalWidth = items.length * itemWidth; // Total width of the items
    const containerWidth = containerRef.current.offsetWidth; // Width of the container
    const scrollDuration = (totalWidth / containerWidth) * parseFloat(duration);

    if (scrollerRef.current) {
      scrollerRef.current.style.setProperty(
        "--animation-duration",
        `${scrollDuration}s`
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={`scroller relative z-20 overflow-hidden ${className}`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
      }}
    >
      <ul
        ref={scrollerRef}
        className={`flex min-w-full shrink-0 gap-14 xlg:gap-20 py-4 w-max ${
          start ? "scroll-animation" : ""
        } ${pauseOnHover ? "hover:animation-play-state-paused" : ""}`}
      >
        {items.map((item, idx) => (
          <li key={idx}>
            {item.href =""? (
              <Image
                width={50}
                height={50}
                src={item.href}
                alt={item.name} // Update alt to item.name for better accessibility
                className="relative rounded-2xl object-contain opacity-100 w-[50px] h-[50px]"
              />
            ) : (
              <div className="flex flex-col items-center justify-center  border border-gray-300 p-2 bg-gray-200 rounded-lg">
                <h3 className="text-center text-sm text-gray-900 font-syne font-bold">{item.name}</h3>
              </div>
            )}
          </li>
        ))}
      </ul>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(
              -50%
            ); /* Change to -50% to show the entire first set */
          }
        }

        .scroll-animation {
          animation: scroll var(--animation-duration) linear infinite;
          animation-direction: var(--animation-direction);
        }

        .hover\\:animation-play-state-paused:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
