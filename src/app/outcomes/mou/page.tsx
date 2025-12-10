"use client";

import { motion } from "framer-motion";
import { CopyCheck, Handshake, ScrollText } from "lucide-react";

export default function MoU() {
    return (
        <div className="min-h-screen bg-white py-20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gray-50 to-transparent skew-y-6 transform origin-top-left -z-10" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center justify-center p-4 bg-orange-100 rounded-full mb-6">
                        <Handshake className="w-8 h-8 text-ukieri-red" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
                        Strategic <span className="text-ukieri-blue">Agreements</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Formalizing the partnership between Vellore Institute of Technology and Heriot-Watt University.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-12 rounded-[2rem] shadow-2xl border border-gray-100 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-ukieri-blue/5 rounded-bl-full -mr-10 -mt-10" />

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                <ScrollText className="w-12 h-12 text-ukieri-blue mb-4" />
                                <div className="text-sm text-gray-400 font-mono">ID: MOU-2024-001</div>
                            </div>

                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Lead Collaboration Agreement</h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    A comprehensive Memorandum of Understanding signed between VIT and HWU to facilitate student exchange, joint research in Green Hydrogen technologies, and faculty development programs.
                                </p>

                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <CopyCheck className="w-5 h-5 text-green-500" />
                                        <span className="font-medium text-gray-700">Joint Research Initiatives</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CopyCheck className="w-5 h-5 text-green-500" />
                                        <span className="font-medium text-gray-700">Student & Faculty Exchange</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CopyCheck className="w-5 h-5 text-green-500" />
                                        <span className="font-medium text-gray-700">Technology Transfer</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
