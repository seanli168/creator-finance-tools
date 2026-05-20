'use client';

import { useState } from 'react';

export default function TwitchMoneyCalculator() {
  const [subs, setSubs] = useState('');
  const [donations, setDonations] = useState('');
  const [ads, setAds] = useState('');
  const [income, setIncome] = useState<number | null>(null);

  function calculateIncome() {
    const subscriberCount = parseFloat(subs);
    const donationAmount = parseFloat(donations);
    const adRevenue = parseFloat(ads);

    if (
      subscriberCount < 0 ||
      donationAmount < 0 ||
      adRevenue < 0
    ) {
      return;
    }

    const estimatedIncome =
      subscriberCount * 2.5 +
      donationAmount +
      adRevenue;

    setIncome(Number(estimatedIncome.toFixed(2)));
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">
        Twitch Money Calculator
      </h1>

      <p className="mt-6 text-xl text-gray-600">
        Estimate Twitch streamer income from subscriptions,
        donations, and ads.
      </p>

      <div className="mt-12 border rounded-2xl p-8">
        <div className="space-y-6">
          <div>
            <label className="block font-semibold mb-2">
              Subscribers
            </label>

            <input
              type="number"
              value={subs}
              onChange={(e) => setSubs(e.target.value)}
              placeholder="Enter subscriber count"
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Donations ($)
            </label>

            <input
              type="number"
              value={donations}
              onChange={(e) => setDonations(e.target.value)}
              placeholder="Enter donation amount"
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Ad Revenue ($)
            </label>

            <input
              type="number"
              value={ads}
              onChange={(e) => setAds(e.target.value)}
              placeholder="Enter ad revenue"
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <button
            onClick={calculateIncome}
            className="bg-black text-white px-6 py-3 rounded-xl"
          >
            Calculate Twitch Income
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
        <h2>How Twitch Streamers Make Money</h2>

        <ul>
          <li>Subscriptions</li>
          <li>Donations</li>
          <li>Bits</li>
          <li>Ad revenue</li>
          <li>Sponsorships</li>
        </ul>

        <h2>Estimated Subscription Revenue</h2>

        <p>
          Twitch streamers typically receive around 50% of
          subscription revenue depending on partnership level.
        </p>

        <h2>Top Twitch Niches</h2>

        <ul>
          <li>Gaming</li>
          <li>Just Chatting</li>
          <li>IRL Streaming</li>
          <li>Esports</li>
          <li>Educational Content</li>
        </ul>
      </section>
    </main>
  );
}