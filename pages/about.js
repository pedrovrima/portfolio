import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="mx-12">
      <p>
        My name is Pedro Martins, I am a software developer currently using
        JavaScript to build solutions to my day-to-day problems and for the
        organizations I work with.{" "}
      </p>
      <p>
        Most of the solutions I build involve both a back-end, to serve and
        store data, and a front-end, for the users to interact with.
      </p>

      <p>
        Among my top skills, mostly gained during my career as a ecologist, are:
      </p>
      <ul className="list-disc ml-8">
      <li >Team work</li>
      <li>Leadership</li>
      <li>Problem solving</li>
      <li>Working under stress</li>
      <li>Decision making</li>
      </ul>
      <p>
        Firstly I used a combination of Express and "pure" React for the
        projects, but I am migrating towards using Next.js.{" "}
      </p>

      <p>Previous Carreer and Achievements</p>

      <p>
        I am graduated in Biology with a Master's Degree in Ecology. During my
        career, I worked at two different fronts: fieldwork and data analysis
        and management.
      </p>
      <p>
        From 2014 to 2019 I have worked as a bird bander, most of the time
        managing teams of 2 or more biologists. Even though this work is not
        easily realatablw with tech work, it thought me how to work and lead a
        team under pressure and in stressful situations. I also had the
        opportunity to participate and teach on several workshops.{" "}
      </p>
      <p>
        During this period I spent most of my time performing data management
        and data analysis tasks on R;
      </p>
    </div>
  );
}
