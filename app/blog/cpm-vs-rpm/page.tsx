import Link from 'next/link';

export const metadata = {
  title: 'CPM vs RPM: What’s the Difference?',
  description:
    'Learn the difference between CPM and RPM for YouTube creators and publishers.',
};

export default function CPMvsRPMPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">
        CPM vs RPM: What’s the Difference?
      </h1>

      <div className="mt-10 prose prose-lg max-w-none">
        <p>
          CPM and RPM are two important metrics used in
          YouTube monetization and online advertising.
        </p>

        <h2>What Is CPM?</h2>

        <p>
          CPM stands for Cost Per Mille, meaning the amount
          advertisers pay per 1,000 ad impressions.
        </p>

        <p>
          CPM measures advertiser spending before YouTube
          takes its revenue share.
        </p>

        <h2>What Is RPM?</h2>

        <p>
          RPM stands for Revenue Per Mille, which represents
          creator earnings per 1,000 views after platform
          revenue sharing.
        </p>

        <h2>Main Difference Between CPM and RPM</h2>

        <ul>
          <li>CPM = advertiser cost</li>
          <li>RPM = creator earnings</li>
        </ul>

        <p>
          RPM is usually lower than CPM because platforms
          take a percentage of ad revenue.
        </p>

        <h2>Why RPM Matters for Creators</h2>

        <p>
          RPM provides a more realistic estimate of actual
          creator income.
        </p>

        <h2>High RPM Niches</h2>

        <ul>
          <li>Finance</li>
          <li>Business</li>
          <li>Software</li>
          <li>Marketing</li>
          <li>Insurance</li>
        </ul>

        <h2>Use Our Free Calculators</h2>

        <div className="grid md:grid-cols-2 gap-6 not-prose mt-8">
          <Link
            href="/tools/cpm-calculator"
            className="border rounded-2xl p-6 hover:border-black transition"
          >
            <h3 className="text-2xl font-semibold">
              CPM Calculator
            </h3>
          </Link>

          <Link
            href="/tools/rpm-calculator"
            className="border rounded-2xl p-6 hover:border-black transition"
          >
            <h3 className="text-2xl font-semibold">
              RPM Calculator
            </h3>
          </Link>
        </div>
      </div>

      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-8">
          Related Articles
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Link
            href="/blog/highest-rpm-youtube-niches"
            className="border rounded-2xl p-8 hover:border-black transition"
          >
            <h3 className="text-2xl font-semibold">
              Highest RPM YouTube Niches
            </h3>

            <p className="mt-4 text-gray-600">
              Discover the most profitable YouTube niches.
            </p>
          </Link>

          <Link
            href="/tools/rpm-calculator"
            className="border rounded-2xl p-8 hover:border-black transition"
          >
            <h3 className="text-2xl font-semibold">
              RPM Calculator
            </h3>

            <p className="mt-4 text-gray-600">
              Calculate YouTube RPM instantly.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}