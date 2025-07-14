import projects from "../data/projects.json";

function Projects() {
  return (
    <div className="flex justify-center px-4 py-8">
      <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 sm:p-8 w-full max-w-4xl">
        <div className="flex flex-col sm:text-flex-row items-center justify-center gap-3 mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#99ccff]">Projects</h2>
          <span className="material-symbols-outlined text-3xl sm:text-4xl lg:text-5xl text-[#99ccff]">
            code
          </span>
        </div>

        <ul className="space-y-6 sm:space-y-8">
          {projects.map((p) => (
            <li
              key={p.id}
              className="bl-black-20 rounded-lg p-4 sm:p-6 border border-[#99ccff]/20 hover:border-[#99ccff]/40 transition-all duration-300"
            >
              <div className="flex flex-col gap-3">
                <div className="text-[#99ccff]">
                  <strong className="text-lg sm:text-xl font-semibold text-cyan-300">
                    {p.title}
                  </strong>
                  :<span className="text-base sm:text-lg">{p.description}</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm sm-text-base">
                  <p className="text-[#99ccff] font-medium">Status: {p.status}</p>
                  <p className="text-[#99ccff]">{p.status ? "Done 🟢" : "In Progress 🔴"}</p>
                </div>

                {p.repo && (
                  <div className="flex items-center gap-2 mt-2">
                    {""}
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#99ccff] hover:text-cyan-300 underline transition-colors duration-300 text-sm sm:text-base font-medium"
                    >
                      GitHub Repo
                    </a>
                    <span className="material-symbols-outlined text-lg sm:text-xl text-[#99ccff]">
                      open_in_new
                    </span>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;
