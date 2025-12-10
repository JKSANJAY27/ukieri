import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Timeline } from "@/components/Timeline";
import { VideoMarquee } from "@/components/VideoMarquee";
import { Gallery } from "@/components/Gallery";
import { Sponsors } from "@/components/Sponsors";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Sponsors />
      <About />
      <Timeline />
      <VideoMarquee />
      <Gallery />
    </div>
  );
}
