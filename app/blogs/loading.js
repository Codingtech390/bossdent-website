export default function Loading() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <div className="h-9 w-48 bg-gray-200 rounded animate-pulse mb-2" />
      <div className="h-4 w-64 bg-gray-100 rounded animate-pulse mb-10" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="rounded-2xl border border-gray-100 overflow-hidden animate-pulse">
            <div className="w-full h-48 bg-gray-200" />
            <div className="p-5 space-y-3">
              <div className="h-3 w-1/3 bg-gray-200 rounded" />
              <div className="h-5 w-3/4 bg-gray-200 rounded" />
              <div className="h-3 w-full bg-gray-100 rounded" />
              <div className="h-3 w-5/6 bg-gray-100 rounded" />
              <div className="h-8 w-28 bg-gray-200 rounded-lg mt-2" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}