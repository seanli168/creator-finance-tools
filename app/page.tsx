import Link from 'next/link';
import { blogPosts } from '@/app/data/blogData';

export default function HomePage() {
  const featuredPosts = blogPosts.slice(0, 9);

  const categories = [
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  const tags = [
    ...new Set(
      blogPosts.flatMap((post) => post.tags)
    ),
  ].slice(0, 12);

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-6xl font-bold leading-tight">
          Creator RPM Database
        </h1>

        <p className="mt-8 text-2xl text-gray-600 max-w-3xl mx-auto">
          Discover RPM rates, CPM trends, and monetization
          strategies across YouTube, TikTok, Instagram,
          and more.
        </p>
      </section>

      {/* Platforms */}
      <section className="mt-24">
        <h2 className="text-4xl font-bold">
          Browse Platforms
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/category/${category}`}
              className="border rounded-2xl p-8 hover:border-black transition"
            >
              <h3 className="text-2xl font-semibold capitalize">
                {category}
              </h3>

              <p className="mt-4 text-gray-600">
                Explore RPM trends for {category} creators.
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Niches */}
      <section className="mt-28">
        <h2 className="text-4xl font-bold">
          Popular Niches
        </h2>

        <div className="flex flex-wrap gap-4 mt-10">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/tag/${tag}`}
              className="border rounded-full px-6 py-3 hover:border-black transition"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Articles */}
      <section className="mt-28">
        <h2 className="text-4xl font-bold">
          Featured RPM Articles
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {featuredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="border rounded-2xl p-8 hover:border-black transition"
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
      <section className="mt-32 max-w-4xl">
        <h2 className="text-4xl font-bold">
          What Is Creator RPM?
        </h2>

        <p className="mt-8 text-lg text-gray-700 leading-8">
          RPM stands for revenue per mille, which measures
          how much creators earn per 1,000 views after
          platform fees.
        </p>

        <p className="mt-6 text-lg text-gray-700 leading-8">
          Different niches generate different RPM rates.
          Finance, AI, SaaS, investing, insurance, and
          business content often achieve the highest RPM
          because advertisers pay premium rates for those
          audiences.
        </p>

        <p className="mt-6 text-lg text-gray-700 leading-8">
          This website helps creators compare RPM across
          YouTube, TikTok, Instagram, and other creator
          platforms.
        </p>
      </section>
    </main>
  );
}