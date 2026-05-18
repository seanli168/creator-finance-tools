'use client';

import { useState } from 'react';

export default function TikTokCalculatorPage() {
  const [views, setViews] = useState(500000);
  const [rate, setRate] = useState(0.03);

  const earnings = (views * rate / 1000).toFixed(2);

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">
        TikTok Money Calculator
      </h1>

      <p className="mt-6 text-xl text-gray-600">
        Estimate how much TikTok creators can earn from views.
      </p>

      <div className="mt-12 border rounded-3xl p-8 shadow-sm">
        <div className="space-y-6">
          <div>
            <label className="block mb-2 font-medium">
              Monthly Views
            </label>

            <input
              type="number"
              value={views}
              onChange={(e) => setViews(Number(e.target.value))}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Estimated Rate ($ per 1,000 views)
            </label>

            <input
              type="number"
              step="0.01"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div className="bg-black text-white rounded-2xl p-8">
            <p className="text-lg">
              Estimated TikTok Earnings
            </p>

            <h2 className="text-6xl font-bold mt-3">
              ${earnings}
            </h2>

            <p className="mt-3 text-gray-300">
              Estimated creator fund and monetization income.
            </p>
          </div>
        </div>
      </div>

      <section className="mt-20 prose prose-lg max-w-none">
        <h2>How Much Does TikTok Pay?</h2>

        <p>
          TikTok creator earnings vary depending on country,
          audience engagement, niche, and monetization methods.
        </p>

        <p>
          Most creators earn between $0.02 and $0.05 per 1,000 views
          through the TikTok Creator Fund.
        </p>

        <h2>How To Make Money On TikTok</h2>

        <ul>
          <li>Creator Fund</li>
          <li>Brand Sponsorships</li>
          <li>Affiliate Marketing</li>
          <li>Live Gifts</li>
          <li>Digital Products</li>
        </ul>

        <h2>FAQ</h2>

        <h3>How much does TikTok pay for 1 million views?</h3>

        <p>
          TikTok typically pays between $20 and $50 for 1 million views
          through the creator fund.
        </p>

        <h3>Can TikTok creators make full-time income?</h3>

        <p>
          Yes. Many creators earn significant income through
          sponsorships and affiliate marketing.
        </p>
      </section>
    </main>
  );
}