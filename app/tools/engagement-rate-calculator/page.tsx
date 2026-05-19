'use client';

import { useState } from 'react';

export default function EngagementRateCalculator() {
  const [followers, setFollowers] = useState('');
  const [likes, setLikes] = useState('');
  const [comments, setComments] = useState('');
  const [rate, setRate] = useState<number | null>(null);

  function calculateRate() {
    const followerCount = parseFloat(followers);
    const totalLikes = parseFloat(likes);
    const totalComments = parseFloat(comments);

    if (
      !followerCount ||
      !totalLikes ||
      totalComments < 0
    ) {
      return;
    }

    const engagement =
      ((totalLikes + totalComments) / followerCount) *
      100;

    setRate(Number(engagement.toFixed(2)));
  }

  function getRating(rate: number) {
    if (rate >= 6) return 'Excellent';
    if (rate >= 3) return 'Good';
    if (rate >= 1) return 'Average';

    return 'Low';
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">
        Engagement Rate Calculator
      </h1>

      <p className="mt-6 text-xl text-gray-600">
        Calculate Instagram, TikTok, and YouTube engagement
        rates instantly.
      </p>

      <div className="mt-12 border rounded-2xl p-8">
        <div className="space-y-6">
          <div>
            <label className="block font-semibold mb-2">
              Followers
            </label>

            <input
              type="number"
              value={followers}
              onChange={(e) => setFollowers(e.target.value)}
              placeholder="Enter followers"
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Likes
            </label>

            <input
              type="number"
              value={likes}
              onChange={(e) => setLikes(e.target.value)}
              placeholder="Enter likes"
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Comments
            </label>

            <input
              type="number"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Enter comments"
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <button
            onClick={calculateRate}
            className="bg-black text-white px-6 py-3 rounded-xl"
          >
            Calculate Engagement Rate
          </button>

          {rate !== null && (
            <div className="mt-8 border rounded-2xl p-6">
              <h2 className="text-3xl font-bold">
                Engagement Rate
              </h2>

              <p className="mt-4 text-5xl font-bold">
                {rate}%
              </p>

              <p className="mt-4 text-xl text-gray-600">
                Rating: {getRating(rate)}
              </p>
            </div>
          )}
        </div>
      </div>

      <section className="mt-20 prose prose-lg max-w-none">
        <h2>What Is Engagement Rate?</h2>

        <p>
          Engagement rate measures how actively an audience
          interacts with social media content through likes,
          comments, shares, and saves.
        </p>

        <h2>Average Engagement Rates</h2>

        <ul>
          <li>Excellent: 6%+</li>
          <li>Good: 3% - 6%</li>
          <li>Average: 1% - 3%</li>
          <li>Low: Below 1%</li>
        </ul>

        <h2>Why Engagement Matters</h2>

        <ul>
          <li>Higher sponsorship rates</li>
          <li>Better algorithm reach</li>
          <li>More loyal audience</li>
          <li>Increased monetization potential</li>
        </ul>
      </section>
    </main>
  );
}