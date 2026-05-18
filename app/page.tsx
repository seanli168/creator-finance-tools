import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold leading-tight">
          Creator Finance Tools
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-2xl">
          Free calculators and monetization tools for YouTubers,
          TikTok creators, streamers, and influencers.
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            href="/tools/youtube-money-calculator"
            className="bg-black text-white px-6 py-3 rounded-xl"
          >
            YouTube Money Calculator
          </Link>

          <Link
            href="/tools"
            className="border border-black px-6 py-3 rounded-xl"
          >
            Browse Tools
          </Link>
        </div>
      </section>
    </main>
  );
}