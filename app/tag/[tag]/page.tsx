export const dynamicParams = false;

import Link from 'next/link';
import { Metadata } from 'next';
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag } = await params;

  return {
    title: `${tag} Creator RPM (2026)`,
    description: `Explore RPM trends and monetization opportunities in the ${tag} niche.`,
  };
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
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold capitalize">
        {tag} Creator RPM
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