import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Recomendations() {
  return (
    <div className="sm:px-32 px-6 py-6 rounded-md flex flex-col gap-12  bg-opacity-5 bg-lime-50">
      {recomendations.map((rec) => (
        <div className="flex flex-col gap-6">
          <p className="text-lime-600 text-lg">{rec.brief}</p>
          <div className="flex justify-end flex-row sm:gap-6 gap-2 mb-4">
            <img src={rec.image} className="rounded-full h-12 w-12"></img>
            <div className="text-left ">
              <p className="text-sm font-bold text-lime-600 ">{rec.author}</p>
              <p className="text-sm  text-lime-600">{rec.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const recomendations = [
  {
    author: "Thomas Demkey",
    role: "Managed me directly",
    image:
      "https://media.licdn.com/dms/image/C5603AQFEWAWC3lGY1w/profile-displayphoto-shrink_200_200/0/1517789378544?e=1717632000&v=beta&t=WQ0FrAEENQw_yjV3E3LwxDFDkF2XnVQDvpXUGvq5_nk",
    brief:
      "His attention to detail, understanding and communication were so strong that he quickly set a standard for even our senior developers to follow [...]",
    full: "",
  },
  {
    author: "Josh McCormick",
    role: "Coworker",
    image:
      "https://media.licdn.com/dms/image/C4E03AQHajKfueGfoaQ/profile-displayphoto-shrink_100_100/0/1517613765548?e=1717632000&v=beta&t=2SV1BUmi2H6rzgZSYPxKHvuG6iXSbuQJOBCyPVNRPVg",
    brief:
      "[...] In addition to being an extremely talented developer, Pedro is also a great teammate [...] I've seen firsthand how the skills of other developers' improve when they work with Pedro because of his mentorship -myself included.",
    full: "",
  },
  {
    author: "Joel Masson",
    role: "Coworker",
    image:
      "https://media.licdn.com/dms/image/C4E03AQHOB7f7LjSinA/profile-displayphoto-shrink_100_100/0/1541455968759?e=1717632000&v=beta&t=j3rOEOeO3e8gqfL2s9In8Q0c9VfVZ_GmEa_Qbpffprk",
    brief:
      "[...] During this time, I have been consistently impressed by his knowledge, technical expertise, professionalism, and dedication to delivering high-quality work. All of this has made working with him an enjoyable experience.",
    full: "",
  },
];
