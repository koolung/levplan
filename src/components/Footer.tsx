'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import TermsOfServiceModal from './TermsOfServiceModal';
import CookiePolicyModal from './CookiePolicyModal';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isTermsOfServiceOpen, setIsTermsOfServiceOpen] = useState(false);
  const [isCookiePolicyOpen, setIsCookiePolicyOpen] = useState(false);

  return (
    <footer className="bg-[#031931] text-white py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo_white.svg"
              alt="LevPlan"
              width={150}
              height={60}
              className="mb-4 h-auto"
            />
            <p className="text-[#babbb7] text-sm">
              Your trusted partner in financial planning and wealth management.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-4 text-white">Navigation</h4>
            <ul className="space-y-2 text-[#babbb7] text-sm">
              <li><Link href="/" className="hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link href="/who-we-are" className="hover:text-white transition-colors duration-200">Who We Are</Link></li>
              <li><Link href="/our-blog" className="hover:text-white transition-colors duration-200">Blog</Link></li>
              <li><Link href="/mission-statement" className="hover:text-white transition-colors duration-200">Mission Statement</Link></li>
              <li><Link href="/questionnaire" className="hover:text-white transition-colors duration-200">Free Assessment</Link></li>
            </ul>
          </div>

          {/* Features & Benefits */}
          <div>
            <h4 className="font-bold mb-4 text-white">Features</h4>
            <ul className="space-y-2 text-[#babbb7] text-sm">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Retirement Planning</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Investment Strategy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Tax Optimization</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Wealth Management</a></li>
            </ul>
          </div>

          {/* Credibility */}
          <div>
            <h4 className="font-bold mb-4 text-white">Credibility</h4>
            <ul className="space-y-2 text-[#babbb7] text-sm">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Certifications</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Awards</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Testimonials</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Case Studies</a></li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-[#5a5a57] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-[#babbb7] text-sm mb-6">
            <p>&copy; {currentYear} LevPlan. All rights reserved.</p>

            <div className="flex gap-6 mt-4 md:mt-0">
              <button
                onClick={() => setIsPrivacyPolicyOpen(true)}
                className="hover:text-white transition-colors duration-200 cursor-pointer bg-none border-none p-0 text-[#babbb7]"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setIsTermsOfServiceOpen(true)}
                className="hover:text-white transition-colors duration-200 cursor-pointer bg-none border-none p-0 text-[#babbb7]"
              >
                Terms of Service
              </button>
              <button
                onClick={() => setIsCookiePolicyOpen(true)}
                className="hover:text-white transition-colors duration-200 cursor-pointer bg-none border-none p-0 text-[#babbb7]"
              >
                Cookie Policy
              </button>
            </div>
          </div>

          {/* Built By Credit */}
          <div className="text-center text-[#babbb7] text-sm">
            <p>
              Built by{' '}
              <Link href="https://www.bedfordwebservices.com" target="_blank" rel="noopener noreferrer" className="text-[#e7a832] hover:text-white transition-colors duration-200">
                BWS
              </Link>
              {' '}with passion
            </p>
          </div>
        </div>
      </div>

      <PrivacyPolicyModal
        isOpen={isPrivacyPolicyOpen}
        onClose={() => setIsPrivacyPolicyOpen(false)}
      />
      <TermsOfServiceModal
        isOpen={isTermsOfServiceOpen}
        onClose={() => setIsTermsOfServiceOpen(false)}
      />
      <CookiePolicyModal
        isOpen={isCookiePolicyOpen}
        onClose={() => setIsCookiePolicyOpen(false)}
      />
    </footer>
  );
};

export default Footer;
