"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Placeholder data - replace with actual images
const programImages = [
    { src: "/images/program-1.jpg", alt: "Program Highlight 1" },
    { src: "/images/program-2.jpg", alt: "Program Highlight 2" },
    { src: "/images/program-3.jpg", alt: "Program Highlight 3" },
    { src: "/images/program-4.jpg", alt: "Program Highlight 4" },
    { src: "/images/program-5.jpg", alt: "Program Highlight 5" },
];

export function ProgramMarquee() {
    return (
        <div className="py-12 bg-gray-50 overflow-hidden relative">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Program Highlights
            </h2>

            <div className="flex w-full overflow-hidden">
                <motion.div
                    className="flex space-x-8"
                    animate={{ x: [0, -100 * programImages.length * 2] }} // Adjust calculation for smoothness
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {/* Duplicate list for seamless loop */}
                    {[...programImages, ...programImages, ...programImages].map((img, index) => (
                        <div
                            key={index}
                            className="relative w-80 h-56 flex-shrink-0 rounded-xl overflow-hidden shadow-lg bg-gray-200"
                        >
                            <div className="flex items-center justify-center h-full text-gray-400">
                                Image {index + 1}
                            </div>
                            {/* 
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
              />
              */}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
