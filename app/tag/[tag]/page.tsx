import Link from 'next/link';

import { blogPosts } from '@/app/data/blogData';

export async function generateStaticParams() {
  const tags = Array.from(
    new Set(
      blogPosts.flatMap(
        (post) => post.tags || []
      )
    )
  );

  return tags.map((tag) => ({
    tag,
  }));
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;

  const posts = blogPosts.filter(
    (post) =>
      post.tags?.includes(tag)
  );

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">
        #{tag}
      </h1>

      <div className="grid gap-8 mt-12">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="border rounded-2xl p-8 hover:border-black transition"
          >
            <h2 className="text-2xl font-semibold">
              {post.title}
            </h2>

            <p className="mt-4 text-gray-600">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}