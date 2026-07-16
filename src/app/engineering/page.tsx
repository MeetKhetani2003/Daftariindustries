"use client";
import Link from 'next/link';

import { ArrowRight, CheckCircle, Settings, Truck, Zap, Droplets, Wrench } from 'lucide-react';
import { useInView } from '@/hooks/useHooks';

export default function EngineeringPage() {
  return (
    <>
      <PageHero />
      <EngineeringSolutions />
      <ProcessSection />
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
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-5">Engineering Solutions</h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Turnkey engineering projects from design and fabrication to installation,
            commissioning, and maintenance across India.
          </p>
        </div>
      </div>
    </section>
  );
}

function EngineeringSolutions() {
  const { ref, isInView } = useInView();
  const solutions = [
    {
      title: 'Cryogenic Storage Tanks',
      desc: 'Design and manufacturing of vacuum-insulated cryogenic storage tanks for liquid nitrogen, oxygen, argon, and CO₂. Capacities ranging from 5 m³ to 200 m³ with advanced multilayer insulation for minimum boil-off rates.',
      img: '/images/cryogenic_tank.png',
      features: ['5 m³ to 200 m³ Capacity', 'Vacuum Insulation', 'ASME Certified', 'Automated Level Control'],
      left: true,
    },
    {
      title: 'Cryogenic Tankers',
      desc: 'Road transport cryogenic tankers for safe transportation of cryogenic liquids. Designed with pressure relief systems, vacuum jacketing, and safety valves for secure inter-city delivery.',
      img: '/images/hero_industrial_plant.png',
      features: ['3000L to 5500L Capacity', 'Pressure Relief Systems', 'Road Worthy Design', 'GPS Tracked'],
      left: false,
    },
    {
      title: 'Pressure Reduction Stations',
      desc: 'Custom-designed pressure reduction stations for converting cryogenic liquid to gaseous form at controlled pressures. Includes vaporizers, regulators, and safety systems.',
      img: '/images/pipeline_infrastructure.png',
      features: ['Custom Flow Rates', 'Fail-Safe Design', 'Dual Train Configuration', 'Remote Monitoring'],
      left: true,
    },
    {
      title: 'Ambient Vaporizers',
      desc: 'Air-heated vaporizers for converting cryogenic liquids to gaseous state. No external energy required, making them cost-effective and environmentally friendly.',
      img: '/images/cryogenic_tank.png',
      features: ['Energy Free Operation', 'Aluminum Fin Tubes', 'High Capacity', 'Low Maintenance'],
      left: false,
    },
    {
      title: 'Hydrogen Storage & Systems',
      desc: 'Complete hydrogen infrastructure including storage tanks, compression systems, dispensing stations, and distribution networks for industrial and fuel cell applications.',
      img: '/images/gas_cylinders.png',
      features: ['200-500 Bar Storage', 'Compression Systems', 'Dispensing Stations', 'Safety Systems'],
      left: true,
    },
    {
      title: 'Gas Pipelines & Distribution',
      desc: 'Engineering, fabrication, and installation of gas pipeline networks for industrial plants. Includes design, hydro testing, commissioning, and maintenance services.',
      img: '/images/hero_industrial_plant.png',
      features: ['Design & Engineering', 'Hydro Testing', 'Commissioning', 'Maintenance'],
      left: false,
    },
    {
      title: 'LPG & LNG Storage Systems',
      desc: 'Design and supply of LPG and LNG storage tanks, vaporizers, pressure reduction equipment, and complete gas distribution systems for industrial applications.',
      img: '/images/medical_oxygen.png',
      features: ['Storage Tanks', 'Vaporizer Systems', 'PRV Equipment', 'Distribution Network'],
      left: true,
    },
    {
      title: 'Cylinder Manifolds & Distribution',
      desc: 'Cylinder manifold systems for multiple gas cylinder connection with automatic changeover. Custom gas distribution systems for laboratory and industrial use.',
      img: '/images/gas_cylinders.png',
      features: ['Auto Changeover', 'Custom Configurations', 'Safety Valves', 'Monitoring Systems'],
      left: false,
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Solutions</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-navy mt-3 mb-4">
            Engineering Capabilities
          </h2>
        </div>
        {solutions.map((sol, i) => (
          <div key={i} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''} ${i > 0 ? 'mt-16' : ''}`}>
            <div className={`${!sol.left && i % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="rounded-xl overflow-hidden shadow-md">
                <img src={sol.img} alt={sol.title} className="w-full h-[300px] object-cover" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-dark-navy mb-4">{sol.title}</h3>
              <p className="text-text-light leading-relaxed mb-6">{sol.desc}</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {sol.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary shrink-0" />
                    <span className="text-sm text-dark-navy">{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                Request Proposal <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  const { ref, isInView } = useInView();
  const steps = [
    { icon: Settings, title: 'Design & Engineering', desc: 'Detailed engineering design based on client requirements and site conditions' },
    { icon: Wrench, title: 'Fabrication', desc: 'Manufacturing in our state-of-the-art facility with quality control at each stage' },
    { icon: CheckCircle, title: 'Testing & Inspection', desc: 'Hydro testing, NDT inspection, and third-party certification' },
    { icon: Truck, title: 'Delivery & Installation', desc: 'Safe transportation and professional on-site installation' },
    { icon: Zap, title: 'Commissioning', desc: 'System commissioning, performance testing, and client handover' },
    { icon: Droplets, title: 'Maintenance', desc: 'Preventive maintenance, emergency support, and system upgrades' },
  ];

  return (
    <section className="py-20 md:py-28 bg-light-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-navy mt-3 mb-4">
            From Design to Commissioning
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-light-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{i + 1}</span>
                </div>
                <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center">
                  <step.icon size={20} className="text-primary" />
                </div>
              </div>
              <h3 className="text-dark-navy font-semibold mb-2">{step.title}</h3>
              <p className="text-text-light text-sm leading-relaxed">{step.desc}</p>
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
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Discuss Your Engineering Project</h2>
        <p className="text-white/70 mb-8">Our engineering team is ready to design a custom solution for your specific requirements.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 px-8 py-3.5 rounded-lg text-sm font-semibold transition-colors">
          Get a Proposal <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
