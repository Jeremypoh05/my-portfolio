// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section - 100vh 居中 */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center pb-10"
        >
          <Hero />
        </section>
        <div className="section-divider"></div>

        {/* About Section - 自动高度,至少 100vh */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center py-10"
        >
          <div className="w-full">
            <About />
          </div>
        </section>
        <div className="section-divider"></div>

        {/* Experience Section - 自动高度,至少 100vh */}
        <section
          id="experience"
          className="min-h-screen flex items-center justify-center py-10"
        >
          <div className="w-full">
            <Experience />
          </div>
        </section>
        <div className="section-divider"></div>

        {/* Projects Section - 自动高度,至少 100vh */}
        <section
          id="projects"
          className="min-h-screen flex items-center justify-center py-10"
        >
          <div className="w-full">
            <Projects />
          </div>
        </section>
        <div className="section-divider"></div>

        {/* Contact Section - 自动高度,至少 100vh */}
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center py-14"
        >
          <div className="w-full">
            <Contact />
          </div>
        </section>
      </main>
    </div>
  );
}
