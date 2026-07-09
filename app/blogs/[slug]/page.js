import Link from "next/link";

async function getBlog(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${slug}`, {
    next: { revalidate: 60 },
  });

  const json = await res.json();
  if (!json.success) throw new Error(json.error);
  return json.data;
}

export default async function BlogDetailPage({ params }) {
  // ✅ Fix 1: params ko await karo
  const { slug } = await params;

  const blog = await getBlog(slug);

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <Link
        href="/blogs"
        className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline mb-8"
      >
        ← Wapas Blogs par
      </Link>

      {blog.coverImage && (
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-2xl mb-8"
        />
      )}

      <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>

      <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <span className="bg-blue-50 text-blue-500 px-3 py-1 rounded-full font-medium">
          {blog.author}
        </span>
        <span>·</span>
        <span>
          {new Date(blog.createdAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>

      <div
        className="prose prose-lg max-w-none text-gray-700"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </main>
  );
}