import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./sections/hero";
import Education from "./sections/education";
import Experience from "./sections/experience";
import Projects from "./sections/projects";


export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
