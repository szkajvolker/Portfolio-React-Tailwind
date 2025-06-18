import "./index.css";
import Header from "./pages/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

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
