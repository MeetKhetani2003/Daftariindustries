import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <section className="bg-dark-navy relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 opacity-20">
          <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Link href="/products" className="text-primary hover:text-white transition-colors text-sm font-medium mb-6 inline-block">
              &larr; Back to Products
            </Link>
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">{product.name}</h1>
            <p className="text-white/80 text-lg leading-relaxed">{product.desc}</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-semibold text-dark-navy mb-6">Product Overview</h2>
            <p className="text-text-light leading-relaxed mb-8">{product.fullDesc}</p>
            
            <h3 className="text-xl font-semibold text-dark-navy mb-4">Included in this category:</h3>
            <ul className="space-y-3">
              {product.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-text">
                  <CheckCircle size={18} className="text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-8">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-light-border">
              <img src={product.img} alt={product.name} className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="bg-light-bg rounded-2xl p-8 border border-light-border sticky top-32">
              <h3 className="text-2xl font-semibold text-dark-navy mb-4">Ready to Order?</h3>
              <p className="text-text-light mb-8">
                Contact our technical sales team to request a quote, inquire about delivery options, or discuss custom requirements for {product.name}.
              </p>
              <Link href="/contact" className="w-full flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary/90 px-6 py-4 rounded-lg font-semibold transition-colors">
                Request a Quote <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
