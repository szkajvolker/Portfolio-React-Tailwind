import { useState, useLayoutEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { navLinks } from "../data/constants";

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
    <header className="fixed top-0 left-0 right-0 bg-[#00595f]/90 backdrop-blur-md text-[#99ccff] py-4 px-4 shadow-lg z-50 border-b border-[#99ccff]/20">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
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

        {!isMobile && (
          <nav className="flex justify-center items-center gap-8 w-full">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleNavClick}
                className={navLink}
              >
                <span className="material-symbols-outlined text-xl">
                  {link.icon}
                </span>
                {link.name} <span className={navUnderline}></span>
              </a>
            ))}
          </nav>
        )}
      </div>

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
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleNavClick}
                className="flex items-center gap-3 text-white no-underline text-lg py-4 px-4 rounded-lg transition-all duration-300 hover:text-[#99ccff] hover:bg-white/10 w-full"
              >
                <span className="material-symbols-outlined text-2xl">
                  {link.icon}
                </span>
                {link.name}
              </a>
            ))}
          </nav>
        </CSSTransition>
      )}
    </header>
  );
}

export default Header;
