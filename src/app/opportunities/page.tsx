"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Clock, Briefcase } from "lucide-react";

export default function OpportunitiesPage() {
    return (
        <div className="min-h-screen bg-white py-32">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="w-full md:w-1/2"
                    >
                        <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 leading-tight">
                            Student <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Opportunities</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            Empowering students to become clean hydrogen innovators through short-term research placements, international exchange visits, industrial workshops, and project-based learning.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="w-full md:w-1/2 grid grid-cols-2 gap-6"
                    >
                        <div className="bg-blue-50 p-6 rounded-2xl">
                            <h3 className="text-4xl font-black text-blue-600 mb-2">148h</h3>
                            <p className="font-semibold text-slate-700">Collaborative Curriculum</p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-2xl">
                            <h3 className="text-4xl font-black text-green-600 mb-2">4+</h3>
                            <p className="font-semibold text-slate-700">Key Modules</p>
                        </div>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            title: "Collaborative Curriculum",
                            desc: "A comprehensive 148-hour program covering the fundamentals and advanced applications of green hydrogen.",
                            icon: <Clock className="w-6 h-6 text-white" />,
                            bg: "bg-blue-600"
                        },
                        {
                            title: "Research Methodology",
                            desc: " specialized courses on research ethics and methodology to prepare students for academic excellence.",
                            icon: <BookOpen className="w-6 h-6 text-white" />,
                            bg: "bg-slate-800"
                        },
                        {
                            title: "Value-Added Courses",
                            desc: "Focusing on hydrogen generation techniques and additive manufacturing for energy components.",
                            icon: <GraduationCap className="w-6 h-6 text-white" />,
                            bg: "bg-green-600"
                        },
                        {
                            title: "Industry Pathways",
                            desc: "Internship opportunities and industry-connected learning to bridge the gap between academia and jobs.",
                            icon: <Briefcase className="w-6 h-6 text-white" />,
                            bg: "bg-teal-600"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-6 shadow-md`}>
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
