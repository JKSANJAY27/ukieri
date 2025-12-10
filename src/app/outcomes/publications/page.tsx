"use client";

import { motion } from "framer-motion";
import { FileText, Award, Download, ExternalLink } from "lucide-react";

export default function Publications() {
    const publications = [
        {
            title: "Advanced Catalysts from Bio-waste for Green Hydrogen",
            year: "2024",
            journal: "International Journal of Hydrogen Energy",
            authors: "Student Name, Supervisor Name, et al.",
            type: "Journal Paper",
            link: "#"
        },
        {
            title: "Optimizing Electrolyzer Efficiency using AI",
            year: "2023",
            journal: "Energy Conversion and Management",
            authors: "Student Name, Supervisor Name, et al.",
            type: "Conference Paper",
            link: "#"
        }
    ];

    const patents = [
        {
            title: "Novel Electrode Design for PEM Water Electrolysis",
            status: "Filed",
            id: "IND12345678",
            date: "Jan 2025"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-ukieri-blue/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-ukieri-red/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
                        Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-ukieri-blue to-ukieri-red">Output</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Scientific contributions and intellectual property generated through the UKIERI-SPARC partnership.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Publications Section */}
                    <motion.section
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-blue-100 rounded-xl">
                                <FileText className="w-8 h-8 text-ukieri-blue" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Publications</h2>
                        </div>

                        <div className="space-y-6">
                            {publications.map((pub, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group"
                                >
                                    <div className="flex justify-between items-start gap-4">
                                        <div>
                                            <span className="inline-block px-3 py-1 bg-blue-50 text-ukieri-blue text-xs font-bold rounded-full mb-3">
                                                {pub.type} • {pub.year}
                                            </span>
                                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-ukieri-blue transition-colors">{pub.title}</h3>
                                            <p className="text-gray-500 text-sm mb-1">{pub.authors}</p>
                                            <p className="text-gray-400 text-xs italic">{pub.journal}</p>
                                        </div>
                                        <a href={pub.link} className="p-2 text-gray-400 hover:text-ukieri-blue hover:bg-blue-50 rounded-full transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Patents Section */}
                    <motion.section
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-orange-100 rounded-xl">
                                <Award className="w-8 h-8 text-ukieri-red" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Patents</h2>
                        </div>

                        <div className="space-y-6">
                            {patents.map((pat, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-gradient-to-br from-white to-orange-50 p-6 rounded-2xl shadow-sm border border-orange-100 hover:shadow-lg transition-all relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-full blur-2xl -mr-12 -mt-12" />

                                    <h3 className="text-xl font-bold text-gray-800 mb-3 relative z-10">{pat.title}</h3>
                                    <div className="flex items-center gap-4 relative z-10">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Status</span>
                                            <span className="text-ukieri-red font-bold">{pat.status}</span>
                                        </div>
                                        <div className="w-px h-8 bg-gray-300" />
                                        <div className="flex flex-col">
                                            <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Filing ID</span>
                                            <span className="text-gray-700 font-medium">{pat.id}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                </div>
            </div>
        </div>
    );
}
