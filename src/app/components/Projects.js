import { forwardRef, useEffect, useState } from "react";
import Image from "next/image";
import { projectsData } from "../../../lib/projectsData";
import { AnimatePresence, motion } from "framer-motion";
import FullScreenImage from "./FullScreenImage";
import { useSwipeable } from "react-swipeable";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { AiOutlineFullscreen } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { twMerge } from "tailwind-merge";

export default forwardRef(function Projects(props, ref) {
  const [projectIndex, setProjectIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  //* add blur on images when image is loading
  const [imageLoaded, setImageHasLoaded] = useState(false);

  //* detects "direction" to adjust animation of project Change
  const [animationDirection, setAnimationDirection] = useState();

  const [fullScreenGallery, setFullScreenGallery] = useState(false);

  const { heading, url, github, description, images, techStack } =
    projectsData[projectIndex];

  const { href, figcaption, alt, hash } = images[imageIndex];

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

  const techStackHandlers = useSwipeable({
    onSwipedLeft: (e) => {
      e.event.stopPropagation();
    },
    onSwipedRight: (e) => {
      e.event.stopPropagation();
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
    <div id="projects" className={``} ref={(el) => (ref.current[2] = el)}>
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
      <div className={`min-h-screen select-none`} {...touchHandlers}>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={heading}
            className={`mx-auto flex min-h-screen w-[85%] max-w-[1500px] snap-start flex-col items-center justify-evenly gap-4 py-4 pt-[60px] md:pt-[80px] lg:h-screen lg:gap-10 lg:pb-10`}
          >
            <div className={`flex w-screen px-4 md:w-full`}>
              <div
                className={`z-10 flex w-full flex-col items-start gap-2 self-start md:-top-6 md:gap-4`}
              >
                <div className={`flex items-start gap-2`}>
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
                  className={`z-10 flex w-full items-center justify-between`}
                >
                  <div
                    className={`flex w-full items-center justify-start gap-4 lg:justify-center lg:gap-16`}
                  >
                    <div
                      className={`flex place-items-center justify-center gap-1 md:gap-4 landscape:gap-6`}
                    >
                      <motion.div layoutId="shiftArrowLef">
                        <IoIosArrowBack
                          tabIndex={0}
                          onKeyDown={(event) => {
                            if (event.code === "Enter") {
                              switchProject("previous");
                            }
                          }}
                          aria-label="go to previous project"
                          className={`size-6 cursor-pointer fill-colorPreset3 hover:scale-110 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 active:scale-90 md:size-12`}
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
                          tabIndex={0}
                          onKeyDown={(event) => {
                            if (event.code === "Enter") {
                              switchProject("next");
                            }
                          }}
                          aria-label="go to next project"
                          className={`size-6 cursor-pointer fill-colorPreset3 hover:scale-110 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 active:scale-90 md:size-12`}
                          onClick={() => {
                            switchProject("next");
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                  <div
                    className={`flex gap-2 rounded-md border-b border-l border-colorPreset5 bg-colorPreset3/10 p-2`}
                  >
                    {github && (
                      <a href={github} target="_blank" aria-label="github link">
                        <FaGithub
                          className={`size-5 flex-1 cursor-pointer rounded-full fill-colorPreset5 hover:scale-110 hover:fill-colorPreset2 active:scale-90 md:size-8`}
                        />
                      </a>
                    )}
                    {url && (
                      <a href={url} target="_blank" aria-label={"website link"}>
                        <FaGlobe
                          className={`size-5 flex-1 cursor-pointer rounded-full fill-colorPreset5 hover:scale-105 hover:fill-colorPreset2 active:scale-100 md:size-8`}
                        />
                      </a>
                    )}
                  </div>
                </div>
                <div
                  className={"mx-auto my-2 h-[0.5px] w-10/12 bg-colorPreset3"}
                />
              </div>
            </div>
            <div
              className={`flex h-full w-full flex-1 flex-col items-stretch justify-between gap-6 md:gap-10 landscape:max-h-[800px] landscape:flex-row`}
            >
              <motion.figure
                initial={inital}
                animate={animate}
                transition={transition}
                exit={exit}
                className={`relative flex h-[50vh] w-full max-w-[650px] flex-col items-center justify-center rounded-md bg-colorPreset3/10 p-4 lg:h-full landscape:flex-1`}
              >
                <AnimatePresence initial={false} mode="popLayout">
                  <div
                    className={twMerge(
                      `relative h-full w-full blur-md transition duration-0`,
                      imageLoaded && `blur-none duration-150`,
                    )}
                  >
                    <div
                      tabIndex={0}
                      className={`group absolute left-0 z-10 h-full w-1/2 cursor-pointer focus:outline-none focus-visible:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500`}
                      onClick={() => {
                        setImageIndex(
                          (prev) => (prev - 1 + images.length) % images.length,
                        );
                        setImageHasLoaded(false);
                      }}
                      onKeyDown={(event) => {
                        if (event.code === "Enter") {
                          setImageIndex(
                            (prev) =>
                              (prev - 1 + images.length) % images.length,
                          );
                          setImageHasLoaded(false);
                        }
                      }}
                    >
                      <IoIosArrowBack
                        className={`absolute top-1/2 size-[12%] fill-colorPreset5 group-hover:scale-125 group-active:scale-90`}
                      />
                    </div>
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
                      className={`relative object-contain brightness-110`}
                      style={{
                        objectFit: "contain",
                        borderRadius: 40,
                      }}
                      sizes="(max-width: 768px) 70vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div
                      tabIndex={0}
                      className={`group absolute right-0 h-full w-1/2 cursor-pointer transition-none focus:outline-none focus-visible:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500`}
                      onClick={() => {
                        setImageIndex((prev) => (prev + 1) % images.length);
                        setImageHasLoaded(false);
                      }}
                      onKeyDown={(event) => {
                        if (event.code === "Enter") {
                          setImageIndex((prev) => (prev + 1) % images.length);
                          setImageHasLoaded(false);
                        }
                      }}
                    >
                      <IoIosArrowBack
                        className={`absolute right-0 top-1/2 size-[12%] rotate-180 fill-colorPreset5 transition transition-none group-hover:scale-125 group-active:scale-90`}
                      />
                    </div>
                  </div>
                </AnimatePresence>
                <div className={`flex w-full items-center justify-between`}>
                  <figcaption
                    className={`text-xs font-extralight italic md:-bottom-8 md:text-base`}
                  >
                    {`${imageIndex + 1}/${images.length} `} {figcaption}
                  </figcaption>
                  <AiOutlineFullscreen
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.code === "Enter") {
                        setFullScreenGallery(true);
                      }
                    }}
                    onClick={() => {
                      setFullScreenGallery(true);
                    }}
                    className={`size-6 cursor-pointer fill-colorPreset5 hover:scale-110 hover:fill-colorPreset2 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 active:scale-90 md:-bottom-8 md:size-10`}
                  />
                </div>
              </motion.figure>
              <div
                className={`flex max-w-full flex-col gap-2 md:gap-8 landscape:h-full landscape:flex-1 landscape:justify-between`}
              >
                <div
                  className={`flex w-full flex-col overflow-x-hidden lg:h-[600px]`}
                >
                  <motion.p
                    initial={inital}
                    animate={animate}
                    transition={transition}
                    exit={exit}
                    className={`text-pretty text-sm font-light leading-loose text-colorPreset2 md:text-base md:leading-loose lg:text-lg lg:leading-loose [&_a]:text-colorPreset5 [&_a]:underline [&_a]:underline-offset-4`}
                  >
                    {description}
                  </motion.p>
                </div>
                <motion.div
                  initial={inital}
                  animate={animate}
                  transition={transition}
                  exit={exit}
                  className={`mt-4 flex w-full flex-col gap-3 rounded-md border-b border-l border-colorPreset5 bg-colorPreset3/10 p-1 md:p-2`}
                >
                  <p className={`text-xs text-colorPreset3 md:text-lg`}>
                    Verwendete Technologien
                  </p>
                  <div
                    className={`flex w-full justify-around gap-4 overflow-x-scroll landscape:justify-between`}
                    {...techStackHandlers}
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
                            className={`size-[clamp(0.8rem,_6vw,_2.5rem)] fill-colorPreset2 hover:fill-colorPreset5 active:scale-90 landscape:size-[clamp(0.8rem,_10vh,_2.8rem)]`}
                          />
                          <p
                            className={`text-[clamp(0.8rem,_1.8vw,_1.2rem)] font-extralight landscape:text-[clamp(0.7rem,_2.1vh,_1.2rem)]`}
                          >
                            {text}
                          </p>
                        </a>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
});
