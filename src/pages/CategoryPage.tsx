import { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { ProductCard } from '@/components/product/ProductCard';
import { useCategories, useCategory } from '@/hooks/useCategories';
import { useProductsByCategory } from '@/hooks/useProducts';
import { ChevronRight, Package } from 'lucide-react';

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: category, isLoading: catLoading } = useCategory(slug || '');
  const { data: products = [], isLoading: prodLoading } = useProductsByCategory(slug || '');
  const { data: allCategories = [] } = useCategories();
  const [sort, setSort] = useState('featured');

  const sorted = useMemo(() => {
    const arr = [...products];
    switch (sort) {
      case 'price-asc': return arr.sort((a, b) => (a.variants[0]?.price || 0) - (b.variants[0]?.price || 0));
      case 'price-desc': return arr.sort((a, b) => (b.variants[0]?.price || 0) - (a.variants[0]?.price || 0));
      case 'newest': return arr.sort((a, b) => b.created_at.localeCompare(a.created_at));
      default: return arr.sort((a, b) => (b.is_featured ? 1 : 0) - (a.is_featured ? 1 : 0));
    }
  }, [products, sort]);

  if (catLoading || prodLoading) {
    return (
      <div className="fade-in">
        <section className="gradient-hero py-12"><Container><div className="h-8 w-48 rounded-lg bg-dark-foreground/20 animate-pulse" /></Container></section>
        <Container className="py-10">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => <div key={i} className="rounded-2xl border border-border bg-card animate-pulse aspect-square" />)}
          </div>
        </Container>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center fade-in">
        <div className="text-center">
          <h1 className="text-2xl font-black text-foreground mb-2">Category Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Go Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-in">
      {/* Hero */}
      <section className="gradient-hero py-12">
        <Container>
          <div className="flex items-center gap-2 text-sm text-dark-foreground/60 mb-4">
            <Link to="/" className="hover:text-dark-foreground transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-dark-foreground">{category.name}</span>
          </div>
          <h1 className="text-3xl font-black text-dark-foreground">{category.name}</h1>
          <p className="text-dark-foreground/60 mt-2">{category.description}</p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="sticky top-20 rounded-2xl border border-border bg-card p-4 max-h-[70vh] overflow-y-auto no-scrollbar">
              <h3 className="font-bold text-foreground mb-3">All Categories</h3>
              <ul className="space-y-0.5">
                {allCategories.map(c => (
                  <li key={c.slug}>
                    <Link
                      to={`/categories/${c.slug}`}
                      className={`block px-3 py-2 text-sm rounded-lg transition-colors ${c.slug === slug ? 'bg-primary text-primary-foreground font-semibold' : 'text-muted-foreground hover:text-foreground hover:bg-accent'}`}
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">{products.length} product{products.length !== 1 ? 's' : ''}</p>
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="h-9 rounded-lg border border-border bg-card px-3 text-sm outline-none focus:border-primary text-foreground"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
            {sorted.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 stagger">
                {sorted.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <Package className="h-16 w-16 text-muted-foreground/30 mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">No Products Yet</h3>
                <p className="text-muted-foreground text-sm">We're stocking up! Check back soon.</p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
