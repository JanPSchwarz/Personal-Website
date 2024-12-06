import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BiSolidEnvelope } from "react-icons/bi";
import { forwardRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import CVbutton from "@/app/components/CVbutton";
import CookieBanner from "./CookieBanner";
import Contact from "./Contact";
import coverPic from "/public/assets/Cover-pic-Jan.webp";
import getPlaceholder from "../../../utils/getPlaceholder.js";
import Typewriter from "./Typewriter";

export default forwardRef(function Hero(props, ref) {
  const [showMessenger, setShowMessenger] = useState(false);
  const [copied, setCopied] = useState(false);

  const [imageLoaded, setImageHasLoaded] = useState(false);

  const [pageLoaded, setPageHasLoaded] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

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

    console.log(!banner);

    if (!banner) {
      setShowBanner(true);
      sessionStorage.setItem("banner", "true");
    }
  }, [pageLoaded]);

  //* for delay of typewriter animations
  const typewriterDelay = 1;

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
        <div className={`w-full text-left`}>
          <Typewriter
            text="Hi, ich bin"
            delay={typewriterDelay}
            tag="p"
            className={`inline`}
          />
          <Typewriter
            text=" Jan,"
            tag="span"
            delay={typewriterDelay + 1}
            className={`text-colorPreset5`}
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`relative left-[8%] aspect-square w-full overflow-visible landscape:absolute landscape:left-[55%] landscape:w-[60%]`}
        >
          <Image
            src={coverPic}
            placeholder={getPlaceholder(`Cover-pic-Jan.webp`)}
            fill
            onLoad={() => setImageHasLoaded(true)}
            alt="Bild von Jan"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
            priority
            className={`relative left-5 -rotate-[10deg] object-contain brightness-110 ${!imageLoaded && `blur-sm`} transition-all`}
            style={{ objectFit: "contain" }}
          />
          <div
            className={`absolute bottom-[6%] left-[21%] h-[75%] w-[8px] -rotate-[10deg] overflow-visible bg-colorPreset5 md:h-[80%]`}
          >
            <div
              className={`absolute bottom-[5%] right-[285%] flex w-[35px] flex-col gap-4 overflow-visible md:w-auto md:gap-6 lg:gap-10`}
            >
              <div
                className={`flex aspect-square size-10 rotate-[10deg] cursor-pointer items-center justify-center overflow-visible rounded-full bg-colorPreset6 hover:scale-[110%] hover:bg-colorPreset2 active:scale-90 active:bg-colorPreset2 md:size-16`}
              >
                <BiSolidEnvelope
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.code === "Enter") {
                      navigator.clipboard.writeText("jan-paul@schw-a-rz.de");
                      setCopied(true);
                    }
                  }}
                  onClick={() => {
                    navigator.clipboard.writeText("jan-paul@schw-a-rz.de");
                    setCopied(true);
                  }}
                  className={`size-[80%] fill-colorPreset1 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500`}
                />
              </div>
              <CVbutton className={`size-10 rotate-[10deg] md:size-16`} />

              <a
                href="//www.linkedin.com/in/jan-schwarz-webdeveloper"
                target="_blank"
                className={`flex aspect-square size-10 rotate-[10deg] cursor-pointer items-center justify-center rounded-full bg-colorPreset6 hover:scale-[110%] hover:bg-colorPreset2 active:scale-90 active:bg-colorPreset2 md:size-16`}
              >
                <FaLinkedinIn
                  aria-label="Link to Jan's LinkedIn profile"
                  className={`size-[70%] fill-colorPreset1`}
                />
              </a>
              <a href="//github.com/JanPSchwarz" target="_blank">
                <FaGithub
                  aria-label="Link to Jan's GitHub profile"
                  className={`size-10 rotate-[10deg] cursor-pointer fill-colorPreset6 hover:scale-[110%] hover:fill-colorPreset2 active:scale-90 active:fill-colorPreset2 md:size-16`}
                />
              </a>
            </div>
          </div>
        </motion.div>
        <div
          className={`text-center text-5xl font-extrabold text-colorPreset3 md:text-7xl`}
        >
          <Typewriter
            tag="h1"
            text="Front-End"
            delay={typewriterDelay + 2}
            className={``}
          />
          <Typewriter
            tag="span"
            text="Developer"
            delay={typewriterDelay + 3}
            className={`block`}
          />
        </div>
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: typewriterDelay + 4, duration: 1 }}
          className={`rounded-lg bg-colorPreset5 p-2 px-4 font-extrabold text-colorPreset6 saturate-[0.9] hover:scale-110 lg:mt-24 lg:text-4xl lg-portrait:p-4 lg-portrait:text-4xl`}
          onClick={() => setShowMessenger(true)}
        >
          Contact Me
        </motion.button>
      </div>
    </>
  );
});
