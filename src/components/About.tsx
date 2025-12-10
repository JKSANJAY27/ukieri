"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Add Next Image if not present

export function About() {
    return (
        <section id="about" className="py-32 bg-gray-50 relative overflow-hidden">
            {/* Background Gradient Blob */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-ukieri-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 relative inline-block">
                        About The Program
                        <span className="absolute -bottom-2 left-0 w-1/3 h-1.5 bg-gradient-to-r from-ukieri-blue to-ukieri-red rounded-full" />
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mt-4">
                        A cross-border initiative to revolutionize green hydrogen research through student training.
                    </p>
                </motion.div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">

                    {/* Card 1: Main Description (Large) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 row-span-2 bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-[#012169]">From Lab to Prototype</h3>
                            <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                The <span className="font-semibold text-ukieri-red">CV-LRPD-EHG</span> program is significantly more than just a workshop. It is an immersive, hands-on journey designed to bridge the gap between theoretical knowledge and practical application in the field of <span className="font-semibold text-green-700">Green Hydrogen</span>.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Undergraduate and Masters students from VIT and Heriot-Watt University collaborate to validate catalysts and build functioning electrolyzer prototypes, gaining critical skills for the Net Zero future.
                            </p>
                        </div>
                        <div className="mt-8 flex gap-4">
                            <div className="px-4 py-2 bg-blue-50 text-blue-800 rounded-lg text-sm font-semibold">UKIERI Supported</div>
                            <div className="px-4 py-2 bg-orange-50 text-orange-800 rounded-lg text-sm font-semibold">SPARC Initiative</div>
                        </div>
                    </motion.div>

                    {/* Card 2: Visual (Image) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-gray-200 rounded-3xl overflow-hidden relative shadow-lg min-h-[300px]"
                    >
                        {/* Using a solid color fallback or image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-ukieri-blue to-[#012169] flex items-center justify-center p-6 text-white text-center">
                            {/* Placeholder for real image */}
                            <div className="space-y-2">
                                <span className="text-5xl font-black opacity-20 block">10+</span>
                                <span className="text-lg font-medium">Days of Intensive Training</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: Key Focus Areas (List) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-1 bg-gradient-to-br from-[#138808] to-[#0b5c04] rounded-3xl p-8 text-white shadow-xl flex flex-col justify-center"
                    >
                        <h4 className="text-xl font-bold mb-6 border-b border-white/20 pb-2">Key Modules</h4>
                        <ul className="space-y-4">
                            {["Electrode Fabrication", "Cell Assembly", "Catalyst Validation", "Solar Integration"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</div>
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Card 4: Collaborative Stats */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-2 bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex items-center justify-around"
                    >
                        <div className="text-center">
                            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-ukieri-blue to-ukieri-red">2</div>
                            <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-2">Nations</div>
                        </div>
                        <div className="w-px h-16 bg-gray-200" />
                        <div className="text-center">
                            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] to-[#138808]">20+</div>
                            <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-2">Participants</div>
                        </div>
                        <div className="w-px h-16 bg-gray-200" />
                        <div className="text-center">
                            <div className="text-4xl font-black text-gray-800">4</div>
                            <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-2">Key Outcomes</div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
