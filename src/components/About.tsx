"use client";

import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2"
                    >
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-20 h-20 bg-ukieri-blue/10 rounded-full blur-xl"></div>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-ukieri-red/10 rounded-full blur-xl"></div>
                            <img
                                src="/assets/about-placeholder.jpg" // Replace with actual image
                                alt="Program Inauguration"
                                className="relative rounded-2xl shadow-2xl z-10 w-full object-cover aspect-video"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                            About the Program
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            The <span className="font-semibold text-ukieri-blue">UK-India Hands-on Training Program on Catalyst Validation</span> is a collaborative initiative between Heriot-Watt University (UK) and Vellore Institute of Technology (India).
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Funded by the <span className="font-semibold">UKIERI dotORG program</span> (via British Council, UK) and the <span className="font-semibold">Scheme for Promotion of Academic and Research Collaboration (SPARC)</span>, India, this immersive training brings together undergraduate students to explore the journey from laboratory research to prototype demonstration for electrolytic hydrogen generation.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            {[
                                "Electrochemical Reactions",
                                "Electrode Fabrication",
                                "Catalyst Testing",
                                "Solar PV Integration",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-ukieri-red"></div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
