"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

// Placeholder video data - duplicates removed for brevity in this example, but logic handles repetition
const videos = [
    { id: 1, title: "Lab Training Session", thumbnail: "/assets/gallery-1.jpg" },
    { id: 2, title: "Cultural Exchange", thumbnail: "/assets/gallery-2.jpg" },
    { id: 3, title: "Workshop Highlights", thumbnail: "/assets/gallery-3.jpg" },
    { id: 4, title: "Student Interview", thumbnail: "/assets/gallery-4.jpg" },
];

export function VideoMarquee() {
    return (
        <div className="py-24 bg-gray-50 overflow-hidden relative">
            <div className="container mx-auto px-6 mb-12 text-center">
                <span className="text-ukieri-blue font-bold tracking-widest text-sm uppercase mb-2 block">Testimonials</span>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                    Student <span className="text-ukieri-red">Experiences</span>
                </h2>
            </div>

            <div className="flex w-full overflow-hidden mask-gradient-x">
                <motion.div
                    className="flex gap-8 pl-8"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                    }}
                    style={{ width: "max-content" }}
                >
                    {[...videos, ...videos, ...videos, ...videos].map((video, index) => (
                        <div
                            key={index}
                            className="relative w-80 aspect-video flex-shrink-0 rounded-2xl overflow-hidden shadow-xl bg-gray-900 group cursor-pointer border-4 border-white transform hover:scale-105 transition-all duration-300"
                        >
                            {video.thumbnail && (
                                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                            )}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/0 transition-all">
                                <div className="w-14 h-14 bg-ukieri-red/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg backdrop-blur-sm">
                                    <Play className="fill-white text-white ml-1 w-6 h-6" />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                                <p className="text-white font-bold text-lg truncate">{video.title}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Gradient Masks */}
            <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
        </div>
    );
}
