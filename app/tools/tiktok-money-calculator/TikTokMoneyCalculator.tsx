'use client';

import { useState } from 'react';

import RelatedTools from '@/components/RelatedTools';

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

      <p className="mt-6 text-xl text-gray-600">
        Estimate TikTok creator earnings using RPM
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
          Estimated TikTok Earnings
        </h2>

        <p className="mt-6 text-5xl font-bold">
          $
          {isNaN(earnings)
            ? '0'
            : earnings.toFixed(2)}
        </p>
      </div>

      <section className="mt-24 prose prose-lg max-w-none">
        <h2>How Much Money Do TikTokers Make?</h2>

        <p>
          TikTok creators make money through creator
          rewards programs, sponsorships, affiliate
          marketing, live gifts, and merchandise
          sales.
        </p>

        <p>
          Earnings vary depending on audience
          country, niche, engagement rate, and brand
          partnerships.
        </p>

        <h2>How To Calculate TikTok Earnings</h2>

        <p>
          TikTok earnings can be estimated using the
          following formula:
        </p>

        <div className="bg-gray-100 rounded-xl p-6 my-6 overflow-x-auto">
          <code className="text-lg">
            Earnings = (Views / 1000) × RPM
          </code>
        </div>

        <p>
          For example, if a TikTok video gets
          1,000,000 views with a $2 RPM:
        </p>

        <div className="bg-gray-100 rounded-xl p-6 my-6 overflow-x-auto">
          <code className="text-lg">
            (1000000 / 1000) × 2 = $2000
          </code>
        </div>

        <h2>What Is A Good TikTok RPM?</h2>

        <p>
          TikTok RPM varies significantly depending
          on niche and monetization methods.
        </p>

        <ul>
          <li>Entertainment: $0.20 - $2 RPM</li>
          <li>Business: $3 - $10 RPM</li>
          <li>Finance: $5 - $15 RPM</li>
          <li>Technology: $2 - $8 RPM</li>
        </ul>

        <h2>How TikTok Creators Make Money</h2>

        <p>
          Successful TikTok creators often earn more
          from sponsorships and affiliate marketing
          than from platform payouts alone.
        </p>

        <h2>FAQ</h2>

        <h3>
          How much money is 1 million TikTok views?
        </h3>

        <p>
          Depending on RPM and sponsorships, 1
          million TikTok views can generate hundreds
          or thousands of dollars.
        </p>

        <h3>What affects TikTok RPM?</h3>

        <p>
          RPM is affected by audience location,
          niche, engagement, and advertiser demand.
        </p>

        <h3>Does TikTok pay more than YouTube?</h3>

        <p>
          YouTube generally has higher ad RPM, but
          TikTok creators often earn more from brand
          deals and affiliate promotions.
        </p>
      </section>

      <RelatedTools />
    </main>
  );
}