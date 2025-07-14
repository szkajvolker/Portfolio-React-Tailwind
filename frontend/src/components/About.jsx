import { useState, useRef, useEffect } from "react";
import profile2 from "../assets/images/profile2.jpg";

function About() {
  const [animate, setAnimate] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-6 lg:gap-8 xl:gap-12 px-4 py-8">
      <img
        ref={imgRef}
        src={profile2}
        alt="profilepic"
        className={`w-full max-w-48 sm:max-w-xs md:max-w-sm lg:max-w-xs xl:max-w-sm h-auto object-cover rounded-lg shadow-lg flex-shrink-0 ${
          animate ? "slide-in-left" : "opacity-0"
        }`}
      ></img>
      <div className="bg-black/30 backdrop-blur-md rounded-xl p-4 sm:p-6 lg:p-8 w-full lg:flex-1 lg:max-w-2xl">
        <p
          className={`text-[#99ccff] sm:text-lg lg:text-xl leading-relaxed text-base text-center lg:text-left${
            animate ? "appear" : ""
          }`}
        >
          My name is Istvan Szabo, I am a frontend developer.
          <br /> A bit about me: after highscool I explored different carrer paths in various jobs.
          In 2019, I moved to Northern Ireland to work. After spending several years in factories, I
          decided to pursue something I truly enjoy - frontend development. I enrolled in the
          Codecool bootcamp, where I gained a solid foundation in Javascript,CSS and HTML.
          <br /> I really enjoy programming and constantly challenging myself to grow. In my
          freetime I like playing videogames, watching TV series and as a hobby, I am also
          passionate about game development.I am currently following a course in Unreal Engine 5,
          hoping that one day I can create my own indie game (or at least build one for myself)
        </p>
      </div>
    </div>
  );
}

export default About;
