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
    "relative inline-flex items-center text-white no-underline font-saira-stencil-one font-normal text-base px-4 py-2 rounded transition-colors duration-1000 overflow-hidden hover:text-[#99ccff] group";
  const navUnderline =
    "absolute left-0 bottom-1 h-[3px] w-0 bg-[#99ccff] rounded transition-all duration-300 group-hover:w-full";

  return (
    <header className="sticky top-0 bg-[#00595f]/80 backdrop-blur-md text-[#99ccff] py-[10px] mb-8 shadow-md z-[5]">
      <div
        className={`md:hidden flex flex-col justify-center items-center w-[38px] h-[38px] cursor-pointer z-[200]`}
        onClick={handleMenuClick}
        style={{ display: isMobile ? "flex" : "none" }}
      >
        <span
          className={`block w-7 h-1 bg-[#99ccff] m-[2px] rounded transition-all duration-400 ${
            menuOpen ? "translate-y-2 rotate-45" : ""
          }`}
        ></span>
        <span
          className={`block w-7 h-1 bg-[#99ccff] m-[2px] rounded transition-all duration-400 ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-7 h-1 bg-[#99ccff] m-[2px] rounded transition-all duration-400 ${
            menuOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        ></span>
      </div>
      {/* Mobil navigation */}
      {isMobile ? (
        <CSSTransition
          in={menuOpen}
          timeout={300}
          classNames="slide-nav"
          unmountOnExit
          nodeRef={mobileNavRef}
        >
          <nav
            className="absolute top-[60px] left-0 w-[32vw] min-w-[220px] max-w-[400px] bg-[#00595f] opacity-90 flex flex-col justify-start items-start z-[100] p-0 pb-4 overflow-hidden"
            ref={mobileNavRef}
          >
            <a href="#home" onClick={handleNavClick}>
              <span className="material-symbols-outlined text-2xl mr-1">home</span>
              Home <span className={navUnderline}></span>
            </a>{" "}
            <a href="#about" onClick={handleNavClick}>
              <span className="material-symbols-outlined text-2xl mr-1">emoji_people</span>
              About <span className={navUnderline}></span>
            </a>{" "}
            <a href="#skills" onClick={handleNavClick}>
              <span className="material-symbols-outlined text-2xl mr-1">person_play</span>
              Skills <span className={navUnderline}></span>
            </a>{" "}
            <a href="#projects" onClick={handleNavClick}>
              <span className="material-symbols-outlined text-2xl mr-1">build</span>
              Projects <span className={navUnderline}></span>
            </a>{" "}
            <a href="#contact" onClick={handleNavClick}>
              <span className="material-symbols-outlined text-2xl mr-1">mail</span>
              Contact <span className={navUnderline}></span>
            </a>
          </nav>
        </CSSTransition>
      ) : (
        // Desktop navigation
        <nav className="hidden md:flex justify-center gap-[50px]">
          <a href="#home" onClick={handleNavClick} className={navLink}>
            <span className="material-symbols-outlined text-2xl mr-1">home</span>
            Home <span className={navUnderline}></span>
          </a>{" "}
          <a href="#about" onClick={handleNavClick} className={navLink}>
            <span className="material-symbols-outlined text-2xl mr-1">emoji_people</span>
            About <span className={navUnderline}></span>
          </a>{" "}
          <a href="#skills" onClick={handleNavClick} className={navLink}>
            <span className="material-symbols-outlined text-2xl mr-1">person_play</span>
            Skills <span className={navUnderline}></span>
          </a>{" "}
          <a href="#projects" onClick={handleNavClick} className={navLink}>
            <span className="material-symbols-outlined text-2xl mr-1">build</span>
            Projects <span className={navUnderline}></span>
          </a>{" "}
          <a href="#contact" onClick={handleNavClick} className={navLink}>
            <span className="material-symbols-outlined text-2xl mr-1">mail</span>
            Contact <span className={navUnderline}></span>
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;
