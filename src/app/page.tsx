"use client";
import Link from 'next/link';

import {
  ArrowRight, ChevronRight, Shield, Building2, Award,
  Wrench, Cpu, Users, Globe, CheckCircle, Gauge, Factory, Truck
} from 'lucide-react';
import { useInView, useCountUp } from '@/hooks/useHooks';
import { products } from '@/data/products';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProductsSection />
      {/* <EngineeringSection /> */}
      <WhyChooseSection />
      <IndustriesSection />
      <QualitySection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-dark-navy">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(/images/hero_industrial_plant.png)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-navy/95 via-dark-navy/80 to-dark-navy/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-36 lg:py-44">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-white/80 text-sm font-medium">
                Trusted Engineering Partner Since 1995
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
              Complete Industrial Gas &amp; Cryogenic Engineering Solutions
            </h1>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              Delivering industrial gases, cryogenic engineering systems, hydrogen infrastructure,
              gas pipeline engineering, storage solutions, LPG systems and turnkey industrial
              projects across world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact"
                className="bg-primary hover:bg-primary/90 text-white px-7 py-3.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
              >
                Request a Quote <ArrowRight size={16} />
              </Link>
              <Link href="/products"
                className="border border-white/20 hover:border-white/40 text-white px-7 py-3.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
              >
                Explore Products <ChevronRight size={16} />
              </Link>
            </div>
          </div>
          {/* Hero Image / Visual */}
          <div className="hidden lg:flex justify-center animate-float">
            <div className="relative">
              <div className="w-[450px] h-[350px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/images/cryogenic_tank.png"
                  alt="Cryogenic Storage Tank"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-dark-navy font-semibold text-sm">ISO Certified</div>
                  <div className="text-text-light text-xs">Quality Assured</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                  <CheckCircle size={20} className="text-green-600" />
                </div>
                <div>
                  <div className="text-dark-navy font-semibold text-sm">500+</div>
                  <div className="text-text-light text-xs">Projects Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const { ref, isInView } = useInView();
  const projects = useCountUp(500, isInView);
  const industries = useCountUp(200, isInView);
  const solutions = useCountUp(30, isInView);
  const clients = useCountUp(2000, isInView);

  const stats = [
    { value: projects, suffix: '+', label: 'Projects Delivered', icon: Building2 },
    { value: industries, suffix: '+', label: 'Industries Served', icon: Factory },
    { value: solutions, suffix: '+', label: 'Engineering Solutions', icon: Cpu },
    { value: clients, suffix: '+', label: 'Satisfied Clients', icon: Users },
  ];

  return (
    <section className="relative -mt-10 z-10 max-w-7xl mx-auto px-6">
      <div
        ref={ref}
        className="bg-white rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] border border-light-border p-8 md:p-10 grid grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mx-auto mb-3">
              <stat.icon size={22} className="text-primary" />
            </div>
            <div className="text-3xl md:text-4xl font-semibold text-dark-navy mb-1">
              {stat.value}{stat.suffix}
            </div>
            <div className="text-text-light text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  const { ref, isInView } = useInView();
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`grid lg:grid-cols-2 gap-16 items-center ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/gas_cylinders.png"
                alt="Industrial Plant"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/5 rounded-xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary/10 rounded-xl -z-10" />
          </div>
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-dark-navy mt-3 mb-6 leading-tight">
              India&apos;s Trusted Partner in Industrial Gas, Cryogenic Engineering &amp; Equipments
            </h2>
            <p className="text-text-light leading-relaxed mb-6">
              Daftari Industries has been a pioneer in the industrial gas and cryogenic engineering
              sector since 1995. With state-of-the-art manufacturing facilities and a team of
              experienced engineers, we deliver comprehensive solutions for industrial gases,
              cryogenic storage, hydrogen systems, and turnkey engineering projects across India.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
                  <Shield size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-dark-navy font-medium mb-1">Our Mission</h4>
                  <p className="text-text-light text-sm leading-relaxed">
                    To provide safe, reliable and cost-effective industrial gas and engineering
                    solutions that empower industries to achieve operational excellence.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
                  <Globe size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-dark-navy font-medium mb-1">Our Vision</h4>
                  <p className="text-text-light text-sm leading-relaxed">
                    To be India&apos;s most trusted and technologically advanced industrial gas and
                    cryogenic engineering company, expanding our footprint globally.
                  </p>
                </div>
              </div>
            </div>
            <Link href="/about"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const { ref, isInView } = useInView();

  const cylinderGasProducts = products.slice(0, 6);
  const supplyTransportationProducts = products.slice(11, 17);

  return (
    <section className="py-20 md:py-28 bg-light-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Products</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-navy mt-3 mb-4">
            Comprehensive Industrial Gas Portfolio
          </h2>
          <p className="text-text-light max-w-2xl mx-auto leading-relaxed">
            We supply a wide range of industrial gases, cryogenic liquids, and specialty gas
            solutions for diverse applications across industries.
          </p>
        </div>

        {/* Cylinder Gas Refilling Section */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
            <h3 className="text-2xl md:text-3xl font-semibold text-dark-navy border-l-4 border-primary pl-4">
              PESO-Compliant Gas Tank Installation & Commissioning
            </h3>
            <Link href="/products" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              View More <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {cylinderGasProducts.map((product, i) => (
              <Link
                key={`cyl-${i}`}
                href={`/products/${product.slug}`}
                className="bg-white rounded-xl overflow-hidden border border-light-border hover:border-primary/30 hover:shadow-xl transition-all group cursor-pointer flex flex-col"
              >
                <div className="aspect-square overflow-hidden shrink-0">
                  <img src={product.mainImg} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 flex flex-col items-start flex-1">
                  <h3 className="text-dark-navy font-semibold mb-4 text-lg">{product.title}</h3>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all mt-auto">
                    Learn More <ChevronRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Supply of Transportation of Gas Section */}
        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
            <h3 className="text-2xl md:text-3xl font-semibold text-dark-navy border-l-4 border-primary pl-4">
              Cylinder Gas Refilling, Supply in Bulk Gas Tanker & Transportation
            </h3>
            <Link href="/products" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              View More <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {supplyTransportationProducts.map((product, i) => (
              <Link
                key={`sup-${i}`}
                href={`/products/${product.slug}`}
                className="bg-white rounded-xl overflow-hidden border border-light-border hover:border-primary/30 hover:shadow-xl transition-all group cursor-pointer flex flex-col"
              >
                <div className="aspect-square overflow-hidden shrink-0">
                  <img src={product.mainImg} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 flex flex-col items-start flex-1">
                  <h3 className="text-dark-navy font-semibold mb-4 text-lg">{product.title}</h3>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all mt-auto">
                    Learn More <ChevronRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// function EngineeringSection() {
//   const { ref, isInView } = useInView();
//   const items = [
//     {
//       title: 'Cryogenic Storage Tanks & Tankers',
//       desc: 'Design, manufacturing, and installation of cryogenic storage tanks ranging from 5 m³ to 200 m³ capacity. Our tanks are built to international standards with advanced insulation technology for optimal boil-off rates.',
//       img: '/images/hero_industrial_plant.png',
//       left: true,
//     },
//     {
//       title: 'Hydrogen Storage & Systems',
//       desc: 'Complete hydrogen infrastructure including storage, compression, dispensing, and distribution systems for fuel cell applications, refinery operations, and emerging green hydrogen projects.',
//       img: '/images/cryogenic_tank.png',
//       left: false,
//     },
//     {
//       title: 'Gas Pipeline Engineering',
//       desc: 'Engineering, fabrication, and installation of gas pipeline networks for industrial plants, campuses, and facilities. Includes design, hydro testing, commissioning, and maintenance services.',
//       img: '/images/pipeline_infrastructure.png',
//       left: true,
//     },
//   ];

//   return (
//     <section className="py-20 md:py-28">
//       <div className="max-w-7xl mx-auto px-6">
//         <div ref={ref} className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
//           <span className="text-primary text-sm font-semibold uppercase tracking-wider">Engineering Solutions</span>
//           <h2 className="text-3xl md:text-4xl font-semibold text-dark-navy mt-3 mb-4">
//             Turnkey Engineering Projects &amp; Systems
//           </h2>
//           <p className="text-text-light max-w-2xl mx-auto leading-relaxed">
//             End-to-end engineering solutions from design and fabrication to installation,
//             commissioning, and maintenance.
//           </p>
//         </div>
//         {items.map((item, i) => (
//           <div
//             key={i}
//             className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
//           >
//             <div className={`${item.left ? '' : i % 2 === 1 ? 'lg:order-2' : ''}`}>
//               <div className="rounded-xl overflow-hidden shadow-md">
//                 <img src={item.img} alt={item.title} className="w-full aspect-video object-cover" />
//               </div>
//             </div>
//             <div className={`${!item.left && i % 2 === 1 ? '' : ''}`}>
//               <h3 className="text-2xl font-semibold text-dark-navy mb-4">{item.title}</h3>
//               <p className="text-text-light leading-relaxed mb-6">{item.desc}</p>
//               <Link href="/engineering"
//                 className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
//               >
//                 View All Engineering Solutions <ArrowRight size={16} />
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

function WhyChooseSection() {
  const { ref, isInView } = useInView();
  const reasons = [
    { icon: Award, title: 'Experienced Engineers', desc: '25+ years of expertise in industrial gas and cryogenic engineering' },
    { icon: Truck, title: 'Fastest Delivery', desc: 'Swift and secure logistics ensuring your operations never experience downtime' },
    { icon: Globe, title: 'Pan India Supply', desc: 'Reliable delivery network across all major industrial hubs in India' },
    // { icon: Building2, title: 'Reliable Infrastructure', desc: 'Modern manufacturing and storage facilities meeting international standards' },
    { icon: Shield, title: 'Quality Assurance', desc: 'ISO certified processes with rigorous quality control at every stage' },
    { icon: CheckCircle, title: 'Safety Standards', desc: 'Stringent safety protocols compliant with PESO and international regulations' },
    { icon: Wrench, title: 'Technical Support', desc: 'Dedicated engineering support team for consultation and troubleshooting' },
    { icon: Cpu, title: 'Modern Engineering', desc: 'Latest technology and equipment for precision engineering solutions' },
    { icon: Users, title: 'Customized Solutions', desc: 'Tailored engineering designs based on specific client requirements' },
  ];

  return (
    <section className="py-20 md:py-28 bg-light-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-navy mt-3 mb-4">
            The Daftari Industries Advantage
          </h2>
          <p className="text-text-light max-w-2xl mx-auto leading-relaxed">
            Our commitment to engineering excellence, safety, and customer satisfaction
            sets us apart as the preferred partner for industrial gas solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 border border-light-border hover:shadow-lg hover:border-primary/20 transition-all"
            >
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-4">
                <item.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-dark-navy font-semibold mb-2">{item.title}</h3>
              <p className="text-text-light text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const { ref, isInView } = useInView();
  const industries = [
    { name: 'Steel & Metallurgy', img: '/images/gas_cylinders.png' },
    { name: 'Oil & Gas', img: '/images/medical_oxygen.png' },
    { name: 'Chemical', img: '/images/pipeline_infrastructure.png' },
    { name: 'Glass Manufacturing', img: '/images/cryogenic_tank.png' },
    { name: 'Medical & Healthcare', img: '/images/medical_oxygen.png' },
    { name: 'Food Processing', img: '/images/pipeline_infrastructure.png' },
    { name: 'Automobile', img: '/images/hero_industrial_plant.png' },
    { name: 'Power Generation', img: '/images/cryogenic_tank.png' },
    { name: 'Research & Development', img: '/images/gas_cylinders.png' },
    { name: 'Electronics', img: '/images/medical_oxygen.png' },
    { name: 'Pharmaceutical', img: '/images/medical_oxygen.png' },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Industries</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-navy mt-3 mb-4">
            Serving Diverse Industries
          </h2>
          <p className="text-text-light max-w-2xl mx-auto leading-relaxed">
            Our industrial gas and engineering solutions serve a wide range of sectors,
            providing customized solutions for each industry&apos;s unique requirements.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden cursor-pointer aspect-[3/4] md:aspect-square lg:aspect-[4/5]"
            >
              <img
                src={ind.img}
                alt={ind.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-dark-navy/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-semibold text-sm md:text-base">{ind.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/industries"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View All Industries <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function QualitySection() {
  const { ref, isInView } = useInView();
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
        <div ref={ref} className={`grid lg:grid-cols-2 gap-16 items-center ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <div>
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">Quality &amp; Compliance</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mt-3 mb-6 leading-tight">
              Engineering Excellence with Uncompromising Quality Standards
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Every product and engineering solution from Daftari Industries undergoes rigorous
              quality testing and compliance verification. We adhere to international standards
              including ISO, ASME, and PESO regulations.
            </p>
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: Gauge, title: 'Hydro Testing', desc: 'Pressure testing at certified facilities' },
                { icon: Shield, title: 'PESO Standards', desc: 'Full regulatory compliance' },
                { icon: CheckCircle, title: 'Quality Assurance', desc: 'Multi-stage inspection process' },
                { icon: Wrench, title: 'Maintenance', desc: 'Preventive and corrective maintenance' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm mb-0.5">{item.title}</h4>
                    <p className="text-white/50 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/images/pipeline_infrastructure.png"
                alt="Quality Inspection"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { ref, isInView } = useInView();
  const testimonials = [
    {
      quote: 'Daftari Industries has been our trusted partner for industrial gases for over 10 years. Their reliability, quality, and technical support are unmatched in the industry.',
      name: 'Rajesh Sharma',
      role: 'Plant Manager',
      company: 'Steel Authority of India',
    },
    {
      quote: 'The cryogenic storage system they installed for our pharmaceutical plant operates flawlessly. Their engineering team demonstrated exceptional expertise throughout the project.',
      name: 'Dr. Priya Mehta',
      role: 'Operations Director',
      company: 'Sun Pharma',
    },
    {
      quote: 'From design to commissioning, Daftari delivered our gas pipeline project on time and within budget. Their attention to safety standards is truly commendable.',
      name: 'Amit Patel',
      role: 'Chief Engineer',
      company: 'Reliance Industries',
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-navy mt-3 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-text-light max-w-2xl mx-auto leading-relaxed">
            Our commitment to quality and service has earned the trust of leading
            industrial clients across India.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-xl p-8 border border-light-border hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-text-light leading-relaxed text-sm mb-6 italic">
                &quot;{t.quote}&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="text-dark-navy font-medium text-sm">{t.name}</div>
                  <div className="text-text-light text-xs">{t.role}, {t.company}</div>
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
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Ready to Discuss Your Project?
        </h2>
        <p className="text-white/70 text-lg mb-8 leading-relaxed">
          Contact our engineering team for a detailed consultation and competitive
          quotation for your industrial gas and cryogenic engineering requirements.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact"
            className="bg-white text-primary hover:bg-white/90 px-8 py-3.5 rounded-lg text-sm font-semibold transition-colors"
          >
            Request a Quote
          </Link>
          <a
            href="tel:+919820012345"
            className="border-2 border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-lg text-sm font-semibold transition-colors"
          >
            Call Us: +91 98200 12345
          </a>
        </div>
      </div>
    </section>
  );
}
