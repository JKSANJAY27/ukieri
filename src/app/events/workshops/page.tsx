"use client";

import { motion } from "framer-motion";
import { ImageCard } from "@/components/ImageCard";
import { useLightbox } from "@/components/ui/Lightbox";
import { Maximize2 } from "lucide-react";

export default function WorkshopsPage() {
    const { openLightbox } = useLightbox();

    const workshops = [
        {
            src: "/workshop1.png",
            title: "Workshop Session 1",
            content: "Workshop for the UG/PG students from HWU, UK and the students from VIT, Vellore, India"
        },
        {
            src: "/workshop2.png",
            title: "Workshop Session 2",
            content: "Interactive lab sessions focusing on catalyst synthesis and characterization techniques."
        },
        {
            src: "/workshop3.png",
            title: "Hands-on Training",
            content: "Direct engagement with analytical instruments under expert supervision."
        },
        {
            src: "/workshop4.png",
            title: "Group Discussion",
            content: "Collaborative problem-solving sessions between Indian and UK students."
        },
        {
            src: "/workshop5.png",
            title: "Hybrid Workshop",
            content: "Workshop for the UG/PG students from HWU, UK (Online) and the students from VIT, Vellore (Class room/ Offline), India (Date of the Event: 09.01.2025)"
        }
    ];

    const trainingEquipment = [
        { src: "/laser1.jpg", title: "Lased Powder Bed Fusion 3D Printer", content: "Advanced 3D Printing Technology" },
        { src: "/tribo.jpg", title: "Tribo Nano Indenter", content: "Material hardness and properties testing at nano scale" },
        { src: "/xray.jpg", title: "X-Ray Diffractometer", content: "Crystallographic structure analysis" },
        { src: "/nano.jpg", title: "Centre for Nano Technological Research", content: "Advanced nanomaterials research facility" },
        { src: "/biomass1.jpg", title: "Biomass Trigeneration System", content: "Visit to Biomass driven Trigeneration System installed at Athanavur, Yelagiri hills" },
        { src: "/sieverts.jpg", title: "Sieverts Apparatus", content: "Hydrogen storage capacity measurement" },
        { src: "/microct.jpg", title: "Micro CT Scan", content: "Non-destructive internal structure analysis" },
        { src: "/co2.jpg", title: "CO2 Research Centre", content: "CO2 Research and Green Technologies Centre facilities" },
    ];

    return (
        <div className="min-h-screen bg-gray-950 text-white relative">
            {/* Background Mesh */}
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

            <div className="container mx-auto px-6 py-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center mb-24"
                >
                    <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                        TECHNICAL <br /> IMMERSION
                    </h1>
                    <p className="text-gray-400 text-xl font-light max-w-2xl mx-auto">
                        Advanced hands-on training using state-of-the-art research facilities and equipment.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-center">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold mb-6 border-l-4 border-ukieri-blue pl-6">Hybrid Knowledge Exchange</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Bridging the geographical divide, our workshops combine physical presence with digital connectivity, allowing seamless interaction between students in India and experts in the UK.
                        </p>
                        <div className="flex gap-4">
                            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg">
                                <div className="text-2xl font-bold text-white">03+</div>
                                <div className="text-xs text-gray-400 uppercase">Sessions</div>
                            </div>
                            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg">
                                <div className="text-2xl font-bold text-white">100+</div>
                                <div className="text-xs text-gray-400 uppercase">Attendees</div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-4">
                        {workshops.slice(0, 4).map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl border border-white/10 cursor-pointer group"
                                onClick={() => openLightbox(item.src)}
                            >
                                <img src={item.src} alt={item.title} className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity" />
                                {/* Overlay Icon */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Maximize2 className="w-8 h-8 text-white opacity-80" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Equipment Showcase */}
                <div className="space-y-12">
                    <h2 className="text-3xl font-bold text-center mb-16 text-gray-200">
                        <span className="border-b-2 border-ukieri-red pb-2">Research Capabilities</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {trainingEquipment.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="group relative h-80 rounded-xl overflow-hidden bg-gray-900 border border-white/10 cursor-pointer"
                                onClick={() => openLightbox(item.src)}
                            >
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-500 scale-100 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent flex flex-col justify-end p-6">
                                    <h3 className="text-xl font-bold text-white mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                                    <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                        {item.content}
                                    </p>
                                </div>
                                <div className="absolute top-4 right-4 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Maximize2 className="w-4 h-4 text-white" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
