import { useEffect, useState } from "react";

export default function Header({ sectionRefs }) {
  const [isActive, setIsActive] = useState();

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

  return (
    <header
      className={`lg-portrait:text-3xl fixed top-0 z-10 flex w-full items-center justify-center py-3 backdrop-blur-lg backdrop-opacity-80 md:text-2xl`}
    >
      <nav className={`relative flex gap-5 md:gap-14 lg:gap-24`}>
        {links.map(({ name, className }, index) => {
          return (
            <p
              key={index}
              onClick={() => {
                sectionRefs.current
                  .find(({ id }) => id === name)
                  .scrollIntoView({ behaviou: `smooth`, block: `start` });
              }}
              className={
                className +
                `${isActive === name && `text-colorPreset5`}` +
                ` hover:text-colorPreset5 cursor-pointer select-none`
              }
            >
              {name}
            </p>
          );
        })}
      </nav>
      <div
        className={`absolute bottom-0 h-[1px] w-[80%] bg-colorPreset3 transition-all duration-500`}
      />
    </header>
  );
}
