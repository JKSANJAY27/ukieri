"use client";

import { motion } from "framer-motion";

const images = [
    "/assets/gallery-1.jpg",
    "/assets/gallery-2.jpg",
    "/assets/gallery-3.jpg",
    "/assets/gallery-4.jpg",
    "/assets/gallery-5.jpg",
    "/assets/gallery-6.jpg",
];

export function Gallery() {
    return (
        <section id="gallery" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        Gallery
                    </h2>
                    <p className="text-gray-600">
                        Glimpses from the training program, lab sessions, and cultural exchange.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative aspect-square overflow-hidden rounded-xl shadow-md group"
                        >
                            <div className="absolute inset-0 bg-gray-200 animate-pulse" /> {/* Placeholder background */}
                            <img
                                src={src} // Replace with actual images
                                alt={`Gallery Image ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 relative z-10"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                }}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 z-20" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
