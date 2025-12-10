"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutProgram() {
    return (
        <div className="min-h-screen bg-white py-24 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ukieri-blue/5 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-ukieri-red/5 rounded-full blur-3xl -ml-32 -mb-32" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-gray-100 shadow-2xl skew-y-3 transform hover:skew-y-0 transition-transform duration-700">
                            {/* Placeholder or actual program conceptual image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-ukieri-blue to-ukieri-red opacity-80 mix-blend-multiply" />
                            <div className="absolute inset-0 flex items-center justify-center p-12 text-white">
                                <h2 className="text-4xl font-bold leading-tight">Catalyzing Sustainable Energy Solutions</h2>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2"
                    >
                        <h1 className="text-4xl md:text-6xl font-black mb-8 text-gray-900 leading-tight">
                            Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-ukieri-blue to-ukieri-red">Theory & Practice</span>
                        </h1>

                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                The <strong className="text-gray-900">UK-India Hands-on Training Program</strong> on Catalyst Validation is a pioneering initiative connecting laboratory breakthroughs with real-world prototype demonstration for electrolytic hydrogen generation.
                            </p>
                            <p>
                                Designed for students and researchers, this program accelerates the transition from academic learning to industrial application in the green hydrogen sector.
                            </p>
                        </div>

                        <div className="mt-12 space-y-4">
                            {[
                                "Synthesis of Advanced Catalysts",
                                "Fabrication of Membrane Electrode Assemblies",
                                "Prototype Performance Validation",
                                "Lab-to-Scale-up Engineering"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                                    <span className="font-semibold text-gray-800">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
