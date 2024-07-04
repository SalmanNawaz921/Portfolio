import { About } from "./sections/index";
import { Experience } from "./sections/index";
import { Footer } from "./sections/index";
import { Hero } from "./sections/index";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <main
        className="my-[0px] mx-auto
        w-[100%]
        max-w-[1600px]
        min-h-[100vh]
        xl:py-[0px] xl:px-[150px]
        lg:px-[100px] md:px-[100px] px-[25px]
        "
      >
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
