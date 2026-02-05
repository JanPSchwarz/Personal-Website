import getPlaceholder from "../../utils/getPlaceholder";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { FaReact } from "react-icons/fa";

const audioWebShop = {
  heading: `Web-Shop`,
  url: `https://audiophile-web-shop.vercel.app/`,
  github: `https://github.com/JanPSchwarz/audiophile-web-shop`,
  description: (
    <>
      Ein vollständig responsiver E-Commerce-Webshop für
      Premium-Audio-Equipment, entwickelt mit Next.js und React. Das Projekt
      umfasst einen modernen Online-Shop mit verschiedenen Kategorien für
      Kopfhörer, Lautsprecher und In-Ear-Kopfhörer.
      <br />
      <br />
      Die Anwendung bietet eine intuitive Benutzeroberfläche mit detaillierten
      Produktseiten, Produktgalerien und einem vollständigen Checkout-Flow
      inklusive Warenkorb-Funktion. Besonderer Wert wurde auf responsive Design
      gelegt – alle Komponenten sind für Desktop, Tablet und Mobile optimiert
      und verwenden device-spezifische Bildressourcen für optimale Performance.
      <br />
      <br />
      Technisch basiert das Projekt auf Next.js mit App Router, nutzt Tailwind
      CSS für das Styling und implementiert Custom Hooks für wiederkehrende
      Funktionalitäten. Die modulare Komponentenstruktur sorgt für wartbaren und
      erweiterbaren Code.
      <br />
      <br />
      <a href="https://what-a-feeling.vercel.app/" target="_blank">
        <strong>Schau es dir an!</strong>
      </a>
    </>
  ),
  images: [
    {
      href: `/assets/audiophile-web-shop/audiophile-Collection.png`,
      figcaption: "responsive designed",
      alt: "audiophile web shop",
      hash: getPlaceholder(`audiophile-Collection.png`),
    },

    {
      href: `/assets/audiophile-web-shop/iPhone-13-PRO-audiophile-1.png`,
      figcaption: "Landing Page auf dem iPhone",
      alt: "audiophile web shop",
      hash: getPlaceholder(`iPhone-13-PRO-audiophile-1.png`),
    },
    {
      href: `/assets/audiophile-web-shop/iPhone-13-PRO-audiophile-2.png`,
      figcaption: "Details Page auf dem iPhone",
      alt: "audiophile web shop",
      hash: getPlaceholder(`iPhone-13-PRO-audiophile-2.png`),
    },

    {
      href: `/assets/audiophile-web-shop/iPhone-13-PRO-audiophile-3.png`,
      figcaption: "Einkaufswagen",
      alt: "audiophile web shop",
      hash: getPlaceholder(`iPhone-13-PRO-audiophile-3.png`),
    },
    {
      href: `/assets/audiophile-web-shop/iPad-Air-4-audiophile-1.png`,
      figcaption: "Product preview auf dem iPad",
      alt: "audiophile web shop",
      hash: getPlaceholder(`iPad-Air-4-audiophile-1.png`),
    },
    {
      href: `/assets/audiophile-web-shop/iPad-Air-4-audiophile-2.png`,
      figcaption: "Menü-Ansicht",
      alt: "audiophile web shop",
      hash: getPlaceholder(`iPad-Air-4-audiophile-2.png`),
    },
    {
      href: `/assets/audiophile-web-shop/iPad-Air-4-audiophile-3.png`,
      figcaption: "Bestellformular",
      alt: "audiophile web shop",
      hash: getPlaceholder(`iPad-Air-4-audiophile-3.png`),
    },
    {
      href: `/assets/audiophile-web-shop/Macbook-Air-audiophile-1.png`,
      figcaption: "Product preview",
      alt: "audiophile web shop",
      hash: getPlaceholder(`Macbook-Air-audiophile-1.png`),
    },
    {
      href: `/assets/audiophile-web-shop/Macbook-Air-audiophile-2.png`,
      figcaption: "Product details page",
      alt: "audiophile web shop",
      hash: getPlaceholder(`Macbook-Air-audiophile-2.png`),
    },
    {
      href: `/assets/audiophile-web-shop/Macbook-Air-audiophile-3.png`,
      figcaption: "Einkaufswagen ansicht",
      alt: "audiophile web shop",
      hash: getPlaceholder(`Macbook-Air-audiophile-3.png`),
    },
    {
      href: `/assets/audiophile-web-shop/lighthouse-report.png`,
      figcaption: "lighthouse report von der website",
      alt: "audiophile web shop",
      hash: getPlaceholder(`lighthouse-report.png`),
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
      icon: RiJavascriptFill,
      text: "JS",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
  ],
};

export default audioWebShop;
