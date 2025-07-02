import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("dist/data/Projects.json");
        const data = await res.json();
        setProjects(data || []);
      } catch (error) {
        console.error(error);
        setProjects([]);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col mb-60">
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
              <div className="flex flex-row border-1 p-1">
                <p>Status: {p.status}</p>
                <p>{p.status ? "Done 🟢" : "In Progress 🔴"}</p>
              </div>
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
      </div>
    </div>
  );
}

export default Projects;
