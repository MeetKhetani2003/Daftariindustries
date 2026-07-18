"use client";
import Link from 'next/link';

import { ArrowRight, Wrench, Settings, Gauge, Shield, ClipboardCheck, AlertTriangle } from 'lucide-react';
import { useInView } from '@/hooks/useHooks';

export default function ServicesPage() {
  return (
    <>
      <PageHero />
      <ServicesGrid />
      <ProcessSection />
      <CTASection />
    </>
  );
}

function PageHero() {
  return (
    <section className="bg-dark-navy relative overflow-hidden py-24 md:py-36">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{ backgroundImage: 'url(/images/pipeline_infrastructure.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-navy via-dark-navy/80 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider">Expert Engineering</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Our Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Services</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed">
            Comprehensive solutions from hydro testing and cylinder inspection to
            maintenance, commissioning, and technical consultation.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  const { ref, isInView } = useInView();
  const services = [
    {
      icon: Gauge,
      img: '/images/cryogenic_tank.png',
      title: 'Hydro Testing',
      desc: 'Pressure testing of gas cylinders and vessels at certified test facilities. We perform hydrostatic testing in compliance with PESO and international standards.',
      details: ['PESO Certified', 'Cylinders & Vessels', 'Test Reports', 'Stamping'],
    },
    {
      icon: ClipboardCheck,
      img: '/images/gas_cylinders.png',
      title: 'Cylinder Inspection',
      desc: 'Comprehensive cylinder inspection services including visual examination, wall thickness measurement, valve inspection, and pressure testing.',
      details: ['Visual Exam', 'Thickness Check', 'Valve Replacement', 'Marking'],
    },
    {
      icon: Wrench,
      img: '/images/pipeline_infrastructure.png',
      title: 'Maintenance Services',
      desc: 'Preventive and corrective maintenance for cryogenic tanks, pressure reduction stations, vaporizers, and gas distribution systems.',
      details: ['Annual Contracts', 'Emergency Support', 'Spare Parts', 'Optimization'],
    },
    {
      icon: Settings,
      img: '/images/hero_industrial_plant.png',
      title: 'Commissioning',
      desc: 'Professional commissioning of gas systems, cryogenic storage installations, pipeline networks, and pressure reduction stations.',
      details: ['System Start-Up', 'Performance Testing', 'Safety Verifications', 'Handover'],
    },
    {
      icon: Shield,
      img: '/images/medical_oxygen.png',
      title: 'Safety Compliance',
      desc: 'Safety audits, risk assessments, and compliance verification for gas handling facilities and cryogenic installations.',
      details: ['Safety Audits', 'Risk Assessment', 'Compliance Reports', 'Training'],
    },
    {
      icon: AlertTriangle,
      img: '/images/pipeline_infrastructure.png',
      title: 'Emergency Support',
      desc: '24/7 emergency technical support for gas system failures, safety incidents, and urgent repair requirements.',
      details: ['24/7 Helpline', 'Rapid Response', 'Urgent Repairs', 'Consultation'],
    },
    {
      icon: Settings,
      img: '/images/hero_industrial_plant.png',
      title: 'Drawing Design & Licensing',
      desc: 'Complete engineering drawing, approval and licensing support for industrial gas systems.',
      details: ['Collector NOC', 'PESO Prior Approval', 'Storage of Gases Approval', 'Bottling Plant Licensing', 'Gas Transportation Licensing', 'Engineering Drawing Design', 'Final License Issuance Support'],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-light-bg/50">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-semibold text-dark-navy mt-3 mb-4">
            Technical &amp; Support Services
          </h2>
          <p className="text-text-light max-w-2xl mx-auto text-lg">
            Delivering unparalleled technical expertise to ensure the safety, efficiency, and longevity of your gas infrastructure.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((s, i) => (
            <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-light-border hover:border-primary/30 transition-all duration-300 flex flex-col relative translate-y-0 hover:-translate-y-2">
              <div className="relative aspect-[16/9] overflow-hidden shrink-0">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/90 via-dark-navy/20 to-transparent" />
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                    <s.icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white drop-shadow-md">{s.title}</h3>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <p className="text-text-light text-sm leading-relaxed mb-6">{s.desc}</p>
                <div className="grid grid-cols-2 gap-y-3 gap-x-2 mt-auto">
                  {s.details.map((d, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-dark-navy font-medium bg-light-bg px-3 py-2 rounded-md border border-light-border/50">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                      <span className="truncate">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const { ref, isInView } = useInView();
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`grid lg:grid-cols-2 gap-16 items-center ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src="/images/hero_industrial_plant.png"
              alt="Service Process"
              className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-multiply" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
          </div>
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">How We Work</span>
            <h2 className="text-3xl md:text-5xl font-semibold text-dark-navy mt-3 mb-10 leading-tight">
              Service Engagement Process
            </h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[1.15rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/20 before:via-primary/50 before:to-transparent">
              {[
                { step: '01', title: 'Requirement Assessment', desc: 'Understanding your needs through technical consultation' },
                { step: '02', title: 'Site Evaluation', desc: 'On-site inspection and feasibility study' },
                { step: '03', title: 'Solution Design', desc: 'Customized solution design and proposal' },
                { step: '04', title: 'Execution', desc: 'Implementation with quality assurance' },
                { step: '05', title: 'Handover & Support', desc: 'Testing, documentation, and ongoing support' },
              ].map((item, i) => (
                <div key={i} className="relative flex items-start gap-6">
                  <div className="w-10 h-10 bg-white border-2 border-primary rounded-full flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.2)] z-10">
                    <span className="text-primary text-xs font-bold">{item.step}</span>
                  </div>
                  <div className="pt-1.5">
                    <h4 className="text-dark-navy text-lg font-semibold mb-1">{item.title}</h4>
                    <p className="text-text-light text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-24 bg-dark-navy overflow-hidden">
      <div className="absolute inset-0">
         <img src="/images/pipeline_infrastructure.png" className="w-full h-full object-cover opacity-20" alt="background" />
         <div className="absolute inset-0 bg-gradient-to-t from-dark-navy to-dark-navy/50" />
      </div>
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready for Technical Excellence?</h2>
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">Our specialized service team is on standby to assist with maintenance, complex inspections, and expert technical consultation.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary/90 px-8 py-4 rounded-xl font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1">
            Request Service Now <ArrowRight size={18} />
          </Link>
          <a href="tel:+912228303456" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 text-white hover:bg-white/20 border border-white/20 px-8 py-4 rounded-xl font-semibold transition-all backdrop-blur-sm">
            Call +91 22 2830 3456
          </a>
        </div>
      </div>
    </section>
  );
}
