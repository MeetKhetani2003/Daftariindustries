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
    { year: '1995', title: 'Foundation', desc: 'Established in Mumbai as an industrial gas distribution company' },
    { year: '2000', title: 'Cryogenic Division', desc: 'Launched cryogenic storage tank manufacturing division' },
    { year: '2005', title: 'Engineering Solutions', desc: 'Expanded into turnkey engineering projects and gas pipeline installation' },
    { year: '2010', title: 'Pan India Presence', desc: 'Established distribution network across major industrial hubs' },
    { year: '2015', title: 'Hydrogen Systems', desc: 'Entered the hydrogen storage and distribution segment' },
    { year: '2020', title: 'Green Energy', desc: 'Launched green hydrogen and sustainable energy solutions' },
    { year: '2025', title: 'Market Leader', desc: 'Recognized as one of India&apos;s premier industrial gas and engineering companies' },
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
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">{m.year.slice(2)}</span>
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
