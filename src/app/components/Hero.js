import Image from "next/image";
import { IoIosMail } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { forwardRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import CVbutton from "@/app/components/CVbutton";
import Contact from "./Contact";

export default forwardRef(function Hero(props, ref) {
  const [showMessenger, setShowMessenger] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setCopied(false);
    }, 2000);

    return () => clearTimeout(timeOut);
  }, [copied]);

  function closeMessenger() {
    setShowMessenger(false);
  }

  return (
    <>
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
        className={`mx-auto flex h-dvh w-[80%] snap-center flex-col items-center justify-end overflow-x-hidden text-xl`}
      >
        <p className={`w-full text-left`}>
          Hi, ich bin <span className={`text-colorPreset5`}>Jan,</span>
        </p>
        <div className={`relative left-[8%] aspect-square w-[350px]`}>
          <Image
            src={"/assets/b5792ad4-cutted (1).png"}
            fill
            alt="Bild von Jan"
            priority
            className={`relative left-5 -rotate-[10deg] object-contain`}
          />
          <div
            className={`bg-colorPreset5 absolute bottom-[6%] left-[22%] h-[65%] w-[8px] -rotate-[10deg]`}
          >
            <div
              className={`absolute bottom-[5%] right-[285%] flex flex-col gap-4`}
            >
              <IoIosMail
                onClick={() => {
                  navigator.clipboard.writeText("jan-paul@schw-a-rz.de");
                  setCopied(true);
                }}
                className={`fill-colorPreset6 size-10 rotate-[10deg]`}
              />
              <CVbutton className={`w-9 rotate-[10deg]`} />
              <a
                href="//www.linkedin.com/in/jan-schwarz-webdeveloper"
                target="_blank"
              >
                <FaLinkedin
                  className={`fill-colorPreset6 size-10 rotate-[10deg]`}
                />
              </a>
              <a href="//github.com/JanPSchwarz" target="_blank">
                <FaGithub
                  className={`fill-colorPreset6 size-10 rotate-[10deg]`}
                />
              </a>
            </div>
          </div>
        </div>
        <h1 className={`text-center text-5xl font-extrabold text-colorPreset3`}>
          Front-End <span className={`block`}>Developer</span>
        </h1>
        <button
          className={`bg-colorPreset5 text-colorPreset6 my-8 rounded-lg p-2 px-4 font-extrabold`}
          onClick={() => setShowMessenger(true)}
        >
          Contact Me
        </button>
      </div>
    </>
  );
});
