import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./sections/hero";
import Education from "./sections/education";
import Experience from "./sections/experience";
import Projects from "./sections/projects";
import Skills from "./sections/skills";


export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
