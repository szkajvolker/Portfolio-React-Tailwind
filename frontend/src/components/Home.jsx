import { useEffect, useState } from "react";

function Home() {
  const [showIndicator, setShowIndicator] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    function onScroll() {
      setShowIndicator(window.scrollY < 500);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center px-4 py-4 sm:py-8">
      <p
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#99ccff] mb-4 sm:mb-8 md:mb-12 text-center ${
          animate ? "slide-in-left" : "opacity-0"
        }`}
      >
        Welcome to my webpage
      </p>

      <div className="w-full max-w-4xl">
        <p
          className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#99ccff] mb-2 sm:mb-4 text-left ${
            animate ? "slide-in-right" : "opacity-0"
          }`}
        >
          Szabó István
        </p>
        <p
          className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#99ccff] text-right ${
            animate ? "slide-in-left" : "opacity-0"
          }`}
        >
          Junior Frontend Developer
        </p>
      </div>

      {showIndicator && (
        <div className="fixed bottom-8 right-4 sm:right-6 md:right-8 animate-bounce">
          <span
            className="material-symbols-outlined text-[#01ffff] opacity-80 animate-pulse text-6xl sm:text-7xl md:text-8xl"
            style={{
              fontSize: "100px",
              fontVariationSettings: '"FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48',
              textShadow: "0 0 10px #99ccff, 0 0 20px #99ccff,0 0 30px #99ccff,0 0 40px #99ccff",
            }}
          >
            keyboard_double_arrow_down
          </span>
        </div>
      )}
    </div>
  );
}

export default Home;
