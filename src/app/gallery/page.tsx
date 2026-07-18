"use client";
import { useState } from 'react';
import { X } from 'lucide-react';
import { useInView } from '@/hooks/useHooks';

interface GalleryImage {
  src: string;
  caption: string;
  category: string;
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const images: GalleryImage[] = [
    { src: '/images/gas_cylinders.png', caption: 'Euro Global Cylinders LLP - LPG Crisis (March 2026)', category: 'Case Studies' },
    { src: '/images/cryogenic_tank.png', caption: 'Everest Kanto Cylinders (KA SEZ) - LPG Crisis (April 2026)', category: 'Case Studies' },
    { src: '/images/pipeline_infrastructure.png', caption: 'Everest Kanto Cylinders (Ratadiya) - LPG Crisis (April 2026)', category: 'Case Studies' },
    { src: '/images/hero_industrial_plant.png', caption: 'Gopal Snacks Limited (Multi-Plant) - Gondal & Modasa Units', category: 'Case Studies' },
    { src: '/images/hero_industrial_plant.png', caption: 'Saloni Ceramic - Khartoum, Sudan', category: 'International Projects' },
    { src: '/images/pipeline_infrastructure.png', caption: 'Sanitaryware Project - Bangladesh', category: 'International Projects' },
    { src: '/images/medical_oxygen.png', caption: 'Medical Gas Installation & Distribution', category: 'Medical' },
    { src: '/images/gas_cylinders.png', caption: 'Industrial Gas Cylinder Filling Station', category: 'Industrial' },
    { src: '/images/cryogenic_tank.png', caption: 'Advanced Cryogenic Storage Tank Manufacturing', category: 'Cryogenic' },
  ];

  const categories = ['All', 'Case Studies', 'International Projects', 'Cryogenic', 'Industrial', 'Medical'];

  const filteredImages = activeCategory === 'All'
    ? images
    : images.filter((img) => img.category === activeCategory);

  return (
    <>
      <PageHero />
      <GallerySection
        images={filteredImages}
        allImages={images}
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        setSelectedImage={setSelectedImage}
      />
      {selectedImage !== null && (
        <Lightbox image={images[selectedImage]} onClose={() => setSelectedImage(null)} />
      )}
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
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-5">Project Gallery</h1>
          <p className="text-white/60 text-lg leading-relaxed">
            A showcase of our engineering projects, installations, and
            manufacturing capabilities across India.
          </p>
        </div>
      </div>
    </section>
  );
}

function GallerySection({ images, allImages, categories, activeCategory, setActiveCategory, setSelectedImage }: {
  images: GalleryImage[];
  allImages: GalleryImage[];
  categories: string[];
  activeCategory: string;
  setActiveCategory: (c: string) => void;
  setSelectedImage: (i: number | null) => void;
}) {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`flex flex-wrap justify-center gap-3 mb-12 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-primary text-white'
                  : 'bg-light-bg text-text hover:bg-light-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(allImages.indexOf(img))}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-52 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-5">
                  <span className="text-accent text-xs font-medium">{img.category}</span>
                  <p className="text-white text-sm font-medium mt-1">{img.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Lightbox({ image, onClose }: { image: GalleryImage; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6" onClick={onClose}>
      <div className="max-w-5xl w-full relative" onClick={(e) => e.stopPropagation()}>
        <img src={image.src} alt={image.caption} className="w-full rounded-xl" />
        <div className="mt-4 text-center">
          <p className="text-white text-sm">{image.caption}</p>
        </div>
        <button onClick={onClose} className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
          <X size={20} className="text-dark-navy" />
        </button>
      </div>
    </div>
  );
}
