import Link from 'next/link';

export const metadata = {
  title:
    'Creator Tools - RPM, CPM & Earnings Calculators',

  description:
    'Free creator monetization tools including RPM calculators, CPM calculators, YouTube earnings calculators, TikTok revenue calculators, and more.',
};

const tools = [
  {
    title: 'RPM Calculator',
    href: '/tools/rpm-calculator',
    description:
      'Calculate RPM using revenue and views.',
  },

  {
    title: 'TikTok RPM Calculator',
    href: '/tools/tiktok-rpm-calculator',
    description:
      'Calculate TikTok RPM from views and revenue.',
  },

  {
    title: 'YouTube Money Calculator',
    href: '/tools/youtube-money-calculator',
    description:
      'Estimate YouTube earnings using views and CPM.',
  },

  {
    title: 'TikTok Money Calculator',
    href: '/tools/tiktok-money-calculator',
    description:
      'Estimate TikTok creator earnings and RPM.',
  },

  {
    title: 'CPM Calculator',
    href: '/tools/cpm-calculator',
    description:
      'Calculate CPM based on ad spend and impressions.',
  },

  {
    title: 'Instagram Earnings Calculator',
    href: '/tools/instagram-earnings-calculator',
    description:
      'Estimate Instagram sponsorship earnings.',
  },

  {
    title: 'Engagement Rate Calculator',
    href: '/tools/engagement-rate-calculator',
    description:
      'Calculate social media engagement rate.',
  },

  {
    title: 'Creator Earnings Calculator',
    href: '/tools/creator-earnings-calculator',
    description:
      'Estimate creator revenue across multiple platforms.',
  },
];

export default function ToolsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-6xl font-bold">
        Creator Tools
      </h1>

      <p className="mt-6 text-2xl text-gray-600 max-w-3xl">
        Free calculators for YouTube, TikTok,
        Instagram, RPM, CPM, and creator earnings.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="border rounded-2xl p-8 hover:border-black transition"
          >
            <h2 className="text-2xl font-semibold">
              {tool.title}
            </h2>

            <p className="mt-4 text-gray-600">
              {tool.description}
            </p>
          </Link>
        ))}
      </div>

      <section className="mt-24 max-w-4xl">
        <h2 className="text-4xl font-bold">
          Creator Monetization Tools
        </h2>

        <p className="mt-8 text-lg text-gray-700 leading-8">
          Use these free calculators to estimate
          RPM, CPM, YouTube revenue, TikTok earnings,
          and influencer monetization opportunities.
        </p>

        <p className="mt-6 text-lg text-gray-700 leading-8">
          These tools are designed for creators,
          marketers, advertisers, publishers, and
          affiliate marketers who want quick revenue
          estimates.
        </p>

        <p className="mt-6 text-lg text-gray-700 leading-8">
          New calculators are added regularly as we
          expand our creator finance tool library.
        </p>
      </section>
    </main>
  );
}