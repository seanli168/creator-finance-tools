'use client';

import { useState } from 'react';

export default function TikTokMoneyCalculator() {
  const [views, setViews] = useState('');
  const [rpm, setRpm] = useState('');

  const earnings =
    Number(views) > 0
      ? (
          (Number(views) * Number(rpm)) /
          1000
        ).toFixed(2)
      : '0';

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">
        TikTok Money Calculator
      </h1>

      <p className="text-gray-600 mb-8">
        Estimate TikTok earnings from views and RPM.
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
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2">
            RPM ($)
          </label>

          <input
            type="number"
            value={rpm}
            onChange={(e) =>
              setRpm(e.target.value)
            }
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div className="bg-gray-100 rounded-xl p-6">
          <div className="text-sm text-gray-500">
            Estimated Earnings
          </div>

          <div className="text-4xl font-bold">
            ${earnings}
          </div>
        </div>
      </div>
    </main>
  );
}