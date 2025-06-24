import React, { useState } from "react";
import imageMsg from "../assets/images/msg.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [succesfullySend, setSuccesfully] = useState(false);
  const [emailSystem, setEmailSystem] = useState("0");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: name,
        from_email: email,
        to_name: "István",
        message: message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSuccesfully(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Email küldési hiba:", error);
    }
  };

  if (emailSystem === "1") {
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
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-[#99ccff] bg-transparent text-[#99ccff] rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#99ccff] placeholder-[#99ccff]/60"
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-[#99ccff] bg-transparent text-[#99ccff] rounded p-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-[#99ccff] placeholder-[#99ccff]/60"
            />
            <button
              type="submit"
              className="bg-[#99ccff] text-black font-semibold rounded p-2 hover:bg-cyan-300 transition-colors"
            >
              Send
            </button>
          </form>
          {succesfullySend && (
            <div className="text-green-400 text-center mt-4">Message successfully sent!</div>
          )}
        </div>
      </div>
    );
  }

  //Mailto
  return (
    <div className="flex justify-center">
      <span
        className="cursor-pointer"
        onClick={() => (window.location.href = "mailto:ist9595@windowslive.com")}
      >
        <img src={imageMsg} className="w-32 h-32 hover:brightness-120 hover:scale-110  "></img>
      </span>
    </div>
  );
};

export default Contact;
