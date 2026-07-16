"use client";
import Link from 'next/link';

import { ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useHooks';

export default function IndustriesPage() {
  return (
    <>
      <PageHero />
      <IndustriesGrid />
      <CTASection />
    </>
  );
}

function PageHero() {
  return (
    <section className="bg-dark-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <img src="/images/cryogenic_tank.png" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-5">Industries We Serve</h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Delivering customized industrial gas and engineering solutions to diverse
            sectors with industry-specific expertise and compliance.
          </p>
        </div>
      </div>
    </section>
  );
}

function IndustriesGrid() {
  const { ref, isInView } = useInView();
  const industries = [
    {
      name: 'Steel & Metallurgy',
      desc: 'Industrial oxygen, nitrogen, and argon for steel production, welding, cutting, and heat treatment processes. Specialized gas solutions for electric arc furnaces and basic oxygen furnaces.',
      img: '/images/gas_cylinders.png',
      applications: ['Oxygen for BOF', 'Nitrogen Quenching', 'Argon Welding', 'Inerting'],
    },
    {
      name: 'Oil & Gas',
      desc: 'Nitrogen for pipeline purging, purging gases for refineries, and hydrogen for hydrotreating and hydrocracking processes.',
      img: '/images/medical_oxygen.png',
      applications: ['Pipeline Purging', 'Hydrotreating H₂', 'Blanketing', 'Inerting'],
    },
    {
      name: 'Chemical & Petrochemical',
      desc: 'Process gases for chemical manufacturing, including specialty gases, calibration gases, and process-specific gas mixtures.',
      img: '/images/pipeline_infrastructure.png',
      applications: ['Process Gases', 'Calibration', 'Blanketing', 'Reagent Gases'],
    },
    {
      name: 'Glass Manufacturing',
      desc: 'Oxygen-fuel firing systems for glass melting furnaces, reducing fuel consumption and improving product quality.',
      img: '/images/cryogenic_tank.png',
      applications: ['Oxygen-Fuel Firing', 'Nitrogen Annealing', 'Surface Treatment'],
    },
    {
      name: 'Medical & Healthcare',
      desc: 'Medical-grade gases for hospitals, diagnostic centers, and research facilities. Bulk oxygen systems and piped gas distribution.',
      img: '/images/medical_oxygen.png',
      applications: ['Medical Oxygen', 'Piped Gas', 'Nitrous Oxide', 'Calibration Gases'],
    },
    {
      name: 'Food & Beverage',
      desc: 'Food-grade CO₂, nitrogen, and oxygen for packaging, preservation, carbonation, and processing applications.',
      img: '/images/pipeline_infrastructure.png',
      applications: ['MAP Packaging', 'Carbonation', 'Freezing', 'Preservation'],
    },
    {
      name: 'Automobile',
      desc: 'Welding gases, cutting gases, and nitrogen tire inflation systems for automobile manufacturing plants.',
      img: '/images/hero_industrial_plant.png',
      applications: ['MIG/TIG Welding', 'Gas Cutting', 'Tire Inflation', 'Heat Treatment'],
    },
    {
      name: 'Power Generation',
      desc: 'Industrial gases for thermal power plants, including oxygen enrichment, nitrogen purging, and turbine blanketing.',
      img: '/images/cryogenic_tank.png',
      applications: ['Turbine Blanketing', 'Purging', 'Oxygen Enrichment'],
    },
    {
      name: 'Research & Development',
      desc: 'Ultra-high purity gases for research laboratories, analytical instruments, and scientific experiments.',
      img: '/images/gas_cylinders.png',
      applications: ['Analytical Gases', 'Carrier Gases', 'Detector Gases', 'Research Blends'],
    },
    {
      name: 'Electronics & Semiconductor',
      desc: 'Electronic-grade specialty gases for semiconductor manufacturing, PCB production, and electronic component fabrication.',
      img: '/images/medical_oxygen.png',
      applications: ['Semiconductor Gases', 'CVD Gases', 'Etching Gases'],
    },
    {
      name: 'Pharmaceutical',
      desc: 'Pharmacopoeia-compliant medical and industrial gases for pharmaceutical manufacturing and quality control laboratories.',
      img: '/images/medical_oxygen.png',
      applications: ['GMP Grade Gases', 'Piped Oxygen', 'Nitrogen Blanketing', 'Calibration'],
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Sector Expertise</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-navy mt-3 mb-4">
            Industry-Specific Solutions
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden border border-light-border hover:shadow-lg transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img src={ind.img} alt={ind.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-dark-navy mb-2">{ind.name}</h3>
                <p className="text-text-light text-sm leading-relaxed mb-4">{ind.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {ind.applications.map((app, j) => (
                    <span key={j} className="bg-light-bg text-text-light text-xs px-3 py-1 rounded-full">{app}</span>
                  ))}
                </div>
                <Link href="/contact" className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all">
                  Discuss Requirements <ArrowRight size={14} />
                </Link>
              </div>
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
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Industry-Specific Solutions</h2>
        <p className="text-white/70 mb-8">Tell us about your industry requirements and we&apos;ll provide a tailored solution.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 px-8 py-3.5 rounded-lg text-sm font-semibold transition-colors">
          Contact Our Team <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
