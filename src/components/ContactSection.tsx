'use client';

import { useRef, useState, useEffect } from 'react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 md:py-24 px-4 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#031931] mb-4">
            Get In Touch
          </h2>
          <p className="text-[#5a5a57] text-lg">
            Questions about our services? We're here to help. Reach out and let's start your financial planning journey.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Contact Info Cards */}
          {[
            { icon: '📧', title: 'Email', value: 'hello@levplan.com' },
            { icon: '📱', title: 'Phone', value: '+1 (555) 000-0000' },
            { icon: '📍', title: 'Location', value: 'San Francisco, CA' },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-6 bg-[#f5f5f3] rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-[#031931] mb-2">{item.title}</h3>
              <p className="text-[#5a5a57]">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className={`bg-[#f5f5f3] p-8 md:p-12 rounded-lg transition-all duration-700 ${
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
              className="px-4 py-3 bg-white border border-[#babbb7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e7a832] transition-all duration-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-3 bg-white border border-[#babbb7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e7a832] transition-all duration-300"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white border border-[#babbb7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e7a832] transition-all duration-300 mb-6 resize-none"
          />

          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-[#e7a832] to-[#f0b94a] text-white font-bold rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
