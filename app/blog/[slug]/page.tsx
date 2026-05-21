import Link from 'next/link';
import { notFound } from 'next/navigation';

const pages = {
  'youtube-rpm-finance': {
    title: 'Finance YouTube RPM',
    niche: 'Finance',
    rpm: '$15 - $40',
    description:
      'Finance is one of the highest RPM niches on YouTube.',
  },

  'youtube-rpm-business': {
    title: 'Business YouTube RPM',
    niche: 'Business',
    rpm: '$10 - $30',
    description:
      'Business content attracts high-paying advertisers.',
  },

  'youtube-rpm-gaming': {
    title: 'Gaming YouTube RPM',
    niche: 'Gaming',
    rpm: '$2 - $6',
    description:
      'Gaming has lower RPM but massive audience potential.',
  },

  'youtube-rpm-education': {
    title: 'Education YouTube RPM',
    niche: 'Education',
    rpm: '$4 - $12',
    description:
      'Educational channels often receive stable advertiser demand.',
  },
};

export async function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const page =
    pages[slug as keyof typeof pages];

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

  const page =
    pages[slug as keyof typeof pages];

  if (!page) {
    notFound();
  }

  const relatedPosts = Object.entries(pages)
    .filter(([key]) => key !== slug)
    .slice(0, 3);

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

        <h2>Why This Niche Has This RPM</h2>

        <p>
          Advertiser competition, audience demographics,
          and viewer purchasing power heavily influence RPM.
        </p>

        <h2>Ways to Increase RPM</h2>

        <ul>
          <li>Create advertiser-friendly content</li>
          <li>Target US and UK audiences</li>
          <li>Improve watch time</li>
          <li>Use better monetization strategies</li>
        </ul>

        <h2>Useful Tools</h2>

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
          Related RPM Articles
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {relatedPosts.map(([key, post]) => (
            <Link
              key={key}
              href={`/blog/${key}`}
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