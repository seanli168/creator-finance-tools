import Link from 'next/link';

export const metadata = {
  title:
    'Creator Finance Tools - RPM, CPM & Earnings Calculators',

  description:
    'Free creator finance tools for YouTube, TikTok, Instagram, RPM, CPM, and earnings estimation. Calculate creator revenue instantly.',
};

const coreTools = [
  {
    title: 'RPM Calculator',
    href: '/tools/rpm-calculator',
    description:
      'Calculate RPM using revenue and views.',
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
    title: 'TikTok RPM Calculator',
    href: '/tools/tiktok-rpm-calculator',
    description:
      'Calculate TikTok RPM from views and revenue.',
  },
  {
    title: 'TikTok Money Calculator',
    href: '/tools/tiktok-money-calculator',
    description:
      'Estimate TikTok creator earnings and RPM.',
  },
  {
    title: 'Creator Earnings Calculator',
    href: '/tools/creator-earnings-calculator',
    description:
      'Estimate creator revenue across platforms.',
  },
];

const secondaryTools = [
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

const latestPosts = [
  {
    title: 'How Much Does TikTok Pay Per 1000 Views?',
    href: '/blog/how-much-does-tiktok-pay',
  },
  {
    title: 'YouTube RPM vs CPM Explained',
    href: '/blog/rpm-vs-cpm',
  },
  {
    title: 'How Creators Make Passive Income Online',
    href: '/blog/how-creators-make-passive-income',
  },
];

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">

      {/* HERO */}
      <section>
        <h1 className="text-6xl font-bold">
          Creator Finance Tools
        </h1>

        <p className="mt-6 text-2xl text-gray-600 max-w-3xl">
          Free tools to calculate RPM, CPM, YouTube earnings,
          TikTok revenue, and creator monetization insights.
        </p>

        <div className="mt-8 text-gray-700 text-lg max-w-3xl">
          Understand how much creators earn and optimize
          your content strategy with real monetization data.
        </div>
      </section>

      {/* CORE TOOLS */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-8">
          Core Monetization Tools
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {coreTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="border rounded-2xl p-8 hover:border-black transition"
            >
              <h3 className="text-2xl font-semibold">
                {tool.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* SECONDARY TOOLS */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-8">
          Social Media Tools
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {secondaryTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="border rounded-2xl p-8 hover:border-black transition"
            >
              <h3 className="text-2xl font-semibold">
                {tool.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

{/* FEATURED GUIDES */}

<section className="mt-24">
  <h2 className="text-4xl font-bold">
    Creator Monetization Guides
  </h2>

  <p className="mt-4 text-lg text-gray-600 max-w-3xl">
    Learn how creators earn money on YouTube, TikTok,
    affiliate marketing, and digital content platforms.
  </p>

  <div className="grid md:grid-cols-2 gap-8 mt-10">


<Link
  href="/youtube-rpm-guide"
  className="border rounded-2xl p-8 hover:border-black transition"
>
  <h3 className="text-2xl font-semibold">
    YouTube RPM Guide
  </h3>

  <p className="mt-4 text-gray-600">
    Understand RPM, CPM, and how YouTube creators
    maximize revenue.
  </p>
</Link>

<Link
  href="/youtube-monetization"
  className="border rounded-2xl p-8 hover:border-black transition"
>
  <h3 className="text-2xl font-semibold">
    YouTube Monetization Guide
  </h3>

  <p className="mt-4 text-gray-600">
    Learn every revenue stream available to
    YouTube creators.
  </p>
</Link>

<Link
  href="/tiktok-monetization"
  className="border rounded-2xl p-8 hover:border-black transition"
>
  <h3 className="text-2xl font-semibold">
    TikTok Monetization Guide
  </h3>

  <p className="mt-4 text-gray-600">
    Discover how TikTok creators earn through
    RPM, rewards, sponsorships, and affiliates.
  </p>
</Link>

<Link
  href="/affiliate-marketing-guide"
  className="border rounded-2xl p-8 hover:border-black transition"
>
  <h3 className="text-2xl font-semibold">
    Affiliate Marketing Guide
  </h3>

  <p className="mt-4 text-gray-600">
    Learn how creators generate passive income
    through affiliate marketing.
  </p>
</Link>


  </div>
</section>

      {/* LATEST BLOG POSTS */}
      <section className="mt-24 max-w-4xl">
        <h2 className="text-4xl font-bold">
          Latest Creator Insights
        </h2>

        <div className="mt-8 space-y-6">
          {latestPosts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="block text-xl text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
          ))}
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="mt-24 max-w-4xl">
        <h2 className="text-4xl font-bold">
          What Are Creator Finance Tools?
        </h2>

        <p className="mt-8 text-lg text-gray-700 leading-8">
          Creator finance tools help YouTubers, TikTok
          creators, influencers, and publishers estimate
          their earnings using RPM and CPM metrics.
        </p>

        <p className="mt-6 text-lg text-gray-700 leading-8">
          These tools are widely used to analyze content
          monetization performance and improve revenue
          strategies.
        </p>

        <p className="mt-6 text-lg text-gray-700 leading-8">
          RPM (Revenue Per Mille) and CPM (Cost Per Mille)
          are key metrics in digital advertising and creator
          monetization.
        </p>
      </section>

    </main>
  );
}