import Header from "./header";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
    <div className="absolute border-8 shadow-2xl border-yellow-400 z-0 transform -rotate-45 top-10 -left-24 px-24 bg-yellow-200 height-36 w-96 font-bold">
    <p>Looking for a job</p>
    </div>
      <main className="w-screen   ">
        {props.children}
      </main>

      <Footer />
    </div>
  );
}
