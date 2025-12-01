"use client";

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
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/assets/hero-placeholder.jpg')", // Replace with actual image
                        filter: "brightness(0.4)",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-xl md:text-2xl font-medium mb-4 text-ukieri-blue tracking-widest uppercase">
                        UK-India Collaboration
                    </h2>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        Hands-on Training Program <br />
                        on <span className="text-transparent bg-clip-text bg-gradient-to-r from-ukieri-blue to-ukieri-red">Catalyst Validation</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10">
                        From Laboratory Research to Prototype Demonstration for Electrolytic Hydrogen Generation.
                        <br />
                        <span className="text-sm mt-2 block opacity-80">Held at Heriot-Watt University, UK | June 2–9, 2025</span>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                        <span className="font-semibold">Funded by:</span>
                        <span className="font-bold">UKIERI dotORG</span>
                        <span className="w-px h-4 bg-white/40"></span>
                        <span className="font-bold">SPARC India</span>
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
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
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
