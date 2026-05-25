'use client';

import { useState } from 'react';

import RelatedTools from '@/components/RelatedTools';

export default function RPMCalculator() {
  const [views, setViews] = useState('');
  const [rpm, setRpm] = useState('');

  const earnings =
    (Number(views) / 1000) * Number(rpm);

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">
        RPM Calculator
      </h1>

      <p className="mt-6 text-xl text-gray-600">
        Estimate creator earnings based on RPM and
        total views.
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
            RPM ($)
          </label>

          <input
            type="number"
            value={rpm}
            onChange={(e) =>
              setRpm(e.target.value)
            }
            placeholder="Enter RPM"
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
          {isNaN(earnings)
            ? '0'
            : earnings.toFixed(2)}
        </p>
      </div>

      <section className="mt-24 prose prose-lg max-w-none">
        <h2>What Is RPM?</h2>

        <p>
          RPM stands for Revenue Per Mille, which
          means revenue earned per 1,000 views.
          Creators use RPM to estimate total
          earnings from YouTube, TikTok, blogs, and
          other monetized platforms.
        </p>

        <p>
          RPM includes ad revenue, memberships,
          sponsorships, and other monetization
          sources. Unlike CPM, RPM reflects the
          creator’s actual earnings after platform
          fees.
        </p>

        <h2>How To Calculate RPM</h2>

        <p>
          RPM is calculated using the following
          formula:
        </p>

        <div className="bg-gray-100 rounded-xl p-6 my-6 overflow-x-auto">
          <code className="text-lg">
            RPM = (Revenue / Views) × 1000
          </code>
        </div>

        <p>
          For example, if you earned $500 from
          100,000 views:
        </p>

        <div className="bg-gray-100 rounded-xl p-6 my-6 overflow-x-auto">
          <code className="text-lg">
            RPM = (500 / 100000) × 1000 = 5
          </code>
        </div>

        <p>Your RPM would be $5.</p>

        <h2>What Is A Good RPM?</h2>

        <p>
          A good RPM depends on your niche,
          audience country, and monetization
          methods.
        </p>

        <ul>
          <li>Gaming: $1 - $4 RPM</li>
          <li>Finance: $10 - $40 RPM</li>
          <li>Business: $8 - $25 RPM</li>
          <li>Technology: $4 - $15 RPM</li>
        </ul>

        <h2>RPM vs CPM</h2>

        <p>
          CPM measures advertiser cost per 1,000
          impressions, while RPM measures creator
          earnings per 1,000 views after platform
          deductions.
        </p>

        <h2>FAQ</h2>

        <h3>What does RPM mean on YouTube?</h3>

        <p>
          YouTube RPM represents how much money
          creators earn per 1,000 video views after
          YouTube’s revenue share.
        </p>

        <h3>Is RPM higher than CPM?</h3>

        <p>
          RPM is usually lower than CPM because
          platforms keep a percentage of ad revenue.
        </p>

        <h3>Why is my RPM low?</h3>

        <p>
          RPM can be affected by audience location,
          niche, ad blockers, watch time, and
          advertiser demand.
        </p>
      </section>

      <RelatedTools />
    </main>
  );
}