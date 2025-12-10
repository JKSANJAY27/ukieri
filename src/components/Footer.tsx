import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
            {/* Artistic Background Text */}
            <div className="absolute top-0 right-0 font-black text-[15rem] leading-none text-white/5 pointer-events-none select-none overflow-hidden truncate opacity-10">
                UKIERI
            </div>

            {/* Bottom Gradient Line */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#012169] via-[#C8102E] via-[#FF9933] to-[#138808]" />

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <div className="w-8 h-8 relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#012169] to-[#C8102E] rounded-full opacity-80" />
                                <div className="absolute inset-0 bg-gradient-to-tl from-[#138808] to-[#FF9933] rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <span>
                                <span className="text-white">UKIERI</span>
                                <span className="text-[#F37021]">.VIT</span>
                            </span>
                        </h3>
                        <p className="text-gray-400 text-sm">
                            UK-India Hands-on Training Program on Catalyst Validation: From
                            Laboratory Research to Prototype Demonstration for Electrolytic
                            Hydrogen Generation.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-[#FF9933]">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <Link href="#home" className="hover:text-[#FF9933] transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="hover:text-[#FF9933] transition-colors">
                                    About the Program
                                </Link>
                            </li>
                            <li>
                                <Link href="#team" className="hover:text-[#FF9933] transition-colors">
                                    Our Team
                                </Link>
                            </li>
                            <li>
                                <Link href="#gallery" className="hover:text-[#FF9933] transition-colors">
                                    Gallery
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-[#C8102E]">Funded By</h4>
                        <div className="flex flex-col space-y-2 text-sm text-gray-400">
                            <p className="border-l-2 border-[#012169] pl-2">UKIERI dotORG (British Council, UK)</p>
                            <p className="border-l-2 border-[#138808] pl-2">Scheme for Promotion of Academic and Research Collaboration (SPARC), India</p>
                        </div>
                    </div>
                </div>

                {/* Gradient Separator instead of gray border */}
                <div className="mt-12 pt-8 relative">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

                    <div className="mb-8 text-xs text-gray-500 text-justify max-w-4xl mx-auto leading-relaxed">
                        <p className="mb-4">
                            This work was financially supported by the Scheme for Promotion of Academic and Research Collaboration (SPARC) and UK-India Education and Research Initiative (UKIERI) for providing the support through (File No.: SPARC-UKIERI/2024-2025/P3265) under “Building Research Capacities for Undergraduate and Masters Students”.
                        </p>
                        <p>
                            Also, the authors would like to express their gratitude to Vellore Institute of Technology, Vellore, India and Heriot-Watt University, Scotland, UK for providing the necessary approvals and facilities to carry out this work.
                        </p>
                    </div>
                    <div className="text-center text-sm text-gray-500">
                        <p>&copy; {new Date().getFullYear()} UKIERI-VIT Exchange Program. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
