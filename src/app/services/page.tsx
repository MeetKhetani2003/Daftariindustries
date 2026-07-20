"use client";
import Link from 'next/link';

import { ArrowRight, Settings } from 'lucide-react';
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

  const allServices = [
    {
      title: 'Drawing Design & Licensing',
      desc: 'Complete engineering drawing, approval and licensing support for industrial gas systems. We provide comprehensive licensing and approval services, ensuring that your industrial gas installations meet all regulatory requirements seamlessly.',
      img: '/images/licence.avif',
      details: [
        'Collector NOC',
        'PESO Prior Approval',
        'Storage of Gases ',
        'Bottling Plant Licensing',
        'Gas Transportation Tanker',
        'Final License Issuance Support'
      ]
    },
    {
      title: 'Propane /LPG Storage Installation',
      desc: 'We have a team of highly skilled engineers and technicians who can design and build state-of-the-art natural gas plants that comply with international standards and local regulations.',
      img: '/images/cryogenic_tank.png',
      details: [
        'Propane and LPG Bulk storage installation. (Mounded/Open)',
        // 'Design and Peso Approval.',
        // 'Auto – LPG Installations',
        'Installation audit, Safety Training and AMC for the All Kind of Bulk and Manifold installation.',
        // 'LOT, VOT, Jumbo, Sumo, Maxima and Hippo Cylinder Manifold Installation.',
        'Gas Pipeline solutions (LPG/PROPANE/NG/LNG)'
      ]
    },
    {
      title: 'LPG Manifold Installation',
      subtitle: '[VOT, LOT, 425 kg, 450 kg, Cylinder Manifold Installation]',
      desc: 'The Ideal and Bespoke Installations of Cylinder Manifolds. We provide a variety of models to meet various industrial needs, including factory-made solutions such as VOT (Vapour off-Take), LOT (Liquid Off Take), 425 & 450 kg Manifold Installation, on-site system installation, and other associated services. Non-return valves, a PRV (Pressure Relief Valves) station, gas filters, a Slam Shut Off valve, a pressure gauge, connecting hoses, a Pop-Up Action valve, isolation valves, all safety fittings and our most cutting-edge and effective LPG Vaporiser are all part of our LOT systems. our LOT systems are small, safe, and incredibly economical.',
      img: '/images/gas_cylinders.png',
      details: [
        'Range Starting from 30 Kg /Hr to 1000 Kg/Hr.',
        'TOP- Rated Safety component.',
        'Stand by system provided for uninterrupted operation.',
        'Very convenient to handle.',
        'Our specialty is site selection and layout preparation, which complies with the legal requirements.',
        '24-Hour Emergency Services: We have a 24-hour emergency phone number that is available seven days a week to handle any emergencies or LPG leaks.'
      ]
    },
    {
      title: 'Logistic',
      desc: 'We are a leading transporter of LPG, Propane, and LNG, ensuring safe and efficient delivery through our GPS-tracked fleet and 24/7 support staff.',
      img: '/images/hero_industrial_plant.png',
      details: [
        'Leading Transporter for supply LPG/PROPANE/LNG.',
        'Providing efficient Supply through vehicle tracking system (GPS) and Online 24x7 Support Staff.',
        'Following High Safety Standred with Zero Road Accident Policy.',
        'More than 300 Fleet Strength for LPG /Propane/LNG to Supply on Time.'
      ]
    },
    {
      title: 'Conversion Assistance',
      desc: 'For industrial and commercial clients wishing to switch from solid or liquid fuels to LPG or Propane for heating applications, we specialize in fuel conversion solutions. Understanding fuel requirements, help for the choosing best burner Vendor, arranging storage optimally, building the piping system, safety compliance are some of our solutions. Our Experts Ensure a Smooth, Safe transition for uninterrupted Gas Usage.',
      img: '/images/pipeline_infrastructure.png',
      details: [
        'Customized Solution: One -Stop Conversion System Solution.',
        'Solutions for heating applications that are specially designed to satisfy the demands of commercial and industrial customers.',
        'Thorough examination of current heating applications to identify the most effective fuel conversion strategy.',
        'Services for design, installation, and upkeep to guarantee a smooth switch to LPG or Propane. Adherence to all environmental and regulatory requirements and safe fuel conversion.',
        'Timely product and service delivery to reduce downtime and guarantee heating applications operate at their best.',
        'Customer service is available around-the-clock to handle any problems or queries regarding fuel conversion solutions.'
      ]
    },
    {
      title: 'Cryogenic Storage Installation',
      subtitle: '(LIN, LOX, LAR Etc.)',
      desc: 'We specialize in the installation of cryogenic storage systems for gases like LIN (Liquid Nitrogen), LOX (Liquid Oxygen), and LAR (Liquid Argon), ensuring safe and efficient storage for industrial applications.',
      img: '/images/medical_oxygen.png',
      details: [
        'LNG Storage and regasification facility.',
        'Cryogenic storage installation (LIN, LOX, LAR Etc.)',
        'Auto LNG & LCNG dispensing stations.'
      ]
    },
    {
      title: 'Green Hydrogen',
      desc: 'We provide innovative green hydrogen solutions, harnessing renewable energy sources for sustainable production. Our services support the transition to clean energy, helping industries reduce carbon footprints and meet environmental goals.',
      img: '/images/pipeline_infrastructure.png',
      details: [
        'Optimization of Storage Capacity with the Correct Analysis of Layout and Plot Plan.',
        'Depth knowledge about technical safety and risk Management.',
        'End to End Expertise for cater all type of Application.',
        'Having Both equipment and technology to sustainably and safely transport both gaseous and Liquid hydrogen upto the uses point.'
      ]
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-light-bg/50">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-semibold text-dark-navy mt-3 mb-4">
            Our Core Services
          </h2>
          <p className="text-text-light max-w-2xl mx-auto text-lg">
            Delivering unparalleled technical expertise to ensure the safety, efficiency, and longevity of your gas infrastructure.
          </p>
        </div>

        <div className="flex flex-col gap-12 lg:gap-16">
          {allServices.map((service, idx) => (
            <div key={idx} className={`group bg-white rounded-2xl overflow-hidden shadow-lg border border-light-border transition-all duration-300 flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} relative ${isInView ? 'animate-fade-up' : 'opacity-0'} delay-100`}>
              <div className="relative w-full md:w-1/2 overflow-hidden shrink-0 min-h-[300px] md:min-h-[500px]">
                <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-dark-navy/20 to-transparent md:hidden" />
              </div>

              <div className="p-8 md:p-12 lg:p-16 flex flex-col flex-1 w-full md:w-1/2 justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Settings size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-dark-navy leading-tight">{service.title}</h3>
                    {service.subtitle && <p className="text-sm font-semibold text-primary mt-1">{service.subtitle}</p>}
                  </div>
                </div>
                <p className="text-text-light text-base md:text-lg leading-relaxed mb-8">
                  {service.desc}
                </p>
                <div className="flex flex-col gap-3">
                  {service.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-3 text-sm md:text-base text-dark-navy font-medium bg-light-bg px-5 py-3 rounded-xl border border-light-border/50">
                      <div className="w-2.5 h-2.5 bg-primary rounded-full shrink-0 mt-1.5" />
                      <span className="leading-snug">{detail}</span>
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
            {/* <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-multiply" /> */}
            {/* <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" /> */}
          </div>
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">How We Work</span>
            <h2 className="text-3xl md:text-5xl font-semibold text-dark-navy mt-3 mb-10 leading-tight">
              Service Engagement Process
            </h2>
            <div className="space-y-8">
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
          <a href="tel:+919820012345" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 text-white hover:bg-white/20 border border-white/20 px-8 py-4 rounded-xl font-semibold transition-all backdrop-blur-sm">
            Call +91 98200 12345
          </a>
        </div>
      </div>
    </section>
  );
}
