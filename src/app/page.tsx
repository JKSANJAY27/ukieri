import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Timeline } from "@/components/Timeline";
import { Team } from "@/components/Team";
import { Gallery } from "@/components/Gallery";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Timeline />
      <Team />
      <Gallery />
    </div>
  );
}
