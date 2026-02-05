import getPlaceholder from "../../utils/getPlaceholder";
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";

const spaceWebsite = {
  heading: `Space App`,
  url: `https://space-website-gamma.vercel.app/`,
  github: `https://github.com/JanPSchwarz/Space-Website`,
  description: (
    <>
      Space Website ist eine interaktive Multi-Page-Website zum Thema
      Weltraumtourismus, die ich als Lösung für eine Frontend Mentor Challenge
      entwickelt habe. Das Projekt basiert auf professionellen Figma-Designs und
      präsentiert Informationen über Reiseziele im Weltraum, die Crew und
      verwendete Technologie in einem modernen, responsiven Design.
      <br />
      <br />
      Die Website wurde mit Next.js 14 (App Router) und React entwickelt und
      nutzt Styled Components für das Styling sowie Framer Motion für flüssige
      Seitenübergänge.
      <br />
      <br />
      Besonderes Augenmerk habe ich auf die User Experience gelegt: Neben den
      Standardanforderungen habe ich Swipe-Gesten für Mobilgeräte, haptisches
      Feedback und globale Seitenübergänge implementiert. Die Entwicklung
      erfolgte nach einem Mobile-First-Ansatz und ist über Vercel deployed.
      <br />
      <br />
      <a href="https://space-website-gamma.vercel.app/" target="_blank">
        <strong>Schau es dir an!</strong>
      </a>
    </>
  ),
  images: [
    {
      href: `/assets/Space-App/Space-App-Collection.png`,
      figcaption: "responsive designed",
      alt: "space app",
      hash: getPlaceholder(`Space-App-Collection.png`),
    },

    {
      href: `/assets/Space-App/iPhone-13-PRO-space-website-1.png`,
      figcaption: "Landing Page auf dem iPhone",
      alt: "space app",
      hash: getPlaceholder(`iPhone-13-PRO-space-website-1.png`),
    },

    {
      href: `/assets/Space-App/iPhone-13-PRO-space-website-2.png`,
      figcaption: "Planet auf Knopfdruck oder Swipe",
      alt: "space app",
      hash: getPlaceholder(`iPhone-13-PRO-space-website-2.png`),
    },
    {
      href: `/assets/Space-App/iPad-Air-4-space-app-2.png`,
      figcaption: "Ansicht auf dem iPad",
      alt: "space app",
      hash: getPlaceholder(`iPad-Air-4-space-app-2.png`),
    },
    {
      href: `/assets/Space-App/iPad-Air-4-space-app-1.png`,
      figcaption: "Crew auf dem iPad",
      alt: "space app",
      hash: getPlaceholder(`iPad-Air-4-space-app-1.png`),
    },
    {
      href: `/assets/Space-App/Macbook-Air-space-app-3.png`,
      figcaption: "Crew auf dem MacBook",
      alt: "space app",
      hash: getPlaceholder(`Macbook-Air-space-app-3.png`),
    },
    {
      href: `/assets/Space-App/Macbook-Air-space-app-2.png`,
      figcaption: "Technologien",
      alt: "space app",
      hash: getPlaceholder(`Macbook-Air-space-app-2.png`),
    },
    {
      href: `/assets/Space-App/iPhone-13-PRO-space-website-3.png`,
      figcaption: "Technologien auf dem iPhone",
      alt: "space app",
      hash: getPlaceholder(`iPhone-13-PRO-space-website-3.png`),
    },
  ],
  techStack: [
    { icon: RiNextjsFill, text: "NextJS", link: "https://nextjs.org/" },
    { icon: FaReact, text: "React", link: "https://react.dev/" },
    {
      icon: SiStyledcomponents,
      text: "St. Components",
      link: "https://styled-components.com/",
    },
    {
      icon: RiJavascriptFill,
      text: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
  ],
};

export default spaceWebsite;
