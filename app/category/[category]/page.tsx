export const dynamicParams = false;

import Link from 'next/link';
import { blogPosts } from '@/app/data/blogData';

export async function generateStaticParams() {
  const categories = [
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  return categories.map((category) => ({
    category,
  }));
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const posts = blogPosts.filter(
    (post) => post.category === params.category
  );

  const avgRPM =
    posts.length > 0
      ? '$5 - $25'
      : '$0';

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero */}
      <section>
        <h1 className="text-5xl font-bold capitalize">
          {params.category} Creator RPM
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-3xl">
          Discover average RPM rates, monetization strategies,
          and the highest paying niches for creators on{' '}
          {params.category}.
        </p>
      </section>

      {/* Stats */}
      <section className="grid md:grid-cols-3 gap-6 mt-14">
        <div className="border rounded-2xl p-6">
          <p className="text-gray-500">
            Average RPM
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {avgRPM}
          </h2>
        </div>

        <div className="border rounded-2xl p-6">
          <p className="text-gray-500">
            Total Articles
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {posts.length}
          </h2>
        </div>

        <div className="border rounded-2xl p-6">
          <p className="text-gray-500">
            Top Niches
          </p>

          <h2 className="text-2xl font-bold mt-3">
            Finance • AI • Business
          </h2>
        </div>
      </section>

      {/* Articles */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold">
          Latest Articles
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
          What Is {params.category} RPM?
        </h2>

        <p className="mt-6 text-lg text-gray-700 leading-8">
          RPM stands for revenue per mille, meaning how much
          creators earn per 1,000 views after platform fees.
          Different niches have very different RPM ranges based
          on advertiser demand and audience quality.
        </p>

        <p className="mt-6 text-lg text-gray-700 leading-8">
          Finance, business, AI, and investing usually generate
          the highest RPM because advertisers are willing to pay
          premium rates for those audiences.
        </p>
      </section>
    </main>
  );
}