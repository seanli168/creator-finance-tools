'use client';

import { useState } from 'react';


export default function CPMCalculatorPage() {
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
        Calculate CPM (Cost Per Mille) based on ad
        spend and impressions.
      </p>

      <div className="mt-12 space-y-8">
        <div>
          <label className="block text-lg font-medium">
            Total Impressions
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
            Total Cost ($)
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

      <section className="mt-24">
        <h2 className="text-3xl font-bold">
          What Is CPM?
        </h2>

        <p className="mt-6 text-lg text-gray-700 leading-8">
          CPM stands for Cost Per Mille, which means
          the cost advertisers pay per 1,000 ad
          impressions.
        </p>

        <p className="mt-6 text-lg text-gray-700 leading-8">
          CPM is widely used in YouTube ads, display
          advertising, TikTok ads, and social media
          campaigns.
        </p>
      </section>
    </main>
  );
}