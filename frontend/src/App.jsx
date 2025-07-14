import "./index.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-2 sm:pt-4 scroll-mt-24"
          >
            <Home />
          </section>

          <section
            id="about"
            className="min-h-screen flex items-center justify-center py-8 sm:py-16 scroll-mt-24"
          >
            <About />
          </section>

          <section
            id="skills"
            className="min-h-screen flex items-center justify-center py-8 sm:py-16 scroll-mt-24"
          >
            <Skills />
          </section>

          <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-8 sm:py-16 scroll-mt-24"
          >
            <Projects />
          </section>

          <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-8 sm:py-16 scroll-mt-24"
          >
            <Contact />
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
export default App;
