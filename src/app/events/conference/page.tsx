"use client";

import { motion } from "framer-motion";
import { ImageCard } from "@/components/ImageCard";

export default function ConferencePage() {
    const images = [
        {
            src: "/ic1.jpg",
            alt: "International Conference Session",
            description: "A special workshop followed by poster presentation has been conducted for the rural students and the selected students from VIT, Vellore were also participated and presented their research and shared their knowledge with the other students."
        },
        {
            src: "/ic2.jpg",
            alt: "Conference Speakers",
            description: "International Conference on Advanced Nanomaterials for Energy, Environment, and Healthcare (ANEH 2024) & UK-India Workshop on Hydrogen Generation and Storage."
        },
        {
            src: "/ic3.jpg",
            alt: "Attendees",
            description: "Organised jointly by Heriot-Watt University, UK and VIT, India. (21-23, August 2024)"
        },
        {
            src: "/ic4.jpg",
            alt: "Group Photo",
            description: "Outcomes: 300+ students across India (62% Women, 38% Men) with 40+ invited speakers."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-ukieri-blue/30 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 py-24 relative z-10">
                <div className="grid lg:grid-cols-5 gap-16">
                    {/* Left Column: Typography & Info */}
                    <div className="lg:col-span-2 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block px-4 py-2 bg-gradient-to-r from-ukieri-blue to-ukieri-red rounded-full text-xs font-bold tracking-wider mb-6">
                                ANEH 2024
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
                                Global <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Synergy</span>
                            </h1>
                            <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-gray-700 pl-6">
                                <strong className="text-white block mb-2">International Conference on Advanced Nanomaterials</strong>
                                A premier gathering focused on Energy, Environment, and Healthcare, coupled with the UK-India Workshop on Hydrogen Generation.
                            </p>
                        </motion.div>

                        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                            <h3 className="text-xl font-bold mb-6">Key Statistics</h3>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <div className="text-3xl font-black text-ukieri-red mb-1">300+</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest">Delegates</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-ukieri-blue mb-1">40+</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest">Speakers</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-emerald-500 mb-1">62%</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest">Women</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-orange-500 mb-1">21-23</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest">August '24</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Gallery Grid */}
                    <div className="lg:col-span-3">
                        <div className="grid md:grid-cols-2 gap-6">
                            {images.map((img, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <ImageCard
                                        src={img.src}
                                        alt={img.alt}
                                        title={`Highlight ${index + 1}`}
                                        description={img.description}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
