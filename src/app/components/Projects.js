import { forwardRef, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { AiOutlineFullscreen } from "react-icons/ai";
import Image from "next/image";
import { useState } from "react";
import { projectsData } from "../../../lib/projectsData";
import { motion, AnimatePresence } from "framer-motion";
import FullScreenImage from "./FullScreenImage";
import { useSwipeable } from "react-swipeable";
import { MdTouchApp } from "react-icons/md";

export default forwardRef(function Projects(props, ref) {
  const [projectIndex, setProjectIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  //* add blur on images when image is loading
  const [imageLoaded, setImageHasLoaded] = useState(false);

  //* stores images which were loaded before by func handleCachedImages
  const [previouslyLoadedImages, setPreviousLoadedImages] = useState([]);

  const [swipe, setSwipe] = useState();

  const [fullScreenGallery, setFullScreenGallery] = useState(false);

  const [showTouchIcon, setShowTouchIcon] = useState(true);

  const { heading, url, github, description, images, techStack } =
    projectsData[projectIndex];

  const { href, figcaption, alt, hash } = images[imageIndex];

  //* sets imageLoaded useState false if image is loaded first time/isn't cached -> applies blur
  useEffect(() => {
    if (previouslyLoadedImages.includes(href)) return;
    else setImageHasLoaded(false);
  }, [href]);

  //* is not a real cache: href is stored to useState "previouslyLoaded..."
  //* images are cached by default for 1 hr -> see next.config.mjs
  function handleCachedImages() {
    if (previouslyLoadedImages.includes(href)) return;
    else setPreviousLoadedImages((prev) => [...prev, href]);
  }

  //* handles touchIcon visbility
  useEffect(() => {
    setShowTouchIcon(false);
    const timeOut = setTimeout(() => {
      setShowTouchIcon(true);
    }, 3000);

    return () => clearTimeout(timeOut);
  }, [href]);

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
    preventScrollOnSwipe: false,
    trackMouse: true,
  });

  //* shared swipe animations for motion elements
  const animation = {
    inital: { x: swipe === "Left" ? 300 : -300, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.3, ease: "linear" },
    exit: { x: swipe === "Left" ? -300 : 300, opacity: 0 },
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
            className={`mx-auto flex h-full w-[85%] max-w-[1200px] snap-start flex-col items-center justify-evenly gap-4 py-4 pt-[60px] md:pt-[80px] lg:gap-10`}
          >
            <div className={`flex w-full`}>
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
                          nextProject(index);
                        }}
                      ></div>
                    );
                  })}
                </div>
                <div
                  className={`z-10 flex w-full items-center justify-between gap-2 bg-colorPreset1`}
                >
                  <motion.h2
                    initial={inital}
                    animate={animate}
                    transition={transition}
                    exit={exit}
                    className={`w-full text-left text-[clamp(1.6rem,_7vw,_2.5rem)] font-extrabold text-colorPreset3`}
                  >
                    {heading}
                  </motion.h2>
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
            <div
              className={`flex h-full w-full flex-1 flex-col items-center justify-between gap-6 md:gap-12 landscape:flex-row`}
            >
              <motion.figure
                initial={inital}
                animate={animate}
                transition={transition}
                exit={exit}
                className={`relative flex h-full w-full max-w-[650px] flex-col landscape:flex-1`}
              >
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.div
                    key={href}
                    initial={{ x: fullScreenGallery ? 0 : 300 }}
                    animate={{ x: 0 }}
                    exit={{ x: fullScreenGallery ? 0 : -300, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`md-landscape:size-[80%] relative size-full lg:size-[70%]`}
                  >
                    <Image
                      alt={alt}
                      src={href}
                      placeholder={hash}
                      fill
                      draggable={false}
                      onLoad={() => {
                        setImageHasLoaded(true);
                        handleCachedImages();
                      }}
                      className={`relative cursor-pointer object-contain ${!imageLoaded && `blur-md`} transition-all`}
                      style={{ objectFit: "contain", borderRadius: 10 }}
                      sizes="(max-width: 768px) 70vw, (max-width: 1024px) 50vw, 33vw"
                      onClick={() => {
                        setImageIndex((prev) => (prev + 1) % images.length);
                      }}
                    />
                  </motion.div>
                </AnimatePresence>
                <MdTouchApp
                  className={`fill-colorPreset5 absolute transition ${!showTouchIcon && `opacity-0`} bottom-[10%] right-[10%] size-6 -rotate-[25deg] md:size-8 landscape:bottom-[30%]`}
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
                className={`flex flex-col gap-2 md:gap-6 lg:justify-evenly lg:gap-20 landscape:flex-1`}
              >
                <div className={`flex w-full flex-col`}>
                  <motion.p
                    initial={inital}
                    animate={animate}
                    transition={transition}
                    exit={exit}
                    className={`[&_a]:text-colorPreset5 text-pretty text-[clamp(0.85rem,_2.5vw,_1.7rem)] font-extralight leading-[clamp(1.5rem,_3.5vh,_3rem)] landscape:text-[clamp(0.85rem,_2.5vh,_1.3rem)] landscape:leading-[clamp(1.5rem,_3.5vw,_3rem)] [&_a]:underline [&_a]:underline-offset-4`}
                  >
                    {description}
                  </motion.p>
                </div>
                <div className={`flex w-full flex-col gap-3`}>
                  <p className={`text-sm text-colorPreset3 md:text-xl`}>
                    Main Tech Stack
                  </p>
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
                          <Icon
                            className={`hover:fill-colorPreset5 size-8 fill-colorPreset2 active:scale-90 md:size-12`}
                          />
                          <p className={`text-xs font-extralight md:text-lg`}>
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
