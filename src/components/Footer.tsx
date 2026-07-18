import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-navy text-white/80">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link href="/">
                <img src="/logo.png" alt="Daftari Industries Logo" className="h-16 w-auto brightness-0 invert" />
              </Link>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-md">
              A premier industrial gas and cryogenic engineering solutions provider, delivering
              turnkey projects, engineering systems, and comprehensive gas solutions across India
              with decades of expertise and commitment to excellence.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <span>201/202, Industrial Estate, Andheri (East), Mumbai – 400093, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-accent shrink-0" />
                <span>+91 22 2830 3456</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-accent shrink-0" />
                <span>info@daftariindustries.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock size={16} className="text-accent shrink-0" />
                <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Products</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Industrial Gases', path: '/products' },
                { label: 'Medical Gases', path: '/products' },
                { label: 'Cryogenic Liquids', path: '/products' },
                { label: 'Hydrogen', path: '/products' },
                { label: 'LPG & LNG', path: '/products' },
                { label: 'Fire Fighting Gases', path: '/products' },
                { label: 'Specialty Gases', path: '/products' },
                { label: 'Gas Mixtures', path: '/products' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.path} className="text-white/60 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Engineering */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Engineering</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Cryogenic Tanks', path: '/engineering' },
                { label: 'Gas Pipelines', path: '/engineering' },
                { label: 'Hydrogen Systems', path: '/engineering' },
                { label: 'LPG Storage', path: '/engineering' },
                { label: 'Turnkey Projects', path: '/engineering' },
                { label: 'Commissioning', path: '/engineering' },
                { label: 'Gas Distribution', path: '/engineering' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.path} className="text-white/60 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Industries', path: '/industries' },
                { label: 'Infrastructure', path: '/infrastructure' },
                { label: 'Services', path: '/services' },
                { label: 'Case Studies', path: '/case-studies' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'Contact Us', path: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.path} className="text-white/60 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-3 mt-6">
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
