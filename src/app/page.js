"use client";

import Hero from "@/app/components/Hero";
import Header from "@/app/components/Header";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import { useRef } from "react";

export default function Home() {
  const sectionRefs = useRef([]);

  return (
    <>
      <Header sectionRefs={sectionRefs} />
      <Hero ref={sectionRefs} />
      <About ref={sectionRefs} />
      <Projects ref={sectionRefs} />
    </>
  );
}
