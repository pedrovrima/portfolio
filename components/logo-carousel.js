import React from "react";
import {
  SiChakraui,
  SiCss3,
  SiD3Dotjs,
  SiExpress,
  SiGraphql,
  SiHeroku,
  SiJest,
  SiMongodb,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiSequelize,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import Image from "next/image";

export default function LogoCarousel() {
  const logos = [
    { name: "Chakra UI", logo: <SiChakraui /> },
    { name: "CSS 3", logo: <SiCss3 /> },
    { name: "D3", logo: <SiD3Dotjs /> },
    { name: "Express", logo: <SiExpress /> },
    { name: "GraphQL", logo: <SiGraphql /> },
    { name: "Heroku", logo: <SiHeroku /> },
    { name: "Jest", logo: <SiJest /> },
    { name: "MongoDB", logo: <SiMongodb /> },
    { name: "Next", logo: <SiNextdotjs /> },
    { name: "Prisma", logo: <SiPrisma /> },
    { name: "React", logo: <SiReact /> },
    { name: "Sequelize", logo: <SiSequelize /> },
    { name: "Tailwind CSS", logo: <SiTailwindcss /> },
    { name: "TypeScript", logo: <SiTypescript /> },
    { name: "Vercel", logo: <SiVercel /> },
    {
      name: "Drizzle",
      logo: (
        <Image
          style={{ fill: "white" }}
          height={50}
          width={50}
          src="/logos/drizzle.svg"
        ></Image>
      ),
    },
    {
      name: "MySQL",
      logo: <Image height={50} width={50} src="/logos/mysql.svg"></Image>,
    },

    {
      name: "PlanetScale",
      logo: (
        <Image
          style={{ fill: "white" }}
          height={40}
          width={40}
          src="/logos/planetscale.svg"
        ></Image>
      ),
    },
    {
      name: "Postgres",
      logo: (
        <Image
          style={{ fill: "white" }}
          height={40}
          width={40}
          src="/logos/postgresql.svg"
        ></Image>
      ),
    },
    {
      name: "Shadcn UI",
      logo: (
        <Image
          style={{ marginBottom: "4px" }}
          height={30}
          width={30}
          src="/logos/shadcnui.svg"
        ></Image>
      ),
    },
    {
      name: "Supabase",
      logo: (
        <Image
          style={{ fill: "white" }}
          height={40}
          width={40}
          src="/logos/supabase.svg"
        ></Image>
      ),
    },
    {
      name: "Testing Library",
      logo: (
        <Image
          style={{ fill: "white" }}
          height={40}
          width={40}
          src="/logos/testinglibrary.svg"
        ></Image>
      ),
    },
  ];

  const numberOfElementRepetitions = 5;
  const fakeArray = Array.apply(null, Array(numberOfElementRepetitions));

  return (
    <div className="relative w-full h-24 inline-flex flex-nowrap gap-12 overflow-x-hidden group [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <div className="absolute h-24  sm:w-32 w-16 bg-gradient-to-l from-transparent to-gray-900  z-50" />
      <div className="absolute h-24  sm:w-32 w-16 bg-gradient-to-r from-transparent to-gray-900  z-50 right-0" />{" "}
      <ul className="flex items-end gap-[10px] justify-center md:justify-start [&_li]:mx-8 [&_Image]:max-w-none  animate-infinite-scroll group-hover:pause ">
        {fakeArray.map((a, i) => {
          console.log(i);
          return logos.map((logo, index) => (
            <li
              key={index}
              className=" flex flex-col items-center w-max gap-2 group/item "
            >
              {React.cloneElement(logo.logo, {
                color: "#fff",
                size: 40,
                className:
                  "transform  transition group-hover/item:scale-[1.3] ",
              })}
              <p className="text-white text-sm text-center transition group-hover/item:scale-[1.3]">
                {logo.name}
              </p>
            </li>
          ));
        })}
      </ul>
    </div>
  );
}
