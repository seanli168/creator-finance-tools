import Link from 'next/link';

type Props = {
  params: {
    value: string;
  };
};

function estimateSponsorRate(value: string) {
  const rateMap: Record<string, string> = {
    '10k': '$50 - $200',
    '50k': '$200 - $500',
    '100k': '$500 - $1,500',
    '500k': '$2,000 - $10,000',
    '1-million': '$10,000 - $50,000',
  };

  return rateMap[value] || '$100 - $1,000';
}

function getCategory(value: string) {
  const categoryMap: Record<string, string> = {
    '10k': 'micro influencers',
    '50k': 'growing influencers',
    '100k': 'mid-sized influencers',
    '500k': 'large influencers',
    '1-million': 'top Instagram creators',
  };

  return categoryMap[value] || 'Instagram influencers';
}

export async function generateMetadata({
  params,
}: Props) {
  const value = params.value;

  return {
    title: `How Much Do ${value} Instagram Followers Make?`,

    description:
      `Instagram sponsorship rate estimates and influencer earnings for ${value} followers.`,
  };
}

export default function InstagramFollowersPage({
  params,
}: Props) {
  const value = params.value;

  const rate = estimateSponsorRate(value);

  const category = getCategory(value);

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">
        How Much Do {value} Instagram Followers Make?
      </h1>

      <div className="mt-10 prose prose-lg max-w-none">
        <p>
          {category} with {value} Instagram followers can
          typically charge around {rate} per sponsored post.
        </p>

        <h2>Estimated Instagram Sponsorship Rates</h2>

        <p>
          Average sponsorship price for {value} followers:
          <strong> {rate}</strong>
        </p>

        <h2>Factors Affecting Instagram Income</h2>

        <ul>
          <li>Follower engagement</li>
          <li>Niche</li>
          <li>Audience country</li>
          <li>Story views</li>
          <li>Brand partnerships</li>
        </ul>

        <h2>High Paying Instagram Niches</h2>

        <ul>
          <li>Fitness</li>
          <li>Beauty</li>
          <li>Finance</li>
          <li>Luxury lifestyle</li>
          <li>Business</li>
        </ul>

        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8">
            Related Instagram Pages
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/instagram-followers/10k"
              className="border rounded-2xl p-6 hover:border-black transition"
            >
              <h3 className="text-2xl font-semibold">
                10k Instagram Followers Earnings
              </h3>
            </Link>

            <Link
              href="/instagram-followers/100k"
              className="border rounded-2xl p-6 hover:border-black transition"
            >
              <h3 className="text-2xl font-semibold">
                100k Instagram Followers Earnings
              </h3>
            </Link>

            <Link
              href="/instagram-followers/1-million"
              className="border rounded-2xl p-6 hover:border-black transition"
            >
              <h3 className="text-2xl font-semibold">
                1 Million Instagram Followers Earnings
              </h3>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}