function Skills() {
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

  return (
    <meta name="google" content="notranslate">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 justify-center items-stretch w-full mx-auto px-4 py-8">
        <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 md:p-8 flex-1 min-w-0 flex flex-col items-center">
          <h2 className="text-[#99ccff] text-xl sm:text-2xl font-bold text-center mb-6">
            Hard skills
          </h2>
          <div className="space-y-4 text-[#99ccff] text-base sm:text-lg transition-colors duration-300 text-center md:text-left grid grid-cols-3 gap-5">
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-2">
                <span className="material-symbols-outlined text-xl">{icons.html}</span>
                <div className="border-2 border-[#99ccff] w-full h-5 rounded-lg overflow-hidden bg-black/20">
                  <div className="h-full bg-[#99ccff] w-[85%] transition-all duration-1000 ease-out"></div>
                </div>
              </div>
              <span className="ml-7 text-left">HTML</span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-2">
                <span className="material-symbols-outlined text-xl">{icons.css}</span>
                <div className="border-2 border-[#99ccff] w-full h-5 rounded-lg overflow-hidden bg-black/20">
                  <div className="h-full bg-[#99ccff] w-[70%] transition-all duration-1000 ease-out"></div>
                </div>
              </div>
              <span className="ml-7 text-left">CSS</span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-2">
                <span className="material-symbols-outlined text-xl">{icons.javascript}</span>
                <div className="border-2 border-[#99ccff] w-full h-5 rounded-lg overflow-hidden bg-black/20">
                  <div className="h-full bg-[#99ccff] w-[85%] transition-all duration-1000 ease-out"></div>
                </div>
              </div>
              <span className="ml-7 text-left">JavaScript</span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-2">
                <span className="material-symbols-outlined text-xl">{icons.react}</span>
                <div className="border-2 border-[#99ccff] w-full h-5 rounded-lg overflow-hidden bg-black/20">
                  <div className="h-full bg-[#99ccff] w-[90%] transition-all duration-1000 ease-out"></div>
                </div>
              </div>
              <span className="ml-7 text-left">React</span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-2">
                <span className="material-symbols-outlined text-xl">{icons.express}</span>
                <div className="border-2 border-[#99ccff] w-full h-5 rounded-lg overflow-hidden bg-black/20">
                  <div className="h-full bg-[#99ccff] w-[80%] transition-all duration-1000 ease-out"></div>
                </div>
              </div>
              <span className="ml-7 text-left">Express.js</span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-2">
                <span className="material-symbols-outlined text-xl">{icons.node}</span>
                <div className="border-2 border-[#99ccff] w-full h-5 rounded-lg overflow-hidden bg-black/20">
                  <div className="h-full bg-[#99ccff] w-[70%] transition-all duration-1000 ease-out"></div>
                </div>
              </div>
              <span className="ml-7 text-left">Node.js</span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-2">
                <span className="material-symbols-outlined text-xl">{icons.git}</span>
                <div className="border-2 border-[#99ccff] w-full h-5 rounded-lg overflow-hidden bg-black/20">
                  <div className="h-full bg-[#99ccff] w-[75%] transition-all duration-1000 ease-out"></div>
                </div>
              </div>
              <span className="ml-7 text-left">Git & GitHub</span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-2">
                <span className="material-symbols-outlined text-xl">{icons.postman}</span>
                <div className="border-2 border-[#99ccff] w-full h-5 rounded-lg overflow-hidden bg-black/20">
                  <div className="h-full bg-[#99ccff] w-[75%] transition-all duration-1000 ease-out"></div>
                </div>
              </div>
              <span className="ml-7 text-left">Postman</span>
            </div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 md:p-8 flex-1 min-w-0 flex flex-col items-center">
          <h2 className="text-[#99ccff] text-xl sm:text-2xl font-bold text-center mb-6">
            Soft skills
          </h2>
          <div className="space-y-4 text-[#99ccff] text-base sm:text-lg transition-colors duration-300 text-center md:text-left grid grid-cols-3 gap-5">
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-2">
                <span className="material-symbols-outlined text-xl">{icons.teamwork}</span>
                <div className="border-2 border-[#99ccff] w-full h-5 rounded-lg overflow-hidden bg-black/20">
                  <div className="h-full bg-[#99ccff] w-[85%] transition-all duration-1000 ease-out"></div>
                </div>
              </div>
              <span className="ml-7 text-left">Teamwork</span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-2">
                <span className="material-symbols-outlined text-xl">{icons.cleanCode}</span>
                <div className="border-2 border-[#99ccff] w-full h-5 rounded-lg overflow-hidden bg-black/20">
                  <div className="h-full bg-[#99ccff] w-[85%] transition-all duration-1000 ease-out"></div>
                </div>
              </div>
              <span className="ml-7 text-left">Clean Code</span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-2">
                <span className="material-symbols-outlined text-xl">{icons.problemSolving}</span>
                <div className="border-2 border-[#99ccff] w-full h-5 rounded-lg overflow-hidden bg-black/20">
                  <div className="h-full bg-[#99ccff] w-[80%] transition-all duration-1000 ease-out"></div>
                </div>
              </div>
              <span className="ml-7 text-left">Problem Solving</span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-2">
                <span className="material-symbols-outlined text-xl">{icons.selfLearning}</span>
                <div className="border-2 border-[#99ccff] w-full h-5 rounded-lg overflow-hidden bg-black/20">
                  <div className="h-full bg-[#99ccff] w-[95%] transition-all duration-1000 ease-out"></div>
                </div>
              </div>
              <span className="ml-7 text-left">Self-Learning</span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-2">
                <span className="material-symbols-outlined text-xl">{icons.responsive}</span>
                <div className="border-2 border-[#99ccff] w-full h-5 rounded-lg overflow-hidden bg-black/20">
                  <div className="h-full bg-[#99ccff] w-[75%] transition-all duration-1000 ease-out"></div>
                </div>
              </div>
              <span className="ml-7 text-left text-sm sm:text-base md:text-lg">
                Responsive Design
              </span>
            </div>
          </div>
        </div>
      </div>
    </meta>
  );
}

export default Skills;
