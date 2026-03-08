import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { ProductCard } from '@/components/product/ProductCard';
import { searchProducts } from '@/lib/dummy-data';
import { useDebounce } from '@/hooks/useDebounce';
import { Search } from 'lucide-react';

const popularSearches = ['LED Lights', 'Seat Covers', 'Android Panel', 'Car Mats', 'Body Kit', 'Speakers', 'Ambient Lights'];

export default function SearchPage() {
  const [params] = useSearchParams();
  const initial = params.get('q') || '';
  const [query, setQuery] = useState(initial);
  const debounced = useDebounce(query, 300);
  const results = useMemo(() => debounced.trim() ? searchProducts(debounced) : [], [debounced]);

  return (
    <div className="fade-in">
      <Container className="py-10">
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text" autoFocus value={query} onChange={e => setQuery(e.target.value)}
              placeholder="Search for accessories..."
              className="w-full h-14 rounded-2xl border border-border bg-card pl-12 pr-4 text-lg outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
          {!debounced.trim() && (
            <div className="mt-4">
              <p className="text-sm text-muted-foreground mb-2">Popular searches:</p>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map(s => (
                  <button key={s} onClick={() => setQuery(s)} className="rounded-xl border border-border px-3 py-1.5 text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors">{s}</button>
                ))}
              </div>
            </div>
          )}
        </div>
        {debounced.trim() && (
          <>
            <p className="text-sm text-muted-foreground mb-6">{results.length} result{results.length !== 1 ? 's' : ''} for "{debounced}"</p>
            {results.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 stagger">
                {results.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            ) : (
              <div className="text-center py-20">
                <h3 className="text-lg font-bold text-foreground mb-2">No Results Found</h3>
                <p className="text-muted-foreground text-sm">Try a different search term.</p>
              </div>
            )}
          </>
        )}
      </Container>
    </div>
  );
}
