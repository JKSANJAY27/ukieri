"use client";

import { motion } from "framer-motion";
import { Cpu, Zap } from "lucide-react";
import Image from "next/image";

export default function Product() {
    return (
        <div className="min-h-screen bg-gray-900 py-20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-gray-900" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight">
                        Innovation <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Showcase</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Prototypes and Proof of Concepts demonstrating the practical applications of our research.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Prototype 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden group shadow-2xl"
                    >
                        <div className="h-64 bg-gray-900/50 flex items-center justify-center relative overflow-hidden">
                            {/* Placeholder or Image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
                            <Cpu className="w-24 h-24 text-blue-500 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                        </div>
                        <div className="p-8 relative z-20">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                                <Cpu className="w-6 h-6 text-blue-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-3">Green Hydrogen Electrolyzer</h2>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                A compact, high-efficiency electrolyzer using novel bio-waste derived catalysts. Designed for scalable hydrogen production with 15% higher efficiency than industry standards.
                            </p>
                            <div className="flex gap-2">
                                <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-mono text-blue-400">TRL 4</span>
                                <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-mono text-emerald-400">Patent Pending</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Prototype 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden group shadow-2xl"
                    >
                        <div className="h-64 bg-gray-900/50 flex items-center justify-center relative overflow-hidden">
                            {/* Placeholder or Image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
                            <Zap className="w-24 h-24 text-emerald-500 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                        </div>
                        <div className="p-8 relative z-20">
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-3">AI-Optimized Control Unit</h2>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Smart control system leveraging machine learning to optimize electrolyzer performance in real-time, adapting to fluctuating power inputs from renewable sources.
                            </p>
                            <div className="flex gap-2">
                                <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-mono text-blue-400">Software</span>
                                <span className="px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-xs font-mono text-orange-400">Beta</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
