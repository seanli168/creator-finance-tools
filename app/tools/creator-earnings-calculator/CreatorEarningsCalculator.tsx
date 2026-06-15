'use client';

import { useState } from 'react';

import RelatedTools from '@/components/RelatedTools';

export default function CreatorEarningsCalculator() {
  const [views, setViews] = useState('');
  const [rpm, setRpm] = useState('');

  const earnings =
    (Number(views) / 1000) * Number(rpm);

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">
        Creator Earnings Calculator
      </h1>

      <p className="mt-6 text-xl text-gray-600">
        Estimate earnings for content creators using
        RPM and total views.
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
          $
          {isNaN(earnings)
            ? '0'
            : earnings.toFixed(2)}
        </p>
      </div>

      <section className="mt-24 prose prose-lg max-w-none">
        <h2>
          What Is A Creator Earnings Calculator?
        </h2>

        <p>
          A creator earnings calculator helps
          estimate how much money content creators
          can earn from views and RPM.
        </p>

        <p>
          This can be useful for YouTubers, TikTok
          creators, bloggers, publishers, and
          influencers.
        </p>

        <h2>
          How To Calculate Creator Earnings
        </h2>

        <p>
          Earnings are estimated using RPM:
        </p>

        <div className="bg-gray-100 rounded-xl p-6 my-6 overflow-x-auto">
          <code className="text-lg">
            Earnings = (Views ÷ 1000) × RPM
          </code>
        </div>

        <p>
          Example:
        </p>

        <div className="bg-gray-100 rounded-xl p-6 my-6 overflow-x-auto">
          <code className="text-lg">
            Earnings = (500000 ÷ 1000) × 8 = 4000
          </code>
        </div>

        <p>
          In this example, 500,000 views at an $8
          RPM would generate approximately $4,000.
        </p>

        <h2>
          Average RPM By Creator Type
        </h2>

        <ul>
          <li>YouTube Gaming: $1 - $4</li>
          <li>YouTube Tech: $4 - $15</li>
          <li>YouTube Finance: $10 - $40</li>
          <li>TikTok Business: $2 - $12</li>
          <li>Blogs & Publishers: $5 - $30</li>
        </ul>

        <h2>
          Why RPM Matters
        </h2>

        <p>
          RPM provides a simple way to compare
          performance across different content
          platforms.
        </p>

        <p>
          Higher RPM generally means your audience
          is more valuable to advertisers.
        </p>

        <h2>FAQ</h2>

        <h3>
          Can I use this for YouTube earnings?
        </h3>

        <p>
          Yes. The calculator works for YouTube,
          TikTok, blogs, and most creator platforms.
        </p>

        <h3>
          What is a good RPM?
        </h3>

        <p>
          A good RPM depends on your niche. Finance
          and business content often have higher RPM
          than entertainment content.
        </p>

        <h3>
          Is this an exact earnings estimate?
        </h3>

        <p>
          No. It is an estimate based on RPM and
          views. Actual earnings may vary.
        </p>
      </section>

      <RelatedTools />
    </main>
  );
}