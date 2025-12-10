"use client";

import { motion } from "framer-motion";

const sponsors = [
    { name: "SPARC", logo: "/sparc.jpg" },
    { name: "UKIERI", logo: "/ukieri.png" },
    { name: "British Council", logo: "/british-council.png" },
    { name: "VIT", logo: "/vit.png" },
    { name: "Heriot Watt University", logo: "/hwu.png" },
    { name: "IIT Kharagpur", logo: "/iitkgp.png" },
];

export function Sponsors() {
    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-10">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Sponsored & Supported By</h3>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    {sponsors.map((sponsor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative h-16 md:h-20 w-32 md:w-40 flex items-center justify-center"
                        >
                            {/* Using img tag directly for logo placeholders to avoid Next/Image strict sizing if files are missing/different ratios */}
                            <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className="max-h-full max-w-full object-contain"
                                onError={(e) => {
                                    // Fallback text if image fails
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    target.parentElement!.innerHTML = `<span class="text-xs font-bold text-gray-400 text-center block">${sponsor.name}</span>`;
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
