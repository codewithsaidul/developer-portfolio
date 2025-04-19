import Education from "@/sections/Education";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <main className="px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 mx-auto">
      <Hero />
      <Skills />
      <Projects />
      <Education />
    </main>
  );
}
