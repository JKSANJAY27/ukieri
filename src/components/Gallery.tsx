"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLightbox } from "@/components/ui/Lightbox";
import { Maximize2 } from "lucide-react";

const images = [
    "/assets/gallery-1.jpg",
    "/assets/gallery-2.jpg",
    "/assets/gallery-3.jpg",
    "/assets/gallery-4.jpg",
    "/assets/gallery-5.jpg",
    "/assets/gallery-6.jpg",
];

export function Gallery() {
    const { openLightbox } = useLightbox();

    return (
        <section id="gallery" className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-ukieri-red font-bold tracking-widest text-sm uppercase mb-2 block">Visuals</span>
                    <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
                        Gallery
                        <span className="block h-1 w-24 bg-gradient-to-r from-ukieri-blue to-ukieri-red mx-auto mt-4 rounded-full" />
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Snapshots from the research labs, workshops, and international exchanges.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={cn(
                                "relative overflow-hidden rounded-xl shadow-md group cursor-pointer",
                                (index === 0 || index === 5) ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1",
                                (index === 2) ? "md:col-span-2" : ""
                            )}
                            onClick={() => openLightbox(src)}
                        >
                            <div className="absolute inset-0 bg-gray-200 animate-pulse" /> {/* Placeholder background */}
                            <img
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full">
                                    <Maximize2 className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
