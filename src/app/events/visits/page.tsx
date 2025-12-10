"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ImageCard } from "@/components/ImageCard";

export default function VisitsPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    // Parallax background movement
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    const indiaVisit = [
        {
            src: "/indiavisit1.jpg",
            content: "Signing of the MoU between Dr. G. Viswanathan (Chancellor, VIT) and Dr. Sudhagar Pitchaimuthu (PI, UK)."
        },
        {
            src: "/indiavisit2.jpg",
            content: "Strategic dialogue with the Chancellor and Vice-Chancellor of VIT."
        },
        {
            src: "/indiavisit3.jpg",
            content: "Consultation with Dean (SMEC) and Director (SpoRIC) to align research goals."
        },
        {
            src: "/indiavisit4.jpg",
            content: "Planning international relations strategies with the Director of International Relations."
        }
    ];

    const ukVisit = [
        { id: 1, content: "Start of the journey: Meeting Prof. Igor Guz, Dean of SEPS." },
        { id: 2, content: "Exploration of state-of-the-art research labs at HWU." },
        { id: 3, content: "Historic moment: Indian Investigators at Heriot-Watt University campus." },
        { id: 6, content: "Industry Connection: Discussing Hydrogen applications with Plus Zero CEO." },
        { id: 8, content: "Site Visit: Forth Ports, Edinburgh - Real-world implementation analysis." },
        { id: 16, content: "Innovation Hub: Visiting The National Robotarium, Scotland." },
    ];

    return (
        <div className="min-h-screen bg-white relative overflow-hidden" ref={containerRef}>
            {/* Parallax Background Header */}
            <div className="relative h-[60vh] overflow-hidden flex items-center justify-center">
                <motion.div
                    style={{ y: bgY }}
                    className="absolute inset-0 bg-gradient-to-b from-[#012169] to-[#000000] z-0"
                >
                    {/* Abstract Map Pattern */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-cover bg-center mix-blend-overlay" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-center text-white px-4"
                >
                    <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-sm font-medium tracking-wider mb-4 backdrop-blur-md">GLOBAL EXCHANGE</span>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                        Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] to-[#138808]">Nations</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
                        A visual journey of collaboration between India and the UK, fostering innovation in green hydrogen.
                    </p>
                </motion.div>
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-6 py-20 relative z-20 -mt-20">

                {/* Section 1: India Visit */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-20 border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12 border-b border-gray-100 pb-8">
                        <div>
                            <span className="text-[#FF9933] font-bold tracking-wider text-sm uppercase">Phase 1</span>
                            <h2 className="text-4xl font-bold text-gray-900 mt-2">Visit to India</h2>
                            <p className="text-gray-500 mt-2">Vellore Institute of Technology • December 2024</p>
                        </div>
                        <p className="text-gray-600 max-w-md leading-relaxed">
                            Dr. Sudhagar Pitchaimuthu and UK students arrived at VIT for high-level strategic meetings and the inaugural SPARC workshop.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {indiaVisit.map((item, index) => (
                            <ImageCard
                                key={index}
                                src={item.src}
                                alt="Visit to India"
                                title={`Strategic Meeting ${index + 1}`}
                                description={item.content}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Section 2: Connection Line */}
                <div className="flex justify-center mb-20 opacity-50">
                    <div className="h-32 w-px border-l-2 border-dashed border-gray-300 relative">
                        <motion.div
                            animate={{ y: [0, 128] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 left-[-5px] w-2 h-2 bg-gray-400 rounded-full"
                        />
                    </div>
                </div>

                {/* Section 3: UK Visit */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12 border-b border-gray-100 pb-8">
                        <div>
                            <span className="text-[#012169] font-bold tracking-wider text-sm uppercase">Phase 2</span>
                            <h2 className="text-4xl font-bold text-gray-900 mt-2">Visit to UK</h2>
                            <p className="text-gray-500 mt-2">Heriot-Watt University • March 2025</p>
                        </div>
                        <p className="text-gray-600 max-w-md leading-relaxed">
                            Indian Investigators visited Scotland to cement the partnership, exploring the National Robotarium and meeting industry leaders in the hydrogen sector.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ukVisit.map((item) => (
                            <ImageCard
                                key={item.id}
                                src={`/ukvisit${item.id}.jpg`}
                                alt={`UK Visit ${item.id}`}
                                title={`Interaction ${item.id}`}
                                description={item.content}
                            />
                        ))}
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
