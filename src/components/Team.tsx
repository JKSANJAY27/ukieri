"use client";

import { motion } from "framer-motion";

const mentors = [
    {
        name: "Michael Walsh",
        role: "PhD Researcher",
        institution: "Heriot-Watt University",
    },
    {
        name: "Michal Ciesielka",
        role: "PhD Researcher",
        institution: "Heriot-Watt University",
    },
    {
        name: "Suresh Chandra Baral",
        role: "PhD Researcher",
        institution: "Heriot-Watt University",
    },
];

const faculty = [
    {
        name: "Dr. Sudhagar Pichaimuthu",
        role: "Faculty Coordinator",
        institution: "Heriot-Watt University",
    },
    {
        name: "Dr. Sakthivadivel D",
        role: "Faculty Coordinator",
        institution: "VIT Vellore",
    },
    {
        name: "Mr. Pon Pavithiran C K",
        role: "Faculty Coordinator",
        institution: "VIT Vellore",
    },
    {
        name: "Prof. Vasudevan",
        role: "Faculty Coordinator",
        institution: "VIT Vellore",
    },
];

export function Team() {
    return (
        <section id="team" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        Meet the Team
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A collaboration of brilliant minds from Heriot-Watt University and VIT Vellore.
                    </p>
                </motion.div>

                {/* Faculty */}
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold mb-8 text-center text-ukieri-blue">
                        Faculty & Investigators
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        {faculty.map((person, index) => (
                            <TeamCard key={index} person={person} delay={index * 0.1} />
                        ))}
                    </div>
                </div>

                {/* Mentors */}
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold mb-8 text-center text-ukieri-blue">
                        PhD Mentors
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                        {mentors.map((person, index) => (
                            <TeamCard key={index} person={person} delay={index * 0.1} />
                        ))}
                    </div>
                </div>

                {/* Students */}
                <div className="bg-gray-50 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-semibold mb-4 text-ukieri-orange">
                        VIT Student Team
                    </h3>
                    <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Nine dedicated undergraduate students from the School of Mechanical Engineering, VIT Vellore, participated in this intensive training program. Their enthusiasm, curiosity, and rapid learning were instrumental to the program's success.
                    </p>
                </div>
            </div>
        </section>
    );
}

function TeamCard({ person, delay }: { person: any; delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100 w-full max-w-sm hover:shadow-lg transition-shadow"
        >
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-gray-400">
                {person.name.charAt(0)}
            </div>
            <h4 className="text-lg font-bold text-gray-900 text-center">{person.name}</h4>
            <p className="text-ukieri-blue text-sm font-medium text-center mb-1">{person.role}</p>
            <p className="text-gray-500 text-sm text-center">{person.institution}</p>
        </motion.div>
    );
}
