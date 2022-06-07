import Image from "next/image";
import Projects from "@components/projects";
import { useRef, useEffect } from "react";

const getPixelRatio = (context) => {
  var backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;

  return (window.devicePixelRatio || 1) / backingStore;
};

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
    githubUrl: "https://github.com/pedrovrima/splats-prototype",
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
    githubUrl: "https://github.com/pedrovrima/saltator_final_api",
    liveUrl: "https://saltator.oama.eco.br"
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
    githubUrl: "https://github.com/pedrovrima/oama-website",
    liveUrl: "https://www.oama.eco.br"
  },
  {
    images: [
      "/projects/sono1.png",
      "/projects/sono2.png",
      "/projects/sono3.png"
    ],

    techstack: {
      major: [
        { name: "GraphQL" },
        { name: "React" },
        { name: "Express" },
        { name: "MongoDB" },
        { name: "Heroku" }
      ]
    },
    title: "Baby sleep tracker",
    description:
      "App created so my wife and I could track how much our daughter slept during the day. It is also a PWA.",
    githubUrl: "https://github.com/pedrovrima/baby-tracker-api",
    liveUrl: "https://sono-morena-ui.herokuapp.com/"
  },
  {
    images: ["/projects/pomodoro.png"],

    techstack: {
      major: [{ name: "Firefox" }]
    },
    title: "Pomodoro Blocker",
    description:
      "Mozilla Firefox extension that helps me being more productive. It is a Pomodoro Timer that also blocks websites, unblocking them during breaks. Still in beta version.",
    githubUrl: "https://github.com/pedrovrima/pomodoro-blocker",
    liveUrl: "https://addons.mozilla.org/lt/firefox/addon/pomodoro-blocker/"
  }
];

export default function IndexPage() {
  const ref = useRef();

  // useEffect(() => {
  //   let canvas = ref.current;
  //   let context = canvas.getContext('2d');
  //   let requestId;
  //   var stars = [], // Array that contains the stars
  //     FPS = 45, // Frames per second
  //     x = 2, // Number of stars
  //     mouse = {
  //       x: 0,
  //       y: 0
  //     }; // mouse location

  //   // Push stars to array

  //   for (var i = 0; i < x; i++) {
  //     stars.push({
  //       x: Math.random() * canvas.width,
  //       y: Math.random() * canvas.height,
  //       radius: Math.random() * 1 + 1,
  //       vx: Math.floor(Math.random() * 50) - 25,
  //       vy: Math.floor(Math.random() * 50) - 25
  //     });
  //   }

  //   // Draw the scene

  //   function draw() {
  //     context.clearRect(0, 0, canvas.width, canvas.height);

  //     context.globalCompositeOperation = "lighter";

  //     for (var i = 0, x = stars.length; i < x; i++) {
  //       var s = stars[i];

  //       context.fillStyle = "#fff";
  //       context.beginPath();
  //       context.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
  //       context.fill();
  //       context.fillStyle = "black";
  //       context.stroke();
  //     }

  //     context.beginPath();
  //     for (var i = 0, x = stars.length; i < x; i++) {
  //       var starI = stars[i];
  //       context.moveTo(starI.x, starI.y);
  //       if (distance(mouse, starI) < 150) context.lineTo(mouse.x, mouse.y);
  //       for (var j = 0, x = stars.length; j < x; j++) {
  //         var starII = stars[j];
  //         if (distance(starI, starII) < 150) {
  //           //context.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
  //           context.lineTo(starII.x, starII.y);
  //         }
  //       }
  //     }
  //     context.lineWidth = 0.05;
  //     context.strokeStyle = "white";
  //     context.stroke();
  //   }

  //   function distance(point1, point2) {
  //     var xs = 0;
  //     var ys = 0;

  //     xs = point2.x - point1.x;
  //     xs = xs * xs;

  //     ys = point2.y - point1.y;
  //     ys = ys * ys;

  //     return Math.sqrt(xs + ys);
  //   }

  //   // Update star locations

  //   function update() {
  //     for (var i = 0, x = stars.length; i < x; i++) {
  //       var s = stars[i];

  //       s.x += s.vx / FPS;
  //       s.y += s.vy / FPS;

  //       if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
  //       if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
  //     }
  //   }

  //   canvas.addEventListener("mousemove", function (e) {
  //     mouse.x = e.clientX;
  //     mouse.y = e.clientY;
  //   });

  //   // Update and draw

  //   function tick() {
  //     update();
  //     requestId=requestAnimationFrame(tick);
  //   }

  //   tick();
  //   return () => {
  //     cancelAnimationFrame(requestId);
  //   };
  // });
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
        <canvas ref={ref} style={{position:"absolute"}}></canvas>
      </div>
      <div className="flex flex-col  items-center py-24 bg-gray-50">
        <h1 className="text-3xl mb-4 font-bold">About </h1>
        <p className="px-8 sm:px-96 text-lg">
          I am a graduated ecologist who has spent most of my carrer doing data
          management and statistical analysis using R. In the last couple years
          I started transiotioning to software develepoment, aiming to create
          tools that facilitate the work done by the organizations I work with.
        </p>
      </div>
      <div className=" mb-24">
        <Projects projects={proje}></Projects>
      </div>
    </div>
  );
}
