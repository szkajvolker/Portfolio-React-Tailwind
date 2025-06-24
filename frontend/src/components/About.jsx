import { useState, useRef, useEffect } from "react";
import profilePic from "../assets/images/profilePic.png";

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
    <div className="flex flex-row items-center justify-between  w-full h-auto mx-auto mt-10 mb-30 gap-30">
      <img
        ref={imgRef}
        src={profilePic}
        alt="profilepic"
        className={`w-[80vw] max-w-[300px] h-auto self-start object-cover rounded-[10px_0_10px_0] flex-shrink-0 ${
          animate ? "slide-in-left" : "opacity-0"
        }`}
      ></img>
      <div className="flex bg-black/30 justify-end w-fit rounded-xl p-10 min-w-[220px] flex-1 backdrop-blur-md">
        <p
          className={`text-[#99ccff] text-[1.2rem]  leading-9 self-start text-center md:text-left w-full ${
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
