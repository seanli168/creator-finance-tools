type Props = {
  params: {
    value: string;
  };
};

import Link from 'next/link';

function estimateRevenue(value: string) {
  const revenueMap: Record<string, string> = {
    '10k': '$10 - $300',
    '50k': '$50 - $1,500',
    '100k': '$100 - $3,000',
    '500k': '$500 - $15,000',
    '1-million': '$1,000 - $30,000',
    '5-million': '$5,000 - $150,000',
    '10-million': '$10,000 - $300,000',
    '50-million': '$50,000 - $1,500,000',
  };

  return revenueMap[value] || '$500 - $10,000';
}

function getCategory(value: string) {
  const categoryMap: Record<string, string> = {
    '10k': 'small creators',
    '50k': 'growing creators',
    '100k': 'smaller creators',
    '500k': 'mid-level creators',
    '1-million': 'mid-sized creators',
    '5-million': 'large creators',
    '10-million': 'major YouTube channels',
    '50-million': 'top creators',
  };

  return categoryMap[value] || 'YouTube creators';
}

export async function generateMetadata({
  params,
}: Props) {
  const value = params.value;

  return {
    title: `How Much Does ${value} YouTube Views Make?`,

    description:
      `Discover estimated YouTube earnings, CPM, and monetization insights for ${value} YouTube views.`,

    openGraph: {
      title: `How Much Does ${value} YouTube Views Make?`,

      description:
        `Estimated creator earnings and YouTube revenue analysis for ${value} views.`,
    },

    twitter: {
      card: 'summary_large_image',

      title: `How Much Does ${value} YouTube Views Make?`,

      description:
        `YouTube monetization estimates for ${value} views.`,
    },
  };
}

export default function DynamicYouTubePage({
  params,
}: Props) {
  const value = params.value;

  const revenue = estimateRevenue(value);

  const category = getCategory(value);

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">
        How Much Does {value} YouTube Views Make?
      </h1>

      <div className="mt-10 prose prose-lg max-w-none">
        <p>
          {category} can typically earn around {revenue}
          from {value} YouTube views depending on CPM,
          audience demographics, and niche.
        </p>

        <h2>Estimated Revenue</h2>

        <p>
          Estimated earnings for {value} YouTube views:
          <strong> {revenue}</strong>
        </p>

        <h2>High CPM Niches</h2>

        <ul>
          <li>Finance</li>
          <li>Business</li>
          <li>Software</li>
          <li>Insurance</li>
          <li>Technology</li>
        </ul>

        <h2>Low CPM Niches</h2>

        <ul>
          <li>Memes</li>
          <li>Entertainment</li>
          <li>Compilation videos</li>
          <li>General gaming</li>
        </ul>

        <h2>How Creators Increase Revenue</h2>

        <ul>
          <li>Improve audience retention</li>
          <li>Target Tier 1 countries</li>
          <li>Create advertiser-friendly content</li>
          <li>Use affiliate marketing</li>
          <li>Add sponsorships</li>
        </ul>

        <h2>Conclusion</h2>

        <p>
          YouTube monetization varies significantly, but creators
          in premium niches can generate substantial revenue
          from large view counts.
        </p>
      </div>
      <section className="mt-20">
  <h2 className="text-3xl font-bold mb-8">
    Related YouTube Revenue Pages
  </h2>

  <div className="grid md:grid-cols-2 gap-6">
    <Link
      href="/youtube-views/100k"
      className="border rounded-2xl p-6 hover:border-black transition"
    >
      <h3 className="text-2xl font-semibold">
        100k YouTube Views Earnings
      </h3>

      <p className="mt-3 text-gray-600">
        Estimate how much creators make from 100k views.
      </p>
    </Link>

    <Link
      href="/youtube-views/1-million"
      className="border rounded-2xl p-6 hover:border-black transition"
    >
      <h3 className="text-2xl font-semibold">
        1 Million YouTube Views Earnings
      </h3>

      <p className="mt-3 text-gray-600">
        Revenue estimates for 1 million YouTube views.
      </p>
    </Link>

    <Link
      href="/youtube-views/5-million"
      className="border rounded-2xl p-6 hover:border-black transition"
    >
      <h3 className="text-2xl font-semibold">
        5 Million YouTube Views Earnings
      </h3>

      <p className="mt-3 text-gray-600">
        Discover estimated income for large YouTube channels.
      </p>
    </Link>

    <Link
      href="/tools/youtube-money-calculator"
      className="border rounded-2xl p-6 hover:border-black transition"
    >
      <h3 className="text-2xl font-semibold">
        YouTube Money Calculator
      </h3>

      <p className="mt-3 text-gray-600">
        Use our calculator to estimate YouTube revenue.
      </p>
    </Link>
  </div>
</section>
    </main>
  );
}