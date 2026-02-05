import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import { Poppins, Space_Grotesk } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "800"],
  variable: "--font-poppins",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-spaceGrotesk",
});

export const metadata = {
  title: "Jans's Website",
  description: "Welcome to my personal Website! Have a look around.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="de-DE"
      className={`${poppins.variable} ${spaceGrotesk.variable}`}
    >
      <body
        className={`bg-colorPreset1 font-poppins text-colorPreset2 transition-colors duration-1000`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
