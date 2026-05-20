'use client';

import { useState } from 'react';

export default function RPMCalculator() {
  const [revenue, setRevenue] = useState('');
  const [views, setViews] = useState('');
  const [rpm, setRPM] = useState<number | null>(null);

  function calculateRPM() {
    const totalRevenue = parseFloat(revenue);
    const totalViews = parseFloat(views);

    if (!totalRevenue || !totalViews) {
      return;
    }

    const calculatedRPM =
      (totalRevenue / totalViews) * 1000;

    setRPM(Number(calculatedRPM.toFixed(2)));
  }

  function getRPMLevel(rpm: number) {
    if (rpm >= 15) return 'Excellent RPM';
    if (rpm >= 8) return 'High RPM';
    if (rpm >= 3) return 'Average RPM';

    return 'Low RPM';
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">
        RPM Calculator
      </h1>

      <p className="mt-6 text-xl text-gray-600">
        Calculate YouTube RPM based on revenue and total
        views.
      </p>

      <div className="mt-12 border rounded-2xl p-8">
        <div className="space-y-6">
          <div>
            <label className="block font-semibold mb-2">
              Revenue ($)
            </label>

            <input
              type="number"
              value={revenue}
              onChange={(e) => setRevenue(e.target.value)}
              placeholder="Enter total revenue"
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Total Views
            </label>

            <input
              type="number"
              value={views}
              onChange={(e) => setViews(e.target.value)}
              placeholder="Enter total views"
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <button
            onClick={calculateRPM}
            className="bg-black text-white px-6 py-3 rounded-xl"
          >
            Calculate RPM
          </button>

          {rpm !== null && (
            <div className="mt-8 border rounded-2xl p-6">
              <h2 className="text-3xl font-bold">
                Estimated RPM
              </h2>

              <p className="mt-4 text-5xl font-bold">
                ${rpm}
              </p>

              <p className="mt-4 text-xl text-gray-600">
                {getRPMLevel(rpm)}
              </p>
            </div>
          )}
        </div>
      </div>

      <section className="mt-20 prose prose-lg max-w-none">
        <h2>What Is RPM?</h2>

        <p>
          RPM stands for Revenue Per Mille, which measures
          estimated earnings per 1,000 views after YouTube
          takes its share.
        </p>

        <h2>How RPM Is Calculated</h2>

        <p>
          RPM = (Revenue ÷ Total Views) × 1000
        </p>

        <h2>Factors Affecting RPM</h2>

        <ul>
          <li>Audience country</li>
          <li>Video niche</li>
          <li>Viewer age</li>
          <li>Ad engagement</li>
          <li>Seasonality</li>
        </ul>

        <h2>High RPM Niches</h2>

        <ul>
          <li>Finance</li>
          <li>Business</li>
          <li>Software</li>
          <li>Marketing</li>
          <li>Insurance</li>
        </ul>
      </section>
    </main>
  );
}