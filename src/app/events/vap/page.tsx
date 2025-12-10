"use client";

import { motion } from "framer-motion";
import { ImageCard } from "@/components/ImageCard";
import { Sparkles } from "lucide-react";

export default function VAPPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-24 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-100 rounded-full blur-3xl opacity-50 -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50 -ml-20 -mb-20" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-6">
                        <Sparkles className="w-6 h-6 text-ukieri-yellow" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 tracking-tight">
                        Value Added <span className="text-ukieri-blue">Programs</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Specialized sessions and technical workshops designed to enhance student skills beyond the curriculum.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white p-2 rounded-3xl shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                            <ImageCard
                                src="/intro1.jpg"
                                alt="Introductory Session"
                                title="Introductory Session"
                                description="Exclusive introductory session for VIT students selected for the UK visit, led by Prof. Sudhagar (PI, UK). Setting the stage for international collaboration."
                            />
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="px-3 py-1 bg-ukieri-blue/10 text-ukieri-blue rounded-full text-xs font-bold uppercase tracking-wider">Orientation</span>
                                    <span className="text-gray-400 text-sm font-medium">16 August 2024</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="bg-white p-2 rounded-3xl shadow-xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                            <ImageCard
                                src="/intro2.jpg"
                                alt="Technical Session"
                                title="Renewable Energy Systems"
                                description="Deep dive technical session on Renewable Energy Systems delivered to VIT students. Exploring the latest trends in hydrogen technology."
                            />
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="px-3 py-1 bg-ukieri-red/10 text-ukieri-red rounded-full text-xs font-bold uppercase tracking-wider">Lecture</span>
                                    <span className="text-gray-400 text-sm font-medium">16 August 2024</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
