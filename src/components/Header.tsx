import Image from "next/image";
import Link from "next/link";

export function Header() {
    return (
        <header className="bg-white py-4 border-b border-gray-100">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-between items-center gap-6 md:gap-12 overflow-x-auto pb-2 md:pb-0 scrollbar-hide py-2">
                    {/* All Logos in Single Line - Clean Layout */}

                    {/* SPARC */}
                    <div className="relative h-12 w-32 md:w-36 shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                        <Image
                            src="/sparc.jpg"
                            alt="SPARC Logo"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* IIT KGP */}
                    <div className="relative h-16 w-16 md:h-20 md:w-20 shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                        {/* User mentioned iitkgp.jpg, assuming it exists or will exist */}
                        <Image
                            src="/iitkgp.jpg"
                            alt="IIT KGP Logo"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* UKIERI */}
                    <div className="relative h-12 w-40 md:w-48 shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                        <Image
                            src="/ukieribritishcouncil.jpg"
                            alt="UKIERI British Council Logo"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* VIT */}
                    <div className="relative h-12 w-28 md:w-32 shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                        <Image
                            src="/vit.png"
                            alt="VIT Logo"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Heriot Watt */}
                    <div className="relative h-12 w-32 md:w-36 shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                        <Image
                            src="/heritowatt.jpg"
                            alt="Heriot Watt Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
