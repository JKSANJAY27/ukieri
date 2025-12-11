"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { useRef, useEffect } from "react";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Parallax effects for images
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

    // Mouse interaction for subtle parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set(clientX / innerWidth);
        mouseY.set(clientY / innerHeight);
    };

    const springConfig = { damping: 25, stiffness: 100 };
    const moveX = useSpring(useTransform(mouseX, [0, 1], [-20, 20]), springConfig);
    const moveY = useSpring(useTransform(mouseY, [0, 1], [-20, 20]), springConfig);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[110vh] overflow-hidden bg-white selection:bg-ukieri-blue selection:text-white"
            onMouseMove={handleMouseMove}
        >
            {/* Abstract Background Shapes using Clean Energy Colors (Green/Blue) */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <motion.div
                    style={{ x: moveX, y: moveY }}
                    className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#005eb8] to-[#00A651] blur-3xl"
                />
                <motion.div
                    style={{ x: useTransform(moveX, (v) => -v), y: useTransform(moveY, (v) => -v) }}
                    className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#00A651] to-[#005eb8] blur-3xl"
                />
            </div>

            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10 h-full flex flex-col md:flex-row items-center">

                {/* Asymmetric Left Text Column */}
                <div className="w-full md:w-3/5 z-20">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <span className="h-px w-12 bg-gray-400"></span>
                            <span className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase">
                                SPARC-UKIERI Partnership
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter mb-6 text-[#1a1a1a]">
                            UK–India Partnership for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005eb8] to-[#00A651]">
                                Sustainable Energy
                            </span>
                        </h1>

                        <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-8 max-w-2xl">
                            Research Capacity Building in <span className="text-[#00A651] font-bold">Green Hydrogen</span> – The Fuel of the Future
                        </h2>

                        <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-8 border-l-4 border-[#005eb8] pl-6">
                            A pioneering UK–India collaboration advancing green hydrogen generation, storage, and workforce development. From cutting-edge research to real-world demonstrations and student exchanges — we are shaping the clean energy transition for a climate-resilient world.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="glass px-8 py-4 rounded-full text-[#005eb8] font-bold shadow-lg border-l-4 border-[#00A651]"
                            >
                                UKIERI dotORG
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="glass px-8 py-4 rounded-full text-[#00A651] font-bold shadow-lg border-l-4 border-[#005eb8]"
                            >
                                SPARC India
                            </motion.div>
                        </div>

                        <div className="grid grid-cols-2 gap-8 border-t pt-8 border-gray-200">
                            <div>
                                <h3 className="text-4xl font-black text-[#005eb8]">148+</h3>
                                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Hours Training</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-black text-[#00A651]">25+</h3>
                                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Students Involved</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Asymmetric Image Cluster */}
                <div className="w-full md:w-2/5 relative h-[600px] hidden md:block">
                    {/* Floating Images with Parallax */}
                    <motion.div
                        style={{ y: y1 }}
                        className="absolute top-10 right-10 w-64 h-80 z-20 shadow-2xl rounded-lg overflow-hidden border-4 border-white transform rotate-3"
                    >
                        <Image src="/images/hero/biomass1.jpg" alt="Lab Work" fill className="object-cover" />
                    </motion.div>

                    <motion.div
                        style={{ y: y2 }}
                        className="absolute top-40 right-48 w-56 h-56 z-30 shadow-2xl rounded-full overflow-hidden border-4 border-white transform -rotate-6"
                    >
                        <Image src="/images/hero/ukvisit6.jpg" alt="Collaboration" fill className="object-cover" />
                    </motion.div>

                    <motion.div
                        style={{ y: y3 }}
                        className="absolute bottom-20 right-0 w-72 h-48 z-10 shadow-xl rounded-lg overflow-hidden border-4 border-white opacity-80 mix-blend-multiply"
                    >
                        <Image src="/images/hero/ukvisit13.jpg" alt="Research" fill className="object-cover" />
                    </motion.div>

                    {/* Decorative Elements */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 right-1/2 w-48 h-48 border border-dashed border-gray-300 rounded-full z-0"
                    />
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-10 md:left-1/2 transform md:-translate-x-1/2 flex flex-col items-center gap-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <span className="text-xs uppercase tracking-widest text-gray-400">Scroll to Explore</span>
                <div className="w-px h-12 bg-gradient-to-b from-[#005eb8] to-[#00A651]" />
            </motion.div>
        </section>
    );
}
