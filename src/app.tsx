import Navbar from "./components/navbar";
import Footer from "./components/footer";
import About from "./sections/about";
import Hero from "./sections/hero";
import Education from "./sections/education";
import Experience from "./sections/experience";
import Projects from "./sections/projects";
import Contact from "./sections/contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
