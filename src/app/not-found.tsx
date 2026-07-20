import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-dark-navy mb-4">404 - Page Not Found</h2>
      <p className="text-text-light mb-8 max-w-md mx-auto">
        We couldn't find the page or product you were looking for. It might have been removed or relocated.
      </p>
      <Link 
        href="/products" 
        className="bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
      >
        View All Products
      </Link>
    </div>
  );
}
