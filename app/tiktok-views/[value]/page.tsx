import Link from 'next/link';

type Props = {
  params: {
    value: string;
  };
};

function estimateRevenue(value: string) {
  const revenueMap: Record<string, string> = {
    '10k': '$1 - $20',
    '50k': '$5 - $100',
    '100k': '$10 - $200',
    '500k': '$50 - $1,000',
    '1-million': '$20 - $50',
    '5-million': '$100 - $500',
    '10-million': '$200 - $1,000',
  };

  return revenueMap[value] || '$10 - $500';
}

function getCategory(value: string) {
  const categoryMap: Record<string, string> = {
    '10k': 'small TikTok creators',
    '50k': 'growing TikTok creators',
    '100k': 'smaller influencers',
    '500k': 'mid-sized creators',
    '1-million': 'viral TikTok creators',
    '5-million': 'large influencers',
    '10-million': 'top TikTok creators',
  };

  return categoryMap[value] || 'TikTok creators';
}

export async function generateMetadata({
  params,
}: Props) {
  const value = params.value;

  return {
    title: `How Much Does ${value} TikTok Views Pay?`,

    description:
      `Estimated TikTok earnings and creator fund revenue for ${value} views.`,
  };
}

export default function TikTokViewsPage({
  params,
}: Props) {
  const value = params.value;

  const revenue = estimateRevenue(value);

  const category = getCategory(value);

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">
        How Much Does {value} TikTok Views Pay?
      </h1>

      <div className="mt-10 prose prose-lg max-w-none">
        <p>
          {category} can typically earn around {revenue}
          from {value} TikTok views depending on audience,
          engagement, and monetization methods.
        </p>

        <h2>Estimated TikTok Earnings</h2>

        <p>
          Estimated revenue for {value} TikTok views:
          <strong> {revenue}</strong>
        </p>

        <h2>How TikTok Creators Make Money</h2>

        <ul>
          <li>Creator Fund</li>
          <li>Brand sponsorships</li>
          <li>Affiliate marketing</li>
          <li>Live gifts</li>
          <li>Digital products</li>
        </ul>

        <h2>Factors Affecting TikTok Revenue</h2>

        <ul>
          <li>Audience country</li>
          <li>Video engagement</li>
          <li>Niche</li>
          <li>Follower count</li>
          <li>Brand partnerships</li>
        </ul>

        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8">
            Related TikTok Pages
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/tiktok-views/100k"
              className="border rounded-2xl p-6 hover:border-black transition"
            >
              <h3 className="text-2xl font-semibold">
                100k TikTok Views Earnings
              </h3>

              <p className="mt-3 text-gray-600">
                Estimate TikTok creator earnings for 100k views.
              </p>
            </Link>

            <Link
              href="/tiktok-views/1-million"
              className="border rounded-2xl p-6 hover:border-black transition"
            >
              <h3 className="text-2xl font-semibold">
                1 Million TikTok Views Earnings
              </h3>

              <p className="mt-3 text-gray-600">
                Learn how much TikTok pays for viral videos.
              </p>
            </Link>

            <Link
              href="/tools/tiktok-money-calculator"
              className="border rounded-2xl p-6 hover:border-black transition"
            >
              <h3 className="text-2xl font-semibold">
                TikTok Money Calculator
              </h3>

              <p className="mt-3 text-gray-600">
                Estimate TikTok earnings instantly.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}