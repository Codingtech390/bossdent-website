import Link from "next/link";
export const dynamic = "force-dynamic";


async function getBlogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, {
    next: { revalidate: 60 },
  });

  const json = await res.json();
  if (!json.success) throw new Error(json.error);
  return json.data;
}

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Our Blogs</h1>
      <p className="text-gray-500 mb-10">Latest articles and updates</p>

      {blogs.length === 0 ? (
        <p className="text-gray-400 text-center py-20">
          Abhi koi blog published nahi hai.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition duration-300 flex flex-col"
            >
              {/* Cover Image */}
              {blog.coverImage ? (
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <span className="text-blue-400 text-4xl">📝</span>
                </div>
              )}

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                {/* Author + Date */}
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <span className="bg-blue-50 text-blue-500 px-2 py-0.5 rounded-full font-medium">
                    {blog.author}
                  </span>
                  <span>·</span>
                  <span>
                    {new Date(blog.createdAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {blog.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm line-clamp-3 flex-1">
                  {blog.excerpt}
                </p>

                {/* Read More Button */}
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg w-fit"
                >
                  Read More
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}