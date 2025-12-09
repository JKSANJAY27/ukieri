import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">
                            <span className="text-ukieri-blue">UKIERI</span>
                            <span className="text-ukieri-red">.VIT</span>
                        </h3>
                        <p className="text-gray-400 text-sm">
                            UK-India Hands-on Training Program on Catalyst Validation: From
                            Laboratory Research to Prototype Demonstration for Electrolytic
                            Hydrogen Generation.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <Link href="#home" className="hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="hover:text-white transition-colors">
                                    About the Program
                                </Link>
                            </li>
                            <li>
                                <Link href="#team" className="hover:text-white transition-colors">
                                    Our Team
                                </Link>
                            </li>
                            <li>
                                <Link href="#gallery" className="hover:text-white transition-colors">
                                    Gallery
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Funded By</h4>
                        <div className="flex flex-col space-y-2 text-sm text-gray-400">
                            <p>UKIERI dotORG (British Council, UK)</p>
                            <p>Scheme for Promotion of Academic and Research Collaboration (SPARC), India</p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8">
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
