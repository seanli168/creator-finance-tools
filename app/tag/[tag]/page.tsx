export const dynamicParams = false;

import Link from 'next/link';
import { blogPosts } from '@/app/data/blogData';

export async function generateStaticParams() {
  const tags = [
    ...new Set(
      blogPosts.flatMap((post) => post.tags)
    ),
  ];

  return tags.map((tag) => ({
    tag,
  }));
}

export default function TagPage({
  params,
}: {
  params: { tag: string };
}) {
  const posts = blogPosts.filter((post) =>
    post.tags.includes(params.tag)
  );

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold capitalize">
        {params.tag} Creator RPM
      </h1>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="border rounded-2xl p-6"
          >
            <h2 className="text-2xl font-semibold">
              {post.title}
            </h2>

            <p className="mt-4">
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