"use client";

import { motion } from "framer-motion";
import { Building2, Globe, GraduationCap } from "lucide-react";

export default function FundingAgencies() {
    return (
        <div className="min-h-screen bg-white py-24 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 w-full h-[50vh] bg-gray-50 -skew-y-3 z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 tracking-tight">
                        Supported <span className="text-transparent bg-clip-text bg-gradient-to-r from-ukieri-blue to-ukieri-red">By</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        This program is made possible through the generous support and vision of leading international educational bodies.
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {/* UKIERI */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-8 md:gap-16 items-center"
                    >
                        <div className="flex-shrink-0 w-full md:w-1/3 flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-ukieri-blue">
                                <GraduationCap className="w-10 h-10" />
                            </div>
                            <h2 className="text-3xl font-black text-ukieri-blue mb-2">UKIERI</h2>
                            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Education & Research</span>
                        </div>
                        <div className="flex-1 border-l-0 md:border-l-2 border-gray-100 md:pl-12">
                            <p className="text-lg text-gray-600 leading-relaxed">
                                The <strong>UK-India Education and Research Initiative</strong> (UKIERI) started in April 2006 to enhance educational links between India and the UK. It has been a successful partnership, promoting collaboration in research, education, and skill development to strengthen the bilateral relationship.
                            </p>
                        </div>
                    </motion.div>

                    {/* SPARC */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row-reverse gap-8 md:gap-16 items-center"
                    >
                        <div className="flex-shrink-0 w-full md:w-1/3 flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-ukieri-red">
                                <Building2 className="w-10 h-10" />
                            </div>
                            <h2 className="text-3xl font-black text-ukieri-red mb-2">SPARC</h2>
                            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Academic Promotion</span>
                        </div>
                        <div className="flex-1 border-r-0 md:border-r-2 border-gray-100 md:pr-12 text-left md:text-right">
                            <p className="text-lg text-gray-600 leading-relaxed">
                                <strong>Scheme for Promotion of Academic and Research Collaboration</strong> (SPARC) aims at improving the research ecosystem of India’s Higher Educational Institutions by facilitating academic and research collaborations between Indian institutions and the best institutions globally.
                            </p>
                        </div>
                    </motion.div>

                    {/* British Council */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-8 md:gap-16 items-center"
                    >
                        <div className="flex-shrink-0 w-full md:w-1/3 flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-6 text-indigo-900">
                                <Globe className="w-10 h-10" />
                            </div>
                            <h2 className="text-3xl font-black text-indigo-900 mb-2">British Council</h2>
                            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Cultural Relations</span>
                        </div>
                        <div className="flex-1 border-l-0 md:border-l-2 border-gray-100 md:pl-12">
                            <p className="text-lg text-gray-600 leading-relaxed">
                                The <strong>British Council</strong> is the UK’s international organisation for cultural relations and educational opportunities. It works with over 100 countries in the fields of arts and culture, English language, education and civil society.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
