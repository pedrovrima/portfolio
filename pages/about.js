import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
      <div>
        <section className="mb-6">
          <h2 className="mb-3 text-xl font-bold">What is Tailwind?</h2>

          <p>
            Tailwind CSS is a highly customizable, low-level CSS framework that
            gives you all of the building blocks you need to build bespoke
            designs without any annoying opinionated styles you have to fight to
            override.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold">What is Next.js?</h2>
          <p>
My name is Pedro Martins, I am a software developer currently using JavaScript to build solutions to my day-to-day problems and for the organizations I work with.          </p>
<p>Most of the solutions I build involve both a back-end, to serve and store data, and a front-end, for the users to interact with. Firstly I used a combination of Express and "pure" React for the projects, but I am migrating towards using Next.js. </p>

<p>Previous Carreer and Achievements</p>

<p>I am graduated in Biology with a Master's Degree in Ecology. During my career, I worked at two different fronts: fieldwork and data analysis and management.</p>
<p>From 2014 to 2019 I have worked as a bird bander, most of the time managing teams of 2 or more biologists. Even though this work is not easily realatablw with tech work, it thought me how to work and lead a team under pressure and in stressful situations. I also had the opportunity to participate and teach </p>
        </section>
      </div>

      <Image
        alt="A one-eyed alien holding a broken cable connected between a server and a desktop computer"
        src="/critter.svg"
        width={476}
        height={297.17}
      />
    </div>
  );
}
