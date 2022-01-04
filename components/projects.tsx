import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Link from "next/link"

import {
  SiAuth0,
  SiChakraui,
  SiCss3,
  SiD3Dotjs,
  SiExpress,
  SiGithub,
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
  SiWordpress,
  SiFirefox
} from "react-icons/si";
import Image from "next/image";

interface Project {
  techstack: Techstack;
  title?: string;
  description?: string;
  githubUrl: string;
  liveUrl?: string;
  images: [string];
}

interface Techstack {
  major: [Major];
  minor: [Minor];
}

interface Major {
  name: string;
  icon: string;
}

interface Minor {
  name: string;
}

interface ProjectType {
  projects: [Project];
}

export default function Projects({ projects }: ProjectType) {
  return (
    <div className="flex flex-col items-center mt-6">
      <h1 className="font-title text-4xl mb-4">Selected Projects</h1>
      {projects.map((prj) => {
        return <ProjectSection {...prj}></ProjectSection>;
      })}

      <Link href="https://github.com/pedrovrima" passHref><button className="flex flex-col items-center bg-gray-900  p-2 font-bold rounded-md text-sm text-gray-200">See more at Github <SiGithub size={16}/> </button></Link>
    </div>
  );
}

const ProjectSection = (props: Project) => {
  const { title, description, techstack, githubUrl, liveUrl, images } = props;
  return (
    <>
      <div className="rounded-sm  shadow-md mb-6  mx-4  flex flex-col-reverse sm:flex-row py-6 w-11/12 sm:w-full   bg-yellow-50  justify-center ">
        <div className="flex flex-col justify-between text-sm sm:mr-12 px-8  sm:max-w-lg w-full">
          <div>
          <h1 className="text-2xl font-title">{title}</h1>
          <p>{description}</p>
          <TechStack techstack={techstack}></TechStack>
          </div>
          <div className="flex justify-end">
            <Github url={githubUrl} /> <Live url={liveUrl} />
          </div>
        </div>
        <div>
          <ProjectImage images={images}></ProjectImage>
        </div>
      </div>
    </>
  );
};

const TechStack = (props) => {
  const { major, minor } = props.techstack;
  return (
    <>
      <div className="flex mb-4 flex-wrap max-w-3/4">
        {major.map((maj: Major) => (
          <MajorTech {...maj}></MajorTech>
        ))}
      </div>
      {minor ? (
        <ul className="mx-2 list-inside list-disc">
          {minor.map((min: Minor) => (
            <li>{min.name}</li>
          ))}
        </ul>
      ) : (
        ""
      )}{" "}
    </>
  );
};

const MajorTech = (props: Major) => {
  const { name } = props;

  return (
    <div className="mt-4 mx-2 flex flex-col items-center ">
      <TechLogo name={name} />
      <p className="text-xs">{name}</p>
    </div>
  );
};

const Github = ({ url }) => {
  return (
    <a className="p-1" target="_blank" href={url}>
      <FiGithub size={20}></FiGithub>
    </a>
  );
};

const Live = ({ url }) => {
  return (
    <a className="p-1" target="_blank" href={url}>
      <FiExternalLink size={20}></FiExternalLink>
    </a>
  );
};

const TechLogo = (props) => {
  const { name } = props;
  return (
    <>
      {name === "Next.js" ? <SiNextdotjs size={24} /> : ""}
      {name === "React" ? <SiReact size={24} /> : ""}
      {name === "TypeScript" ? <SiTypescript size={24} /> : ""}
      {name === "Jest" ? <SiJest size={24} /> : ""}
      {name === "CSS" ? <SiCss3 size={24} /> : ""}
      {name === "Tailwind" ? <SiTailwindcss size={24} /> : ""}
      {name === "WordPress" ? <SiWordpress size={24} /> : ""}
      {name === "Vercel" ? <SiVercel size={24} /> : ""}
      {name === "Heroku" ? <SiHeroku size={24} /> : ""}
      {name === "Prisma" ? <SiPrisma size={24} /> : ""}
      {name === "Sequelize" ? <SiSequelize size={24} /> : ""}
      {name === "D3" ? <SiD3Dotjs size={24} /> : ""}
      {name === "ChakraUI" ? <SiChakraui size={24}></SiChakraui> : ""}
      {name==="Express"?<SiExpress size={24}></SiExpress>:""}
      {name==="GraphQL"?<SiGraphql size={24}></SiGraphql>:""}
      {name==="Auth0"?<SiAuth0 size={24}></SiAuth0>:""}
      {name==="MongoDB"?<SiMongodb size={24}></SiMongodb>:""}
      {name==="Firefox"?<SiFirefox size={24}></SiFirefox>:""}

    </>
  );
};

const ProjectImage = (props) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const { images } = props;
  return (
    <div className="flex h-100 justify-center items-center sm:pr-8">
      <Carousel className="mt-2 mb-4 sm:mb-0 w-80 h-52 sm:w-96 sm:h-64 my-auto">
        {images.map((img) => (
          <div className="w-80 h-52 sm:w-96 sm:h-64 relative">
            <Image layout="fill" objectFit="contain" src={img}></Image>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
