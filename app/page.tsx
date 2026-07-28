import About from "@/components/About/about";
import Career from "@/components/Career/career";
import Education from "@/components/Educational/educational";
import Hero from "@/components/Hero/hero";
import Projects from "@/components/Projects/projects";
import Tech from "@/components/Tech/tech";

export default function Home() {
  return (
    <div className="w-full p-6 space-y-20 max-w-4xl py-[14vh]">
      <Hero />
      <About />
      <Career />
      <Education />
      <Tech />
      <Projects />
    </div>
  );
}
