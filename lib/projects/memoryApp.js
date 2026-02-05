import getPlaceholder from "../../utils/getPlaceholder";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { FiFramer } from "react-icons/fi";

import { FaReact } from "react-icons/fa";

const memoryApp = {
  heading: `Memory App`,
  url: `https://memory-phi-six.vercel.app/`,
  github: `https://github.com/JanPSchwarz/Memory`,
  description: (
    <>
      Ein interaktives Memory-Spiel, entwickelt mit Next.js und React, das
      sowohl im Einzelspieler- als auch im Multiplayer-Modus (bis zu 4 Spieler)
      gespielt werden kann.
      <br />
      <br />
      Das Projekt kombiniert moderne Web-Technologien mit durchdachtem UX-Design
      und bietet verschiedene Spielmodi: Wähle zwischen Zahlen oder Icons als
      Kartenmotive und spiele auf einem 4×4 oder 6×6 Spielfeld.
      <br />
      <br />
      Besondere Features umfassen Framer Motion-Animationen für flüssige
      Übergänge und haptisches Feedback, einen Custom-Ladebildschirm sowie
      Bestätigungsdialoge vor dem Verlassen oder Neustarten eines Spiels. Ein
      Highlight ist die dynamische Icon-Auswahl aus einer Bibliothek von über
      1.600 verschiedenen Icons, die für jede Partie zufällig zusammengestellt
      werden. Das Projekt wurde mit einem Mobile-First-Ansatz entwickelt,
      verwendet TailwindCSS für responsives Styling und ist auf Vercel gehostet.
      <br />
      <br />
      <a href="https://memory-phi-six.vercel.app/" target="_blank">
        <strong>Probier es aus! 🎮</strong>
      </a>
    </>
  ),
  images: [
    {
      href: `/assets/Memory-App/Memory-Collection.png`,
      figcaption: "responsive designed",
      alt: "memory app",
      hash: getPlaceholder(`Memory-Collection.png`),
    },
    {
      href: `/assets/Memory-App/iPhone-13-PRO-memory-6.png`,
      figcaption: "Die Spieloptionen",
      alt: "memory app",
      hash: getPlaceholder(`iPhone-13-PRO-memory-6.png`),
    },
    {
      href: `/assets/Memory-App/iPhone-13-PRO-memory-1.png`,
      figcaption: "Einzelspieler",
      alt: "memory app",
      hash: getPlaceholder(`iPhone-13-PRO-memory-1.png`),
    },
    {
      href: `/assets/Memory-App/iPhone-13-PRO-memory-2.png`,
      figcaption: "Zeit und Züge werden gezählt",
      alt: "memory app",
      hash: getPlaceholder(`iPhone-13-PRO-memory-2.png`),
    },
    {
      href: `/assets/Memory-App/iPhone-13-PRO-memory-3.png`,
      figcaption: "Sicherheitsabfragen",
      alt: "memory app",
      hash: getPlaceholder(`iPhone-13-PRO-memory-3.png`),
    },
    {
      href: `/assets/Memory-App/iPad-Air-4-memory-1.png`,
      figcaption: "Random Icons",
      alt: "memory app",
      hash: getPlaceholder(`iPad-Air-4-memory-1.png`),
    },
    {
      href: `/assets/Memory-App/iPad-Air-4-memory-2.png`,
      figcaption: "Oder mit Zahlen",
      alt: "memory app",
      hash: getPlaceholder(`iPad-Air-4-memory-2.png`),
    },
    {
      href: `/assets/Memory-App/Macbook-Air-memory-2.png`,
      figcaption: "Multiplayer",
      alt: "memory app",
      hash: getPlaceholder(`Macbook-Air-memory-2.png`),
    },
    {
      href: `/assets/Memory-App/Macbook-Air-memory-1.png`,
      figcaption: "Spieler 1 hat gewonnen",
      alt: "memory app",
      hash: getPlaceholder(`Macbook-Air-memory-1.png`),
    },
  ],
  techStack: [
    { icon: RiNextjsFill, text: "NextJS", link: "https://nextjs.org/" },
    { icon: FaReact, text: "React", link: "https://react.dev/" },
    {
      icon: RiTailwindCssFill,
      text: "Tailwind",
      link: "https://tailwindcss.com/",
    },
    {
      icon: FiFramer,
      text: "Framer Motion",
      link: "https://www.framer.com/motion/",
    },
    {
      icon: RiJavascriptFill,
      text: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
  ],
};

export default memoryApp;
