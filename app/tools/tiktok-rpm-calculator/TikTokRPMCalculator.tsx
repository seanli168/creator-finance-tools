'use client';

import { useState } from 'react';

import RelatedTools from '@/components/RelatedTools';

export default function TikTokRPMCalculator() {
  const [views, setViews] = useState('');
  const [revenue, setRevenue] = useState('');

  const rpm =
    Number(views) > 0
      ? (Number(revenue) / Number(views)) * 1000
      : 0;

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">
        TikTok RPM Calculator
      </h1>

      <p className="mt-6 text-xl text-gray-600">
        Calculate TikTok RPM based on views and revenue.
      </p>

      <div className="mt-12 space-y-8">
        <div>
          <label className="block text-lg font-medium">
            Total Views
          </label>

          <input
            type="number"
            value={views}
            onChange={(e) =>
              setViews(e.target.value)
            }
            placeholder="Enter views"
            className="w-full mt-3 border rounded-xl px-4 py-4 text-lg"
          />
        </div>

        <div>
          <label className="block text-lg font-medium">
            Revenue ($)
          </label>

          <input
            type="number"
            value={revenue}
            onChange={(e) =>
              setRevenue(e.target.value)
            }
            placeholder="Enter revenue"
            className="w-full mt-3 border rounded-xl px-4 py-4 text-lg"
          />
        </div>
      </div>

      <div className="mt-16 border rounded-2xl p-10">
        <h2 className="text-3xl font-bold">
          Estimated RPM
        </h2>

        <p className="mt-6 text-5xl font-bold">
          $
          {isNaN(rpm)
            ? '0'
            : rpm.toFixed(2)}
        </p>
      </div>

      <section className="mt-24 prose prose-lg max-w-none">
        <h2>What Is TikTok RPM?</h2>

        <p>
          TikTok RPM stands for Revenue Per Mille,
          which measures how much money creators
          earn for every 1,000 views.
        </p>

        <p>
          RPM helps creators understand the real
          value of their content and audience.
        </p>

        <h2>How To Calculate TikTok RPM</h2>

        <p>
          TikTok RPM is calculated using the
          following formula:
        </p>

        <div className="bg-gray-100 rounded-xl p-6 my-6 overflow-x-auto">
          <code className="text-lg">
            RPM = (Revenue / Views) × 1000
          </code>
        </div>

        <p>
          Example:
        </p>

        <div className="bg-gray-100 rounded-xl p-6 my-6 overflow-x-auto">
          <code className="text-lg">
            RPM = (500 / 100000) × 1000 = 5
          </code>
        </div>

        <p>
          In this case, the TikTok RPM would be $5.
        </p>

        <h2>What Affects TikTok RPM?</h2>

        <ul>
          <li>Audience country</li>
          <li>Content niche</li>
          <li>Watch time</li>
          <li>Advertiser demand</li>
          <li>TikTok Creator Rewards eligibility</li>
        </ul>

        <h2>What Is A Good TikTok RPM?</h2>

        <p>
          RPM varies significantly depending on the
          audience and niche.
        </p>

        <ul>
          <li>Entertainment: $0.20 - $2 RPM</li>
          <li>Business: $2 - $8 RPM</li>
          <li>Finance: $5 - $20 RPM</li>
          <li>Technology: $2 - $10 RPM</li>
        </ul>

        <h2>FAQ</h2>

        <h3>What does RPM mean on TikTok?</h3>

        <p>
          RPM measures how much revenue a creator
          earns per 1,000 views.
        </p>

        <h3>Is TikTok RPM higher than YouTube RPM?</h3>

        <p>
          In most cases YouTube RPM is higher,
          although results vary by niche.
        </p>

        <h3>Can TikTok RPM change over time?</h3>

        <p>
          Yes. RPM can change depending on season,
          advertiser demand, audience location, and
          content category.
        </p>
      </section>

      <RelatedTools />
    </main>
  );
}