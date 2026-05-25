'use client';

import { useState } from 'react';

import RelatedTools from '@/components/RelatedTools';

export default function YouTubeMoneyCalculator() {
  const [views, setViews] = useState('');
  const [cpm, setCpm] = useState('');

  const earnings =
    (Number(views) / 1000) * Number(cpm);

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">
        YouTube Money Calculator
      </h1>

      <p className="mt-6 text-xl text-gray-600">
        Estimate YouTube earnings using CPM and
        total video views.
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
            CPM ($)
          </label>

          <input
            type="number"
            value={cpm}
            onChange={(e) =>
              setCpm(e.target.value)
            }
            placeholder="Enter CPM"
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
        <h2>
          How Much Money Do YouTubers Make?
        </h2>

        <p>
          YouTube creators earn money primarily
          through ads, sponsorships, memberships,
          affiliate marketing, and merchandise
          sales.
        </p>

        <p>
          Earnings vary based on CPM, audience
          location, watch time, niche, and
          advertiser demand.
        </p>

        <h2>
          How To Calculate YouTube Earnings
        </h2>

        <p>
          YouTube earnings can be estimated using
          the following formula:
        </p>

        <div className="bg-gray-100 rounded-xl p-6 my-6 overflow-x-auto">
          <code className="text-lg">
            Earnings = (Views / 1000) × CPM
          </code>
        </div>

        <p>
          For example, if your channel gets
          500,000 views with a $6 CPM:
        </p>

        <div className="bg-gray-100 rounded-xl p-6 my-6 overflow-x-auto">
          <code className="text-lg">
            (500000 / 1000) × 6 = $3000
          </code>
        </div>

        <h2>What Is A Good YouTube CPM?</h2>

        <p>
          CPM varies significantly depending on
          content category and audience geography.
        </p>

        <ul>
          <li>Gaming: $2 - $6 CPM</li>
          <li>Finance: $15 - $40 CPM</li>
          <li>Business: $10 - $30 CPM</li>
          <li>Technology: $5 - $20 CPM</li>
        </ul>

        <h2>FAQ</h2>

        <h3>
          How much money is 1 million YouTube
          views?
        </h3>

        <p>
          Depending on CPM, 1 million YouTube
          views can generate anywhere from $1,000
          to $20,000 or more.
        </p>

        <h3>What affects YouTube CPM?</h3>

        <p>
          CPM is affected by niche, audience
          country, seasonality, watch time, and
          advertiser demand.
        </p>

        <h3>Is YouTube RPM different from CPM?</h3>

        <p>
          Yes. CPM is advertiser cost, while RPM
          reflects the creator’s actual earnings
          after YouTube’s revenue share.
        </p>
      </section>

      <RelatedTools />
    </main>
  );
}