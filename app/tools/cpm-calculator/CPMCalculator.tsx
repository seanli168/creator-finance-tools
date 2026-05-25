'use client';

import { useState } from 'react';

import RelatedTools from '@/components/RelatedTools';

export default function CPMCalculator() {
  const [impressions, setImpressions] =
    useState('');

  const [cost, setCost] = useState('');

  const cpm =
    (Number(cost) / Number(impressions)) * 1000;

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">
        CPM Calculator
      </h1>

      <p className="mt-6 text-xl text-gray-600">
        Calculate advertising CPM using impressions
        and ad spend.
      </p>

      <div className="mt-12 space-y-8">
        <div>
          <label className="block text-lg font-medium">
            Impressions
          </label>

          <input
            type="number"
            value={impressions}
            onChange={(e) =>
              setImpressions(e.target.value)
            }
            placeholder="Enter impressions"
            className="w-full mt-3 border rounded-xl px-4 py-4 text-lg"
          />
        </div>

        <div>
          <label className="block text-lg font-medium">
            Ad Spend ($)
          </label>

          <input
            type="number"
            value={cost}
            onChange={(e) =>
              setCost(e.target.value)
            }
            placeholder="Enter ad spend"
            className="w-full mt-3 border rounded-xl px-4 py-4 text-lg"
          />
        </div>
      </div>

      <div className="mt-16 border rounded-2xl p-10">
        <h2 className="text-3xl font-bold">
          Estimated CPM
        </h2>

        <p className="mt-6 text-5xl font-bold">
          $
          {isNaN(cpm) || !isFinite(cpm)
            ? '0'
            : cpm.toFixed(2)}
        </p>
      </div>

      <section className="mt-24 prose prose-lg max-w-none">
        <h2>What Is CPM?</h2>

        <p>
          CPM stands for Cost Per Mille, which means
          the advertising cost per 1,000
          impressions.
        </p>

        <p>
          Advertisers use CPM to measure campaign
          efficiency and compare ad pricing across
          platforms such as YouTube, TikTok,
          Facebook, and Google Ads.
        </p>

        <h2>How To Calculate CPM</h2>

        <p>
          CPM is calculated using the following
          formula:
        </p>

        <div className="bg-gray-100 rounded-xl p-6 my-6 overflow-x-auto">
          <code className="text-lg">
            CPM = (Cost / Impressions) × 1000
          </code>
        </div>

        <p>
          For example, if an advertiser spends $500
          for 100,000 impressions:
        </p>

        <div className="bg-gray-100 rounded-xl p-6 my-6 overflow-x-auto">
          <code className="text-lg">
            CPM = (500 / 100000) × 1000 = 5
          </code>
        </div>

        <p>
          The CPM would be $5.
        </p>

        <h2>What Is A Good CPM?</h2>

        <p>
          CPM varies depending on industry,
          geography, audience targeting, and ad
          platform.
        </p>

        <ul>
          <li>Gaming: $2 - $6 CPM</li>
          <li>Finance: $15 - $40 CPM</li>
          <li>Business: $10 - $30 CPM</li>
          <li>Technology: $5 - $20 CPM</li>
        </ul>

        <h2>CPM vs RPM</h2>

        <p>
          CPM measures advertiser cost, while RPM
          measures creator earnings after platform
          fees and revenue sharing.
        </p>

        <h2>FAQ</h2>

        <h3>What does CPM mean?</h3>

        <p>
          CPM means Cost Per Mille, or the cost per
          1,000 impressions in advertising.
        </p>

        <h3>Why is CPM important?</h3>

        <p>
          CPM helps advertisers compare campaign
          costs and optimize ad spending efficiency.
        </p>

        <h3>What affects CPM?</h3>

        <p>
          CPM is influenced by audience quality,
          niche, seasonality, competition, and ad
          platform demand.
        </p>
      </section>

      <RelatedTools />
    </main>
  );
}