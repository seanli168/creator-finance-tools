'use client';

import { useState } from 'react';

export default function CPMCalculator() {
  const [cost, setCost] = useState('');
  const [impressions, setImpressions] =
    useState('');

  const cpm =
    Number(impressions) > 0
      ? (
          (Number(cost) /
            Number(impressions)) *
          1000
        ).toFixed(2)
      : '0';

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">
        CPM Calculator
      </h1>

      <p className="text-gray-600 mb-8">
        Calculate CPM using advertising spend and impressions.
      </p>

      <div className="border rounded-2xl p-6">

        <div className="mb-4">
          <label className="block mb-2">
            Ad Cost ($)
          </label>

          <input
            type="number"
            value={cost}
            onChange={(e) =>
              setCost(e.target.value)
            }
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2">
            Impressions
          </label>

          <input
            type="number"
            value={impressions}
            onChange={(e) =>
              setImpressions(e.target.value)
            }
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div className="bg-gray-100 rounded-xl p-6">
          <div className="text-sm text-gray-500">
            CPM
          </div>

          <div className="text-4xl font-bold">
            ${cpm}
          </div>
        </div>
      </div>
    </main>
  );
}