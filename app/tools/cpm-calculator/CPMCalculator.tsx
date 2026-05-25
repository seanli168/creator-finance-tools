'use client';

import { useState } from 'react';
import RelatedTools from '@/components/RelatedTools';

export default function CPMCalculator() {
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
        Calculate CPM based on impressions and ad
        spend.
      </p>

      <div className="mt-12 space-y-8">
        <input
          type="number"
          value={impressions}
          onChange={(e) =>
            setImpressions(e.target.value)
          }
          placeholder="Impressions"
          className="w-full border rounded-xl px-4 py-4"
        />

        <input
          type="number"
          value={cost}
          onChange={(e) =>
            setCost(e.target.value)
          }
          placeholder="Ad Spend"
          className="w-full border rounded-xl px-4 py-4"
        />
      </div>

      <div className="mt-16 border rounded-2xl p-10">
        <p className="text-5xl font-bold">
          $
          {isNaN(cpm) || !isFinite(cpm)
            ? '0'
            : cpm.toFixed(2)}
        </p>
      </div>
      <RelatedTools />
    </main>
  );
}