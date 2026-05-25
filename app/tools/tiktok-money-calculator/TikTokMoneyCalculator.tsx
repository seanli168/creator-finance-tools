'use client';

import { useState } from 'react';

export default function TikTokMoneyCalculator() {
  const [views, setViews] = useState('');
  const [rpm, setRpm] = useState('');

  const earnings =
    (Number(views) / 1000) * Number(rpm);

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">
        TikTok Money Calculator
      </h1>

      <div className="mt-12 space-y-8">
        <input
          type="number"
          value={views}
          onChange={(e) =>
            setViews(e.target.value)
          }
          placeholder="Views"
          className="w-full border rounded-xl px-4 py-4"
        />

        <input
          type="number"
          value={rpm}
          onChange={(e) =>
            setRpm(e.target.value)
          }
          placeholder="RPM"
          className="w-full border rounded-xl px-4 py-4"
        />
      </div>

      <div className="mt-16 border rounded-2xl p-10">
        <p className="text-5xl font-bold">
          $
          {isNaN(earnings)
            ? '0'
            : earnings.toFixed(2)}
        </p>
      </div>
    </main>
  );
}