import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { products } from '@/data/products';

export default function Footer() {
  return (
    <footer className="bg-dark-navy text-white/80">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-5 pr-0 lg:pr-8">
            <div className="mb-6">
              <Link href="/">
                <img src="/logo.png" alt="Daftari Industries Logo" className="h-20 w-auto brightness-0 invert" />
              </Link>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              A premier industrial gas and cryogenic engineering solutions provider, delivering
              turnkey projects, engineering systems, and comprehensive gas solutions across India
              with decades of expertise and commitment to excellence.
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                <span className="leading-relaxed">RK INDUSTRIAL WORLD, PLOT NO. E - 16, OPP. LUFAS CREATION, RAJ SAMADHIYALA, RAJKOT - Bhavnagar HIGHWAY, RAJKOT - 360020 GUJARAT</span>
              </div>
              <Link href="tel:+919333333685">
                <div className="flex items-center gap-3">

                  <Phone size={18} className="text-accent shrink-0" />
                  <span>+91 93333 33685</span>
                </div>
              </Link>
              <div className="flex items-center mt-3 gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <span>info@daftariindustries.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-accent shrink-0" />
                <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-5">
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Products</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-4">
              <ul className="space-y-3 text-sm">
                {products.slice(0, Math.ceil(products.length / 2)).map((item) => (
                  <li key={item.slug}>
                    <Link href={`/products/${item.slug}`} className="text-white/60 hover:text-white transition-colors block">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3 text-sm">
                {products.slice(Math.ceil(products.length / 2)).map((item) => (
                  <li key={item.slug}>
                    <Link href={`/products/${item.slug}`} className="text-white/60 hover:text-white transition-colors block">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Industries', path: '/industries' },
                { label: 'Services', path: '/services' },
                { label: 'Case Studies', path: '/case-studies' },
                { label: 'Contact Us', path: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.path} className="text-white/60 hover:text-white transition-colors block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-3 mt-8">
              {['Fb', 'Tw', 'In', 'Ig'].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="w-9 h-9 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-colors text-xs font-medium"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/40">
          <span>© 2025 Daftari Industries. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/60 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
