import { useState, useMemo } from 'react';
import { Container } from '@/components/ui/Container';
import { ProductCard } from '@/components/product/ProductCard';
import { dummyProducts } from '@/lib/dummy-data';

export default function ProductsPage() {
  const [sort, setSort] = useState('featured');
  const [page, setPage] = useState(1);
  const perPage = 12;

  const sorted = useMemo(() => {
    const arr = [...dummyProducts];
    switch (sort) {
      case 'price-asc': return arr.sort((a, b) => (a.variants[0]?.price || 0) - (b.variants[0]?.price || 0));
      case 'price-desc': return arr.sort((a, b) => (b.variants[0]?.price || 0) - (a.variants[0]?.price || 0));
      case 'newest': return arr.sort((a, b) => b.created_at.localeCompare(a.created_at));
      default: return arr.sort((a, b) => (b.is_featured ? 1 : 0) - (a.is_featured ? 1 : 0));
    }
  }, [sort]);

  const totalPages = Math.ceil(sorted.length / perPage);
  const paginated = sorted.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="fade-in">
      <section className="gradient-hero py-12">
        <Container>
          <h1 className="text-3xl font-black text-dark-foreground">All Products</h1>
          <p className="text-dark-foreground/60 mt-2">{dummyProducts.length} products available</p>
        </Container>
      </section>
      <Container className="py-10">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-muted-foreground">Page {page} of {totalPages}</p>
          <select value={sort} onChange={e => { setSort(e.target.value); setPage(1); }} className="h-9 rounded-lg border border-border bg-card px-3 text-sm outline-none focus:border-primary text-foreground">
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 stagger">
          {paginated.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: totalPages }, (_, i) => (
              <button key={i} onClick={() => setPage(i + 1)} className={`h-10 w-10 rounded-lg text-sm font-semibold transition-colors ${page === i + 1 ? 'bg-primary text-primary-foreground' : 'border border-border text-muted-foreground hover:bg-accent'}`}>
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
