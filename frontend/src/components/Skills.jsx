function Skills() {
  return (
    <div className="flex flex-col md:flex-row gap-30 justify-center items-start mx-auto max-w-[900px] mt-30 mb-30">
      <div className="bg-black/30 rounded-xl p-10 min-w-[220px] flex-1 backdrop-blur-md">
        <h2 className="text-[#99ccff] mb-4 text-2xl text-center">Hard skills</h2>
        <ul className="list-none p-0">
          <li className="mb-2 text-[#99ccff] text-[1.1rem]">HTML</li>
          <li className="mb-2 text-[#99ccff] text-[1.1rem]">CSS</li>
          <li className="mb-2 text-[#99ccff] text-[1.1rem]">JavaScript</li>
          <li className="mb-2 text-[#99ccff] text-[1.1rem]">React</li>
          <li className="mb-2 text-[#99ccff] text-[1.1rem]">express.js</li>
          <li className="mb-2 text-[#99ccff] text-[1.1rem]">Node.js</li>
          <li className="mb-2 text-[#99ccff] text-[1.1rem]">Git & GitHub</li>
          <li className="mb-2 text-[#99ccff] text-[1.1rem]">Postman</li>
        </ul>
      </div>
      <div className="bg-black/30 rounded-xl p-10 min-w-[220px] flex-1 backdrop-blur-md">
        <h2 className="text-[#99ccff] mb-4 text-2xl text-center">Soft skills</h2>
        <ul className="list-none p-0">
          <li className="mb-2  text-[#99ccff] text-[1.1rem]">Teamwork</li>
          <li className="mb-2  text-[#99ccff] text-[1.1rem]">Clean Code</li>
          <li className="mb-2  text-[#99ccff] text-[1.1rem]">Problem Solving</li>
          <li className="mb-2  text-[#99ccff] text-[1.1rem]">Self-Learning</li>
          <li className="mb-2  text-[#99ccff] text-[1.1rem]">Basic Responsive Design</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
