type Props = {
  params: {
    value: string;
  };
};

function estimateRevenue(value: string) {
  if (value === '100k') {
    return '$100 - $3,000';
  }

  if (value === '1-million') {
    return '$1,000 - $30,000';
  }

  if (value === '10-million') {
    return '$10,000 - $300,000';
  }

  return '$500 - $10,000';
}

function getCategory(value: string) {
  if (value === '100k') {
    return 'smaller creators';
  }

  if (value === '1-million') {
    return 'mid-sized creators';
  }

  if (value === '10-million') {
    return 'large YouTube channels';
  }

  return 'YouTube creators';
}

export async function generateMetadata({
  params,
}: Props) {
  return {
    title: `How Much Does ${params.value} YouTube Views Make?`,
    description: `Estimated YouTube earnings and CPM analysis for ${params.value} YouTube views.`,
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
    </main>
  );
}