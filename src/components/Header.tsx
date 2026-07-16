"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Products', path: '/products', hasDropdown: true },
    { label: 'Engineering Solutions', path: '/engineering' },
    { label: 'Industries', path: '/industries' },
    { label: 'Infrastructure', path: '/infrastructure' },
    { label: 'Services', path: '/services' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-dark-navy text-white/80 text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Mail size={13} /> info@daftariindustries.com</span>
            <span className="flex items-center gap-1.5"><Phone size={13} /> +91 22 2830 3456</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={13} /> Mumbai, Maharashtra, India
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          isScrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.08)]' : 'shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-18 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img src="/logo.png" alt="Daftari Industries Logo" className="h-14 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0">
              {navItems.map((item) => (
                <NavItem key={item.label} item={item} />
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Request Quote
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 text-dark-navy"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-light-border">
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.path}
                  className="block py-2.5 text-text hover:text-primary font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block mt-4 bg-primary text-white text-center py-2.5 rounded-lg font-medium"
              >
                Request Quote
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

function NavItem({ item }: { item: { label: string; path: string; hasDropdown?: boolean } }) {
  const [hovered, setHovered] = useState(false);
  const pathname = usePathname();
  const isActive = pathname === item.path;

  if (!item.hasDropdown) {
    return (
      <Link
        href={item.path}
        className={`px-3 py-6 text-sm font-medium transition-colors ${
          isActive ? 'text-primary' : 'text-text hover:text-primary'
        }`}
      >
        {item.label}
      </Link>
    );
  }

  const products = [
    { name: 'Industrial Gases', desc: 'Oxygen, Nitrogen, Argon, CO₂ & more' },
    { name: 'Medical Gases', desc: 'Oxygen, Air, Nitrous Oxide, Medical Grade' },
    { name: 'Cryogenic Liquids', desc: 'Liquid Nitrogen, Oxygen, Argon, CO₂' },
    { name: 'Hydrogen', desc: 'Industrial & Green Hydrogen' },
    { name: 'LPG & LNG', desc: 'Liquefied Petroleum & Natural Gas' },
    { name: 'Fire Fighting Gases', desc: 'FM-200, Novec 1230, CO₂ Systems' },
    { name: 'Specialty Gases', desc: 'High Purity & Calibration Gases' },
    { name: 'Gas Mixtures', desc: 'Custom Blended Gas Solutions' },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button className="flex items-center gap-1 px-3 py-6 text-sm font-medium text-primary hover:text-primary transition-colors">
        {item.label}
        <ChevronDown size={14} className={`transition-transform ${hovered ? 'rotate-180' : ''}`} />
      </button>
      {hovered && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[700px] bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] border border-light-border p-6 grid grid-cols-2 gap-4 z-50">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-light-border transform rotate-45"></div>
          {products.map((p) => (
            <Link
              key={p.name}
              href="/products"
              className="block p-3 rounded-lg hover:bg-light-bg transition-colors group"
            >
              <div className="text-sm font-semibold text-dark-navy group-hover:text-primary transition-colors">
                {p.name}
              </div>
              <div className="text-xs text-text-light mt-0.5">{p.desc}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
