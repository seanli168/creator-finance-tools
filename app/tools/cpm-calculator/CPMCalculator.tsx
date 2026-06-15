'use client';

import { useState } from 'react';
import RelatedTools from '@/components/RelatedTools';

export default function CPMCalculator() {
  const [cost, setCost] = useState('');
  const [impressions, setImpressions] = useState('');

  const cpm =
    Number(impressions) > 0
      ? (Number(cost) / Number(impressions)) * 1000
      : 0;

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">
        CPM Calculator
      </h1>

      <p className="mt-6 text-xl text-gray-600">
        Calculate CPM based on ad cost and impressions.
      </p>

      {/* Inputs */}
      <div className="mt-12 space-y-8">
        <div>
          <label className="block text-lg font-medium">
            Ad Cost ($)
          </label>

          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            className="w-full mt-3 border rounded-xl px-4 py-4 text-lg"
          />
        </div>

        <div>
          <label className="block text-lg font-medium">
            Impressions
          </label>

          <input
            type="number"
            value={impressions}
            onChange={(e) =>
              setImpressions(e.target.value)
            }
            className="w-full mt-3 border rounded-xl px-4 py-4 text-lg"
          />
        </div>
      </div>

      {/* Result */}
      <div className="mt-16 border rounded-2xl p-10">
        <h2 className="text-3xl font-bold">
          CPM Result
        </h2>

        <p className="mt-6 text-5xl font-bold">
          ${isNaN(cpm) ? '0' : cpm.toFixed(2)}
        </p>
      </div>

      {/* SEO Content */}
      <section className="mt-24 prose prose-lg max-w-none">
        <h2>What Is CPM?</h2>

        <p>
          CPM stands for Cost Per Mille, meaning cost
          per 1,000 impressions.
        </p>

        <h2>CPM Formula</h2>

        <div className="bg-gray-100 rounded-xl p-6 my-6">
          <code>CPM = (Cost / Impressions) × 1000</code>
        </div>

        <h2>Why CPM Matters</h2>

        <ul>
          <li>Ad pricing efficiency</li>
          <li>Campaign performance</li>
          <li>Revenue planning</li>
        </ul>

        <h2>FAQ</h2>

        <h3>What is a good CPM?</h3>
        <p>
          CPM varies by platform and niche, but
          higher CPM usually indicates better ad
          value.
        </p>
      </section>

      <RelatedTools />
    </main>
  );
}