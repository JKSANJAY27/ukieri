"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Globe } from "lucide-react";

export default function Contact() {
    return (
        <div className="min-h-screen bg-white relative overflow-hidden">
            {/* Background Map Placeholder Pattern */}
            <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-cover bg-center opacity-5 pointer-events-none" />

            <div className="container mx-auto px-6 py-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <span className="inline-block py-1 px-3 bg-gray-100 rounded-full text-xs font-bold text-gray-500 mb-4 tracking-widest uppercase">Get in Touch</span>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-900">
                        Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-ukieri-blue to-ukieri-red">Connect</span>
                    </h1>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* India Office (Dr. Sakthivadivel D) */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group relative bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-[2.5rem] -mr-8 -mt-8 z-0 transition-transform group-hover:scale-150 duration-700" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-4 bg-green-100 rounded-2xl text-green-600">
                                    <MapPin className="w-8 h-8" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">India PI</h2>
                                    <p className="text-green-600 font-medium">Dr. Sakthivadivel D</p>
                                </div>
                            </div>

                            <div className="space-y-6 pl-4 border-l-2 border-green-50">
                                <div className="flex items-center gap-4 group/item cursor-pointer">
                                    <Mail className="w-5 h-5 text-gray-400 group-hover/item:text-green-600 transition-colors" />
                                    <p className="text-gray-600 group-hover/item:text-gray-900 transition-colors">sakthivadivel.d@vit.ac.in</p>
                                </div>
                                <div className="flex items-center gap-4 group/item cursor-pointer">
                                    <Globe className="w-5 h-5 text-gray-400 group-hover/item:text-green-600 transition-colors" />
                                    <p className="text-gray-600 group-hover/item:text-gray-900 transition-colors">VIT, Vellore</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* UK Office (Dr. Sudhagar Pitchaimuthu) */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="group relative bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[2.5rem] -mr-8 -mt-8 z-0 transition-transform group-hover:scale-150 duration-700" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-4 bg-blue-100 rounded-2xl text-blue-600">
                                    <MapPin className="w-8 h-8" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">UK PI</h2>
                                    <p className="text-blue-600 font-medium">Dr. Sudhagar Pitchaimuthu</p>
                                </div>
                            </div>

                            <div className="space-y-6 pl-4 border-l-2 border-blue-50">
                                <div className="flex items-center gap-4 group/item cursor-pointer">
                                    <Mail className="w-5 h-5 text-gray-400 group-hover/item:text-blue-600 transition-colors" />
                                    <p className="text-gray-600 group-hover/item:text-gray-900 transition-colors">S.Pitchaimuthu@hw.ac.uk</p>
                                </div>
                                <div className="flex items-center gap-4 group/item cursor-pointer">
                                    <Globe className="w-5 h-5 text-gray-400 group-hover/item:text-blue-600 transition-colors" />
                                    <p className="text-gray-600 group-hover/item:text-gray-900 transition-colors">Heriot-Watt University</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Mailing List & Social Media */}
                <div className="mt-24 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Stay Connected</h3>
                    <div className="bg-slate-50 p-8 rounded-3xl max-w-2xl mx-auto shadow-sm">
                        <form className="flex flex-col md:flex-row gap-4">
                            <input type="email" placeholder="Your Email Address" className="flex-1 px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500" />
                            <button className="bg-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-blue-700 transition-colors">Join Mailing List</button>
                        </form>
                        <div className="flex justify-center gap-6 mt-8">
                            {/* Social Buttons Placeholder */}
                            <button className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                                <Globe className="w-5 h-5" />
                            </button>
                            <button className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                                <Mail className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
