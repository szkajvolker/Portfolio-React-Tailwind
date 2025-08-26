import { useState, useRef, useEffect } from "react";

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

  const icons = {
    html: "code",
    css: "palette",
    javascript: "javascript",
    react: "science",
    express: "cloud",
    node: "developer_mode",
    git: "source",
    postman: "api",
    teamwork: "group",
    cleanCode: "auto_fix_high",
    problemSolving: "psychology",
    selfLearning: "school",
    responsive: "devices",
  };

  const hardSkills = [
    { id: "html", name: "HTML", percentage: 85 },
    { id: "css", name: "CSS", percentage: 75 },
    { id: "javascript", name: "JavaScript", percentage: 90 },
    { id: "react", name: "React", percentage: 80 },
    { id: "express", name: "Express.js", percentage: 40 },
    { id: "node", name: "Node.js", percentage: 85 },
    { id: "git", name: "Git & GitHub", percentage: 85 },
    { id: "postman", name: "Postman", percentage: 65 },
  ];

  const softSkills = [
    { id: "teamwork", name: "Teamwork", percentage: 90 },
    { id: "cleanCode", name: "Clean Code", percentage: 87 },
    { id: "problemSolving", name: "Problem Solving", percentage: 85 },
    { id: "selfLearning", name: "Self-Learning", percentage: 95 },
    { id: "responsive", name: "Responsive Design", percentage: 88 },
  ];

  const renderSkill = (skill, animate) => (
    <div key={skill.id} className="flex flex-col gap-3">
      <div className="flex flex-row gap-2">
        <span className="material-symbols-outlined text-xl">{icons[skill.id]}</span>
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
