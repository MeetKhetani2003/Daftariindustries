"use client";
import Link from 'next/link';

import { ChevronRight, ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useHooks';
import { products } from '@/data/products';

export default function ProductsPage() {
  return (
    <>
      <PageHero />
      <ProductCategories />
      <ProductDetailsSection />
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
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-5">Our Products</h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Comprehensive range of industrial gases, cryogenic liquids, specialty gases,
            and customized gas mixtures for diverse applications.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProductCategories() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Product Range</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-navy mt-3 mb-4">
            Industrial Gas Portfolio
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((cat, i) => (
            <div key={i} className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-primary/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col hover:-translate-y-1">
              {/* Image Section */}
              <div className="relative aspect-[16/10] overflow-hidden shrink-0">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/90 via-dark-navy/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-5 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white drop-shadow-md translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{cat.name}</h3>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6 flex flex-col flex-1 bg-white relative">
                <div className="absolute top-0 right-6 -translate-y-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/2 transition-all duration-500 scale-50 group-hover:scale-100">
                  <ChevronRight size={20} />
                </div>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{cat.desc}</p>
                
                {/* Pill Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {cat.items.map((item, j) => (
                    <span key={j} className="bg-slate-50 text-slate-600 border border-slate-200 text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-default shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
                
                {/* Actions */}
                <div className="flex items-center gap-3 mt-auto pt-5 border-t border-slate-100">
                  <Link href={`/products/${cat.slug}`} className="flex-1 inline-flex justify-center items-center gap-2 bg-primary/5 text-primary hover:bg-primary hover:text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all">
                    View Details
                  </Link>
                  <Link href="/contact" className="flex-1 inline-flex justify-center items-center gap-2 bg-white text-dark-navy border border-slate-200 hover:bg-slate-50 hover:border-slate-300 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-sm">
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductDetailsSection() {
  const { ref, isInView } = useInView();
  return (
    <section className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Gas Specifications</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-navy mt-3 mb-4">
            Purity &amp; Delivery Options
          </h2>
          <p className="text-text-light max-w-2xl mx-auto">
            All gases are supplied at specified purity levels with options for cylinder,
            bulk, and on-site generation delivery.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl border border-light-border">
            <thead>
              <tr className="bg-dark-navy text-white">
                <th className="text-left p-4 text-sm font-medium">Gas</th>
                <th className="text-left p-4 text-sm font-medium">Purity</th>
                <th className="text-left p-4 text-sm font-medium">Cylinder Size</th>
                <th className="text-left p-4 text-sm font-medium">Bulk Available</th>
                <th className="text-left p-4 text-sm font-medium">Application</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Oxygen', '99.5% / 99.8% / 99.995%', '6m³ – 50m³', 'Yes', 'Welding, Steel, Medical'],
                ['Nitrogen', '99.5% / 99.9% / 99.999%', '6m³ – 50m³', 'Yes', 'Blanketing, Food, Electronics'],
                ['Argon', '99.996% / 99.999%', '6m³ – 35m³', 'Yes', 'Welding, Semiconductor'],
                ['CO₂', '99.9% / 99.99%', '6m³ – 40m³', 'Yes', 'Food, Fire, Chemical'],
                ['Acetylene', '99.2%', '6m³ – 8m³', 'No', 'Welding & Cutting'],
                ['Hydrogen', '99.99% / 99.999%', '6m³ – 50m³', 'Yes', 'Refining, Fuel Cells'],
                ['Propane', '99.5%', '6m³ – 40m³', 'Yes', 'Heating, Calibration'],
              ].map((row, i) => (
                <tr key={i} className={`border-t border-light-border ${i % 2 === 0 ? 'bg-white' : 'bg-light-bg/50'}`}>
                  {row.map((cell, j) => (
                    <td key={j} className="p-4 text-sm text-text">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Need a Specific Gas or Mixture?</h2>
        <p className="text-white/70 mb-8">Contact our technical team for custom specifications, purity grades, and delivery options.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 px-8 py-3.5 rounded-lg text-sm font-semibold transition-colors">
          Request a Quote <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
