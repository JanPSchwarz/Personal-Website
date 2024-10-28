import { useEffect, useState } from "react";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import useLocalStorageState from "use-local-storage-state";
import { AnimatePresence, motion } from "framer-motion";

export default function Header({ sectionRefs }) {
  const [isActive, setIsActive] = useState();
  const [theme, setTheme] = useLocalStorageState("theme", {
    defaultValue: "dark",
  });

  useEffect(() => {
    const rootElement = document.documentElement;

    if (theme === "light") {
      rootElement.classList.add("light-mode");
    } else {
      rootElement.classList.remove("light-mode");
    }
  }, [theme]);

  useEffect(() => {
    const sections = sectionRefs.current;

    const oberser = new IntersectionObserver(
      (items) => {
        items.forEach((item) => {
          if (item.isIntersecting) {
            setIsActive(item.target.id);
          }
        });
      },
      { threshold: 0.7 },
    );

    sections.forEach((section) => {
      if (section) oberser.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          oberser.unobserve(section);
        }
      });
    };
  }, [sectionRefs]);

  const anchorClasses = ``;

  const links = [
    { name: `home`, className: anchorClasses },
    { name: `about`, className: anchorClasses },
    { name: `projects`, className: anchorClasses },
  ];

  function navigate(name) {
    sectionRefs.current
      .find(({ id }) => id === name)
      .scrollIntoView({ behaviou: `smooth`, block: `start` });
  }

  function handleTheme(prop) {
    setTheme((prevTheme) => (prevTheme === prop ? prevTheme : prop));
  }

  const themeIconStyles = `cursor-pointer focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 hover:scale-110 hover:fill-colorPreset5`;

  const sharedTransition = { transition: { duration: 0.5, ease: "linear" } };

  const variants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, ...sharedTransition },
    exit: { opacity: 0, y: 10, ...sharedTransition },
  };

  return (
    <header
      className={`fixed top-0 z-10 flex w-full items-center justify-center py-3 backdrop-blur-lg backdrop-opacity-80 md:text-2xl lg-portrait:text-3xl`}
    >
      <nav className={`relative flex gap-5 md:gap-14 lg:gap-24`}>
        {links.map(({ name, className }, index) => {
          return (
            <p
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.code === "Enter") {
                  navigate(name);
                }
              }}
              key={index}
              onClick={() => {
                navigate(name);
              }}
              className={
                className +
                `${isActive === name && `text-colorPreset5`}` +
                ` cursor-pointer select-none hover:text-colorPreset5`
              }
            >
              {name}
            </p>
          );
        })}
      </nav>
      <AnimatePresence initial={false} mode="wait">
        {theme === "dark" ? (
          <motion.div
            key={"darkMode"}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`relative -right-[15%]`}
          >
            <MdSunny
              tabIndex={0}
              aria-label="set light mode"
              onKeyDown={(event) => {
                if (event.code === "Enter") {
                  handleTheme("light");
                }
              }}
              onClick={() => {
                handleTheme("light");
              }}
              className={themeIconStyles}
            />
          </motion.div>
        ) : (
          <motion.div
            key={"lightMode"}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`relative -right-[15%]`}
          >
            <FaMoon
              tabIndex={0}
              aria-label="set dark mode"
              onKeyDown={(event) => {
                if (event.code === "Enter") {
                  handleTheme("dark");
                }
              }}
              className={themeIconStyles}
              onClick={() => {
                handleTheme("dark");
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={`absolute bottom-0 h-[1px] w-[80%] bg-colorPreset3 transition-all duration-500`}
      />
    </header>
  );
}
