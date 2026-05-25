import TikTokMoneyCalculator from './TikTokMoneyCalculator';

export const metadata = {
  title:
    'TikTok Money Calculator - Creator Finance Tools',

  description:
    'Estimate TikTok creator earnings using RPM and views.',

  keywords: [
    'TikTok Money Calculator',
    'TikTok RPM',
    'TikTok Earnings Calculator',
    'TikTok Creator Earnings',
    'TikTok monetization',
  ],

  openGraph: {
    title:
      'TikTok Money Calculator - Creator Finance Tools',

    description:
      'Estimate TikTok creator earnings using RPM and views.',

    url:
      'https://creator-finance-tools.vercel.app/tools/tiktok-money-calculator',

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
            'TikTok earnings vary widely, but creators often earn between $0.20 and $8 RPM depending on monetization sources.',
        },
      },

      {
        '@type': 'Question',

        name: 'What is TikTok RPM?',

        acceptedAnswer: {
          '@type': 'Answer',

          text:
            'TikTok RPM measures creator earnings per 1,000 views after platform deductions.',
        },
      },

      {
        '@type': 'Question',

        name: 'How do TikTok creators make money?',

        acceptedAnswer: {
          '@type': 'Answer',

          text:
            'TikTok creators earn money through creator programs, sponsorships, affiliate marketing, live gifts, and product sales.',
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