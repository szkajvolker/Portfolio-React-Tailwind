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
      <div className="max-w-[1300px] mx-auto px-4 pb-10">
        <section
          id="home"
          className="bg-transparent rounded-xl mb-8 p-10 text-azure scroll-mt-[115px]"
        >
          <Home />
        </section>
        <section
          id="about"
          className="bg-transparent rounded-xl mb-8 p-10 text-azure scroll-mt-[115px]"
        >
          <About />
        </section>
        <section
          id="skills"
          className="bg-transparent rounded-xl mb-8 p-10 text-azure scroll-mt-[115px]"
        >
          <Skills />
        </section>
        <section
          id="projects"
          className="bg-transparent rounded-xl mb-8 p-10 text-azure scroll-mt-[115px]"
        >
          <Projects />
        </section>
        <section
          id="contact"
          className="bg-transparent rounded-xl mb-8 p-10 text-azure scroll-mt-[115px]"
        >
          <Contact />
        </section>
      </div>

      <div id="footer">
        <Footer />
      </div>
    </>
  );
}
export default App;
