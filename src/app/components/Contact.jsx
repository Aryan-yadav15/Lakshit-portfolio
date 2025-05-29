import React from "react";
import LinkBox from "./shared/LinkBox";
import Image from "next/image";

const Contact = () => {

    
const social = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/",
      icon: "/linkedin-icon .svg",
    },
    {
      name: "GitHub",
      url: "https://github.com/",
      icon: "/github-icon.svg",
    },
    
  ];


  return (
    <div>
      <div className="bg-gray-200 w-full justify-center items-center flex flex-col rounded-2xl py-10">
        <h1 className="font-syne text-5xl lg:text-7xl font-bold text-orangeShade  ">
          Intrested?
        </h1>
        <p className="text-gray-700 font-montserrat font-medium lg:text-xl">
          Contact me at
        </p>
        <div className="w-[90%] max-w-[20rem] mr-6 rounded-xl flex items-center pl-4 pt-10">
          <LinkBox
            imageUrl="/google-gmail.svg"
            text="Mail me"
            href="" // Customize the email address, subject, and body
          />
        </div>
        <div className="flex space-x-5 mt-4 p-4">
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
  );
};

export default Contact;
