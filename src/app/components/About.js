import CVbutton from "./CVbutton";
import { forwardRef } from "react";

export default forwardRef(function About(prop, ref) {
  return (
    <div
      id="about"
      ref={(el) => (ref.current[1] = el)}
      className={`mx-auto flex h-dvh w-[80%] snap-center flex-col items-center justify-start gap-4 pt-[60px]`}
    >
      <div className={`mt-6 flex w-full items-center justify-between`}>
        <h2 className={`text-3xl font-extrabold text-colorPreset3`}>About</h2>
        <CVbutton className={`bg-colorPreset5`} />
      </div>
      <div
        className={`[&_a]:text-colorPreset6 [&_strong]:text-colorPreset5 text-pretty text-sm font-extralight leading-6 [&_a]:underline [&_a]:underline-offset-4 [&_p]:my-5`}
      >
        Nach einem Karrierewechsel habe ich mich voll und ganz der
        Web-Entwicklung verschrieben. Dabei liebe ich es,{" "}
        <strong>Logik mit ansprechenden Designs</strong> zu kombinieren, um
        Web-Apps zu bauen, die nicht nur funktional, sondern auch schön sind.
        <p>
          Im Juni 2024 habe ich meinen <strong>Web-Development-Kurs</strong> bei
          der{" "}
          <a href="//www.neuefische.de/" target="_blank">
            NeueFische GmbH
          </a>{" "}
          abgeschlossen und bin jetzt auf der{" "}
          <strong>Suche nach spannenden Projekten</strong> und Herausforderungen
          .
        </p>
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
    </div>
  );
});
