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
      <section className="bg-dark-navy relative overflow-hidden py-16 md:py-40">
        <div className="absolute inset-0 opacity-20">
          <img src={product.mainImg} alt={product.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark-navy/30 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{product.title}</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-white/70 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>&gt;</span>
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <span>&gt;</span>
            <span className="text-primary">{product.title}</span>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-light-bg/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-5/12 p-6 md:p-10 flex items-center justify-center bg-white border-b md:border-b-0 md:border-r border-slate-100">
                <img src={product.mainImg} alt={product.title} className="w-full h-auto object-contain max-h-[400px] hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">{product.title}</h2>
                <div className="text-slate-600 leading-relaxed mb-8 space-y-4 whitespace-pre-wrap">
                  {product.desc}
                </div>

                {product.details && product.details.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-dark-navy mb-4">Key Features &amp; Included Items:</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.details.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                          <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-auto pt-8 border-t border-slate-100">
                  <p className="text-sm text-slate-500 mb-4">Interested in this product? Our technical team is ready to help.</p>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary/90 px-8 py-3.5 rounded-lg font-semibold transition-colors">
                    Request a Quote <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          {product.gallery && product.gallery.length > 0 && (
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-primary text-center mb-10">Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {product.gallery.map((imgSrc, i) => (
                  <div key={i} className="aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 bg-white p-2 shadow-sm">
                    <img src={imgSrc} alt={`${product.title} Gallery Image ${i + 1}`} className="w-full h-full object-cover rounded hover:scale-110 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
}
