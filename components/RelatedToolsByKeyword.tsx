import Link from 'next/link';

export default function RelatedToolsByKeyword({
  title,
}: {
  title: string;
}) {
  const lowerTitle = title.toLowerCase();

  const tools: {
    name: string;
    href: string;
  }[] = [];

  // RPM
  if (
    lowerTitle.includes('rpm')
  ) {
    tools.push({
      name: 'RPM Calculator',
      href: '/tools/rpm-calculator',
    });
  }

  // CPM
  if (
    lowerTitle.includes('cpm')
  ) {
    tools.push({
      name: 'CPM Calculator',
      href: '/tools/cpm-calculator',
    });
  }

  // TikTok
  if (
    lowerTitle.includes('tiktok')
  ) {
    tools.push({
      name: 'TikTok RPM Calculator',
      href: '/tools/tiktok-rpm-calculator',
    });

    tools.push({
      name: 'TikTok Money Calculator',
      href: '/tools/tiktok-money-calculator',
    });
  }

  // YouTube
  if (
    lowerTitle.includes('youtube')
  ) {
    tools.push({
      name: 'YouTube Money Calculator',
      href: '/tools/youtube-money-calculator',
    });

    tools.push({
      name: 'RPM Calculator',
      href: '/tools/rpm-calculator',
    });
  }

  // Affiliate
  if (
    lowerTitle.includes('affiliate')
  ) {
    tools.push({
      name: 'Creator Earnings Calculator',
      href: '/tools/creator-earnings-calculator',
    });
  }

  // Creator
  if (
    lowerTitle.includes('creator')
  ) {
    tools.push({
      name: 'Creator Earnings Calculator',
      href: '/tools/creator-earnings-calculator',
    });
  }

  // 去重
  const uniqueTools = tools.filter(
    (tool, index, self) =>
      index ===
      self.findIndex(
        (t) => t.href === tool.href
      )
  );

  if (
    uniqueTools.length === 0
  ) {
    return null;
  }

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold">
        Related Tools
      </h2>

      <p className="mt-4 text-gray-600">
        Useful calculators related to this article.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {uniqueTools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="border rounded-xl p-6 hover:border-black transition"
          >
            <div className="text-xl font-semibold">
              {tool.name}
            </div>

            <div className="text-gray-500 mt-2">
              Open Tool →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}