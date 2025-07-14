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

  const navLink = "";
  const navUnderline = "";

  return (
    <header>
      <div onClick={handleMenuClick} style={{ display: isMobile ? "flex" : "none" }}>
        <span className={menuOpen ? "translate-y-2 rotate-45" : ""}></span>
        <span className={menuOpen ? "opacity-0" : ""}></span>
        <span className={menuOpen ? "-translate-y-2 -rotate-45" : ""}></span>
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
          <nav ref={mobileNavRef}>
            <a href="#home" onClick={handleNavClick}>
              <span>home</span>
              Home <span className={navUnderline}></span>
            </a>{" "}
            <a href="#about" onClick={handleNavClick}>
              <span>emoji_people</span>
              About <span className={navUnderline}></span>
            </a>{" "}
            <a href="#skills" onClick={handleNavClick}>
              <span>person_play</span>
              Skills <span className={navUnderline}></span>
            </a>{" "}
            <a href="#projects" onClick={handleNavClick}>
              <span>build</span>
              Projects <span className={navUnderline}></span>
            </a>{" "}
            <a href="#contact" onClick={handleNavClick}>
              <span>mail</span>
              Contact <span className={navUnderline}></span>
            </a>
          </nav>
        </CSSTransition>
      ) : (
        // Desktop navigation
        <nav>
          <a href="#home" onClick={handleNavClick} className={navLink}>
            <span>home</span>
            Home <span className={navUnderline}></span>
          </a>{" "}
          <a href="#about" onClick={handleNavClick} className={navLink}>
            <span>emoji_people</span>
            About <span className={navUnderline}></span>
          </a>{" "}
          <a href="#skills" onClick={handleNavClick} className={navLink}>
            <span>person_play</span>
            Skills <span className={navUnderline}></span>
          </a>{" "}
          <a href="#projects" onClick={handleNavClick} className={navLink}>
            <span>build</span>
            Projects <span className={navUnderline}></span>
          </a>{" "}
          <a href="#contact" onClick={handleNavClick} className={navLink}>
            <span>mail</span>
            Contact <span className={navUnderline}></span>
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;
