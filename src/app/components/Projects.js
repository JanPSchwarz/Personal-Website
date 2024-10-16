import { forwardRef, useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import { projectsData } from "../../../lib/projectsData";
import { motion, AnimatePresence } from "framer-motion";
import FullScreenImage from "./FullScreenImage";
import { useSwipeable } from "react-swipeable";
import { FaGithub } from "react-icons/fa";
import { AiOutlineFullscreen } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdTouchApp } from "react-icons/md";
import { twMerge } from "tailwind-merge";

export default forwardRef(function Projects(props, ref) {
  const [projectIndex, setProjectIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  //* add blur on images when image is loading
  const [imageLoaded, setImageHasLoaded] = useState(false);

  //* detects "direction" to adjust animation of project Change
  const [animationDirection, setAnimationDirection] = useState();

  const [fullScreenGallery, setFullScreenGallery] = useState(false);

  const [showTouchIcon, setShowTouchIcon] = useState(true);

  const { heading, url, github, description, images, techStack } =
    projectsData[projectIndex];

  const { href, figcaption, alt, hash } = images[imageIndex];

  //* handles touchIcon visbility
  useEffect(() => {
    setShowTouchIcon(false);
    const timeOut = setTimeout(() => {
      setShowTouchIcon(true);
    }, 3000);

    return () => clearTimeout(timeOut);
  }, [href]);

  useEffect(() => {
    changeProjectIndex(animationDirection);
  }, [animationDirection]);

  function changeProjectIndex(index) {
    if (typeof index === "number") {
      setProjectIndex(index);
      setImageIndex(0);
    } else if (index === "next") {
      setProjectIndex((prev) => (prev + 1) % projectsData.length);
      setImageIndex(0);
    } else if (index === "previous") {
      setProjectIndex(
        (prev) => (prev - 1 + projectsData.length) % projectsData.length,
      );
      setImageIndex(0);
    }
  }

  //* calls project change right away if direction hasn't changed
  //* otherwise it'll change the direction useState first which then calls a useEffect triggering changeProjectIndex
  function switchProject(direction) {
    if (animationDirection === direction) changeProjectIndex(direction);
    else setAnimationDirection(direction);
  }

  function changeImage(mode) {
    if (mode === "next") {
      setImageIndex((prev) => (prev + 1) % images.length);
    } else if (mode === "previous") {
      setImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  }

  function closeFullScreenImage() {
    setFullScreenGallery(false);
  }

  const touchHandlers = useSwipeable({
    onSwipedLeft: () => {
      switchProject("next");
    },
    onSwipedRight: () => {
      switchProject("previous");
    },
    preventScrollOnSwipe: false,
    trackMouse: true,
  });

  //* shared swipe animations for motion elements
  const animation = {
    inital: { x: animationDirection === "next" ? 300 : -300, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.3, ease: "linear" },
    exit: { x: animationDirection === "next" ? -300 : 300, opacity: 0 },
  };

  const { inital, animate, transition, exit } = animation;

  return (
    <div id="projects" className={`h-full`} ref={(el) => (ref.current[2] = el)}>
      {fullScreenGallery && (
        <FullScreenImage
          arrowClick={changeImage}
          placeholder={hash}
          href={href}
          images={images}
          imageIndex={imageIndex}
          alt={alt}
          figcaption={figcaption}
          close={() => closeFullScreenImage()}
        />
      )}
      <div className={`h-full select-none`} {...touchHandlers}>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={heading}
            className={`mx-auto flex h-full w-[85%] max-w-[1500px] snap-start flex-col items-center justify-evenly gap-4 py-4 pt-[60px] md:pt-[80px] lg:gap-10 lg:pb-10`}
          >
            <div className={`flex w-screen px-4 md:w-full`}>
              <div
                className={`z-10 flex w-full flex-col gap-2 self-start md:-top-6 md:gap-4`}
              >
                <div className={`flex items-center gap-2`}>
                  {projectsData.map((project, index) => {
                    return (
                      <div
                        key={index}
                        className={`size-2 cursor-pointer rounded-full bg-colorPreset2 hover:bg-opacity-50 md:size-3 ${projectIndex !== index && `opacity-20`}`}
                        onClick={() => {
                          switchProject(index);
                        }}
                      ></div>
                    );
                  })}
                </div>
                <div
                  className={`z-10 flex w-full items-center justify-between bg-colorPreset1`}
                >
                  <div
                    className={`flex w-full items-center justify-start md:gap-4 lg:justify-center lg:gap-16`}
                  >
                    <div
                      className={`flex place-items-center justify-center gap-1 md:gap-4 landscape:gap-6`}
                    >
                      <motion.div layoutId="shiftArrowLef">
                        <IoIosArrowBack
                          aria-label="go to previous project"
                          className={`size-6 cursor-pointer fill-colorPreset3 hover:scale-110 active:scale-90 md:size-12`}
                          onClick={() => {
                            switchProject("previous");
                          }}
                        />
                      </motion.div>
                      <motion.h2
                        initial={inital}
                        animate={animate}
                        transition={transition}
                        exit={exit}
                        className={`text-nowrap text-center text-[clamp(1.6rem,_7vw,_2.5rem)] font-extrabold text-colorPreset3 landscape:text-[clamp(1.6rem,_7vh,_2.5rem)]`}
                      >
                        {heading}
                      </motion.h2>
                      <motion.div layoutId="shiftArrowRight">
                        <IoIosArrowForward
                          aria-label="go to next project"
                          className={`size-6 cursor-pointer fill-colorPreset3 hover:scale-110 active:scale-90 md:size-12`}
                          onClick={() => {
                            switchProject("next");
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                  <div className={`flex gap-2`}>
                    <a href={github} target="_blank">
                      <FaGithub
                        className={`fill-colorPreset5 size-8 flex-1 cursor-pointer hover:scale-110 hover:fill-colorPreset2 active:scale-90 md:size-12`}
                      />
                    </a>
                    <a
                      className={`bg-colorPreset5 flex aspect-square flex-1 items-center justify-center rounded-full p-1 text-sm text-colorPreset1 hover:scale-110 hover:bg-colorPreset2 active:scale-90 md:w-12 md:text-xl md:font-semibold`}
                      href={url}
                      target="_blank"
                    >
                      URL
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`flex h-full w-full flex-1 flex-col items-center justify-between gap-6 md:gap-10 landscape:max-h-[800px] landscape:flex-row`}
            >
              <motion.figure
                initial={inital}
                animate={animate}
                transition={transition}
                exit={exit}
                className={`relative flex h-full w-full max-w-[650px] flex-col items-center justify-center landscape:flex-1`}
              >
                <AnimatePresence initial={false} mode="popLayout">
                  <div
                    className={twMerge(
                      `relative size-full blur-md transition duration-0`,
                      imageLoaded && `blur-none duration-150`,
                    )}
                  >
                    <Image
                      key={href}
                      alt={alt}
                      src={href}
                      placeholder={"blur"}
                      blurDataURL={hash}
                      fill
                      draggable={false}
                      onLoad={() => {
                        setImageHasLoaded(true);
                      }}
                      className={`relative cursor-pointer object-contain brightness-110`}
                      style={{
                        objectFit: "contain",
                        borderRadius: 40,
                      }}
                      sizes="(max-width: 768px) 70vw, (max-width: 1024px) 50vw, 33vw"
                      onClick={() => {
                        setImageIndex((prev) => (prev + 1) % images.length);
                        setImageHasLoaded(false);
                      }}
                    />
                  </div>
                </AnimatePresence>
                <MdTouchApp
                  className={`fill-colorPreset5 outline-colorPreset5 absolute rounded-full outline outline-2 outline-offset-2 transition ${!showTouchIcon && `opacity-0`} bottom-[10%] right-[10%] size-6 -rotate-[25deg] md:size-8 landscape:bottom-[30%]`}
                />
                <div className={`flex w-full items-center justify-between`}>
                  <figcaption
                    className={`text-xs font-extralight italic md:-bottom-8 md:text-base`}
                  >
                    {`${imageIndex + 1}/${images.length} `} {figcaption}
                  </figcaption>
                  <AiOutlineFullscreen
                    onClick={() => {
                      setFullScreenGallery(true);
                    }}
                    className={`fill-colorPreset5 size-6 cursor-pointer hover:scale-110 hover:fill-colorPreset2 active:scale-90 md:-bottom-8 md:size-10`}
                  />
                </div>
              </motion.figure>
              <div
                className={`flex flex-col gap-2 md:gap-8 landscape:h-full landscape:flex-1 landscape:justify-around`}
              >
                <div className={`flex w-full flex-col`}>
                  <motion.p
                    initial={inital}
                    animate={animate}
                    transition={transition}
                    exit={exit}
                    className={`[&_a]:text-colorPreset5 text-pretty text-[clamp(0.85rem,_2.5vw,_1.7rem)] font-light leading-[clamp(1.5rem,_3.5vh,_3rem)] text-colorPreset2 landscape:text-[clamp(0.85rem,_2.5vh,_1.3rem)] landscape:leading-[clamp(1.5rem,_3.5vw,_3rem)] [&_a]:underline [&_a]:underline-offset-4`}
                  >
                    {description}
                  </motion.p>
                </div>
                <div className={`flex w-full flex-col gap-3`}>
                  <p className={`text-sm text-colorPreset3 md:text-xl`}>
                    Verwendete Technologien
                  </p>
                  <motion.div
                    initial={inital}
                    animate={animate}
                    transition={transition}
                    exit={exit}
                    className={`flex w-full justify-around gap-2 overflow-x-scroll landscape:justify-between`}
                  >
                    {techStack.map(({ icon: Icon, text, link }, index) => {
                      return (
                        <a
                          key={index}
                          href={link}
                          target="_blank"
                          className={`flex flex-1 flex-col items-center justify-center text-nowrap`}
                        >
                          <Icon
                            className={`hover:fill-colorPreset5 size-[clamp(0.8rem,_8vw,_3.5rem)] fill-colorPreset2 active:scale-90 landscape:size-[clamp(0.8rem,_10vh,_2.8rem)]`}
                          />
                          <p
                            className={`text-[clamp(0.8rem,_2.3vw,_1.2rem)] font-extralight landscape:text-[clamp(0.7rem,_2.1vh,_1.2rem)]`}
                          >
                            {text}
                          </p>
                        </a>
                      );
                    })}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
});
