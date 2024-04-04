import Image from "next/image";
import Projects from "@components/projects";
import { useRef, useEffect, useState } from "react";

import dynamic from "next/dynamic";
import Link from "next/link";
import LogoCarousel from "../components/logo-carousel";

const GameOfLife = dynamic(() => import("../components/game_of_life"), {
  ssr: false,
});

const proje = [
  {
    images: [
      "/projects/splats1.png",
      "/projects/splats2.png",
      "/projects/splats3.png",
      "/projects/splats4.png",
      "/projects/splats5.png",
      "/projects/splats6.png",
    ],
    techstack: {
      major: [
        { name: "Tailwind" },
        { name: "React" },
        { name: "D3" },
        { name: "Sequelize" },
        { name: "ChakraUI" },
        { name: "Express" },
        { name: "Heroku" },
      ],
    },
    title: "SPLATs",
    description:
      "SPLATs is a bird banding data visualization tool, focusing on user interactivity. The code and data are proprietary, but you can take a look at the prototype.",
    githubUrl: "https://github.com/pedrovrima/splats-prototype",
    liveUrl: "https://pedrovrima.github.io/splats-prototype/",
  },
  {
    images: [
      "/projects/saltator1.png",
      "/projects/saltator2.png",
      "/projects/saltator3.png",
      "/projects/saltator4.png",
      "/projects/saltator5.png",
      "/projects/saltator6.png",
      "/projects/saltator7.png",
    ],

    techstack: {
      major: [
        { name: "Tailwind" },
        { name: "TypeScript" },
        { name: "Jest" },
        { name: "React" },
        { name: "Prisma" },
        { name: "GraphQL" },
        { name: "Express" },
        { name: "Auth0" },
        { name: "Heroku" },
      ],
      minor: [{ name: "Howler" }, { name: "React-Router" }],
    },
    title: "Saltator",
    description:
      "Saltator is a gamified bird song learning tool. Built for the Mantiqueira Bird Observatory.",
    githubUrl: "https://github.com/pedrovrima/saltator_final_api",
    liveUrl: "https://saltator.oama.eco.br",
  },
  {
    images: [
      "/projects/oama1.png",
      "/projects/oama2.png",
      "/projects/oama3.png",
      "/projects/oama4.png",
    ],

    techstack: {
      major: [
        { name: "Tailwind" },
        { name: "React" },
        { name: "Next.js" },
        { name: "Vercel" },
      ],
    },
    title: "OAMa Website",
    description:
      "Website for the Brazilian non-profit Mantiqueira Bird Observatory",
    githubUrl: "https://github.com/pedrovrima/oama-website",
    liveUrl: "https://www.oama.eco.br",
  },
  {
    images: [
      "/projects/sono1.png",
      "/projects/sono2.png",
      "/projects/sono3.png",
    ],

    techstack: {
      major: [
        { name: "GraphQL" },
        { name: "React" },
        { name: "Express" },
        { name: "MongoDB" },
        { name: "Heroku" },
      ],
    },
    title: "Baby sleep tracker",
    description:
      "App created so my wife and I could track how much our daughter slept during the day. It is also a PWA.",
    githubUrl: "https://github.com/pedrovrima/baby-tracker-api",
    liveUrl: "https://sono-morena-ui.herokuapp.com/",
  },
  {
    images: ["/projects/pomodoro.png"],

    techstack: {
      major: [{ name: "Firefox" }],
    },
    title: "Pomodoro Blocker",
    description:
      "Mozilla Firefox extension that helps me being more productive. It is a Pomodoro Timer that also blocks websites, unblocking them during breaks. Still in beta version.",
    githubUrl: "https://github.com/pedrovrima/pomodoro-blocker",
    liveUrl: "https://addons.mozilla.org/lt/firefox/addon/pomodoro-blocker/",
  },
];

export default function IndexPage() {
  const ref = useRef();
  const [dimension, setDimension] = useState({
    width: undefined,
    height: undefined,
  });

  console.log(ref);
  useEffect(() => {
    console.log(ref);
    if (ref.current) {
      setDimension({
        width: ref?.current?.offsetWidth,
        height: ref?.current?.offsetHeight,
      });
    }
  }, [ref?.current?.offsetHeight, ref?.current?.offsetWidth]);
  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center space-y-2 bg-gray-900 h-full relative"
    >
      <div className="absolute top-6 left-0 z-0 overflow-hidden max-w-full">
        {ref.current && (
          <GameOfLife width={dimension.width} height={dimension.height} />
        )}
      </div>

      <div className="w-full p-8  py-36  relative ">
        <div className="z-50">
          <h1 className="text-6xl mt-24 font-extrabold text-yellow-600 z-50 relative bg-gray-900 w-max ">
            Hi, I'm Pedro{" "}
          </h1>
          <h2 className="text-xl text-yellow-600 z-50 relative bg-gray-900 w-max">
            I am a Fullstack Developer that &#128154; finding simple solutions
            for complex problems
          </h2>
        </div>
      </div>

      <div className="w-full px-64 z-50">
        <div className="px-16 flex flex-col bg-gray-900 items-center py-24 z-50 ">
          <h1 className="text-3xl mb-4 text-lime-500 font-bold">About </h1>
          <p className=" text-lg text-lime-600">
            I am a fullstack dev with a very diverse backgorund - graduated in
            Biology with a masters in Ecology. This different career history
            grants me not only the capacity to navigate through different areas
            of knowledge and quickly learn new technologies, but also thought me
            a myriad of soft skills that make me a good team member and leader.
          </p>
          <Link
            className="px-4 py-2 bg-lime-600 rounded-md mt-6  hover:underline"
            href="/about"
          >
            Click here to see my full bio
          </Link>
          <h3 className="text-3xl mb-8 text-lime-500 font-bold mt-24">
            Tech Stack
          </h3>
          <LogoCarousel />
          <h3 className="text-3xl mb-8 text-lime-500 font-bold mt-24">
            Recomendations
          </h3>
        </div>
      </div>
      <div className=" mb-24 z-50">
        <Projects projects={proje}></Projects>
      </div>
    </div>
  );
}
