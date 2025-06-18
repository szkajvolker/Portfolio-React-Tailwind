function Footer() {
  return (
    <footer className="py-4 bg-transparent backdrop-blur-md text-azure border-t-4 border-cyan-300 mx-8">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1000px] mx-auto px-4 gap-2">
        <div className="text-left text-sm">
          <small>
            BackgroundPicture:{" "}
            <a
              className=" text-md font-bold underline hover:text-cyan-300 transition-colors text-[#99ccff]"
              href="https://www.freepik.com/free-photo/abstract-digital-grid-black-background_13312417.htm#fromView=keyword&page=1&position=33&uuid=8f2e6a78-bd46-43fd-89db-8f6244ac7293&query=Web+Development+Background"
              target="_blank"
              rel="noopener noreferrer"
            >
              Image by rawpixel.com on Freepik
            </a>{" "}
          </small>
        </div>
        <div className="text-center font-bold md:text-right flex-1 text-sm text-[#99ccff]">
          <small>&copy; {new Date().getFullYear()} Szabó István | Author</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
