function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-md border-t-2 border-[#99ccff]/30 mt-16 py-6 px-4">
      <div className="max-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-8">
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <small className="text-[#99ccff] text-xs sm:text-sm">
              BackgroundPicture:{" "}
              <a
                href="https://www.freepik.com/free-photo/abstract-digital-grid-black-background_13312417.htm#fromView=keyword&page=1&position=33&uuid=8f2e6a78-bd46-43fd-89db-8f6244ac7293&query=Web+Development+Background"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-200 underline transition-colors duration-300 font-medium"
              >
                Image by rawpixel.com on Freepik
              </a>
            </small>
            <small className="text-[#99ccff] text-xs sm:text-sm">
              <a
                href="https://www.flaticon.com/free-icons/email"
                title="email icons"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-200 underline transition-colors duration-300 font-medium"
              >
                Email icons created by Freepik - Flaticon
              </a>
            </small>
          </div>

          <div className="text-center lg:text-right">
            <small className="text-[#99ccff] text-xs sm:text-sm font-semibold">
              &copy; {new Date().getFullYear()} Szabó István | Author
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
