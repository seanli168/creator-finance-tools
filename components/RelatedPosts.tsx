import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function RelatedPosts({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const posts = getAllPosts()
    .filter(
      (post) =>
        post.slug !== currentSlug
    )
    .slice(0, 4);

  if (posts.length === 0) return null;

  return (
    <section className="mt-24">
      
      {/* Title */}
      <h2 className="text-3xl font-bold">
        Related Articles
      </h2>

      <p className="mt-3 text-gray-600">
        More insights about creator monetization and earnings
      </p>

      {/* Grid */}
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="border rounded-xl p-6 hover:border-black transition group"
          >
            <h3 className="font-semibold text-lg group-hover:underline">
              {post.title}
            </h3>

            <p className="text-gray-500 mt-2 line-clamp-2">
              {post.description}
            </p>

            <p className="text-sm text-gray-400 mt-4">
              Read more →
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}