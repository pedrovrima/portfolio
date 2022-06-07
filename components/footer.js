export default function Footer() {
  return (
    <footer className="bg-gray-800 w-screen">
      <ul className="flex items-center justify-between lg:container px-4 py-6 mx-auto text-sm text-white md:px-6">
        <li>
          Created by{" "}
          <a
            href="https://taylorbrynat.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
Pedro Martins          </a>
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
