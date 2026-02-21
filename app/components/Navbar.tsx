"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const navLinks = [
        { name: 'What We Do', path: '/whatWeDo' },
        { name: 'Plug & Play Products', path: '/plugAndProduct' },
        { name: 'About', path: '/about' },
        { name: 'Career', path: '/career' },
        { name: 'Contact Us', path: '/contact' },
    ];
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const pathname = usePathname();
    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all font-serif  duration-300 ${isScrolled
                ? 'bg-black/80 backdrop-blur-lg border-b border-white/10 py-2 sm:py-4'
                : 'bg-transparent py-4 sm:py-6'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center space-x-2 group">
                        <img
                            className="transition-transform duration-500 group-hover:scale-105"
                            src="https://cetpatechnologies.com/wp-content/uploads/2024/10/cetpatechnology-logo.png"
                            alt="CETPA Technologies Logo"
                            width={100}
                            height={20}
                            
                        />
                    </Link>
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {navLinks.map((link) => (
                            <Link key={link.path} href={link.path} className={`text-sm lg:text-base font-medium transition-colors hover:text-blue-400 ${pathname === link.path ? 'text-blue-500' : 'text-gray-300'
                                }`}>
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 lg:px-5 py-2 rounded-full text-sm lg:text-base font-semibold transition-all hover:scale-105"
                        >
                            Get Started
                        </Link>
                    </div>

                    <button className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-blue-500 border-b border-white/5"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 px-3">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block w-full text-center bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
