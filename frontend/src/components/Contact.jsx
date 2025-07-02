import React from "react";
import imageMsg from "../assets/images/msg.png";

const Contact = () => {
  return (
    <div className="flex justify-center mt-20">
      <span
        className="cursor-pointer"
        onClick={() => (window.location.href = "mailto:ist9595@windowslive.com")}
      >
        <img src={imageMsg} className="w-40 h-40 hover:brightness-120 hover:scale-110  "></img>
      </span>
    </div>
  );
};

export default Contact;
