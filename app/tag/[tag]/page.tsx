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
      {/* Hero */}
      <section>
        <h1 className="text-5xl font-bold capitalize">
          {params.tag} Creator RPM
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-3xl">
          Explore RPM trends, sponsorship opportunities,
          and monetization strategies for creators in the{' '}
          {params.tag} niche.
        </p>
      </section>

      {/* Stats */}
      <section className="grid md:grid-cols-3 gap-6 mt-14">
        <div className="border rounded-2xl p-6">
          <p className="text-gray-500">
            High Paying Niche
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Yes
          </h2>
        </div>

        <div className="border rounded-2xl p-6">
          <p className="text-gray-500">
            Related Articles
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {posts.length}
          </h2>
        </div>

        <div className="border rounded-2xl p-6">
          <p className="text-gray-500">
            Best Platforms
          </p>

          <h2 className="text-2xl font-bold mt-3">
            YouTube • TikTok
          </h2>
        </div>
      </section>

      {/* Articles */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold">
          Related RPM Articles
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="border rounded-2xl p-6 hover:border-black transition"
            >
              <h3 className="text-2xl font-semibold">
                {post.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {post.description}
              </p>

              <p className="mt-6 text-2xl font-bold">
                {post.rpm}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* SEO Content */}
      <section className="mt-24 max-w-4xl">
        <h2 className="text-3xl font-bold">
          Why Is {params.tag} RPM Higher?
        </h2>

        <p className="mt-6 text-lg text-gray-700 leading-8">
          Some creator niches generate significantly higher RPM
          because advertisers are willing to pay more for
          high-intent audiences.
        </p>

        <p className="mt-6 text-lg text-gray-700 leading-8">
          Finance, AI, investing, and business audiences often
          convert better into customers, making them highly
          valuable to advertisers.
        </p>
      </section>
    </main>
  );
}