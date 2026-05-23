'use client';

import { useState } from 'react';

export default function InstagramEarningsCalculatorPage() {
  const [followers, setFollowers] =
    useState('');

  const [engagementRate, setEngagementRate] =
    useState('');

  const estimatedRate =
    Number(followers) *
    (Number(engagementRate) / 100) *
    0.02;

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">
        Instagram Earnings Calculator
      </h1>

      <p className="mt-6 text-xl text-gray-600">
        Estimate Instagram sponsorship earnings based
        on followers and engagement rate.
      </p>

      <div className="mt-12 space-y-8">
        <div>
          <label className="block text-lg font-medium">
            Followers
          </label>

          <input
            type="number"
            value={followers}
            onChange={(e) =>
              setFollowers(e.target.value)
            }
            placeholder="Enter follower count"
            className="w-full mt-3 border rounded-xl px-4 py-4 text-lg"
          />
        </div>

        <div>
          <label className="block text-lg font-medium">
            Engagement Rate (%)
          </label>

          <input
            type="number"
            value={engagementRate}
            onChange={(e) =>
              setEngagementRate(e.target.value)
            }
            placeholder="Enter engagement rate"
            className="w-full mt-3 border rounded-xl px-4 py-4 text-lg"
          />
        </div>
      </div>

      <div className="mt-16 border rounded-2xl p-10">
        <h2 className="text-3xl font-bold">
          Estimated Sponsorship Value
        </h2>

        <p className="mt-6 text-5xl font-bold">
          $
          {isNaN(estimatedRate)
            ? '0'
            : estimatedRate.toFixed(2)}
        </p>
      </div>

      <section className="mt-24">
        <h2 className="text-3xl font-bold">
          How Much Do Instagram Influencers Make?
        </h2>

        <p className="mt-6 text-lg text-gray-700 leading-8">
          Instagram influencer earnings depend on
          audience size, engagement rate, niche, and
          sponsorship deals.
        </p>

        <p className="mt-6 text-lg text-gray-700 leading-8">
          Finance, luxury, AI, beauty, and business
          creators often command premium sponsorship
          rates.
        </p>
      </section>
    </main>
  );
}