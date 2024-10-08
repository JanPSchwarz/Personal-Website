"use client";

import Hero from "@/app/components/Hero";
import Header from "@/app/components/Header";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import { useRef } from "react";

export default function Home() {
  const sectionRefs = useRef([]);

  return (
    <div
      className={`h-dvh snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scroll-smooth`}
    >
      <Header sectionRefs={sectionRefs} />
      <Hero ref={sectionRefs} />
      <About ref={sectionRefs} />
      <Projects ref={sectionRefs} />
    </div>
  );
}
