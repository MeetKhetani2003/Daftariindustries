"use client";
import Link from 'next/link';

import { ArrowRight, Factory, MapPin, Building2, Warehouse, CheckCircle } from 'lucide-react';
import { useInView } from '@/hooks/useHooks';

export default function InfrastructurePage() {
  return (
    <>
      <PageHero />
      <FacilitiesSection />
      <CapacitySection />
      <SafetySection />
      <CTASection />
    </>
  );
}

function PageHero() {
  return (
    <section className="bg-dark-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <img src="/images/hero_industrial_plant.png" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-5">Infrastructure</h1>
          <p className="text-white/60 text-lg leading-relaxed">
            State-of-the-art manufacturing facilities, storage infrastructure, and
            pan-India distribution network ensuring reliable supply.
          </p>
        </div>
      </div>
    </section>
  );
}

function FacilitiesSection() {
  const { ref, isInView } = useInView();
  const facilities = [
    {
      title: 'Mumbai Manufacturing Hub',
      location: 'Andheri (East), Mumbai',
      desc: 'Primary manufacturing facility with cryogenic tank production, cylinder refilling, and engineering workshop. Spans over 25,000 sq. ft. with automated production lines.',
      img: '/images/hero_industrial_plant.png',
    },
    {
      title: 'Ahmedabad Plant',
      location: 'GIDC, Ahmedabad',
      desc: 'Industrial gas production and cylinder refilling facility serving Western India. Equipped with ASME certified production lines and automated filling systems.',
      img: '/images/pipeline_infrastructure.png',
    },
    {
      title: 'Chennai Distribution Center',
      location: 'Peelamedu, Chennai',
      desc: 'Major distribution hub for Southern India with bulk storage facilities and cryogenic liquid storage for rapid delivery.',
      img: '/images/pipeline_infrastructure.png',
    },
    {
      title: 'Delhi NCR Facility',
      location: 'Bawana Industrial Area, Delhi',
      desc: 'North India operations center with manufacturing, storage, and distribution capabilities for the National Capital Region.',
      img: '/images/gas_cylinders.png',
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Facilities</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-navy mt-3 mb-4">
            Manufacturing &amp; Distribution Centers
          </h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Strategically located facilities across India ensuring prompt delivery
            and reliable supply to all major industrial hubs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {facilities.map((f, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden border border-light-border hover:shadow-lg transition-shadow group">
              <div className="h-52 overflow-hidden">
                <img src={f.img} alt={f.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-primary text-sm mb-2">
                  <MapPin size={14} />
                  <span>{f.location}</span>
                </div>
                <h3 className="text-xl font-semibold text-dark-navy mb-3">{f.title}</h3>
                <p className="text-text-light text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapacitySection() {
  const { ref, isInView } = useInView();
  const capacities = [
    { icon: Factory, title: 'Cryogenic Tank Production', value: '200 m³', desc: 'Maximum tank capacity with ASME certified fabrication' },
    { icon: Building2, title: 'Cylinder Refilling', value: '5000+/day', desc: 'Daily cylinder refilling capacity across all gases' },
    { icon: Warehouse, title: 'Storage Capacity', value: '10,000 m³', desc: 'Combined bulk storage capacity for cryogenic liquids' },
    { icon: MapPin, title: 'Service Coverage', value: 'Pan India', desc: 'Distribution network covering all major industrial cities' },
  ];

  return (
    <section className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Capacity</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-navy mt-3 mb-4">
            Production &amp; Storage Capacity
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capacities.map((c, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-light-border text-center">
              <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                <c.icon size={24} className="text-primary" />
              </div>
              <div className="text-2xl font-bold text-dark-navy mb-1">{c.value}</div>
              <h3 className="text-dark-navy font-semibold text-sm mb-2">{c.title}</h3>
              <p className="text-text-light text-xs leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SafetySection() {
  const { ref, isInView } = useInView();
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`grid lg:grid-cols-2 gap-16 items-center ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Safety & Compliance</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-dark-navy mt-3 mb-6">
              Safety-First Infrastructure Design
            </h2>
            <p className="text-text-light leading-relaxed mb-6">
              All our facilities are designed and operated with safety as the primary
              consideration. We maintain strict compliance with PESO, BIS, and international
              standards for industrial gas manufacturing and storage.
            </p>
            <div className="space-y-4">
              {[
                'PESO Licensed Manufacturing Facility',
                'Automated Gas Detection & Fire Suppression Systems',
                'Regular Safety Audits & Drills',
                'ASME/ISO Certified Equipment',
                'Emergency Response Protocol',
                'Environmental Compliance Management',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-primary shrink-0" />
                  <span className="text-text-light text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/hero_industrial_plant.png"
              alt="Safety Infrastructure"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Visit Our Facilities</h2>
        <p className="text-white/70 mb-8">Schedule a site visit to see our manufacturing capabilities firsthand.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 px-8 py-3.5 rounded-lg text-sm font-semibold transition-colors">
          Schedule a Visit <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
