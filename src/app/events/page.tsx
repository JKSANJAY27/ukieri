"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

export default function EventsPage() {
    const events = [
        {
            title: "Project Launch & Kickoff",
            category: "Milestone",
            date: "May 2024",
            location: "VIT, India",
            image: "/images/hero/ukvisit6.jpg", // Placeholder
            description: "Official launch of the UKIERI-SPARC partnership with delegates from UK and India.",
            link: "#"
        },
        {
            title: "International Exchange Visit",
            category: "Exchange",
            date: "June 2024",
            location: "Heriot-Watt University, UK",
            image: "/images/hero/ukvisit13.jpg", // Placeholder
            description: "Indian students visit HWU for electrolyser prototyping and CFD design workshops.",
            link: "/events/visits"
        },
        {
            title: "STEM Outreach Program",
            category: "Outreach",
            date: "August 2024",
            location: "Rural Schools, Tamil Nadu",
            image: "/images/hero/biomass1.jpg", // Placeholder
            description: "Engaging rural students with hydrogen science demonstrators and career talks.",
            link: "#"
        },
        {
            title: "Net-Zero Conference",
            category: "Conference",
            date: "December 2024",
            location: "Hybrid / VIT",
            image: "/images/hero/ukvisit6.jpg", // Placeholder
            description: "International Conference on Hydrogen-Based Fuels & Net-Zero Challenges.",
            link: "/events/conference"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 py-32">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                        News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005eb8] to-[#00A651]">Events</span>
                    </h1>
                    <p className="text-xl text-slate-600">Latest updates, workshops, and milestones from our partnership.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-800 uppercase tracking-wider">
                                    {event.category}
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {event.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4" />
                                        {event.location}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {event.title}
                                </h3>
                                <p className="text-slate-600 mb-6 line-clamp-3">
                                    {event.description}
                                </p>
                                <Link
                                    href={event.link}
                                    className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
                                >
                                    Read More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
