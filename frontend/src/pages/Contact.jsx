import { useEffect, useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [succesfullySend, setSuccesfully] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (response.ok) {
        setSuccesfully(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        console.error("Error at sending email");
      }
    } catch (error) {
      console.error("Server Error", error);
    }
  };
  useEffect(() => {
    if (succesfullySend) {
      const timer = setTimeout(() => setSuccesfully(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [succesfullySend]);
  {
    succesfullySend && (
      <div className="text-green-400 text-center mt-4">Message succesfully sent!</div>
    );
  }
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="bg-black/30 backdrop-blur-md rounded-xl p-10 shadow-lg w-full max-w-lg mx-auto">
        <h2 className="text-2xl text-[#99ccff] font-bold mb-6 text-center">Contact</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-[#99ccff] bg-transparent text-[#99ccff] rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#99ccff] placeholder-[#99ccff]/60"
          ></input>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[#99ccff] bg-transparent text-[#99ccff] rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#99ccff] placeholder-[#99ccff]/60"
          />
          <textarea
            placeholder="type text..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-[#99ccff] bg-transparent text-[#99ccff] rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#99ccff] placeholder-[#99ccff]/60"
          />
          <button
            type="submit"
            className="bg-[#99ccff] text-black font-semibold rounded-2xl p-2 hover:bg-cyan-300 transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
