// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6">
        <section id="home" className="min-h-screen flex items-center">
          <Hero />
        </section>

        <section id="about" className="py-28">
          <About />
        </section>

        <section id="experience" className="py-28">
          <Experience />
        </section>

        <section id="projects" className="py-28">
          <Projects />
        </section>

        <section id="contact" className="py-28">
          <Contact />
        </section>
      </main>
    </div>
  );
}
