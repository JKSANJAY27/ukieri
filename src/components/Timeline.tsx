"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLightbox } from "@/components/ui/Lightbox";
import { Maximize2 } from "lucide-react";

const events = [
    {
        year: "2024",
        month: "August",
        date: "21-23",
        title: "International Conference (ANEH 2024)",
        description: "Kickoff with the International Conference on Advanced Nanomaterials & Hydrogen Generation. Over 300 students participated in this joint initiative by VIT and Heriot-Watt University.",
        image: "/ic1.jpg",
        tags: ["Conference", "Launch"],
        color: "bg-ukieri-blue"
    },
    {
        year: "2024",
        month: "December",
        date: "11-23",
        title: "UK Delegation Visit to India",
        description: "A landmark visit by Dr. Sudhagar Pitchaimuthu (PI, UK) and HWU students to VIT. Featured SPARC Workshops, high-level meetings with the Chancellor, and cultural exchange.",
        image: "/indiavisit1.jpg",
        tags: ["Exchange", "MOU Signing"],
        color: "bg-ukieri-red"
    },
    {
        year: "2025",
        month: "January",
        date: "09",
        title: "Hybrid Workshop Session",
        description: "Bridging the distance: A specialized hybrid workshop connecting VIT students in classrooms with experts from Heriot-Watt University online.",
        image: "/workshop5.png",
        tags: ["Hybrid", "Training"],
        color: "bg-[#FF9933]"
    },
    {
        year: "2025",
        month: "March",
        date: "15-22",
        title: "Indian Delegation Visit to UK",
        description: "Indian Investigators (Dr. D. Sakthivadivel & Dr. R. Vasudevan) visited Scotland. Strategic meetings at the National Robotarium, Plus Zero Company, and School of Engineering.",
        image: "/ukvisit3.jpg",
        tags: ["Strategy", "Scotland"],
        color: "bg-[#138808]"
    },
    {
        year: "2025",
        month: "June",
        date: "Upcoming",
        title: "Student Exchange Program",
        description: "The next phase: Undergraduate students travelling to Heriot-Watt University, UK for intensive hands-on training and prototype development.",
        image: "/assets/gallery-1.jpg",
        tags: ["Future", "Students"],
        color: "bg-[#012169]"
    }
];

export function Timeline() {
    return (
        <section id="program" className="bg-white py-24 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-gray-900">
                        Program <span className="text-transparent bg-clip-text bg-gradient-to-r from-ukieri-blue to-ukieri-red">journey</span>
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
                        From inception to future collaborations: A timeline of key milestones in the SPARC-UKIERI partnership.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden md:block" />

                    <div className="space-y-24">
                        {events.map((event, index) => (
                            <TimelineEvent key={index} event={event} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function TimelineEvent({ event, index }: { event: any; index: number }) {
    const isEven = index % 2 === 0;
    const { openLightbox } = useLightbox();

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className={cn(
                "flex flex-col md:flex-row items-center gap-8 md:gap-16 relative",
                isEven ? "md:flex-row" : "md:flex-row-reverse"
            )}
        >
            {/* Date Bubble (Center) */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center justify-center w-24 h-24 bg-white rounded-full shadow-xl border-4 border-gray-50 group hover:scale-110 transition-transform duration-300">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{event.month}</span>
                <span className={`text-xl font-black ${event.year === "2025" ? "text-ukieri-red" : "text-ukieri-blue"}`}>{event.year}</span>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 flex justify-center md:block">
                <div className={cn(
                    "relative group max-w-md",
                    isEven ? "md:ml-auto md:text-right" : "md:mr-auto md:text-left"
                )}>
                    <div className={cn(
                        "inline-flex items-center gap-2 mb-3",
                        isEven ? "md:flex-row-reverse" : "md:flex-row"
                    )}>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm ${event.color}`}>
                            {event.tags[0]}
                        </span>
                        <span className="text-sm font-semibold text-gray-400">{event.date}</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-ukieri-blue transition-colors">
                        {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        {event.description}
                    </p>
                </div>
            </div>

            {/* Image Side - Polaroid Style */}
            <div className="w-full md:w-1/2 flex justify-center md:block">
                <div className={cn(
                    "relative max-w-md cursor-pointer group/image",
                    isEven ? "md:mr-auto" : "md:ml-auto"
                )} onClick={() => openLightbox(event.image)}>
                    {/* Rotating Image Container */}
                    <div className={cn(
                        "bg-white p-3 shadow-2xl rounded-sm transform transition-transform duration-500 hover:z-30 hover:scale-105",
                        isEven ? "-rotate-2 hover:rotate-0" : "rotate-2 hover:rotate-0"
                    )}>
                        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white">
                                    <Maximize2 className="w-6 h-6" />
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className={cn(
                        "absolute -z-10 w-full h-full border-2 border-gray-200 rounded-sm top-4",
                        isEven ? "left-4" : "right-4"
                    )} />
                </div>
            </div>
        </motion.div>
    );
}
