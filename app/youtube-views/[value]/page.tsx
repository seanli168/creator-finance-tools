type Props = {
  params: {
    value: string;
  };
};

export default function DynamicYouTubePage({
  params,
}: Props) {
  const value = params.value;

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">
        How Much Does {value} YouTube Views Make?
      </h1>

      <div className="mt-10 prose prose-lg max-w-none">
        <p>
          Estimated YouTube earnings for {value} views can vary
          significantly depending on niche, audience location,
          CPM, and engagement.
        </p>

        <h2>Estimated Revenue Range</h2>

        <p>
          Many creators earn anywhere between a few hundred
          dollars to tens of thousands of dollars depending
          on advertising rates.
        </p>

        <h2>Factors Affecting YouTube Earnings</h2>

        <ul>
          <li>Audience country</li>
          <li>CPM rates</li>
          <li>Video niche</li>
          <li>Watch time</li>
          <li>Advertiser demand</li>
        </ul>

        <h2>YouTube Monetization Tips</h2>

        <ul>
          <li>Focus on high CPM niches</li>
          <li>Create longer videos</li>
          <li>Improve audience retention</li>
          <li>Use affiliate marketing</li>
          <li>Build sponsorship opportunities</li>
        </ul>

        <h2>Conclusion</h2>

        <p>
          YouTube creator income varies widely, but creators
          with strong engagement and premium audiences can
          generate substantial revenue.
        </p>
      </div>
    </main>
  );
}