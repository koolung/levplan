'use client';

import { useRef, useState, useEffect } from 'react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 md:py-24 px-4 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-[#031931] mb-4">
            Let's Get In Touch
          </h2>
          <p className="text-[#5a5a57] text-lg">
            Questions about our services? We're here to help. Reach out and let's start your financial planning journey.
          </p>
        </div>

        <hr className="w-24 border-t-4 border-[#e7a832] mx-auto mb-6" />


        <div
          className={`grid grid-cols-1 md:grid-cols-1 gap-8 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Contact Info Cards */}
          {[
            { icon: '📧', title: 'Reach out Via Email', value: 'contact@levplan.com' }
          ].map((item, index) => (
            <div
              key={index}
              className="text-center md:text-center p-6 bg-[transparent] hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="font-bold text-[#e7a832] mb-2">{item.title}</h3>
              <a href={`mailto:${item.value}`} className="text-[#babbb7]">{item.value}</a>
            </div>
          ))}
        </div>

                <hr className="w-24 border-t-4 border-[#e7a832] mx-auto mb-6" />


        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className={`bg-[transparent] p-8 md:p-12 rounded-lg transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 py-3 bg-transparent border-b border-[#515151] text-[#515151] placeholder-[#8b8c89] focus:underline-[#515151] transition-all duration-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-3 bg-transparent border-b border-[#515151]  placeholder-[#8b8c89] focus:outline-none focus:ring-2 focus:ring-[#e7a832] transition-all duration-300"
            />
            <input
              type="phone"
              name="phone"
              placeholder="Your Phone (optional)"
              value={formData.phone}
              onChange={handleChange}
              className="px-4 py-3 bg-transparent border-b border-[#515151]  placeholder-[#8b8c89] focus:outline-none focus:ring-2 focus:ring-[#e7a832] transition-all duration-300"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-transparent border border-[#515151]  placeholder-[#8b8c89] focus:outline-none focus:ring-2 focus:ring-[#e7a832] transition-all duration-300 mb-6 resize-none"
          />

          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-[#002349] text-white uppercase font-light hover:shadow-lg transition-shadow duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
