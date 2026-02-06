import CVbutton from "./CVbutton";
import { forwardRef, useEffect, useState } from "react";
import {
  SiAxios,
  SiMongodb,
  SiShadcnui,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import { AiOutlineJavaScript } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaDocker, FaJava, FaNode } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";

export default forwardRef(function About(prop, ref) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    function detectMobile() {
      if (window.innerWidth >= 768) setIsMobile(false);
      else setIsMobile(true);
    }

    detectMobile();

    window.addEventListener(`resize`, detectMobile);

    return () => window.removeEventListener(`resize`, detectMobile);
  }, []);

  const iconsWithNames = [
    { icon: FaJava, name: "Java" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: TbBrandNextjs, name: "Next.js" },
    { icon: AiOutlineJavaScript, name: "JavaScript" },
    { icon: FaReact, name: "React" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: FaNode, name: "Node.js" },
    { icon: FaHtml5, name: "HTML5" },
    { icon: FaCss3Alt, name: "CSS3" },
    { icon: SiStyledcomponents, name: "Styled-Components" },
    { icon: RiTailwindCssFill, name: "TailwindCSS" },
    { icon: FaDocker, name: "Docker" },
    { icon: SiShadcnui, name: "shadcn/ui" },
    { icon: SiAxios, name: "Axios" },
    { icon: BiLogoSpringBoot, name: "Spring Boot" },
  ];

  return (
    <>
      <div
        id="about"
        ref={(el) => (ref.current[1] = el)}
        className={`mx-auto flex min-h-screen w-full snap-start flex-col items-center justify-between gap-12 overflow-scroll bg-colorPreset3/10 px-[10%] pb-12 pt-[70px] [scrollbar-width:_none] md:pt-[80px]`}
      >
        <div className={"lg:w-3/4"}>
          <div
            className={`mb-4 flex w-full items-center justify-between md:mt-6`}
          >
            <h2
              className={`text-3xl font-extrabold text-colorPreset3 md:text-5xl`}
            >
              About
            </h2>
            <CVbutton className={`mx-1 size-10 bg-colorPreset5 md:size-16`} />
          </div>
          <div
            className={
              "mx-auto my-2 mb-6 h-[0.5px] w-full bg-colorPreset3 md:mb-12"
            }
          />
          <div
            className={`flex h-[90%] flex-col justify-evenly gap-4 space-y-4 text-justify text-sm font-light leading-loose text-colorPreset2 md:mt-6 md:justify-start lg:text-lg lg:leading-loose [&_a]:text-colorPreset5 [&_a]:underline [&_a]:underline-offset-4 [&_strong]:text-colorPreset5`}
          >
            <p>
              Nach einem Karrierewechsel habe ich mich voll und ganz der
              Web-Entwicklung verschrieben. Dabei gefällt mir,{" "}
              <strong>Logik mit ansprechenden Designs</strong> zu kombinieren,
              um Web-Apps zu bauen, die nicht nur funktional, sondern auch schön
              sind.
            </p>
            <p>
              Durch zwei Kurse im Bereich <strong>Front-End-</strong> (React,
              NextJS) und <strong>Back-End-</strong> (Java, Spring Boot)
              Development bei der{" "}
              <a href="//www.neuefische.de/" target="_blank">
                NeueFische GmbH
              </a>{" "}
              habe ich mich auf den neusten Stand der Technik gebracht und
              praktische Erfahrungen gesammelt.
            </p>
            <p>
              Dabei habe ich gelernt moderne Web-Apps umzusetzen, egal ob in
              einem serverless set-up oder mit dedizierten API&#39;s in Spring
              Boot oder NodeJS.
            </p>
            <p>
              Eine Übersicht über meinen aktuellen Tech-Stack ist unter diesem
              Text zu finden. Im nächsten Abschnitt ist außerdem eine Auswahl an
              Projekten, die ich umgesetzt habe, zu sehen.
            </p>
          </div>
        </div>
        <div className={`flex w-full items-center justify-evenly`}>
          <div
            className={`flex w-full flex-wrap justify-center gap-6 lg:justify-around`}
          >
            {iconsWithNames.map(({ icon: Icon, name }) => {
              return (
                <div key={name} className={"space-y-2"}>
                  <Icon
                    key={name}
                    className={`mx-auto size-8 md:size-12 lg:size-16`}
                  />
                  <p className={"text-center text-sm text-colorPreset3"}>
                    {name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
});
