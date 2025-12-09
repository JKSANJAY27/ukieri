"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

// Placeholder video data
const videos = [
    { id: 1, title: "Student Experience 1", thumbnail: "" },
    { id: 2, title: "Student Experience 2", thumbnail: "" },
    { id: 3, title: "Student Experience 3", thumbnail: "" },
    { id: 4, title: "Student Experience 4", thumbnail: "" },
];

export function VideoMarquee() {
    return (
        <div className="py-12 bg-white overflow-hidden relative">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Student Experiences
            </h2>

            <div className="flex w-full overflow-hidden">
                <motion.div
                    className="flex space-x-8"
                    animate={{ x: [0, -100 * videos.length * 2] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25,
                            ease: "linear",
                        },
                    }}
                >
                    {[...videos, ...videos, ...videos].map((video, index) => (
                        <div
                            key={index}
                            className="relative w-72 h-44 flex-shrink-0 rounded-xl overflow-hidden shadow-md bg-gray-900 group cursor-pointer"
                        >
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Play className="fill-white text-white ml-1 w-6 h-6" />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-white text-sm font-medium truncate">{video.title}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
