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

  'youtube-rpm-tech': {
    title: 'Tech YouTube RPM',
    niche: 'Technology',
    rpm: '$8 - $22',
    description:
      'Technology channels attract software and hardware advertisers.',
  },

  'youtube-rpm-ai': {
    title: 'AI YouTube RPM',
    niche: 'Artificial Intelligence',
    rpm: '$12 - $35',
    description:
      'AI content has rapidly growing advertiser demand.',
  },

  'youtube-rpm-marketing': {
    title: 'Marketing YouTube RPM',
    niche: 'Marketing',
    rpm: '$8 - $20',
    description:
      'Marketing content attracts business advertisers.',
  },

  'youtube-rpm-crypto': {
    title: 'Crypto YouTube RPM',
    niche: 'Cryptocurrency',
    rpm: '$10 - $30',
    description:
      'Crypto advertisers often pay high CPM rates.',
  },

  'youtube-rpm-real-estate': {
    title: 'Real Estate YouTube RPM',
    niche: 'Real Estate',
    rpm: '$12 - $38',
    description:
      'Real estate is one of the highest paying niches online.',
  },

  'youtube-rpm-insurance': {
    title: 'Insurance YouTube RPM',
    niche: 'Insurance',
    rpm: '$15 - $45',
    description:
      'Insurance keywords are among the most expensive in advertising.',
  },

  'youtube-rpm-fitness': {
    title: 'Fitness YouTube RPM',
    niche: 'Fitness',
    rpm: '$4 - $12',
    description:
      'Fitness channels monetize through supplements and coaching.',
  },

  'youtube-rpm-travel': {
    title: 'Travel YouTube RPM',
    niche: 'Travel',
    rpm: '$3 - $10',
    description:
      'Travel RPM varies heavily by audience location.',
  },

  'youtube-rpm-food': {
    title: 'Food YouTube RPM',
    niche: 'Food',
    rpm: '$2 - $8',
    description:
      'Food channels rely heavily on broad audience reach.',
  },

  'youtube-rpm-cars': {
    title: 'Automotive YouTube RPM',
    niche: 'Automotive',
    rpm: '$6 - $18',
    description:
      'Car-related advertisers often pay premium CPM rates.',
  },

  'youtube-rpm-investing': {
    title: 'Investing YouTube RPM',
    niche: 'Investing',
    rpm: '$15 - $40',
    description:
      'Investing content consistently ranks among top RPM niches.',
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