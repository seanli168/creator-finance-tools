'use client';

import { useState } from 'react';

export default function AffiliateIncomeCalculator() {
  const [traffic, setTraffic] = useState('');
  const [conversion, setConversion] = useState('');
  const [commission, setCommission] = useState('');
  const [income, setIncome] = useState<number | null>(null);

  function calculateIncome() {
    const visitors = parseFloat(traffic);
    const conversionRate = parseFloat(conversion);
    const avgCommission = parseFloat(commission);

    if (
      !visitors ||
      !conversionRate ||
      !avgCommission
    ) {
      return;
    }

    const estimatedIncome =
      visitors *
      (conversionRate / 100) *
      avgCommission;

    setIncome(Number(estimatedIncome.toFixed(2)));
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">
        Affiliate Income Calculator
      </h1>

      <p className="mt-6 text-xl text-gray-600">
        Estimate affiliate marketing income based on traffic,
        conversion rate, and commission.
      </p>

      <div className="mt-12 border rounded-2xl p-8">
        <div className="space-y-6">
          <div>
            <label className="block font-semibold mb-2">
              Monthly Traffic
            </label>

            <input
              type="number"
              value={traffic}
              onChange={(e) => setTraffic(e.target.value)}
              placeholder="Enter monthly visitors"
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Conversion Rate (%)
            </label>

            <input
              type="number"
              value={conversion}
              onChange={(e) => setConversion(e.target.value)}
              placeholder="Enter conversion rate"
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Average Commission ($)
            </label>

            <input
              type="number"
              value={commission}
              onChange={(e) => setCommission(e.target.value)}
              placeholder="Enter average commission"
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <button
            onClick={calculateIncome}
            className="bg-black text-white px-6 py-3 rounded-xl"
          >
            Calculate Affiliate Income
          </button>

          {income !== null && (
            <div className="mt-8 border rounded-2xl p-6">
              <h2 className="text-3xl font-bold">
                Estimated Monthly Income
              </h2>

              <p className="mt-4 text-5xl font-bold">
                ${income}
              </p>
            </div>
          )}
        </div>
      </div>

      <section className="mt-20 prose prose-lg max-w-none">
        <h2>How Affiliate Marketing Works</h2>

        <p>
          Affiliate marketers earn commissions by promoting
          products or services through special referral links.
        </p>

        <h2>Factors Affecting Affiliate Income</h2>

        <ul>
          <li>Website traffic</li>
          <li>Conversion rate</li>
          <li>Product pricing</li>
          <li>Audience quality</li>
          <li>Affiliate commission rates</li>
        </ul>

        <h2>High Paying Affiliate Niches</h2>

        <ul>
          <li>Software</li>
          <li>Finance</li>
          <li>Hosting</li>
          <li>Online education</li>
          <li>Business tools</li>
        </ul>
      </section>
    </main>
  );
}