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
      'Calculate CPM based on revenue and impressions.',
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
];

const seoPages = [
  {
    title: 'How Much Does 100k YouTube Views Make?',
    href: '/youtube-views/100k',
  },
  {
    title: 'How Much Does 1 Million YouTube Views Make?',
    href: '/youtube-views/1-million',
  },
  {
    title: 'How Much Does 5 Million YouTube Views Make?',
    href: '/youtube-views/5-million',
  },
];

export default function ToolsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">
        Creator Finance Tools
      </h1>

      <p className="mt-6 text-xl text-gray-600">
        Free calculators and monetization tools for creators,
        influencers, streamers, and online entrepreneurs.
      </p>

      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-8">
          Popular Tools
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="border rounded-2xl p-8 hover:border-black transition"
            >
              <h3 className="text-2xl font-semibold">
                {tool.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-8">
          Popular SEO Pages
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {seoPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="border rounded-2xl p-8 hover:border-black transition"
            >
              <h3 className="text-2xl font-semibold">
                {page.title}
              </h3>

              <p className="mt-3 text-gray-600">
                Learn estimated creator earnings and YouTube
                monetization insights.
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}