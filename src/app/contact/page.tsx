"use client";
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useHooks';

export default function ContactPage() {
  return (
    <>
      <PageHero />
      <ContactSection />
      <ContactInfoSection />
      <MapSection />
    </>
  );
}

function PageHero() {
  return (
    <section className="bg-dark-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <img src="/images/gas_cylinders.png" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-5">Contact Us</h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Get in touch with our team for product inquiries, project proposals,
            technical consultation, or service requirements.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState({
    name: '', company: '', phone: '', email: '', requirement: '', message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your enquiry. Our team will contact you shortly.');
    setFormData({ name: '', company: '', phone: '', email: '', requirement: '', message: '' });
  };

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`grid lg:grid-cols-5 gap-12 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          {/* Form */}
          <div className="lg:col-span-3">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Send Enquiry</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-dark-navy mt-3 mb-8">
              Request a Quote
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-dark-navy mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-light-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-navy mb-1.5">Company Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-light-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition-colors"
                    placeholder="Your company"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-dark-navy mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-light-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-navy mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-light-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition-colors"
                    placeholder="email@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-navy mb-1.5">Requirement Type</label>
                <select
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-light-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition-colors text-text-light"
                >
                  <option value="">Select requirement type</option>
                  <option value="industrial-gases">Industrial Gases</option>
                  <option value="medical-gases">Medical Gases</option>
                  <option value="cryogenic-storage">Cryogenic Storage Systems</option>
                  <option value="hydrogen">Hydrogen Systems</option>
                  <option value="lpg-lng">LPG / LNG Systems</option>
                  <option value="fire-fighting">Fire Fighting Gases</option>
                  <option value="pipeline">Gas Pipeline Engineering</option>
                  <option value="turnkey">Turnkey Engineering Project</option>
                  <option value="maintenance">Maintenance Service</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-navy mb-1.5">Message</label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-light-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition-colors resize-none"
                  placeholder="Describe your requirements..."
                />
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
              >
                Submit Enquiry <Send size={16} />
              </button>
            </form>
          </div>

          {/* Info Panel */}
          <div className="lg:col-span-2">
            <div className="bg-dark-navy rounded-xl p-8 text-white sticky top-28">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Head Office</h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      201/202, Industrial Estate,<br />
                      Andheri (East), Mumbai – 400093,<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Phone</h4>
                    <p className="text-white/60 text-sm">+91 22 2830 3456</p>
                    <p className="text-white/60 text-sm">+91 98200 12345</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Email</h4>
                    <p className="text-white/60 text-sm">info@daftariindustries.com</p>
                    <p className="text-white/60 text-sm">sales@daftariindustries.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Working Hours</h4>
                    <p className="text-white/60 text-sm">Monday – Saturday</p>
                    <p className="text-white/60 text-sm">9:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="font-medium text-sm mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <a
                    href="tel:+912228303456"
                    className="flex items-center gap-2 text-accent hover:text-white text-sm transition-colors"
                  >
                    <ArrowRight size={14} /> Call Sales Department
                  </a>
                  <a
                    href="mailto:info@daftariindustries.com"
                    className="flex items-center gap-2 text-accent hover:text-white text-sm transition-colors"
                  >
                    <ArrowRight size={14} /> Email General Enquiry
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoSection() {
  const { ref, isInView } = useInView();
  return (
    <section className="py-16 bg-light-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`grid md:grid-cols-3 gap-8 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          {[
            { icon: MapPin, title: 'Head Office', details: ['201/202, Industrial Estate', 'Andheri (East), Mumbai', '400093, Maharashtra'] },
            { icon: Phone, title: 'Regional Offices', details: ['Ahmedabad', 'Chennai', 'Delhi NCR', 'Bangalore'] },
            { icon: Clock, title: 'Emergency Support', details: ['24/7 Emergency Helpline', '+91 98200 12345', 'emergency@daftari.com'] },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-light-border text-center">
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-dark-navy font-semibold mb-3">{item.title}</h3>
              <div className="space-y-1">
                {item.details.map((d, j) => (
                  <p key={j} className="text-text-light text-sm">{d}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="py-0">
      <div className="w-full h-80 bg-light-bg rounded-xl overflow-hidden border border-light-border m-6 max-w-[calc(100%-48px)] mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7635484981437!2d72.8681973153885!3d19.13349508748905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9e4f1c1e8b1%3A0x6e4a3e6e6e6e6e6e!2sAndheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Daftari Industries Location"
        />
      </div>
    </section>
  );
}
