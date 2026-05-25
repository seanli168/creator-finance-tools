'use client';

import { useState } from 'react';

import RelatedTools from '@/components/RelatedTools';

export default function EngagementRateCalculator() {
  const [followers, setFollowers] =
    useState('');

  const [interactions, setInteractions] =
    useState('');

  const engagementRate =
    (Number(interactions) / Number(followers)) *
    100;

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">
        Engagement Rate Calculator
      </h1>

      <p className="mt-6 text-xl text-gray-600">
        Calculate social media engagement rate using
        followers and interactions.
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
            Total Interactions
          </label>

          <input
            type="number"
            value={interactions}
            onChange={(e) =>
              setInteractions(e.target.value)
            }
            placeholder="Likes + comments + shares"
            className="w-full mt-3 border rounded-xl px-4 py-4 text-lg"
          />
        </div>
      </div>

      <div className="mt-16 border rounded-2xl p-10">
        <h2 className="text-3xl font-bold">
          Engagement Rate
        </h2>

        <p className="mt-6 text-5xl font-bold">
          {isNaN(engagementRate) ||
          !isFinite(engagementRate)
            ? '0'
            : engagementRate.toFixed(2)}
          %
        </p>
      </div>

      <section className="mt-24 prose prose-lg max-w-none">
        <h2>What Is Engagement Rate?</h2>

        <p>
          Engagement rate measures how actively an
          audience interacts with social media
          content.
        </p>

        <p>
          Interactions include likes, comments,
          shares, saves, and other engagement
          signals.
        </p>

        <h2>
          How To Calculate Engagement Rate
        </h2>

        <div className="bg-gray-100 rounded-xl p-6 my-6 overflow-x-auto">
          <code className="text-lg">
            Engagement Rate = (Interactions /
            Followers) × 100
          </code>
        </div>

        <h2>
          What Is A Good Engagement Rate?
        </h2>

        <ul>
          <li>1% - 2% = Average</li>
          <li>3% - 5% = Good</li>
          <li>6%+ = Excellent</li>
        </ul>

        <h2>FAQ</h2>

        <h3>
          Why is engagement rate important?
        </h3>

        <p>
          Brands use engagement rate to evaluate
          creator influence and audience quality.
        </p>

        <h3>
          What affects engagement rate?
        </h3>

        <p>
          Content quality, audience loyalty, niche,
          and platform algorithms all affect
          engagement.
        </p>
      </section>

      <RelatedTools />
    </main>
  );
}