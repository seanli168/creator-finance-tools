import TikTokMoneyCalculator from './TikTokMoneyCalculator';

export const metadata = {
  title: 'TikTok Money Calculator - Creator Finance Tools',

  description:
    'Estimate TikTok earnings based on views and RPM.',

  keywords: [
    'TikTok Money Calculator',
    'TikTok Earnings Calculator',
    'TikTok RPM',
    'How Much Does TikTok Pay',
    'TikTok Creator Rewards',
  ],

  openGraph: {
    title: 'TikTok Money Calculator - Creator Finance Tools',

    description:
      'Estimate TikTok earnings using views and RPM.',

    url:
      'https://creatorfinancehub.com/tools/tiktok-money-calculator',

    siteName: 'Creator Finance Tools',

    type: 'website',
  },
};

export default function Page() {
  const faqSchema = {
    '@context': 'https://schema.org',

    '@type': 'FAQPage',

    mainEntity: [
      {
        '@type': 'Question',

        name: 'How much does TikTok pay per 1000 views?',

        acceptedAnswer: {
          '@type': 'Answer',

          text:
            'TikTok earnings vary by country, niche, and monetization program. RPM can vary significantly.',
        },
      },

      {
        '@type': 'Question',

        name: 'How do I estimate TikTok earnings?',

        acceptedAnswer: {
          '@type': 'Answer',

          text:
            'Multiply total views by RPM and divide by 1000.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <TikTokMoneyCalculator />
    </>
  );
}