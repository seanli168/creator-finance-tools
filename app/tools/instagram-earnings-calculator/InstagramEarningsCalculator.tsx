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

      <div className="mt-12 space-y-8">
        <input
          type="number"
          value={followers}
          onChange={(e) =>
            setFollowers(e.target.value)
          }
          placeholder="Followers"
          className="w-full border rounded-xl px-4 py-4"
        />

        <input
          type="number"
          value={engagementRate}
          onChange={(e) =>
            setEngagementRate(e.target.value)
          }
          placeholder="Engagement Rate"
          className="w-full border rounded-xl px-4 py-4"
        />
      </div>

      <div className="mt-16 border rounded-2xl p-10">
        <p className="text-5xl font-bold">
          $
          {isNaN(estimatedRate)
            ? '0'
            : estimatedRate.toFixed(2)}
        </p>
      </div>
      <RelatedTools />
    </main>
  );
}