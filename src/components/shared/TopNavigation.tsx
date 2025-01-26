'use client';
import Link from 'next/link';
import { useState } from 'react';
import SearchBox from '../SearchBox';
import MobileSearchBox from '../MobileSearchBox';

export default function TopNavigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className=" bg-white/5 backdrop-blur-lg fixed z-50 w-full">
            {/* Navigation */}
            <nav className="relative z-10 flex items-center justify-between px-6 py-4 md:px-12">
                <h1 className="text-2xl font-bold text-white md:text-3xl">SPORTGYM</h1>
                <div className="flex-1 max-w-xl md:block">
                    <SearchBox />
                </div>

                <div className="flex items-center gap-4">
                    {/* Desktop Navigation Links */}
                    <div className="hidden space-x-6 text-white md:flex">
                        <Link href="/" className="hover:text-primary">Home</Link>
                        <Link href="/equipment" className="hover:text-primary">Equipment</Link>
                        <Link href="/about" className="hover:text-primary">About Us</Link>
                        <Link href="/contact" className="hover:text-primary">Contact</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="text-white md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm md:hidden">
                        <div className="flex flex-col items-center p-4 space-y-4">
                            <MobileSearchBox />
                            <Link href="/" className="text-white hover:text-primary-400" onClick={() => setIsMenuOpen(false)}>Home</Link>
                            <Link href="/equipment" className="text-white hover:text-primary-400" onClick={() => setIsMenuOpen(false)}>Equipment</Link>
                            <Link href="/about" className="text-white hover:text-primary-400" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                            <Link href="/contact" className="text-white hover:text-primary-400" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}