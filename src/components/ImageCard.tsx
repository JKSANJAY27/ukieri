"use client";

import { useLightbox } from "@/components/ui/Lightbox";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ImageCardProps {
    src: string;
    alt: string;
    title: string;
    description: string;
}

export function ImageCard({ src, alt, title, description }: ImageCardProps) {
    const { openLightbox } = useLightbox();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            className="group relative bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer border border-gray-100"
            onClick={() => openLightbox(src)}
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                        <ArrowUpRight className="text-white w-6 h-6" />
                    </div>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-ukieri-blue transition-colors line-clamp-1">{title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">{description}</p>
            </div>
        </motion.div>
    );
}
