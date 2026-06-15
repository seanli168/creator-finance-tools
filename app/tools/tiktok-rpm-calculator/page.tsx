import TikTokRPMCalculator from './TikTokRPMCalculator';

export const metadata = {
  title: 'TikTok RPM Calculator - Creator Finance Tools',

  description:
    'Calculate TikTok RPM from views and revenue.',

  keywords: [
    'TikTok RPM Calculator',
    'TikTok RPM',
    'TikTok Earnings Calculator',
    'TikTok Creator Rewards',
    'RPM Calculator',
  ],

  openGraph: {
    title: 'TikTok RPM Calculator - Creator Finance Tools',

    description:
      'Calculate TikTok RPM instantly from views and revenue.',

    url:
      'https://creator-finance-tools.vercel.app/tools/tiktok-rpm-calculator',

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

        name: 'What is TikTok RPM?',

        acceptedAnswer: {
          '@type': 'Answer',

          text:
            'TikTok RPM measures revenue earned per 1,000 views.',
        },
      },

      {
        '@type': 'Question',

        name: 'How do I calculate TikTok RPM?',

        acceptedAnswer: {
          '@type': 'Answer',

          text:
            'Divide revenue by views and multiply by 1000.',
        },
      },

      {
        '@type': 'Question',

        name: 'What is a good TikTok RPM?',

        acceptedAnswer: {
          '@type': 'Answer',

          text:
            'TikTok RPM varies by country, niche, and monetization program.',
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

      <TikTokRPMCalculator />
    </>
  );
}