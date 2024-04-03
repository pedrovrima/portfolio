import Header from "./header";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen z-50">
      <Header />
      <a
        href="mailto: pedrovrima@gmail.com ?subject=I wanna hire you Pedro!"
        className="absolute border-8 text-center shadow-2xl border-yellow-400 z-50  transform -rotate-45 top-12 -left-20 bg-yellow-200 height-36 w-72 font-bold text-yellow-600"
      >
        <div className="absolute -top-2  w-6 h-10 bg-gradient-to-b opacity-50 from-white to-white via-transparent  left-0 animate-shine" />
        Looking for a Job
      </a>
      <main className="w-screen   ">{props.children}</main>

      <Footer />
    </div>
  );
}
