"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const students = [
    { name: "Student Name", role: "Research Scholar", institution: "VIT", image: "/assets/avatar-placeholder.png" }, // Added placeholder
    { name: "Student Name", role: "Research Scholar", institution: "VIT", image: "/assets/avatar-placeholder.png" },
    { name: "Student Name", role: "Research Scholar", institution: "VIT", image: "/assets/avatar-placeholder.png" },
    { name: "Student Name", role: "Research Scholar", institution: "VIT", image: "/assets/avatar-placeholder.png" },
    { name: "Student Name", role: "Research Scholar", institution: "VIT", image: "/assets/avatar-placeholder.png" },
    { name: "Student Name", role: "Research Scholar", institution: "VIT", image: "/assets/avatar-placeholder.png" },
];

export default function ResearchStudents() {
    return (
        <div className="min-h-screen bg-white py-20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 tracking-tight">
                        Future <span className="text-ukieri-blue">Innovators</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        The brilliant minds driving the research and validation of green hydrogen technologies.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {students.map((student, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 flex flex-col items-center text-center group"
                        >
                            <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-ukieri-blue to-ukieri-red mb-6 group-hover:scale-105 transition-transform duration-300">
                                <div className="w-full h-full rounded-full bg-white overflow-hidden relative">
                                    {/* Placeholder for actual image */}
                                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300 text-4xl font-bold">
                                        {student.name.charAt(0)}
                                    </div>
                                    {/* <Image src={student.image} alt={student.name} fill className="object-cover" /> */}
                                </div>
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-ukieri-blue transition-colors">{student.name}</h3>
                            <p className="text-ukieri-red text-sm font-semibold mb-2">{student.role}</p>
                            <p className="text-gray-400 text-xs uppercase tracking-widest">{student.institution}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
