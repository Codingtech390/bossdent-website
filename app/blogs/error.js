"use client";

export default function Error({ error }) {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 text-center">
      <p className="text-5xl mb-4">⚠️</p>
      <h2 className="text-xl font-semibold text-red-500 mb-2">
        Unable to fetch data
      </h2>
      <p className="text-gray-400 text-sm">{error.message}</p>
    </main>
  );
}
