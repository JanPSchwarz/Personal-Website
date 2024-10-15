import CVbutton from "./CVbutton";
import { forwardRef, useEffect, useState } from "react";
import { SiMongodb } from "react-icons/si";
import { AiOutlineJavaScript } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa6";
import { SiStyledcomponents } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";

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

  const icons = [
    TbBrandNextjs,
    AiOutlineJavaScript,
    FaReact,
    SiMongodb,
    FaNode,
    FaHtml5,
    FaCss3Alt,
    SiStyledcomponents,
    RiTailwindCssFill,
  ];

  return (
    <div
      id="about"
      ref={(el) => (ref.current[1] = el)}
      className={`mx-auto flex h-full w-[80%] max-w-[1200px] snap-start flex-col items-center justify-start gap-4 overflow-scroll pt-[70px] md:pt-[80px]`}
    >
      <div className={`flex w-full items-center justify-between md:mt-6`}>
        <h2 className={`text-3xl font-extrabold text-colorPreset3 md:text-5xl`}>
          About
        </h2>
        <CVbutton className={`bg-colorPreset5 mx-1 size-10 md:size-16`} />
      </div>
      <div
        className={`[&_a]:text-colorPreset6 [&_strong]:text-colorPreset5 flex h-[90%] flex-col justify-evenly gap-4 text-pretty text-[clamp(0.8rem,_1.7vh,_2rem)] font-extralight leading-[clamp(1.5rem,_4vh,_4rem)] md:mt-6 md:justify-start landscape:text-[clamp(0.8rem,_1.5vw,_1.2rem)] landscape:leading-[clamp(1.5rem,_4vw,_3rem)] [&_a]:underline [&_a]:underline-offset-4`}
      >
        <div>
          Nach einem Karrierewechsel habe ich mich voll und ganz der
          Web-Entwicklung verschrieben. Dabei liebe ich es,{" "}
          <strong>Logik mit ansprechenden Designs</strong> zu kombinieren, um
          Web-Apps zu bauen, die nicht nur funktional, sondern auch schön sind.
        </div>
        <div>
          <p>
            Im Juni 2024 habe ich meinen <strong>Web-Development-Kurs</strong>{" "}
            bei der{" "}
            <a href="//www.neuefische.de/" target="_blank">
              NeueFische GmbH
            </a>{" "}
            abgeschlossen und bin jetzt auf der{" "}
            <strong>Suche nach spannenden Projekten</strong> und
            Herausforderungen.
          </p>
        </div>
        <div>
          <p>
            Mein aktueller Tech-Stack umfasst{" "}
            <strong>
              HTML, CSS, TailwindCSS, Styled-Components, JavaScript, NodeJS,
              mongoDB, React und Next.js
            </strong>
            . Doch damit nicht genug – ich lerne gerade fleißig TypeScript, um
            mein Wissen weiter auszubauen.
          </p>
        </div>
        {!isMobile && (
          <div className={`flex h-full items-center justify-center`}>
            <div
              className={`flex w-full flex-wrap justify-center gap-6 lg:justify-around`}
            >
              {icons.map((Icon, index) => {
                return <Icon key={index} className={`size-16`} />;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
});
