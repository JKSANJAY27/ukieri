"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutProgram() {
    return (
        <div className="min-h-screen bg-white py-24 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-100 rounded-full blur-3xl -ml-32 -mb-32" />

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
                            <div className="absolute inset-0 bg-gradient-to-br from-[#005eb8] to-[#00A651] opacity-90 mix-blend-multiply" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-white text-center">
                                <h2 className="text-3xl font-bold leading-tight mb-4">Our Vision</h2>
                                <p className="text-lg font-light leading-relaxed opacity-90">
                                    To create hydrogen-skilled graduates and scalable clean energy technologies through bilateral research, training, and industrial collaboration.
                                </p>
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
                        <h1 className="text-4xl md:text-5xl font-black mb-8 text-gray-900 leading-tight">
                            Program <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005eb8] to-[#00A651]">Overview</span>
                        </h1>

                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-8">
                            <h3 className="text-xl font-bold text-gray-800">Objectives</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-[#00A651] flex-shrink-0 mt-1" />
                                    <span>Develop advanced curriculum & hands-on training on hydrogen production and storage.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-[#00A651] flex-shrink-0 mt-1" />
                                    <span>Execute joint research mini-projects on catalysts, fuel generation & storage solutions.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-[#00A651] flex-shrink-0 mt-1" />
                                    <span>Build future hydrogen workforce supporting UK & India net-zero missions.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Thematic Focus Areas</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Hydrogen generation (solar electrolysis, biomass gasification)",
                                    "Hydrogen storage materials & coatings",
                                    "Additive manufacturing for electrolyser components",
                                    "Carbon emissions mitigation and sustainability"
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.2 + (i * 0.1) }}
                                        className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-[#005eb8] hover:shadow-md transition-all"
                                    >
                                        <span className="text-sm font-semibold text-gray-700">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
