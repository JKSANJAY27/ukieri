import { Hero } from "@/components/Hero";
import { VideoMarquee } from "@/components/VideoMarquee";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <VideoMarquee />
    </div>
  );
}
