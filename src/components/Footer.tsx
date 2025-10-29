import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#031931] text-white py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Image
              src="/logo_white.png"
              alt="LevPlan"
              width={150}
              height={60}
              className="mb-4"
            />
            <p className="text-[#babbb7]">
              Building beautiful and functional web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-[#babbb7]">
              <li><a href="#home" className="hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-200">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors duration-200">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-[#babbb7]">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Web Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Consulting</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Support</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-[#babbb7] hover:text-[#e7a832] transition-colors duration-200 font-medium"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#5a5a57] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-[#babbb7] text-sm">
            <p>&copy; {currentYear} LevPlan. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
