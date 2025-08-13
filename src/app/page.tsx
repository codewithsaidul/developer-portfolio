import Contact from "@/sections/Contact";
import Education from "@/sections/Education";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
