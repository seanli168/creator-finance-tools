'use client';


import { useState } from 'react';

export default function YoutubeCalculatorPage() {
  const [views, setViews] = useState(100000);
  const [rpm, setRpm] = useState(3);

  const earnings = ((views / 1000) * rpm).toFixed(2);

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">
        YouTube Money Calculator
      </h1>

      <p className="mt-6 text-xl text-gray-600">
        Estimate your YouTube earnings based on views and RPM.
      </p>

      <div className="mt-12 bg-white border rounded-3xl p-8 shadow-sm">
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
              RPM ($)
            </label>

            <input
              type="number"
              value={rpm}
              onChange={(e) => setRpm(Number(e.target.value))}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div className="bg-black text-white rounded-2xl p-8">
            <p className="text-lg">
              Estimated Monthly Earnings
            </p>

            <h2 className="text-6xl font-bold mt-3">
              ${earnings}
            </h2>

            <p className="mt-3 text-gray-300">
              Based on your estimated RPM.
            </p>
          </div>
        </div>
      </div>

      <section className="mt-20 prose prose-lg max-w-none">
        <h2>What is YouTube RPM?</h2>

        <p>
          RPM means Revenue Per Mille, which estimates how much
          money creators earn per 1,000 views after YouTube takes
          its share.
        </p>

        <p>
          RPM varies depending on audience location, niche,
          watch time, and advertiser demand.
        </p>

        <h2>Average YouTube RPM by Niche</h2>

        <ul>
          <li>Finance: $15 - $40 RPM</li>
          <li>Business: $10 - $30 RPM</li>
          <li>Gaming: $2 - $8 RPM</li>
          <li>Entertainment: $1 - $5 RPM</li>
        </ul>

        <h2>How Much Does YouTube Pay For 1 Million Views?</h2>

        <p>
          Depending on RPM, 1 million YouTube views can generate
          anywhere from $1,000 to $40,000.
        </p>

        <h2>FAQ</h2>

        <h3>How accurate is this calculator?</h3>

        <p>
          This calculator provides estimates only. Actual earnings
          vary by niche, country, and audience quality.
        </p>

        <h3>What is a good RPM on YouTube?</h3>

        <p>
          A good RPM is usually above $5, while finance and
          business channels often exceed $15 RPM.
        </p>
      </section>
    </main>
  );
}