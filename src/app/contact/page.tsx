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
                    {/* India Office Card */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group relative bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-[2.5rem] -mr-8 -mt-8 z-0 transition-transform group-hover:scale-150 duration-700" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-4 bg-orange-100 rounded-2xl text-ukieri-red">
                                    <MapPin className="w-8 h-8" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">India Office</h2>
                                    <p className="text-ukieri-red font-medium">Vellore Institute of Technology</p>
                                </div>
                            </div>

                            <div className="space-y-6 pl-4 border-l-2 border-orange-50">
                                <div className="flex items-center gap-4 group/item cursor-pointer">
                                    <Mail className="w-5 h-5 text-gray-400 group-hover/item:text-ukieri-red transition-colors" />
                                    <p className="text-gray-600 group-hover/item:text-gray-900 transition-colors">contact.india@vit.ac.in</p>
                                </div>
                                <div className="flex items-center gap-4 group/item cursor-pointer">
                                    <Phone className="w-5 h-5 text-gray-400 group-hover/item:text-ukieri-red transition-colors" />
                                    <p className="text-gray-600 group-hover/item:text-gray-900 transition-colors">+91 12345 67890</p>
                                </div>
                                <div className="flex items-center gap-4 group/item cursor-pointer">
                                    <Globe className="w-5 h-5 text-gray-400 group-hover/item:text-ukieri-red transition-colors" />
                                    <p className="text-gray-600 group-hover/item:text-gray-900 transition-colors">www.vit.ac.in</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* UK Office Card */}
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
                                <div className="p-4 bg-blue-100 rounded-2xl text-ukieri-blue">
                                    <MapPin className="w-8 h-8" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">UK Office</h2>
                                    <p className="text-ukieri-blue font-medium">Heriot-Watt University</p>
                                </div>
                            </div>

                            <div className="space-y-6 pl-4 border-l-2 border-blue-50">
                                <div className="flex items-center gap-4 group/item cursor-pointer">
                                    <Mail className="w-5 h-5 text-gray-400 group-hover/item:text-ukieri-blue transition-colors" />
                                    <p className="text-gray-600 group-hover/item:text-gray-900 transition-colors">contact.uk@hw.ac.uk</p>
                                </div>
                                <div className="flex items-center gap-4 group/item cursor-pointer">
                                    <Phone className="w-5 h-5 text-gray-400 group-hover/item:text-ukieri-blue transition-colors" />
                                    <p className="text-gray-600 group-hover/item:text-gray-900 transition-colors">+44 1234 567890</p>
                                </div>
                                <div className="flex items-center gap-4 group/item cursor-pointer">
                                    <Globe className="w-5 h-5 text-gray-400 group-hover/item:text-ukieri-blue transition-colors" />
                                    <p className="text-gray-600 group-hover/item:text-gray-900 transition-colors">www.hw.ac.uk</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
