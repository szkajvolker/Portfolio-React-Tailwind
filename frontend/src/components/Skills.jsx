function Skills() {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 justify-center items-stretch max-w-4xl mx-auto px-4 py-8">
      <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 md:p-8 flex-1 min-w-0">
        <h2 className="text-[#99ccff] text-xl sm:text-2xl font-bold text-center mb-6">
          Hard skills
        </h2>
        <ul className="space-y-3 text-[#99ccff] text-base sm:text-lg hover:text-cyan-300 transition-colors duration-300 text-center md:text-left">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Express</li>
          <li>Node</li>
          <li>Git & GitHub</li>
          <li>Postman</li>
        </ul>
      </div>
      <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 md:p-8 flex-1 min-w-0">
        <h2 className="text-[#99ccff] text-xl sm:text-2xl font-bold text-center mb-6">
          Soft skills
        </h2>
        <ul className="space-y-3 text-[#99ccff] text-base sm:text-lg hover:text-cyan-300 transition-colors duration-300 text-center md:text-left">
          <li>Teamwork</li>
          <li>Clean Code</li>
          <li>Problem Solving</li>
          <li>Self-Learning</li>
          <li>Basic Responsive Design</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
