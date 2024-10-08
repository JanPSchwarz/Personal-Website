import { forwardRef } from "react";
import { FaGithub } from "react-icons/fa";
import { AiOutlineFullscreen } from "react-icons/ai";
import Image from "next/image";
import { useState } from "react";
import { projectsData } from "../../../lib/projectsData";
import { motion, AnimatePresence } from "framer-motion";
import FullScreenImage from "./FullScreenImage";
import { useSwipeable } from "react-swipeable";

export default forwardRef(function Projects(props, ref) {
  const [projectIndex, setProjectIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const [swipe, setSwipe] = useState();

  const [fullScreenGallery, setFullScreenGallery] = useState(false);

  const { heading, url, github, description, images, techStack } =
    projectsData[projectIndex];

  const { href, figcaption, alt } = images[imageIndex];

  function nextProject(index) {
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
    onSwipedLeft: () => nextProject("next"),
    onSwipedRight: () => nextProject("previous"),
    onSwiping: (event) => setSwipe(event.dir),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const animation = {
    inital: { x: swipe === "Left" ? 300 : -300, opacity: 0.2 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.3 },
    exit: { x: swipe === "Left" ? -300 : 300, opacity: 0.2 },
  };

  const { inital, animate, transition, exit } = animation;

  return (
    <div id="projects" ref={(el) => (ref.current[2] = el)}>
      {fullScreenGallery && (
        <FullScreenImage
          arrowClick={changeImage}
          href={href}
          alt={alt}
          figcaption={figcaption}
          close={() => closeFullScreenImage()}
        />
      )}
      <div className={`select-none`} {...touchHandlers}>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={heading}
            className={`mx-auto flex h-dvh w-[80%] snap-center flex-col items-center justify-evenly pt-[50px]`}
          >
            <div
              className={`relative mt-4 flex w-full items-center justify-between`}
            >
              <motion.h2
                initial={inital}
                animate={animate}
                transition={transition}
                exit={exit}
                className={`w-full text-left text-[26px] font-extrabold text-colorPreset3`}
              >
                {heading}
              </motion.h2>
              <div className={`absolute -top-4 left-0 z-10 flex gap-2`}>
                {projectsData.map((project, index) => {
                  return (
                    <div
                      key={index}
                      className={`size-2 rounded-full bg-colorPreset2 ${projectIndex !== index && `opacity-20`}`}
                      onClick={() => {
                        nextProject(index);
                      }}
                    ></div>
                  );
                })}
              </div>
              <div
                className={`z-10 flex items-center justify-evenly gap-2 bg-colorPreset1`}
              >
                <a href={github} target="_blank">
                  <FaGithub className={`fill-colorPreset5 size-8 flex-1`} />
                </a>
                <a
                  className={`bg-colorPreset5 flex aspect-square flex-1 items-center rounded-full p-1 text-sm text-colorPreset1`}
                  href={url}
                  target="_blank"
                >
                  URL
                </a>
              </div>
            </div>
            <motion.figure
              initial={inital}
              animate={animate}
              transition={transition}
              exit={exit}
              className={`relative mt-4 aspect-square w-[250px]`}
            >
              <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                  key={href}
                  initial={{ x: fullScreenGallery ? 0 : 300 }}
                  animate={{ x: 0 }}
                  exit={{ x: fullScreenGallery ? 0 : -300, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`relative h-full`}
                >
                  <Image
                    alt={alt}
                    src={href}
                    fill
                    draggable={false}
                    className={`relative object-contain`}
                    onClick={() => {
                      setImageIndex((prev) => (prev + 1) % images.length);
                    }}
                  />
                </motion.div>
              </AnimatePresence>
              <AiOutlineFullscreen
                onClick={() => {
                  setFullScreenGallery(true);
                }}
                className={`fill-colorPreset5 absolute -bottom-5 right-0 size-6`}
              />
              <figcaption
                className={`absolute -bottom-5 text-xs font-extralight italic`}
              >
                {`${imageIndex + 1}/${images.length} `} {figcaption}
              </figcaption>
            </motion.figure>
            <div className={`flex w-full flex-col`}>
              <motion.p
                initial={inital}
                animate={animate}
                transition={transition}
                exit={exit}
                className={`[&_a]:text-colorPreset5 mt-4 text-pretty text-sm font-extralight leading-6`}
              >
                {description}
              </motion.p>
            </div>
            <div className={`flex w-full flex-col gap-3`}>
              <p className={`text-colorPreset6 text-sm`}>Main Tech Stack</p>
              <motion.div
                initial={inital}
                animate={animate}
                transition={transition}
                exit={exit}
                className={`flex w-full justify-between`}
              >
                {techStack.map(({ icon: Icon, text, link }, index) => {
                  return (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      className={`flex flex-1 flex-col items-center justify-center text-nowrap`}
                    >
                      <Icon className={`size-8`} />
                      <p className={`text-xs font-extralight`}>{text}</p>
                    </a>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
});
