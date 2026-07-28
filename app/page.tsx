import Career from "@/components/Career/career";
import Education from "@/components/Educational/educational";
import Hero from "@/components/Hero/hero";
import Projects from "@/components/Projects/projects";
import Tech from "@/components/Tech/tech";

export default function Home() {
  return (
    <div className="w-full p-6 space-y-26 max-w-4xl pt-[16vh]">
      <Hero />
      <Career />
      <Education />
      <Tech />
      <Projects />
    </div>
  );
}
