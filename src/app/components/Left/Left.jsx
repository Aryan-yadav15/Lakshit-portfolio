// components/Left.js

import Image from "next/image";

const social = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    icon: "/linkedin-icon .svg",
  },
  {
    name: "GitHub",
    url: "https://github.coms",
    icon: "/github-icon.svg",
  },
];

export default function Left() {
  return (
    <div className="sticky top-12 h-[33rem] xl:h-[45rem] pt-10 ">
      <div className="bg-slate-50 h-full flex flex-col justify-start items-center rounded-2xl py-5">
        <div className="w-2/3 h-4/6 relative drop-shadow-2xl ">
          <Image
            src="/21.jpg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
        <div className="text-center py-4 flex flex-col justify-center items-center gap-2">
          <div className="bg-gray-700 py-2 px-4 rounded-full">
            <h1 className=" font-syne font-bold text-3xl">LAKSHIT VERMA</h1>
          </div>
          <p className="text-gray-800 w-3/4 tracking-tight leading-none font-montserrat font-regular">
            A Web Developer who builds intuitive, high-performance websites for
            business growth.
          </p>
          <div className="flex space-x-5 mt-4">
            {social.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={item.icon}
                  alt={`${item.name} icon`}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
