'use client';

import { useState } from 'react';


export default function YouTubeMoneyCalculatorPage() {
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
        Estimate YouTube earnings using views and CPM.
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
            placeholder="Enter YouTube views"
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
          Estimated YouTube Earnings
        </h2>

        <p className="mt-6 text-5xl font-bold">
          $
          {isNaN(earnings)
            ? '0'
            : earnings.toFixed(2)}
        </p>
      </div>

      <section className="mt-24">
        <h2 className="text-3xl font-bold">
          How Much Does YouTube Pay?
        </h2>

        <p className="mt-6 text-lg text-gray-700 leading-8">
          YouTube creator earnings depend on CPM,
          RPM, audience country, niche, and viewer
          engagement.
        </p>

        <p className="mt-6 text-lg text-gray-700 leading-8">
          Finance, AI, business, and investing
          channels usually earn the highest CPM and
          RPM rates on YouTube.
        </p>
      </section>
    </main>
  );
}