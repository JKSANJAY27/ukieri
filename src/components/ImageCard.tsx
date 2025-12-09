"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageModal } from "@/components/ImageModal";
import { motion } from "framer-motion";

interface ImageCardProps {
    src: string;
    alt: string;
    description: string | React.ReactNode;
    date?: string;
    title?: string;
}

export function ImageCard({ src, alt, description, date, title }: ImageCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
            >
                {/* Image Section */}
                <div
                    className="relative h-64 w-full overflow-hidden cursor-pointer"
                    onClick={() => setIsModalOpen(true)}
                >
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="text-white bg-black/50 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                            View Fullscreen
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col">
                    {date && (
                        <div className="text-xs font-semibold text-ukieri-blue mb-2 tracking-wide uppercase">
                            {date}
                        </div>
                    )}
                    {title && (
                        <h3 className="text-lg font-bold mb-3 text-gray-900 leading-tight">
                            {title}
                        </h3>
                    )}
                    <div className="text-gray-600 text-sm leading-relaxed flex-1">
                        {description}
                    </div>
                </div>
            </motion.div>

            <ImageModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                src={src}
                alt={alt}
                caption={typeof description === 'string' ? description : title}
            />
        </>
    );
}
