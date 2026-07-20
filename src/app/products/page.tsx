"use client";
import Link from 'next/link';

import { ArrowRight } from 'lucide-react';
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
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Product Range</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-navy mt-3 mb-4">
            Industrial Gas Portfolio
          </h2>
        </div>
        <div className="flex flex-col gap-8">
          {products.map((cat, i) => (
            <div key={i} className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row items-center p-4 gap-6">
              {/* Image Section */}
              <div className="relative w-full md:w-1/3 aspect-[4/3] rounded-lg overflow-hidden shrink-0 bg-slate-50 flex items-center justify-center p-4">
                <img src={cat.mainImg} alt={cat.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              
              {/* Content Section */}
              <div className="flex flex-col flex-1 py-4">
                <h3 className="text-2xl font-bold text-primary mb-3">{cat.title}</h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-2xl">{cat.desc}</p>
                
                {/* Pill Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cat.details.slice(0, 4).map((item, j) => (
                    <span key={j} className="text-slate-500 text-xs font-medium px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50">
                      {item}
                    </span>
                  ))}
                  {cat.details.length > 4 && (
                    <span className="text-primary text-xs font-medium px-3 py-1.5">+{cat.details.length - 4} more</span>
                  )}
                </div>
                
                {/* Actions */}
                <div className="flex items-center gap-4 mt-auto">
                  <Link href={`/products/${cat.slug}`} className="inline-flex justify-center items-center gap-2 bg-primary text-white hover:bg-primary/90 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all">
                    View Details
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
