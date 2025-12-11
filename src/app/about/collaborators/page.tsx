"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Collaborators() {
    return (
        <div className="min-h-screen bg-white py-24 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-24"
                >
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 tracking-tight">
                        Strategic <span className="text-ukieri-blue">Alliance</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Two world-class institutions uniting to advance green energy research.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* VIT */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-ukieri-red/10 to-transparent rounded-[3rem] transform -rotate-3 scale-105 transition-transform group-hover:rotate-0 group-hover:scale-100 duration-500" />

                        <div className="relative bg-white p-10 rounded-[2.5rem] shadow-2xl border-t-4 border-ukieri-red">
                            <div className="h-24 mb-8 flex items-center justify-start">
                                {/* Logo Placeholder */}
                                <div className="text-3xl font-black text-ukieri-red tracking-tighter">VIT</div>
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vellore Institute of Technology</h2>
                            <p className="text-ukieri-red font-bold text-sm uppercase tracking-widest mb-6">Lead Indian Institution</p>

                            <p className="text-gray-600 leading-relaxed mb-8">
                                A premier institute of higher learning, consistently ranked among the top universities in India. Known for its rigorous academic curriculum and focus on cutting-edge research.
                            </p>

                            <div className="flex gap-4">
                                <span className="px-4 py-2 bg-red-50 text-ukieri-red rounded-full text-xs font-bold">NIRF Top 10</span>
                                <span className="px-4 py-2 bg-red-50 text-ukieri-red rounded-full text-xs font-bold">IoT of E</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* HWU */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-l from-ukieri-blue/10 to-transparent rounded-[3rem] transform rotate-3 scale-105 transition-transform group-hover:rotate-0 group-hover:scale-100 duration-500" />

                        <div className="relative bg-white p-10 rounded-[2.5rem] shadow-2xl border-t-4 border-ukieri-blue">
                            <div className="h-24 mb-8 flex items-center justify-start">
                                {/* Logo Placeholder */}
                                <div className="text-3xl font-black text-ukieri-blue tracking-tighter">HERIOT-WATT</div>
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Heriot-Watt University</h2>
                            <p className="text-ukieri-blue font-bold text-sm uppercase tracking-widest mb-6">Lead UK Partner</p>

                            <p className="text-gray-600 leading-relaxed mb-8">
                                A global university with a rich heritage in engineering and science. Setting standards in sustainable energy solutions and robotics through the National Robotarium.
                            </p>

                            <div className="flex gap-4">
                                <span className="px-4 py-2 bg-blue-50 text-ukieri-blue rounded-full text-xs font-bold">Est. 1821</span>
                                <span className="px-4 py-2 bg-blue-50 text-ukieri-blue rounded-full text-xs font-bold">Global Impact</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Industry and Government Engagement */}
                <div className="mt-32">
                    <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-gray-900">
                        Industry & Government <span className="text-[#005eb8]">Engagement</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "Empereal-KGDS Renewable Energy", role: "Industrial Partner", color: "border-green-500 text-green-600" },
                            { name: "PlusZero, Logan Energy, FLEXERGY", role: "Clean Energy Innovators", color: "border-blue-500 text-blue-600" },
                            { name: "Connected Places Catapult", role: "Innovation Catalyst", color: "border-purple-500 text-purple-600" },
                            { name: "Tamil Nadu Government", role: "Policy Outreach", color: "border-orange-500 text-orange-600" }
                        ].map((partner, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`bg-gray-50 p-8 rounded-xl border-t-4 ${partner.color} shadow-lg hover:shadow-xl transition-all`}
                            >
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{partner.name}</h3>
                                <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">{partner.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
