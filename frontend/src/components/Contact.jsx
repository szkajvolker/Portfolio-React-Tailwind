import imageMsg from "../assets/images/msg.png";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#99ccff] mb-4">
          Get In Touch
        </h2>
        <p className="text-[#99ccff] text-base sm:text-lg max-w-md mx-auto">
          Feel free to reach me out
        </p>
      </div>
      <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 text-center">
        <span
          onClick={() => (window.location.href = "mailto:ist9595@windowslive.com")}
          className="cursor-pointer inline-block transition-transform duration-300 hover:scale-110 hover:brightness-125"
        >
          <img
            src={imageMsg}
            alt="Email contact"
            className="w-24 h-24 sm:h-32 lg:w-40 mx-auto mb-4 drop-shadow-lg"
          />
        </span>
        <div className="text-[#99ccff]">
          <p className="text-sm sm:text-base mb-2">Click the icon above to send me an email</p>
          <p className="text-xs sm:text-sm opacity-80">ist9595@windowslive.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
