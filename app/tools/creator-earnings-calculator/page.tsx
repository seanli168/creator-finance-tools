import CreatorEarningsCalculator from './CreatorEarningsCalculator';

export const metadata = {
  title:
    'Creator Earnings Calculator - Creator Finance Tools',

  description:
    'Estimate creator earnings from views and RPM across YouTube, TikTok, blogs, and other content platforms.',

  keywords: [
    'Creator Earnings Calculator',
    'Content Creator Earnings',
    'RPM Calculator',
    'Creator Revenue Calculator',
    'Influencer Earnings Calculator',
    'YouTube Earnings Calculator',
  ],

  openGraph: {
    title:
      'Creator Earnings Calculator - Creator Finance Tools',

    description:
      'Estimate creator earnings using views and RPM.',

    url:
      'https://creatorfinancehub.com/tools/creator-earnings-calculator',

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

        name: 'How do creators calculate earnings?',

        acceptedAnswer: {
          '@type': 'Answer',

          text:
            'Creators often estimate earnings using RPM and total views.',
        },
      },

      {
        '@type': 'Question',

        name: 'What is RPM?',

        acceptedAnswer: {
          '@type': 'Answer',

          text:
            'RPM stands for Revenue Per Mille and measures earnings per 1,000 views.',
        },
      },

      {
        '@type': 'Question',

        name: 'Can this calculator be used for YouTube and TikTok?',

        acceptedAnswer: {
          '@type': 'Answer',

          text:
            'Yes. The calculator can be used for YouTube, TikTok, blogs, and other monetized platforms.',
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

      <CreatorEarningsCalculator />
    </>
  );
}