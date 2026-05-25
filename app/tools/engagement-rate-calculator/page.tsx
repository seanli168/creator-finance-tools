import EngagementRateCalculator from './EngagementRateCalculator';

export const metadata = {
  title:
    'Engagement Rate Calculator - Creator Finance Tools',

  description:
    'Calculate social media engagement rate using followers and interactions.',

  keywords: [
    'Engagement Rate Calculator',
    'Instagram Engagement Calculator',
    'TikTok Engagement Rate',
    'Social Media Engagement',
    'Influencer Engagement Rate',
  ],

  openGraph: {
    title:
      'Engagement Rate Calculator - Creator Finance Tools',

    description:
      'Calculate social media engagement rate using followers and interactions.',

    url:
      'https://creator-finance-tools.vercel.app/tools/engagement-rate-calculator',

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

        name: 'What is engagement rate?',

        acceptedAnswer: {
          '@type': 'Answer',

          text:
            'Engagement rate measures how actively audiences interact with social media content.',
        },
      },

      {
        '@type': 'Question',

        name: 'How do you calculate engagement rate?',

        acceptedAnswer: {
          '@type': 'Answer',

          text:
            'Engagement rate is calculated by dividing total interactions by followers and multiplying by 100.',
        },
      },

      {
        '@type': 'Question',

        name: 'What is a good engagement rate?',

        acceptedAnswer: {
          '@type': 'Answer',

          text:
            'A good engagement rate depends on platform and niche, but 3% to 6% is often considered strong.',
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

      <EngagementRateCalculator />
    </>
  );
}