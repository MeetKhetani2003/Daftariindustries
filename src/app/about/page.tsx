"use client";
import Link from 'next/link';

import { Shield, Globe, Target, Award, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { useInView } from '@/hooks/useHooks';

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Daftari Industries" subtitle="Leading industrial gas and cryogenic engineering solutions provider serving industries across India since 1995." />
      <IntroductionSection />
      <ValuesSection />
      <TimelineSection />
      <ClientsSection />
      <AchievementsSection />
      <LeadershipSection />
      <CertificationsSection />
      <CTASection />
    </>
  );
}

function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="bg-dark-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/hero_industrial_plant.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-5">{title}</h1>
          <p className="text-white/60 text-lg leading-relaxed">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}

function IntroductionSection() {
  const { ref, isInView } = useInView();
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`grid lg:grid-cols-2 gap-16 items-center ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-dark-navy mt-3 mb-6 leading-tight">
              Two Decades of Engineering Excellence in Industrial Gas Solutions
            </h2>
            <p className="text-text-light leading-relaxed mb-4">
              Founded in 1995 in Mumbai, Daftari Industries began as a small enterprise
              specializing in industrial gas distribution. Over the past three decades, we
              have grown into one of India&apos;s most comprehensive industrial gas and cryogenic
              engineering companies.
            </p>
            <p className="text-text-light leading-relaxed mb-4">
              Today, we operate state-of-the-art manufacturing facilities, maintain a pan-India
              distribution network, and deliver turnkey engineering solutions for industrial gases,
              cryogenic storage, hydrogen systems, LPG/LNG infrastructure, and gas pipeline
              engineering.
            </p>
            <p className="text-text-light leading-relaxed mb-6">
              Our commitment to quality, safety, and customer satisfaction has earned us the
              trust of leading industrial clients including steel plants, pharmaceutical
              companies, research institutions, and oil & gas facilities.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['ISO 9001:2015 Certified', 'PESO Licensed', 'ASME Certified Equipment', '25+ Years Experience'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary shrink-0" />
                  <span className="text-dark-navy text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/gas_cylinders.png"
                alt="Daftari Industries Facility"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const { ref, isInView } = useInView();
  const values = [
    { icon: Shield, title: 'Safety First', desc: 'Uncompromising safety standards in every product and service we deliver' },
    { icon: Target, title: 'Engineering Precision', desc: 'Technical excellence and precision in design, fabrication, and installation' },
    { icon: Globe, title: 'Customer Commitment', desc: 'Dedicated to understanding and exceeding client expectations' },
    { icon: Award, title: 'Quality Standards', desc: 'ISO certified processes with rigorous quality control at every stage' },
    { icon: Users, title: 'Innovation', desc: 'Continuous improvement through technology adoption and skilled engineering' },
  ];

  return (
    <section className="py-20 md:py-28 bg-light-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Core Values</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-navy mt-3 mb-4">
            Principles That Guide Us
          </h2>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {values.map((v, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-light-border text-center">
              <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                <v.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-dark-navy font-semibold mb-2">{v.title}</h3>
              <p className="text-text-light text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  const { ref, isInView } = useInView();
  const milestones = [
    { year: '2003–2004', title: 'International Projects', desc: 'Sudan & Bangladesh' },
    { year: '2021', title: '850 Ton LPG Supply in One Month', desc: '' },
    { year: '2021', title: '6000 Ton LPG Supply in Seven Months', desc: '' },
    { year: '2025', title: 'Gopal Snacks Multi-Plant Installation', desc: '' },
    { year: '2026', title: 'Euro Global Cylinders LLP Emergency LPG Project', desc: '' },
    { year: '2026', title: 'Everest Kanto Cylinders Emergency LPG Project', desc: '' },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Journey</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-navy mt-3 mb-4">
            Milestones of Growth
          </h2>
        </div>
        <div className="space-y-0">
          {milestones.map((m, i) => (
            <div key={i} className="flex gap-6 pb-8 last:pb-0 relative">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shrink-0 shadow-lg">
                  <span className="text-white text-xs font-bold text-center px-1">{m.year}</span>
                </div>
                {i < milestones.length - 1 && (
                  <div className="w-0.5 flex-1 bg-light-border mt-2" />
                )}
              </div>
              <div className="pt-1">
                <h3 className="text-dark-navy font-semibold mb-1">{m.title}</h3>
                <p className="text-text-light text-sm leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useCountUp as useCountUpLocal } from '@/hooks/useHooks';

function AchievementsSection() {
  const { ref, isInView } = useInView();
  const achieve1 = useCountUpLocal(850, isInView);
  const achieve2 = useCountUpLocal(6000, isInView);

  return (
    <section className="py-20 md:py-28 bg-dark-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="/images/hero_industrial_plant.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">Company Achievements</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mt-3 mb-4">
            Our Key Milestones
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-4">
              {achieve1} Ton
            </div>
            <p className="text-white/80 leading-relaxed font-medium">
              850 Ton LPG Cylinders supplied in one month during 2021.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-4">
              {achieve2} Ton
            </div>
            <p className="text-white/80 leading-relaxed font-medium">
              6,000 Ton LPG booked and supplied within only seven months.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center flex flex-col justify-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe size={32} className="text-accent" />
            </div>
            <p className="text-white/80 leading-relaxed font-medium text-lg">
              Worked with various kinds of industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientsSection() {
  const { ref, isInView } = useInView();
  
  const clientCategories = [
    {
      category: 'CERAMIC INDUSTRY',
      clients: [
        'Simpolo', 'Varmora', 'Sunheart', 'Euro', 'Asian Granito',
        'Oracle Granito (Himmatnagar)', 'Ikon Granito', 'Metro', 'Face',
        'Soriso', 'Exotica', 'Montello Ceramic', 'Monarch Ceramic', 'Real Group',
        'Kajaria Group', 'Vrundavan Group', 'Livanto Ceramic Pvt. Ltd.',
        'Axwell Granito', 'Ambani Granito', 'Motto Tiles', 'Mega Ceramic',
        'Millenium', 'Accord', 'Lioli', 'Leesun Tiles Co.', 'Antique Granito',
        'Casa Tiles', 'Verona Tiles', 'Sekol Tiles LLP', 'Swidan Ceramic',
        'Shubh Granito', 'Savio Ceramica LLP'
      ]
    },
    {
      category: 'CEMENT INDUSTRY',
      clients: [
        'Hi Bond Cement', 'Tappe Cement', 'UltraTech Cement', 'A One Cement',
        'Kishan Cement', 'Major Cement', 'Decora Cement', 'Ajanta Cement',
        'Gaj Sahara Cement', 'Kailash Cement', 'Pyramid Cement', 'Midland Cement',
        'Akshar Cement', 'Prince Cement', 'Digvijay Cement', 'Girnaar Cement',
        'Sumo Cement', 'Shan Cement'
      ]
    },
    {
      category: 'GINNING INDUSTRY',
      clients: [
        'MEP Cotton (India\'s Largest)', 'Jaydeep Cotton (Pan Group)',
        'Rajvuvanshi Cotton', 'Ronak Cotton (Surendranagar)',
        'Shree Gita Ginning & Oil Industries (Morbi)', 'Narendra Cotton'
      ]
    },
    {
      category: 'CLOCK INDUSTRY',
      clients: [
        'Ajanta', 'Orpat', 'Sonam Quartz', 'Mehta Clock'
      ]
    },
    {
      category: 'CYLINDER MANUFACTURERS',
      clients: [
        'Everest Kanto Cylinders Limited (KA SEZ Gandhidham)',
        'Everest Kanto Cylinders Limited (Ratadiya Unit)',
        'Euro Global Cylinders LLP'
      ]
    },
    {
      category: 'FOOD INDUSTRY',
      clients: [
        'Balaji Wafers (Indore Plant)', 'Gopal Snacks Ltd.', 'Atop', 'Ancora Foods LLP'
      ]
    },
    {
      category: 'BEARING & METAL PRODUCTS',
      clients: [
        'Orbit Bearing Pvt. Ltd.', 'Roles Rings Ltd.'
      ]
    },
    {
      category: 'STONE CRUSHER',
      clients: [
        'Navrachna Stone', 'Gayatri Stone'
      ]
    },
    {
      category: 'FOOD INDUSTRY & HOTEL CONVECTION',
      clients: [
        'The Imperial Palace Rajkot', 'Emerald Club Rajkot', 'Thakkar Lodge',
        'KBZ Bakery', 'Mahesh Bakery', 'Kamal Bakers'
      ]
    },
    {
      category: 'HOSPITALS',
      clients: [
        'Sadbhavna Hospital', 'Bavarva Hospital, Morbi', 'Kagathara Hospital'
      ]
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-light-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Valuable Clients</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-navy mt-3 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-text-light max-w-2xl mx-auto leading-relaxed">
            We are proud to be the preferred engineering and gas partner for top companies across diverse sectors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientCategories.map((cat, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-light-border shadow-sm">
              <div className="flex items-center gap-3 mb-5 border-b border-light-border pb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle size={20} className="text-primary" />
                </div>
                <h3 className="text-dark-navy font-bold text-sm tracking-wide uppercase">{cat.category}</h3>
              </div>
              <ul className="space-y-2.5">
                {cat.clients.map((client, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-text-light leading-snug">{client}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipSection() {
  const { ref, isInView } = useInView();
  const leaders = [
    { name: 'Mr. R. S. Daftari', role: 'Chairman & Managing Director', desc: 'With over 30 years in the industrial gas industry, Mr. Daftari leads the company with a vision for innovation and growth.' },
    { name: 'Mr. A. S. Daftari', role: 'Director – Operations', desc: 'Oversees manufacturing, quality control, and supply chain operations across all facilities.' },
    { name: 'Eng. Priya Iyer', role: 'Chief Engineer', desc: 'Leads the engineering division with expertise in cryogenic systems and hydrogen infrastructure.' },
  ];

  return (
    <section className="py-20 md:py-28 bg-light-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Leadership</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-navy mt-3 mb-4">
            Our Leadership Team
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((l, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden border border-light-border">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-dark-navy/20 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center">
                  <Users size={40} className="text-white/80" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-dark-navy font-semibold text-lg mb-1">{l.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{l.role}</p>
                <p className="text-text-light text-sm leading-relaxed">{l.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificationsSection() {
  const { ref, isInView } = useInView();
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Certifications</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-navy mt-3 mb-4">
            Standards &amp; Compliance
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: 'ISO 9001:2015', desc: 'Quality Management' },
            { title: 'ISO 14001:2015', desc: 'Environmental Management' },
            { title: 'PESO License', desc: 'Regulatory Compliance' },
            { title: 'ASME Certified', desc: 'Pressure Vessel Standards' },
          ].map((c, i) => (
            <div key={i} className="bg-light-bg rounded-xl p-6 text-center border border-light-border">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Award size={24} className="text-primary" />
              </div>
              <h3 className="text-dark-navy font-semibold mb-1">{c.title}</h3>
              <p className="text-text-light text-xs">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Partner with Daftari Industries
        </h2>
        <p className="text-white/70 mb-8">
          Let us discuss how we can support your industrial gas and engineering requirements.
        </p>
        <Link href="/contact"
          className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 px-8 py-3.5 rounded-lg text-sm font-semibold transition-colors"
        >
          Get in Touch <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
