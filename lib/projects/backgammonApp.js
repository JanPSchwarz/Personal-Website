import getPlaceholder from "../../utils/getPlaceholder";
import { RiJavascriptFill,RiNextjsFill,RiTailwindCssFill } from "react-icons/ri";
import { FaNode,FaReact } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";

const backgammonApp = {
  heading: `Backgammon App`,
  url: `https://backgammon-multiplayer.vercel.app/`,
  description: (
    <>
      Backgammon Multiplayer ist eine moderne Online-Plattform für klassisches
      Backgammon, entwickelt als Progressive Web App mit Next.js 14 und React
      18.
      <br />
      <br />
      Die Anwendung ermöglicht Echtzeit-Spiele zwischen Spielern über
      WebSocket-Verbindungen und bietet eine vollständige Implementierung der
      Backgammon-Regeln inklusive aller Spielvarianten (Win, Gammon,
      Backgammon). Das responsive Design funktioniert auf allen Geräten und kann
      als PWA installiert werden.
      <br />
      <br />
      Für eine flüssige Spielerfahrung sorgen animierte 3D-Würfel,
      Motion-Animationen für die Spielsteine und visuelle Highlights für
      mögliche Züge. Das Backend nutzt Express.js mit MongoDB für
      Datenpersistenz und NextAuth.js für die Authentifizierung. Besondere
      Features sind die intelligente Zugvalidierung mit Unterstützung für
      kombinierte Züge, ein Punktesystem mit verschiedenen Gewinnmodi,
      Rematch-Funktionalität und optionale Felddrehung für optimale Sicht.
      <br />
      <br />
      Die Anwendung ist auf Vercel gehostet und demonstriert moderne
      Webtechnologien wie Tailwind CSS, WebSocket-Kommunikation und
      PWA-Funktionalität in einem klassischen Spielkontext.
      <a href="https://backgammon-multiplayer.vercel.app/" target="_blank">
        <strong>Schau es dir an!</strong>
      </a>
    </>
  ),
  images: [
    {
      href: `/assets/backgammon/backgammonApp-collection.webp`,
      figcaption: "responsive designed",
      alt: "backgammon app",
      hash: getPlaceholder(`backgammonApp-collection.webp`),
    },
    {
      href: `/assets/backgammon/backgammon-iPhone4.webp`,
      figcaption: "Spielfeld auf dem iPhone",
      alt: "backgammon app",
      hash: getPlaceholder(`backgammon-iPhone4.webp`),
    },
    {
      href: `/assets/backgammon/backgammon-iPhone5.webp`,
      figcaption: "Spielfeld mit 3D-Würfeln",
      alt: "backgammon app",
      hash: getPlaceholder(`backgammon-iPhone5.webp`),
    },
    {
      href: `/assets/backgammon/backgammon-iPad3.webp`,
      figcaption: "Spielfeld auf dem iPad",
      alt: "backgammon app",
      hash: getPlaceholder(`backgammon-iPad3.webp`),
    },
    {
      href: `/assets/backgammon/backgammon-iPad1.webp`,
      figcaption: "Landing Page auf dem iPad",
      alt: "backgammon app",
      hash: getPlaceholder(`backgammon-iPad1.webp`),
    },
    {
      href: `/assets/backgammon/backgammon-iPhone2.webp`,
      figcaption: "Landing Page auf dem iPhone",
      alt: "backgammon app",
      hash: getPlaceholder(`backgammon-iPhone2.webp`),
    },
    {
      href: `/assets/backgammon/backgammon-iPhone1.webp`,
      figcaption: "Menu auf dem iPhone",
      alt: "backgammon app",
      hash: getPlaceholder(`backgammon-iPhone1.webp`),
    },
    {
      href: `/assets/backgammon/backgammon-MacBook1.webp`,
      figcaption: "Spielfeld auf dem MacBook",
      alt: "backgammon app",
      hash: getPlaceholder(`backgammon-MacBook1.webp`),
    },
    {
      href: `/assets/backgammon/backgammon-iPhone3.webp`,
      figcaption: "Spielfeld auf dem iPhone",
      alt: "backgammon app",
      hash: getPlaceholder(`backgammon-iPhone3.webp`),
    },
  ],
  techStack: [
    { icon: FaNode, text: "NodeJS" },
    { icon: RiNextjsFill, text: "NextJS", link: "https://nextjs.org/" },
    { icon: FaReact, text: "React", link: "https://react.dev/" },
    {
      icon: FiFramer,
      text: "Framer Motion",
      link: "https://www.framer.com/motion/",
    },
    {
      icon: RiTailwindCssFill,
      text: "Tailwind",
      link: "https://tailwindcss.com/",
    },
    {
      icon: RiJavascriptFill,
      text: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
  ],
};

export default backgammonApp;
