import Link from 'next/link';

const tools = [
  {
    title: 'YouTube Money Calculator',
    description:
      'Estimate YouTube earnings based on views and CPM.',
    href: '/tools/youtube-money-calculator',
  },

  {
    title: 'TikTok Money Calculator',
    description:
      'Calculate estimated TikTok creator earnings.',
    href: '/tools/tiktok-money-calculator',
  },

  {
    title: 'CPM Calculator',
    description:
      'Calculate advertising CPM using cost and impressions.',
    href: '/tools/cpm-calculator',
  },

  {
    title: 'Sponsorship Rate Calculator',
    description:
      'Estimate influencer sponsorship pricing and brand deal rates.',
    href: '/tools/sponsorship-calculator',
  },

  {
    title: 'Engagement Rate Calculator',
    description:
      'Calculate Instagram, TikTok, and YouTube engagement rates.',
    href: '/tools/engagement-rate-calculator',
  },

  {
    title: 'RPM Calculator',
    description:
      'Calculate YouTube RPM using revenue and views.',
    href: '/tools/rpm-calculator',
  },

  {
    title: 'Twitch Money Calculator',
    description:
      'Estimate Twitch streamer income from subscribers, ads, and donations.',
    href: '/tools/twitch-money-calculator',
  },

  {
    title: 'Affiliate Income Calculator',
    description:
      'Estimate affiliate marketing income using traffic and conversion rates.',
    href: '/tools/affiliate-income-calculator',
  },
];

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <section className="text-center">
        <h1 className="text-6xl font-bold">
          Creator Finance Tools
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Free creator economy calculators for YouTubers,
          TikTok creators, influencers, streamers, and
          affiliate marketers.
        </p>
      </section>

      <section className="mt-24">
        <h2 className="text-4xl font-bold mb-10">
          Popular Creator Tools
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="border rounded-2xl p-8 hover:border-black transition"
            >
              <h3 className="text-2xl font-semibold">
                {tool.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-4xl font-bold mb-10">
          Latest Creator Guides
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Link
            href="/blog/cpm-vs-rpm"
            className="border rounded-2xl p-8 hover:border-black transition"
          >
            <h3 className="text-2xl font-semibold">
              CPM vs RPM: What’s the Difference?
            </h3>

            <p className="mt-4 text-gray-600">
              Learn how CPM and RPM affect creator earnings.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}