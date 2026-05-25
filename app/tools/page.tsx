import Link from 'next/link';
export const metadata = {
  title:
    'Creator Tools - RPM, CPM & Earnings Calculators',

  description:
    'Free creator monetization tools including RPM calculator, CPM calculator, YouTube money calculator, TikTok earnings calculator, and more.',
};

const tools = [
  {
    title: 'RPM Calculator',
    href: '/tools/rpm-calculator',
    description:
      'Estimate creator earnings using RPM and views.',
  },

  {
    title: 'CPM Calculator',
    href: '/tools/cpm-calculator',
    description:
      'Calculate CPM based on ad spend and impressions.',
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
];

export default function ToolsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-6xl font-bold">
        Creator Tools
      </h1>

      <p className="mt-6 text-2xl text-gray-600 max-w-3xl">
        Free calculators and creator monetization tools
        for YouTube, TikTok, Instagram, and more.
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
          Use these free creator calculators to estimate
          RPM, CPM, YouTube revenue, and social media
          earnings.
        </p>

        <p className="mt-6 text-lg text-gray-700 leading-8">
          These tools are designed for creators,
          advertisers, marketers, and publishers.
        </p>
      </section>
    </main>
  );
}