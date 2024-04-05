export default function Footer() {
  return (
    <footer className="bg-gray-800 w-screen">
      <ul className="flex items-center justify-around lg:container px-4 py-6 mx-auto text-sm text-white md:px-6">
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
            target="_blank"
          >
            About Conway's Game of Life
          </a>
        </li>
        <li>
          <a
            href="https://github.com/oddstronaut/next-starter-tailwind"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}
