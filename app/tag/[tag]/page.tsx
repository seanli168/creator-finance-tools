import Link from 'next/link';
import { blogPosts } from '@/app/data/blogData';

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;

  const posts = blogPosts.filter((post) =>
    post.tags?.includes(tag)
  );

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold capitalize">
        {tag} Creator RPM
      </h1>

      <p className="mt-6 text-xl text-gray-600">
        Explore creator monetization articles related to
        {' '}
        {tag}
        .
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {posts.map((post) => (
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