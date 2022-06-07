import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="mx-12">
      <p className="px-8 sm:px-96 text-lg">
        My name is Pedro Martins, I am a software developer currently using
        JavaScript to build solutions to my day-to-day problems and for the
        organizations I work with.{" "}
      </p>
      <p className="px-8 sm:px-96 text-lg">
        Most of the solutions I build involve both a back-end, to serve and
        store data, and a front-end, for the users to interact with.
      </p>

      <p className="px-8 sm:px-96 text-lg">
        Among my top skills, mostly gained during my career as a ecologist, are:
      </p>
      <ul className="list-disc px-8 sm:px-96 text-lg ml-8">
      <li >Team work</li>
      <li>Leadership</li>
      <li>Problem solving</li>
      <li>Working under stress</li>
      <li>Decision making</li>
      </ul>
      <p className="px-8 sm:px-96 text-lg">
        Firstly I used a combination of Express and "pure" React for the
        projects, but I am migrating towards using Next.js.{" "}
      </p>

      <h2 className="px-6 sm:px-72 mt-8 mb-4 font-bold text-xl">Previous Carreer and Achievements</h2>

      <p className="px-8 sm:px-96 text-lg">
        I am graduated in Biology with a Master's Degree in Ecology. During my
        career, I worked at two different fronts: fieldwork and data analysis
        and management.
      </p>
      <p className="px-8 sm:px-96 text-lg">
        From 2014 to 2019 I have worked as a bird bander, most of the time
        managing teams of 2 or more biologists. Even though this work is not
        easily realatablw with tech work, it thought me how to work and lead a
        team under pressure and in stressful situations. I also had the
        opportunity to participate and teach on several workshops.{" "}
      </p>
      <p className="px-8 sm:px-96 text-lg">
        During this period I spent most of my time performing data management
        and data analysis tasks on R;
      </p>
    </div>
  );
}
