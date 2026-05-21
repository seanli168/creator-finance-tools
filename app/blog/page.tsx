import Link from 'next/link';
import { blogPosts } from '@/app/data/blogData';

export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">
        Creator Finance Blog
      </h1>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="border rounded-2xl p-6 hover:border-black transition"
          >
            <h2 className="text-2xl font-semibold">
              {post.title}
            </h2>

            <p className="mt-4 text-gray-600">
              {post.description}
            </p>

            <p className="mt-6 text-2xl font-bold">
              {post.rpm}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}