'use client';

import { useState } from 'react';

export default function SponsorshipCalculator() {
  const [followers, setFollowers] = useState('');
  const [engagement, setEngagement] = useState('');
  const [price, setPrice] = useState<number | null>(null);

  function calculatePrice() {
    const followerCount = parseInt(followers);
    const engagementRate = parseFloat(engagement);

    if (!followerCount || !engagementRate) {
      return;
    }

    const estimated =
      followerCount * (engagementRate / 100) * 0.15;

    setPrice(Math.round(estimated));
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">
        Sponsorship Rate Calculator
      </h1>

      <p className="mt-6 text-xl text-gray-600">
        Estimate how much influencers can charge for sponsored
        posts based on followers and engagement rate.
      </p>

      <div className="mt-12 border rounded-2xl p-8">
        <div className="space-y-6">
          <div>
            <label className="block font-semibold mb-2">
              Followers
            </label>

            <input
              type="number"
              value={followers}
              onChange={(e) => setFollowers(e.target.value)}
              placeholder="Enter follower count"
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Engagement Rate (%)
            </label>

            <input
              type="number"
              value={engagement}
              onChange={(e) => setEngagement(e.target.value)}
              placeholder="Enter engagement rate"
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <button
            onClick={calculatePrice}
            className="bg-black text-white px-6 py-3 rounded-xl"
          >
            Calculate Sponsorship Rate
          </button>

          {price !== null && (
            <div className="mt-8 border rounded-2xl p-6">
              <h2 className="text-3xl font-bold">
                Estimated Sponsorship Price
              </h2>

              <p className="mt-4 text-4xl font-bold">
                ${price}
              </p>
            </div>
          )}
        </div>
      </div>

      <section className="mt-20 prose prose-lg max-w-none">
        <h2>How Sponsorship Pricing Works</h2>

        <p>
          Influencer sponsorship pricing is typically based on
          audience size, engagement rate, niche, and audience
          demographics.
        </p>

        <h2>High Paying Niches</h2>

        <ul>
          <li>Finance</li>
          <li>Business</li>
          <li>Fitness</li>
          <li>Luxury</li>
          <li>Technology</li>
        </ul>
      </section>
    </main>
  );
}