'use client';

import { useState } from 'react';

export default function CPMCalculatorPage() {
  const [revenue, setRevenue] = useState(1000);
  const [impressions, setImpressions] = useState(100000);

  const cpm = (
    (revenue / impressions) * 1000
  ).toFixed(2);

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">
        CPM Calculator
      </h1>

      <p className="mt-6 text-xl text-gray-600">
        Calculate CPM based on revenue and impressions.
      </p>

      <div className="mt-12 border rounded-3xl p-8 shadow-sm">
        <div className="space-y-6">
          <div>
            <label className="block mb-2 font-medium">
              Revenue ($)
            </label>

            <input
              type="number"
              value={revenue}
              onChange={(e) => setRevenue(Number(e.target.value))}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Impressions
            </label>

            <input
              type="number"
              value={impressions}
              onChange={(e) => setImpressions(Number(e.target.value))}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div className="bg-black text-white rounded-2xl p-8">
            <p className="text-lg">
              Estimated CPM
            </p>

            <h2 className="text-6xl font-bold mt-3">
              ${cpm}
            </h2>

            <p className="mt-3 text-gray-300">
              Cost per 1,000 impressions.
            </p>
          </div>
        </div>
      </div>

      <section className="mt-20 prose prose-lg max-w-none">
        <h2>What Is CPM?</h2>

        <p>
          CPM stands for Cost Per Mille, meaning the cost per
          1,000 ad impressions.
        </p>

        <p>
          CPM is widely used in digital advertising, YouTube,
          blogging, and online marketing.
        </p>

        <h2>CPM Formula</h2>

        <p>
          CPM = (Revenue / Impressions) × 1000
        </p>

        <h2>Average CPM Rates</h2>

        <ul>
          <li>YouTube Finance Channels: $20 - $50 CPM</li>
          <li>Gaming Channels: $3 - $10 CPM</li>
          <li>Blogs: $2 - $20 CPM</li>
          <li>TikTok: Lower CPM than YouTube</li>
        </ul>

        <h2>FAQ</h2>

        <h3>What is a good CPM?</h3>

        <p>
          A good CPM depends on niche and audience location.
          Finance and business niches usually have the highest CPM.
        </p>

        <h3>Why is CPM important?</h3>

        <p>
          CPM helps creators and advertisers estimate advertising
          profitability and campaign performance.
        </p>
      </section>
    </main>
  );
}