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

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Who We Are', href: '/who-we-are' },
    { label: 'Blog', href: '/our-blog' },
    { label: 'Free YouTube', href: '/free-youtube-guidance' },
    { label: 'Free Plan', href: '/free-financial-plan' },
  ];

  return (
    <>
      {/* Mobile Header - Dynamic with scroll */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 md:hidden w-full transition-all duration-300 ${
          isScrolled ? 'header-scrolled' : 'header-transparent'
        }`}
      >
        <div className="flex justify-between items-center px-6 py-2">
          {/* Logo Container */}
          <div className="relative h-14 w-120 flex items-center">
            <Image
              src="/images/logo_dark.svg"
              alt="Logo Dark"
              width={120}
              height={120}
              className={`logo-image logo-dark h-36 object-contain`}
              priority
            />
            <Image
              src="/images/logo_white.svg"
              alt="Logo White"
              width={120}
              height={120}
              className={`logo-image logo-white h-36 object-contain`}
              priority
            />
          </div>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="flex flex-col gap-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`hamburger-line block w-6 h-0.5 transition-all duration-300 origin-center ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`hamburger-line block w-6 h-0.5 transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`hamburger-line block w-6 h-0.5 transition-all duration-300 origin-center ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
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
        className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-2xl z-40 md:hidden transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-8 p-8 pt-24">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-lg font-semibold text-[#031931] hover:text-[#e7a832] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/questionnaire" onClick={closeMenu} className="mt-8 w-full">
            <button className="w-full py-3 bg-gradient-to-r from-[#e7a832] to-[#f0b94a] text-white font-semibold rounded-lg hover:shadow-lg transition-shadow duration-200">
              Get Started
            </button>
          </Link>
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav
        className={`hidden md:flex fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'header-scrolled' : 'header-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-6 py-3">
          {/* Logo Container */}
          <div className="relative h-12 w-120 flex items-center">
            <Image
              src="/images/logo_dark.svg"
              alt="Logo Dark"
              width={720}
              height={720}
              className={`logo-image logo-dark h-30 object-contain`}
              priority
            />
            <Image
              src="/images/logo_white.svg"
              alt="Logo White"
              width={720}
              height={720}
              className={`logo-image logo-white h-30 object-contain`}
              priority
            />
          </div>
          <div className="flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-200 ${
                  isScrolled ? 'text-[#031931] hover:text-[#e7a832]' : 'text-white hover:text-[#e7a832]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/questionnaire">
              <button className="px-6 py-2 bg-gradient-to-r from-[#e7a832] to-[#f0b94a] text-white font-semibold rounded-lg hover:shadow-lg transition-shadow duration-200">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
