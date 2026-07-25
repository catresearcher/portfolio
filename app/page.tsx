import Hero from "@/components/Hero/hero";
import Tech from "@/components/Tech/tech";

export default function Home() {
  return (
    <div className="w-full p-6 space-y-20 max-w-4xl pt-[16vh]">
      <Hero />
      <Tech />
    </div>
  );
}
