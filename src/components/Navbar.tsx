"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
    name: string;
    href?: string;
    children?: { name: string; href: string }[];
};

const navItems: NavItem[] = [
    {
        name: "About",
        children: [
            { name: "Funding Agencies", href: "/about/funding-agencies" },
            { name: "About the Program", href: "/about/program" },
            { name: "Collaborators", href: "/about/collaborators" },
        ],
    },
    {
        name: "Team",
        children: [
            { name: "Investigators", href: "/team/investigators" },
            { name: "Research Students", href: "/team/students" },
        ],
    },
    {
        name: "Events",
        children: [
            { name: "International Conference", href: "/events/conference" },
            { name: "Workshops", href: "/events/workshops" },
            { name: "Exchange Visits", href: "/events/visits" },
            { name: "Value Added Program", href: "/events/vap" },
        ],
    },
    {
        name: "Outcomes",
        children: [
            { name: "MoU", href: "/outcomes/mou" },
            { name: "Publications/Patents", href: "/outcomes/publications" },
            { name: "Product/Proof of Concept", href: "/outcomes/product" },
            { name: "Monograph", href: "/outcomes/monograph" },
        ],
    },
    { name: "Contact us", href: "/contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
                    : "bg-white py-4 border-b border-gray-100"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter">
                    <span className="text-ukieri-blue">UKIERI</span>
                    <span className="text-ukieri-red">.VIT</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item, index) => (
                        <div
                            key={item.name}
                            className="relative group"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {item.children ? (
                                <button
                                    className={cn(
                                        "text-sm font-medium transition-colors flex items-center gap-1 py-2",
                                        "text-gray-800 hover:text-ukieri-blue"
                                    )}
                                >
                                    {item.name}
                                    <ChevronDown className="w-4 h-4" />
                                </button>
                            ) : (
                                <Link
                                    href={item.href!}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-ukieri-blue py-2",
                                        "text-gray-800"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            )}

                            {/* Dropdown */}
                            <AnimatePresence>
                                {hoveredIndex === index && item.children && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-0 top-full pt-2 w-56"
                                    >
                                        <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    href={child.href}
                                                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-ukieri-blue transition-colors"
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-800"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4 max-h-[80vh] overflow-y-auto">
                            {navItems.map((item, index) => (
                                <div key={item.name} className="flex flex-col">
                                    {item.children ? (
                                        <>
                                            <button
                                                onClick={() =>
                                                    setMobileExpandedIndex(
                                                        mobileExpandedIndex === index ? null : index
                                                    )
                                                }
                                                className="flex items-center justify-between text-lg font-medium text-gray-800 py-2"
                                            >
                                                {item.name}
                                                <ChevronDown
                                                    className={cn(
                                                        "w-5 h-5 transition-transform",
                                                        mobileExpandedIndex === index ? "rotate-180" : ""
                                                    )}
                                                />
                                            </button>
                                            <AnimatePresence>
                                                {mobileExpandedIndex === index && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="bg-gray-50 rounded-lg overflow-hidden"
                                                    >
                                                        <div className="flex flex-col py-2">
                                                            {item.children.map((child) => (
                                                                <Link
                                                                    key={child.name}
                                                                    href={child.href}
                                                                    className="px-4 py-2 text-sm text-gray-600 hover:text-ukieri-blue"
                                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                                >
                                                                    {child.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href!}
                                            className="text-lg font-medium text-gray-800 py-2 hover:text-ukieri-blue"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
