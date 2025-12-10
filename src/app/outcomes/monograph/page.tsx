"use client";

import { motion } from "framer-motion";
import { BookOpen, Download } from "lucide-react";

export default function Monograph() {
    return (
        <div className="min-h-screen bg-gray-50 py-20 relative overflow-hidden flex items-center justify-center">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-noise opacity-30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100 rounded-full blur-3xl opacity-20 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
                    {/* 3D Book Cover Effect */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, rotateY: -15 }}
                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                        transition={{ duration: 1, type: "spring" }}
                        className="w-full md:w-1/3 flex justify-center perspective-1000"
                    >
                        <div className="relative w-72 aspect-[3/4] rounded-r-2xl shadow-2xl bg-ukieri-blue transform rotate-y-12 hover:rotate-y-0 transition-transform duration-500 cursor-pointer overflow-hidden border-l-4 border-white/20">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/20" />
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
                                <h3 className="text-white font-bold text-2xl mb-1">Research Monograph</h3>
                                <p className="text-white/80 text-sm">2024-2025 Edition</p>
                            </div>
                            <div className="absolute top-8 right-8 text-white/20">
                                <BookOpen className="w-24 h-24" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-2/3"
                    >
                        <span className="text-ukieri-blue font-bold tracking-widest text-sm uppercase mb-4 block">Publications</span>
                        <h1 className="text-5xl font-black text-gray-900 mb-6 leading-tight">
                            Comprehensive <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ukieri-blue to-ukieri-red">Scientific Monograph</span>
                        </h1>
                        <p className="text-xl text-gray-500 mb-8 leading-relaxed max-w-2xl">
                            A detailed compilation of research methodologies, experimental findings, and technological advancements achieved during the collaboration. This monograph serves as a reference for future hydrogen energy research.
                        </p>

                        <div className="flex gap-4">
                            <button className="flex items-center gap-3 px-8 py-4 bg-ukieri-blue text-white rounded-xl font-bold hover:bg-blue-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                <Download className="w-5 h-5" />
                                Download PDF
                            </button>
                            <button className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold hover:bg-gray-50 transition-all">
                                Preview
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
