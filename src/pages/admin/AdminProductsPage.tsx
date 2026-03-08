import { dummyProducts } from '@/lib/dummy-data';
import { formatPrice } from '@/lib/constants';

export default function AdminProducts() {
  return (
    <div className="p-6 lg:p-10 fade-in">
      <h1 className="text-2xl font-black text-foreground mb-6">Products</h1>
      <div className="rounded-2xl border border-border bg-card overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-border bg-secondary/50"><th className="text-left p-3 font-semibold text-foreground">Product</th><th className="text-left p-3 font-semibold text-foreground hidden md:table-cell">Category</th><th className="text-left p-3 font-semibold text-foreground">Price</th><th className="text-left p-3 font-semibold text-foreground hidden sm:table-cell">Stock</th></tr></thead>
          <tbody>
            {dummyProducts.slice(0, 20).map(p => (
              <tr key={p.id} className="border-b border-border last:border-0">
                <td className="p-3 font-medium text-foreground">{p.name}</td>
                <td className="p-3 text-muted-foreground hidden md:table-cell capitalize">{p.category_slug.replace(/-/g, ' ')}</td>
                <td className="p-3 text-foreground">{formatPrice(p.variants[0]?.price || 0)}</td>
                <td className="p-3 hidden sm:table-cell">{p.variants[0]?.stock || 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
