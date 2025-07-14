import { useState, useLayoutEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const mobileNavRef = useRef(null);

  useLayoutEffect(() => {
    function onResize() {
      const mobile = window.innerWidth <= 768;
      setIsMobile((prev) => {
        if (prev !== mobile) setMenuOpen(false);
        return mobile;
      });
    }

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleMenuClick = () => setMenuOpen((open) => !open);
  const handleNavClick = () => setMenuOpen(false);

  const navLink =
    "relative flex items-center gap-2 text-white no-underline font-medium text-base px-4 py-3 rounded-lg transition-all duration-300 hover:text-[#99ccff] hover:bg-white/10 group";
  const navUnderline =
    "absolute left-0 bottom-0 h-0.5 w-0 bg-[#99ccff] rounded transition-all duration-300 group-hover:w-full";

  return (
    <header className="sticky top-0 bg-[#00595f]/90 backdrop-blur-md text-[#99ccff] py-4 px-4 shadow-lg z-50 border-b border-[#99ccff]/20">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        {/* Mobile hamburger menu - positioned in header */}
        <div
          onClick={handleMenuClick}
          style={{ display: isMobile ? "flex" : "none" }}
          className="flex flex-col justify-center items-center w-10 h-10 cursor-pointer bg-[#00595f]/80 rounded-lg backdrop-blur-md gap-1"
        >
          <span
            className={`hamburger-line block w-6 h-0.5 bg-[#99ccff] rounded transition-all duration-300 ${
              menuOpen ? "translate-y-1.5 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`hamburger-line block w-6 h-0.5 bg-[#99ccff] rounded transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`hamburger-line block w-6 h-0.5 bg-[#99ccff] rounded transition-all duration-300 ${
              menuOpen ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          ></span>
        </div>

        {/* Desktop navigation - centered in header */}
        {!isMobile && (
          <nav className="flex justify-center items-center gap-8 w-full">
            <a href="#home" onClick={handleNavClick} className={navLink}>
              <span className="material-symbols-outlined text-xl">home</span>
              Home <span className={navUnderline}></span>
            </a>
            <a href="#about" onClick={handleNavClick} className={navLink}>
              <span className="material-symbols-outlined text-xl">emoji_people</span>
              About <span className={navUnderline}></span>
            </a>
            <a href="#skills" onClick={handleNavClick} className={navLink}>
              <span className="material-symbols-outlined text-xl">person_play</span>
              Skills <span className={navUnderline}></span>
            </a>
            <a href="#projects" onClick={handleNavClick} className={navLink}>
              <span className="material-symbols-outlined text-xl">build</span>
              Projects <span className={navUnderline}></span>
            </a>
            <a href="#contact" onClick={handleNavClick} className={navLink}>
              <span className="material-symbols-outlined text-xl">mail</span>
              Contact <span className={navUnderline}></span>
            </a>
          </nav>
        )}
      </div>

      {/* Mobile navigation - slides in from left with gap under header */}
      {isMobile && (
        <CSSTransition
          in={menuOpen}
          timeout={300}
          classNames="slide-nav"
          unmountOnExit
          nodeRef={mobileNavRef}
        >
          <nav
            ref={mobileNavRef}
            className="fixed top-20 left-0 w-64 h-fit bg-[#00595f]/95 backdrop-blur-md flex flex-col justify-start items-start pt-8 pl-6 z-40 shadow-2xl border-r border-[#99ccff]/20"
          >
            <a
              href="#home"
              onClick={handleNavClick}
              className="flex items-center gap-3 text-white no-underline text-lg py-4 px-4 rounded-lg transition-all duration-300 hover:text-[#99ccff] hover:bg-white/10 w-full"
            >
              <span className="material-symbols-outlined text-2xl">home</span>
              Home
            </a>
            <a
              href="#about"
              onClick={handleNavClick}
              className="flex items-center gap-3 text-white no-underline text-lg py-4 px-4 rounded-lg transition-all duration-300 hover:text-[#99ccff] hover:bg-white/10 w-full"
            >
              <span className="material-symbols-outlined text-2xl">emoji_people</span>
              About
            </a>
            <a
              href="#skills"
              onClick={handleNavClick}
              className="flex items-center gap-3 text-white no-underline text-lg py-4 px-4 rounded-lg transition-all duration-300 hover:text-[#99ccff] hover:bg-white/10 w-full"
            >
              <span className="material-symbols-outlined text-2xl">person_play</span>
              Skills
            </a>
            <a
              href="#projects"
              onClick={handleNavClick}
              className="flex items-center gap-3 text-white no-underline text-lg py-4 px-4 rounded-lg transition-all duration-300 hover:text-[#99ccff] hover:bg-white/10 w-full"
            >
              <span className="material-symbols-outlined text-2xl">build</span>
              Projects
            </a>
            <a
              href="#contact"
              onClick={handleNavClick}
              className="flex items-center gap-3 text-white no-underline text-lg py-4 px-4 rounded-lg transition-all duration-300 hover:text-[#99ccff] hover:bg-white/10 w-full"
            >
              <span className="material-symbols-outlined text-2xl">mail</span>
              Contact
            </a>
          </nav>
        </CSSTransition>
      )}
    </header>
  );
}

export default Header;
