import Link from 'next/link';

export const metadata = {
title: 'TikTok Monetization Guide',
description:
'Learn how TikTok creators make money, understand RPM, and estimate earnings.',
};

export default function TikTokMonetizationPage() {
return ( <main className="max-w-5xl mx-auto px-6 py-16"> <h1 className="text-5xl font-bold">
TikTok Monetization Guide </h1>


  <p className="mt-6 text-xl text-gray-600">
    Learn how TikTok creators earn money
    through RPM, Creator Rewards,
    sponsorships, and affiliate marketing.
  </p>

  <section className="mt-16">
    <h2 className="text-3xl font-bold">
      TikTok Tools
    </h2>

    <div className="grid md:grid-cols-2 gap-6 mt-8">
      <Link href="/tools/tiktok-rpm-calculator">
        TikTok RPM Calculator
      </Link>

      <Link href="/tools/tiktok-money-calculator">
        TikTok Money Calculator
      </Link>
    </div>
  </section>

  <section className="mt-16">
    <h2 className="text-3xl font-bold">
      TikTok Articles
    </h2>

    <ul className="mt-6 space-y-4">
      <li>
        <Link href="/blog/how-much-does-tiktok-pay-per-1000-views">
          How Much Does TikTok Pay Per 1000 Views?
        </Link>
      </li>

      <li>
        <Link href="/blog/tiktok-rpm-explained">
          TikTok RPM Explained
        </Link>
      </li>

      <li>
        <Link href="/blog/tiktok-creator-rewards-program">
          TikTok Creator Rewards Program
        </Link>
      </li>
    </ul>
  </section>
</main>


);
}
