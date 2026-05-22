'use client';

import { useState } from 'react';

export default function RPMCalculatorPage() {
  const [views, setViews] = useState('');
  const [rpm, setRpm] = useState('');

  const earnings =
    (Number(views) / 1000) * Number(rpm);

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">
        RPM Calculator
      </h1>

      <p className="mt-6 text-xl text-gray-600">
        Estimate your creator earnings based on RPM
        and total views.
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
            placeholder="Enter views"
            className="w-full mt-3 border rounded-xl px-4 py-4 text-lg"
          />
        </div>

        <div>
          <label className="block text-lg font-medium">
            RPM ($)
          </label>

          <input
            type="number"
            value={rpm}
            onChange={(e) =>
              setRpm(e.target.value)
            }
            placeholder="Enter RPM"
            className="w-full mt-3 border rounded-xl px-4 py-4 text-lg"
          />
        </div>
      </div>

      <div className="mt-16 border rounded-2xl p-10">
        <h2 className="text-3xl font-bold">
          Estimated Earnings
        </h2>

        <p className="mt-6 text-5xl font-bold">
          ${isNaN(earnings) ? '0' : earnings.toFixed(2)}
        </p>
      </div>

      <section className="mt-24">
        <h2 className="text-3xl font-bold">
          What Is RPM?
        </h2>

        <p className="mt-6 text-lg text-gray-700 leading-8">
          RPM stands for Revenue Per Mille, which
          measures how much creators earn per 1,000
          views after platform fees.
        </p>

        <p className="mt-6 text-lg text-gray-700 leading-8">
          High RPM niches include finance, AI,
          software, investing, insurance, and business
          content.
        </p>
      </section>
    </main>
  );
}