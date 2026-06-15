'use client';

import { useState } from 'react';

export default function TikTokRPMCalculator() {
  const [views, setViews] = useState('');
  const [revenue, setRevenue] = useState('');

  const rpm =
    Number(views) > 0
      ? (
          (Number(revenue) /
            Number(views)) *
          1000
        ).toFixed(2)
      : '0';

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">
        TikTok RPM Calculator
      </h1>

      <p className="text-gray-600 mb-8">
        Calculate TikTok RPM using views and revenue.
      </p>

      <div className="border rounded-2xl p-6">

        <div className="mb-4">
          <label className="block mb-2">
            Views
          </label>

          <input
            type="number"
            value={views}
            onChange={(e) =>
              setViews(e.target.value)
            }
            className="w-full border rounded-lg p-3"
            placeholder="100000"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2">
            Revenue ($)
          </label>

          <input
            type="number"
            value={revenue}
            onChange={(e) =>
              setRevenue(e.target.value)
            }
            className="w-full border rounded-lg p-3"
            placeholder="500"
          />
        </div>

        <div className="bg-gray-100 rounded-xl p-6">
          <div className="text-sm text-gray-500">
            Estimated RPM
          </div>

          <div className="text-4xl font-bold">
            ${rpm}
          </div>
        </div>

      </div>
    </main>
  );
}