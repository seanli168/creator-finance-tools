import Link from 'next/link';

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
      'Calculate CPM using impressions and ad spend.',
  },

  {
    title: 'YouTube Money Calculator',
    href: '/tools/youtube-money-calculator',
    description:
      'Estimate YouTube earnings using CPM.',
  },

  {
    title: 'TikTok Money Calculator',
    href: '/tools/tiktok-money-calculator',
    description:
      'Estimate TikTok creator earnings.',
  },

  {
    title: 'Instagram Earnings Calculator',
    href: '/tools/instagram-earnings-calculator',
    description:
      'Estimate Instagram sponsorship revenue.',
  },
];

export default function RelatedTools() {
  return (
    <section className="mt-24">
      <h2 className="text-3xl font-bold">
        Related Creator Tools
      </h2>

      <p className="mt-4 text-gray-600 text-lg">
        Explore more monetization calculators and
        creator economy tools.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="border rounded-2xl p-6 hover:border-black transition"
          >
            <h3 className="text-xl font-semibold">
              {tool.title}
            </h3>

            <p className="mt-3 text-gray-600">
              {tool.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}