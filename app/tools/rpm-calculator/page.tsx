import RPMCalculator from './RPMCalculator';

export const metadata = {
  title: 'RPM Calculator - Creator Finance Tools',

  description:
    'Calculate creator earnings using RPM and total views.',

  keywords: [
    'RPM Calculator',
    'YouTube RPM Calculator',
    'Creator Earnings Calculator',
    'RPM meaning',
    'RPM vs CPM',
    'TikTok RPM Calculator',
  ],

  openGraph: {
    title: 'RPM Calculator - Creator Finance Tools',

    description:
      'Estimate creator earnings using RPM and total views.',

    url:
      'https://creatorfinancehub.com/tools/rpm-calculator',

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

        name: 'What is RPM?',

        acceptedAnswer: {
          '@type': 'Answer',

          text:
            'RPM stands for Revenue Per Mille and measures creator earnings per 1,000 views.',
        },
      },

      {
        '@type': 'Question',

        name: 'How is RPM calculated?',

        acceptedAnswer: {
          '@type': 'Answer',

          text:
            'RPM is calculated by dividing revenue by views and multiplying by 1,000.',
        },
      },

      {
        '@type': 'Question',

        name: 'What is a good RPM on YouTube?',

        acceptedAnswer: {
          '@type': 'Answer',

          text:
            'A good YouTube RPM depends on niche and audience country, but finance channels often have RPMs above $10.',
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

      <RPMCalculator />
    </>
  );
}