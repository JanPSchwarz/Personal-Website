import Image from "next/image";
import { IoIosMail } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { forwardRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import CVbutton from "@/app/components/CVbutton";
import CookieBanner from "./CookieBanner";
import Contact from "./Contact";
import coverPic from "/public/assets/Cover-pic-Jan.webp";
import getPlaceholder from "../../../utils/getPlaceholder.js";

export default forwardRef(function Hero(props, ref) {
  const [showMessenger, setShowMessenger] = useState(false);
  const [copied, setCopied] = useState(false);

  const [imageLoaded, setImageHasLoaded] = useState(false);

  const [pageLoaded, setPageHasLoaded] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setCopied(false);
    }, 2500);

    return () => clearTimeout(timeOut);
  }, [copied]);

  function closeMessenger() {
    setShowMessenger(false);
  }

  useEffect(() => {
    setPageHasLoaded(true);
  }, []);

  useEffect(() => {
    const banner = sessionStorage.getItem("banner");

    if (!banner) {
      setShowBanner(true);
      sessionStorage.setItem("banner", "true");
    }
  }, [pageLoaded]);

  const sharedIconStyles = `fill-colorPreset6 active:scale-90 cursor-pointer size-10 rotate-[10deg] md:size-16 hover:fill-colorPreset2 hover:scale-[110%]`;

  return (
    <>
      {showBanner && (
        <CookieBanner buttonFunction={() => setShowBanner(false)} />
      )}
      {showMessenger && <Contact closeMessenger={closeMessenger} />}
      {copied && (
        <motion.p
          initial={{ y: -50, opacity: 0, translateX: "-50%" }}
          animate={{ y: 0, opacity: 1, translateX: "-50%" }}
          className={`absolute left-1/2 top-[20%] z-10 text-nowrap rounded bg-colorPreset3/50 p-2`}
        >
          Email copied to Clipboard!
        </motion.p>
      )}

      <div
        id="home"
        ref={(el) => (ref.current[0] = el)}
        className={`mx-auto flex h-full w-[80%] max-w-[1200px] snap-start flex-col items-center justify-evenly pt-[50px] text-xl md:justify-around md:pt-[70px] md:text-3xl lg:gap-10 landscape:relative landscape:items-start landscape:justify-center landscape:gap-7`}
      >
        <p className={`w-full text-left`}>
          Hi, ich bin <span className={`text-colorPreset5`}>Jan,</span>
        </p>
        <div
          className={`relative left-[8%] aspect-square w-full overflow-hidden md:w-[80%] landscape:absolute landscape:left-[55%] landscape:w-[60%]`}
        >
          <Image
            src={coverPic}
            placeholder={getPlaceholder(`Cover-pic-Jan.webp`)}
            fill
            onLoad={() => setImageHasLoaded(true)}
            alt="Bild von Jan"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
            priority
            className={`relative left-5 -rotate-[10deg] object-contain ${!imageLoaded && `blur-sm`} transition-all`}
            style={{ objectFit: "contain" }}
          />
          <div
            className={`bg-colorPreset5 absolute bottom-[6%] left-[21%] h-[75%] w-[8px] -rotate-[10deg] md:h-[80%]`}
          >
            <div
              className={`absolute bottom-[5%] right-[285%] flex w-[35px] flex-col gap-4 md:w-auto md:gap-8`}
            >
              <IoIosMail
                onClick={() => {
                  navigator.clipboard.writeText("jan-paul@schw-a-rz.de");
                  setCopied(true);
                }}
                className={sharedIconStyles + ` `}
              />
              <CVbutton className={`w-[33px] rotate-[10deg] md:w-14`} />

              <a
                href="//www.linkedin.com/in/jan-schwarz-webdeveloper"
                target="_blank"
              >
                <FaLinkedin
                  aria-label="Link to Jan's LinkedIn profile"
                  className={sharedIconStyles}
                />
              </a>
              <a href="//github.com/JanPSchwarz" target="_blank">
                <FaGithub
                  aria-label="Link to Jan's GitHub profile"
                  className={sharedIconStyles}
                />
              </a>
            </div>
          </div>
        </div>
        <h1
          className={`text-center text-5xl font-extrabold text-colorPreset3 md:text-7xl`}
        >
          Front-End <span className={`block`}>Developer</span>
        </h1>
        <button
          className={`bg-colorPreset5 text-colorPreset6 lg-portrait:text-4xl lg-portrait:p-4 rounded-lg p-2 px-4 font-extrabold saturate-[0.9] hover:scale-110 lg:mt-24 lg:text-4xl`}
          onClick={() => setShowMessenger(true)}
        >
          Contact Me
        </button>
      </div>
    </>
  );
});
