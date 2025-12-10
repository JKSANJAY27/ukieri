"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const investigators = [
    {
        name: "Dr. Name Surname",
        role: "Principal Investigator",
        country: "India",
        institution: "Vellore Institute of Technology",
        image: "/assets/avatar-placeholder.png"
    },
    {
        name: "Dr. Name Surname",
        role: "Principal Investigator",
        country: "UK",
        institution: "Heriot-Watt University",
        image: "/assets/avatar-placeholder.png"
    },
    {
        name: "Dr. Name Surname",
        role: "Co-Investigator",
        country: "India",
        institution: "Vellore Institute of Technology",
        image: "/assets/avatar-placeholder.png"
    },
    {
        name: "Dr. Name Surname",
        role: "Co-Investigator",
        country: "UK",
        institution: "Heriot-Watt University",
        image: "/assets/avatar-placeholder.png"
    },
];

export default function Investigators() {
    return (
        <div className="min-h-screen bg-gray-50 py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
                        Lead <span className="text-ukieri-blue">Investigators</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        The visionary leadership team guiding the CV-LRPD-EHG program.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {investigators.map((person, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 flex flex-col items-center text-center group relative overflow-hidden"
                        >
                            {/* Decorative flag stripe */}
                            <div className={`absolute top-0 left-0 w-full h-2 ${person.country === "India" ? "bg-gradient-to-r from-orange-500 via-white to-green-500" : "bg-gradient-to-r from-blue-800 via-white to-red-600"}`} />

                            <div className="w-40 h-40 rounded-full p-1 bg-gray-100 mb-6 group-hover:scale-105 transition-transform duration-300 relative">
                                <div className="w-full h-full rounded-full bg-white overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                                    {/* Placeholder */}
                                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-4xl">
                                        {person.name.charAt(0)}
                                    </div>
                                    {/* <Image src={person.image} alt={person.name} fill className="object-cover" /> */}
                                </div>
                                <div className={`absolute bottom-2 right-2 w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-sm ${person.country === "India" ? "bg-orange-500" : "bg-blue-800"}`}>
                                    {person.country === "India" ? "IN" : "UK"}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-ukieri-blue transition-colors">{person.name}</h3>
                            <p className="text-ukieri-red font-medium text-sm mb-3 uppercase tracking-wider">{person.role}</p>
                            <p className="text-gray-500 text-sm">{person.institution}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
