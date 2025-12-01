"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const days = [
    {
        day: "Day 1",
        title: "Induction & Lab Training",
        description:
            "Students participated in lab induction training at Research Centre for Carbon Solutions (RCCS). PhD researchers demonstrated catalyst coating techniques and guided students through bandgap energy analysis. Students prepared metal oxide-based catalysts and analysed their properties.",
        image: "/assets/day1-placeholder.jpg",
    },
    {
        day: "Day 2",
        title: "Fundamentals & Robotics",
        description:
            "Lecture on catalyst role in hydrogen generation. Hands-on experiments constructing galvanic cells. Visit to The National Robotarium to explore robotics and AI research, interacting with cutting-edge innovations.",
        image: "/assets/day2-placeholder.jpg",
    },
    {
        day: "Day 3",
        title: "Electrochemical Reduction",
        description:
            "Focus on electrochemical reduction reactions. Cyclic voltammetry experiments in the morning. Building three-electrode electrochemical cells and testing water-splitting performance in the afternoon.",
        image: "/assets/day3-placeholder.jpg",
    },
    {
        day: "Day 4",
        title: "Scaling Up & Data Analysis",
        description:
            "Lecture on scaling up electrolyser technology. Exploration of lab-scale flow-type electrolysis systems. Group session on data interpretation, analyzing CV, LSV, and Tafel plots.",
        image: "/assets/day4-placeholder.jpg",
    },
    {
        day: "Day 5",
        title: "Project Presentations",
        description:
            "Group project presentations covering experimental findings, startup concepts, and business roadmaps. Lecture on additive manufacturing and biomimetic structures by Dr. Faezeh Shalchy.",
        image: "/assets/day5-placeholder.jpg",
    },
    {
        day: "Day 8",
        title: "Final Day & Farewell",
        description:
            "Inspiring session by Net Zero Society. Introduction to Green Industrial Futures CDT. Farewell ceremony with awards for Group Project winners. A transformative journey connecting passionate young minds.",
        image: "/assets/day8-placeholder.jpg",
    },
];

export function Timeline() {
    return (
        <section id="program" className="bg-gray-50 py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900">
                    Program Highlights
                </h2>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2 hidden md:block" />

                    {days.map((day, index) => (
                        <TimelineItem key={index} data={day} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TimelineItem({ data, index }: { data: any; index: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"],
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

    const isEven = index % 2 === 0;

    return (
        <motion.div
            ref={ref}
            style={{ opacity, y }}
            className={cn(
                "flex flex-col md:flex-row items-center justify-between mb-24 last:mb-0 relative",
                isEven ? "md:flex-row" : "md:flex-row-reverse"
            )}
        >
            {/* Content */}
            <div className="w-full md:w-5/12 mb-8 md:mb-0 px-4">
                <div className={cn("text-left", isEven ? "md:text-right" : "md:text-left")}>
                    <span className="inline-block px-3 py-1 bg-ukieri-blue/10 text-ukieri-blue text-sm font-semibold rounded-full mb-3">
                        {data.day}
                    </span>
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">{data.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{data.description}</p>
                </div>
            </div>

            {/* Center Dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-ukieri-red rounded-full border-4 border-white shadow-md transform md:-translate-x-1/2 z-10 hidden md:block" />

            {/* Image */}
            <div className="w-full md:w-5/12 px-4">
                <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={data.image}
                        alt={data.title}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>
        </motion.div>
    );
}
