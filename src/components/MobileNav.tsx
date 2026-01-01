'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Detect scroll for header background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Calendly meeting link
  const CALENDLY_LINK = 'https://calendly.com/levplan';

  return (
    <>
      {/* Mobile Header - Dynamic with scroll */}
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden w-full bg-[#031931]">
        <div className="flex justify-between items-center px-6 py-2">
          {/* Logo Container */}
          <Link href="/">
            <div className="relative h-14 w-48 flex items-center -ml-7">
              <Image
                src="/images/logo_white.svg"
                alt="Logo White"
                width={180}
                height={40}
                className="h-36 object-contain"
                priority
              />
            </div>
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className={`flex flex-col gap-1.5 focus:outline-none transition-opacity duration-300 ${
              isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-white transition-all duration-300 origin-center" />
            <span className="block w-6 h-0.5 bg-white transition-all duration-300" />
            <span className="block w-6 h-0.5 bg-white transition-all duration-300 origin-center" />
          </button>
        </div>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden animate-fade-in"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Navigation Panel */}
      <nav
        className={`fixed top-0 right-0 h-screen w-64 shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ background: 'rgb(7 22 45 / 83%)' }}
      >
        <div className="flex flex-col gap-8 p-8 pt-6">
          {/* Close Button */}
          <button
            onClick={closeMenu}
            className="self-end focus:outline-none hover:opacity-70 transition-opacity duration-200"
            aria-label="Close menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col gap-6">
            {/* Book a Call Button */}
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="w-full">
              <button className="w-full uppercase py-3 bg-transparent border-2 border-[#e7a832] text-[#e7a832] font-semibold hover:shadow-lg transition-shadow duration-200">
                Book a Call
              </button>
            </a>
            {/* Client Login Button */}
            <button className="w-full uppercase py-3 bg-[#e7a832] text-[#031931] font-semibold hover:shadow-lg transition-shadow duration-200">
              Client Login
            </button>
          </div>
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-[#031931]">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-6 py-3">
          {/* Logo Container */}
          <Link href="/">
            <div className="relative h-12 w-120 flex items-center">
              <Image
                src="/images/logo_white.svg"
                alt="Logo White"
                width={720}
                height={720}
                className="h-30 object-contain"
                priority
              />
            </div>
          </Link>
          <div className="flex gap-6 items-center">
            {/* Book a Call Button */}
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <button className="font-medium text-white hover:text-[#e7a832] transition-colors duration-200">
                Book a Call
              </button>
            </a>
            {/* Client Login Button */}
            <button className="px-6 py-2 bg-[#e7a832] text-[#031931] uppercase text-sm font-medium rounded-[2px] hover:shadow-lg transition-shadow duration-200">
              Client Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
