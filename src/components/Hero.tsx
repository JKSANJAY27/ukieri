"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section
            ref={ref}
            id="home"
            className="relative h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Horizontal Scrolling Background Images */}
            <motion.div
                className="absolute inset-0 z-0 flex"
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 40,
                }}
                style={{
                    width: "fit-content", // Allow container to determine width based on children
                }}
            >
                {[
                    "/images/hero/biomass1.jpg",
                    "/images/hero/ukvisit6.jpg",
                    "/images/hero/ukvisit13.jpg",
                    "/images/hero/ukvisit16.jpg",
                    "/images/hero/biomass1.jpg", // Duplicate the set for seamless looping
                    "/images/hero/ukvisit6.jpg",
                    "/images/hero/ukvisit13.jpg",
                    "/images/hero/ukvisit16.jpg",
                ].map((src, index) => (
                    <div key={index} className="relative h-full w-[33.33vw] shrink-0">
                        <Image
                            src={src}
                            alt={`Hero Slide ${index}`}
                            fill
                            className="object-cover"
                            priority={index < 3}
                        />
                        {/* Darker overlay for better text contrast */}
                        <div className="absolute inset-0 bg-black/60" />
                    </div>
                ))}
            </motion.div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-xl md:text-2xl font-medium mb-4 text-white tracking-widest uppercasedrop-shadow-md">
                        UK-India Collaboration
                    </h2>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
                        Research Capacity Building in Green Hydrogen <br />
                        - <span className="text-transparent bg-clip-text bg-gradient-to-r from-ukieri-blue to-ukieri-red">The Fuel of the Future</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-10 drop-shadow-md font-medium">
                        Sanction Order No.: SPARC-UKIERI/2024-2025/P3265
                        <br />
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-lg">
                        <span className="font-semibold text-white">Funded by:</span>
                        <span className="font-bold text-white">UKIERI dotORG</span>
                        <span className="w-px h-4 bg-white/40"></span>
                        <span className="font-bold text-white">SPARC India</span>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1 backdrop-blur-sm">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-white rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
