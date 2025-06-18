//react komponens projectek megjelenítése

import { useEffect, useState } from "react";
import UIPic from "../assets/images/UIHalftimeForm.png";

function Projects() {
  // Állapot a projektek tárolására
  const [projects, setProjects] = useState([]);

  // Komponens betöltésekor betöltjük a projekteket a backendről
  useEffect(() => {
    fetch("/data/Projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="flex flex-col">
      <div className="bg-black/30 w-fit backdrop-blur-md rounded-lg p-6 mx-auto mt-30 mb-30">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl text-[#99ccff] font-bold">Projects</h2>
          <span className="material-symbols-outlined text-3xl text-[#99ccff]">code</span>
        </div>
        <ul className="space-y-4">
          {projects.map((p) => (
            <li
              key={p.id}
              className="text-[#99ccff] text-lg flex flex-col md:flex-row md:items-center gap-2"
            >
              <strong className="text-[#99ccff]">{p.title}</strong>: {p.description}
              {p.repo && (
                <div className="flex items-center gap-1">
                  {""}
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-cyan-300 transition-colors"
                  >
                    GitHub Repo
                  </a>
                  <span className="material-symbols-outlined  text-xl text-[#99ccff]">
                    open_in_new
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-8">
          <div className="bg-white/10 rounded-lg p-4 shadow-lg">
            <img src={UIPic} alt="HalftimeExam UI Form" className="max-w-xs md:max-w-md rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
