// Egyszerű kezdőlap komponens
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
    <div className="relative mt-10 min-h-[80vh] flex flex-col">
      <p
        className={`self-start font-anta text-4xl md:text-5xl text-[#99ccff] ml-3 mb-10
          ${animate ? "slide-in-left" : "opacity-0"}
        `}
      >
        Welcome to my webpage
      </p>
      <p
        className={`text-[#99ccff] font-anta font-bold text-[2.5rem] md:text-[95px] self-end
          ${animate ? "slide-in-right" : "opacity-0"}
        `}
      >
        Szabó István
      </p>
      <p
        className={`text-[#99ccff] font-anta font-bold text-[2.5rem] md:text-[95px] self-end
          ${animate ? "slide-in-left" : "opacity-0"}
        `}
      >
        Junior Frontend Developer
      </p>
      {showIndicator && (
        <div className="fixed right-6 bottom-20 flex justify-end items-end h-20 mt-auto animate-bounce text-5xl text-[#99ccff] opacity-80">
          <span className="material-symbols-outlined">keyboard_double_arrow_down</span>
        </div>
      )}
    </div>
  );
}

export default Home;
