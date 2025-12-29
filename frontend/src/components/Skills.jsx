import { useState, useRef, useEffect } from "react";
import { icons, softSkills, hardSkills } from "../data/constants";

function Skills() {
  const [animateHard, setAnimateHard] = useState(false);
  const [animateSoft, setAnimateSoft] = useState(false);
  const hardSkillsRef = useRef(null);
  const softSkillsRef = useRef(null);

  useEffect(() => {
    const observerHard = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateHard(true);
        } else {
          setAnimateHard(false);
        }
      },
      { threshold: 0.1 }
    );

    const observerSoft = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateSoft(true);
        } else {
          setAnimateSoft(false);
        }
      },
      { threshold: 0.1 }
    );

    if (hardSkillsRef.current) {
      observerHard.observe(hardSkillsRef.current);
    }
    if (softSkillsRef.current) {
      observerSoft.observe(softSkillsRef.current);
    }

    return () => {
      observerHard.disconnect();
      observerSoft.disconnect();
    };
  }, []);

  const renderSkill = (skill, animate) => (
    <div key={skill.id} className="flex flex-col gap-3">
      <div className="flex flex-row gap-2">
        <span className="material-symbols-outlined text-xl">
          {icons[skill.id]}
        </span>
        <div className="border-2 border-[#99ccff] w-full h-5 rounded-lg overflow-hidden bg-black/20">
          <div
            className="h-full bg-[#99ccff] transition-all duration-2000 ease-out"
            style={{ width: animate ? `${skill.percentage}% ` : "0%" }}
          ></div>
        </div>
      </div>
      <span className="ml-7 text-left">{skill.name}</span>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 justify-center items-stretch w-full mx-auto px-4 py-8">
      <div
        ref={hardSkillsRef}
        className="bg-black/30 backdrop-blur-md rounded-xl p-6 md:p-8 flex-1 min-w-0 flex flex-col items-center"
      >
        <h2 className="text-[#99ccff] text-xl sm:text-2xl font-bold text-center mb-6">
          Hard skills
        </h2>
        <div className="space-y-4 text-[#99ccff] text-base sm:text-lg transition-colors duration-300 text-center md:text-left grid grid-cols-3 gap-5">
          {hardSkills.map((skill) => renderSkill(skill, animateHard))}
        </div>
      </div>

      <div
        ref={softSkillsRef}
        className="bg-black/30 backdrop-blur-md rounded-xl p-6 md:p-8 flex-1 min-w-0 flex flex-col items-center"
      >
        <h2 className="text-[#99ccff] text-xl sm:text-2xl font-bold text-center mb-6">
          Soft skills
        </h2>
        <div className="space-y-4 text-[#99ccff] text-base sm:text-lg transition-colors duration-300 text-center md:text-left grid grid-cols-3 gap-5">
          {softSkills.map((skill) => renderSkill(skill, animateSoft))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
