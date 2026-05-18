import Link from 'next/link';

const tools = [
  {
    title: 'YouTube Money Calculator',
    slug: 'youtube-money-calculator',
  },
  {
    title: 'TikTok Money Calculator',
    slug: 'tiktok-money-calculator',
  },
  {
    title: 'CPM Calculator',
    slug: 'cpm-calculator',
  },
];

export default function ToolsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">
        Creator Tools
      </h1>

      <p className="mt-6 text-xl text-gray-600">
        Free monetization calculators for creators.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="border rounded-2xl p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">
              {tool.title}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}