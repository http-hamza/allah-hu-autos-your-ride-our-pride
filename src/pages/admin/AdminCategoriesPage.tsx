import { dummyCategories } from '@/lib/dummy-data';

export default function AdminCategoriesPage() {
  return (
    <div className="p-6 lg:p-10 fade-in">
      <h1 className="text-2xl font-black text-foreground mb-6">Categories</h1>
      <div className="rounded-2xl border border-border bg-card overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-border bg-secondary/50"><th className="text-left p-3 font-semibold text-foreground">Name</th><th className="text-left p-3 font-semibold text-foreground hidden sm:table-cell">Slug</th><th className="text-left p-3 font-semibold text-foreground">Featured</th></tr></thead>
          <tbody>
            {dummyCategories.map(c => (
              <tr key={c.id} className="border-b border-border last:border-0">
                <td className="p-3 font-medium text-foreground">{c.name}</td>
                <td className="p-3 text-muted-foreground hidden sm:table-cell">{c.slug}</td>
                <td className="p-3">{c.is_featured ? <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">Yes</span> : <span className="text-xs text-muted-foreground">No</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
