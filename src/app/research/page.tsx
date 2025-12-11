"use client";

import { motion } from "framer-motion";
import { FlaskConical, Sun, Factory, Database, Cpu } from "lucide-react";

export default function ResearchPage() {
    const researchAreas = [
        {
            title: "Solar PV-driven Electrolysis Demonstrations",
            description: "Directly coupled solar photovoltaic systems for green hydrogen generation.",
            icon: <Sun className="w-8 h-8 text-yellow-500" />,
            color: "bg-yellow-50"
        },
        {
            title: "Biomass Gasification + Pressure Swing Adsorption",
            description: "High-purity hydrogen recovery from biomass using advanced PSA technology.",
            icon: <Factory className="w-8 h-8 text-green-600" />,
            color: "bg-green-50"
        },
        {
            title: "Metal Hydride-based Hydrogen Storage",
            description: "Safe, solid-state hydrogen storage solutions using advanced metal hydrides.",
            icon: <Database className="w-8 h-8 text-blue-600" />,
            color: "bg-blue-50"
        },
        {
            title: "Catalyst Development (Ru/Ir-free coatings)",
            description: "Cost-effective, high-efficiency coatings reducing dependency on critical raw materials.",
            icon: <FlaskConical className="w-8 h-8 text-purple-600" />,
            color: "bg-purple-50"
        },
        {
            title: "Computational Fluid Dynamics Models",
            description: "Modeling hydrogen systems to optimize performance and safety.",
            icon: <Cpu className="w-8 h-8 text-slate-600" />,
            color: "bg-slate-50"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 py-32">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                        Research & <span className="text-[#005eb8]">Innovation</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Pioneering solutions across the hydrogen value chain, from generation to storage and application.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {researchAreas.map((area, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-slate-100"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${area.color} flex items-center justify-center mb-6`}>
                                {area.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4">{area.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {area.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Visuals Section */}
                <div className="bg-white rounded-3xl p-12 shadow-sm border border-slate-100">
                    <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">System Schematics & Lab Demonstrations</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-100 h-64 rounded-xl flex items-center justify-center text-slate-400">
                            {/* Placeholder for Schematic */}
                            <span className="font-semibold">System Schematic Placeholder</span>
                        </div>
                        <div className="bg-slate-100 h-64 rounded-xl flex items-center justify-center text-slate-400">
                            {/* Placeholder for Lab Photo */}
                            <span className="font-semibold">Lab Demonstration Photo Placeholder</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
