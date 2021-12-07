import Image from "next/image";
import Projects from "@components/projects";

const proje = [
  {
    images: [
      "/projects/splats1.png",
      "/projects/splats2.png",
      "/projects/splats3.png",
      "/projects/splats4.png",
      "/projects/splats5.png",
      "/projects/splats6.png"
    ],
    techstack: {
      major: [
        { name: "Tailwind" },
        { name: "React" },
        { name: "D3" },
        { name: "Sequelize" },
        { name: "ChakraUI" },
        { name: "Express" },
        { name: "Heroku" }
      ]
    },
    title: "SPLATs",
    description:
      "SPLATs is a bird banding data visualization tool, focusing on user interactivity. The code and data are proprietary, but you can take a look at the prototype.",
    githubUrl: "www.oama.eco.br",
    liveUrl: "https://pedrovrima.github.io/splats-prototype/"
  },
  {
    images: [
      "/projects/saltator1.png",
      "/projects/saltator2.png",
      "/projects/saltator3.png",
      "/projects/saltator4.png",
      "/projects/saltator5.png",
      "/projects/saltator6.png",
      "/projects/saltator7.png"
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
        { name: "Heroku" }
      ],
      minor: [{ name: "Howler" }, { name: "React-Router" }]
    },
    title: "Saltator",
    description:
      "Saltator is a gamified bird song learning tool. Built for the Mantiqueira Bird Observatory.",
    githubUrl: "www.oama.eco.br",
    liveUrl: "www.oama.eco.br"
  },
  {
    images: [
      "/projects/oama1.png",
      "/projects/oama2.png",
      "/projects/oama3.png",
      "/projects/oama4.png"
    ],

    techstack: {
      major: [
        { name: "Tailwind" },
        { name: "React" },
        { name: "Next.js" },
        { name: "Vercel" }
      ]
    },
    title: "OAMa Website",
    description:
      "Website for the Brazilian non-profit Mantiqueira Bird Observatory",
    githubUrl: "www.oama.eco.br",
    liveUrl: "www.oama.eco.br"
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
    githubUrl: "www.oama.eco.br",
    liveUrl: "www.oama.eco.br"
  }
];

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className="w-full p-8 mb-12 py-36 bg-gray-900 ">
        <h1 className="text-6xl mt-24 font-extrabold text-gray-100">
          Hi, I'm Pedro{" "}
        </h1>
        <h2 className="text-xl text-gray-200">
          I am a Fullstack Developer that &#128154; finding simple solutions for
          complex problems
        </h2>
      </div>
      <div className="flex flex-col  items-center">
        <h1 className="text-3xl mb-4 font-bold">About </h1>
      <p className="px-8 sm:px-96 text-lg">I am a graduated ecologist who has spent most of my carrer doing data management and statistical analysis using R. In the last couple years I started transiotioning to software develepoment, aiming to create tools that facilitate the work done by the organizations I work with.</p>
      </div>
      <Projects projects={proje}></Projects>
    </div>
  );
}
