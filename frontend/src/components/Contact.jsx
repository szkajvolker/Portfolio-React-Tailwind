import React from "react";

const Contact = () => {
  return (
    <div>
      <span
        className="cursor-pointer"
        onClick={() => (window.location.href = "mailto:ist9595@windowslive.com")}
      >
        📧
      </span>
    </div>
  );
};

export default Contact;
