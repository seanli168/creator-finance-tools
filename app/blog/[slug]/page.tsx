import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/app/data/blogData';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const page = blogPosts.find(
    (post) => post.slug === slug
  );

  if (!page) {
    return {};
  }

  return {
    title: `${page.title} in 2026`,
    description: page.description,
  };
}

export default async function DynamicBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const page = blogPosts.find(
    (post) => post.slug === slug
  );

  if (!page) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((post) => post.slug !== slug)
    .slice(0, 6);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${page.title} in 2026`,
    description: page.description,
    author: {
      '@type': 'Organization',
      name: 'Creator Finance Tools',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Creator Finance Tools',
    },
    datePublished: '2026-01-01',
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <h1 className="text-5xl font-bold">
        {page.title} in 2026
      </h1>

      <div className="mt-10 prose prose-lg max-w-none">
        <p>{page.description}</p>

        <h2>Average RPM</h2>

        <p>{page.rpm}</p>

        <h2>Why This Niche Has High RPM</h2>

        <p>
          RPM depends on advertiser competition,
          audience purchasing power, and monetization quality.
        </p>

        <h2>Ways to Increase RPM</h2>

        <ul>
          <li>Create advertiser-friendly content</li>
          <li>Target Tier 1 countries</li>
          <li>Increase audience retention</li>
          <li>Publish long-form content</li>
        </ul>

        <h2>Useful Creator Tools</h2>

        <div className="grid md:grid-cols-2 gap-6 not-prose mt-8">
          <Link
            href="/tools/rpm-calculator"
            className="border rounded-2xl p-6 hover:border-black transition"
          >
            <h3 className="text-2xl font-semibold">
              RPM Calculator
            </h3>
          </Link>

          <Link
            href="/tools/youtube-money-calculator"
            className="border rounded-2xl p-6 hover:border-black transition"
          >
            <h3 className="text-2xl font-semibold">
              YouTube Money Calculator
            </h3>
          </Link>
        </div>
      </div>

      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-8">
          Related Articles
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="border rounded-2xl p-6 hover:border-black transition"
            >
              <h3 className="text-xl font-semibold">
                {post.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {post.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}