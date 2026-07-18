"use client";
import Link from 'next/link';

import { ArrowRight, CheckCircle, Calendar, Zap, AlertTriangle, Building2, Image as ImageIcon } from 'lucide-react';
import { useInView } from '@/hooks/useHooks';

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero />
      <CaseStudiesList />
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
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-5">Project Case Studies</h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Real-world applications of our engineering expertise, demonstrating rapid deployment, reliability, and continuous support during critical times.
          </p>
        </div>
      </div>
    </section>
  );
}

function CaseStudiesList() {
  const { ref, isInView } = useInView();

  const caseStudies = [
    {
      customer: 'EURO GLOBAL CYLINDERS LLP',
      period: 'Recent LPG Crisis (March 2026)',
      challenge: 'Customer was using LPG / Propane Bulk Tanker. During the LPG Crisis they requested a continuous LPG supply solution to avoid production shutdown.',
      solution: 'Suggested installation of LPG Manifold System using 425 KG LPG Cylinders. Customer placed the order in 2 days. Installed 6 Working Cylinders and 6 Standby Cylinders. Installation completed within 24 Hours. Started continuous LPG Filled Cylinder Supply immediately.',
      result: 'Customer remained fully operational. Not a single day of production shutdown.',
      images: [
        '/images/gas_cylinders.png',
        '/images/pipeline_infrastructure.png'
      ]
    },
    {
      customer: 'EVEREST KANTO CYLINDERS LIMITED',
      location: 'KA SEZ Zone, Gandhidham, Gujarat',
      period: 'Recent LPG Crisis (April 2026)',
      challenge: 'Bulk LPG supply interruption.',
      solution: 'Installed 10 Working & 10 Standby 425 KG LPG Cylinder Manifold System. Installation completed within 3 Days. Continuous LPG Filled Cylinder Supply started immediately.',
      result: 'Customer remained operational. No production shutdown.',
      images: [
        '/images/cryogenic_tank.png',
        '/images/gas_cylinders.png'
      ]
    },
    {
      customer: 'EVEREST KANTO CYLINDERS LIMITED',
      location: 'Ratadiya Unit, Mundra Highway, Gujarat',
      period: 'Recent LPG Crisis (April 2026)',
      challenge: 'Bulk LPG interruption.',
      solution: 'Installed 10 Working & 10 Standby 425 KG LPG Cylinder Manifold System. Installation completed within 3 Days. Continuous LPG Cylinder Supply.',
      result: 'Customer never stopped production.',
      images: [
        '/images/pipeline_infrastructure.png',
        '/images/gas_cylinders.png'
      ]
    },
    {
      customer: 'GOPAL SNACKS LIMITED',
      isMultiProject: true,
      projects: [
        {
          name: 'Project 1: Gondal Rajkot Unit',
          details: 'Customer had no PCC flooring. Client completed PCC flooring within 1–2 hours. Immediately after drying our team installed 500 KG/Hour Water Bath Vaporizer and 4 + 4 LPG Cylinder System within 24 hours.'
        },
        {
          name: 'Project 2: Modasa Unit',
          details: 'Order received before Dhanteras (Date: 13 October 2025). Production had to start on Dhanteras Muhurat. Installed 1000 KG/Hour Water Bath Vaporizer, 500 KG/Hour Water Bath Vaporizer, and 8 + 8 LPG Manifold System. Entire installation completed within 2 Days.'
        },
        {
          name: 'Project 3: Chapra Unit',
          details: 'Same installation setup as Modasa Unit.'
        }
      ],
      images: [
        '/images/hero_industrial_plant.png',
        '/images/pipeline_infrastructure.png'
      ]
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-light-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`space-y-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          {caseStudies.map((cs, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-light-border relative">
              <div className="h-2 bg-primary w-full absolute top-0 left-0" />
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-12">
                  {/* Content Column */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Building2 size={18} className="text-primary" />
                      <span className="text-primary font-bold text-sm tracking-widest uppercase">CASE STUDY {i + 1}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-dark-navy mb-2">{cs.customer}</h2>
                    <div className="flex flex-wrap gap-4 text-sm text-text-light mb-8">
                      {cs.location && (
                        <span className="flex items-center gap-1.5 bg-light-bg px-3 py-1 rounded-md border border-light-border">
                          <CheckCircle size={14} className="text-accent" /> {cs.location}
                        </span>
                      )}
                      {cs.period && (
                        <span className="flex items-center gap-1.5 bg-light-bg px-3 py-1 rounded-md border border-light-border">
                          <Calendar size={14} className="text-accent" /> {cs.period}
                        </span>
                      )}
                    </div>

                    {!cs.isMultiProject ? (
                      <div className="space-y-8">
                        <div>
                          <h3 className="flex items-center gap-2 text-lg font-semibold text-dark-navy mb-3">
                            <AlertTriangle size={20} className="text-orange-500" /> Challenge
                          </h3>
                          <p className="text-text-light leading-relaxed bg-orange-50/50 p-4 rounded-lg border border-orange-100">
                            {cs.challenge}
                          </p>
                        </div>
                        <div>
                          <h3 className="flex items-center gap-2 text-lg font-semibold text-dark-navy mb-3">
                            <Zap size={20} className="text-yellow-500" /> Solution
                          </h3>
                          <p className="text-text-light leading-relaxed bg-yellow-50/50 p-4 rounded-lg border border-yellow-100">
                            {cs.solution}
                          </p>
                        </div>
                        <div>
                          <h3 className="flex items-center gap-2 text-lg font-semibold text-dark-navy mb-3">
                            <CheckCircle size={20} className="text-green-500" /> Result
                          </h3>
                          <p className="text-text-light leading-relaxed bg-green-50/50 p-4 rounded-lg border border-green-100 font-medium">
                            {cs.result}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {cs.projects?.map((proj, pIdx) => (
                          <div key={pIdx} className="bg-light-bg p-6 rounded-xl border border-light-border">
                            <h3 className="text-lg font-semibold text-dark-navy mb-3 flex items-center gap-2">
                              <Zap size={18} className="text-primary" /> {proj.name}
                            </h3>
                            <p className="text-text-light leading-relaxed">
                              {proj.details}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Gallery Column */}
                  <div className="md:w-1/3 flex flex-col gap-4">
                    <h4 className="font-semibold text-dark-navy flex items-center gap-2">
                      <ImageIcon size={18} className="text-primary" /> Project Gallery
                    </h4>
                    {cs.images?.map((img, imgIdx) => (
                      <div key={imgIdx} className="rounded-xl overflow-hidden shadow-md border border-light-border cursor-pointer group">
                        <img 
                          src={img} 
                          alt="Project Image" 
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
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
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Facing an Industrial Challenge?</h2>
        <p className="text-white/70 mb-8">Our engineering team is ready to design a custom, rapid solution for your specific requirements.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 px-8 py-3.5 rounded-lg text-sm font-semibold transition-colors">
          Contact Us Now <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
