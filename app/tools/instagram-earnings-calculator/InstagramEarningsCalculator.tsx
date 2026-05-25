'use client';

import { useState } from 'react';

import RelatedTools from '@/components/RelatedTools';

export default function InstagramEarningsCalculator() {
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
        Estimate Instagram influencer earnings
        using followers and engagement rate.
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
            placeholder="Enter followers"
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
          Estimated Earnings
        </h2>

        <p className="mt-6 text-5xl font-bold">
          $
          {isNaN(estimatedRate)
            ? '0'
            : estimatedRate.toFixed(2)}
        </p>
      </div>

      <section className="mt-24 prose prose-lg max-w-none">
        <h2>
          How Much Do Instagram Influencers Make?
        </h2>

        <p>
          Instagram influencers earn money through
          sponsorships, affiliate marketing, product
          sales, and brand collaborations.
        </p>

        <p>
          Earnings depend on follower count,
          engagement rate, niche, audience quality,
          and campaign type.
        </p>

        <h2>
          How To Calculate Instagram Earnings
        </h2>

        <p>
          Instagram sponsorship earnings are often
          estimated using engagement and follower
          count.
        </p>

        <div className="bg-gray-100 rounded-xl p-6 my-6 overflow-x-auto">
          <code className="text-lg">
            Estimated Earnings = Followers ×
            Engagement Rate × Sponsorship Value
          </code>
        </div>

        <p>
          Influencers with higher engagement rates
          can charge significantly more for brand
          partnerships.
        </p>

        <h2>
          What Is A Good Instagram Engagement Rate?
        </h2>

        <ul>
          <li>1% - 2% = Average</li>
          <li>3% - 5% = Good</li>
          <li>6%+ = Excellent</li>
        </ul>

        <h2>
          How Influencers Make Money On Instagram
        </h2>

        <p>
          Many creators earn more from sponsorships
          and affiliate deals than from platform
          monetization directly.
        </p>

        <h2>FAQ</h2>

        <h3>
          How much does Instagram pay per post?
        </h3>

        <p>
          Sponsorship pricing varies widely, but
          influencers may charge anywhere from $50
          to thousands of dollars per sponsored
          post.
        </p>

        <h3>
          What affects Instagram sponsorship rates?
        </h3>

        <p>
          Engagement rate, audience demographics,
          niche, and content quality affect pricing.
        </p>

        <h3>
          Can small influencers make money on
          Instagram?
        </h3>

        <p>
          Yes. Micro influencers often have higher
          engagement rates and can attract valuable
          sponsorship opportunities.
        </p>
      </section>

      <RelatedTools />
    </main>
  );
}