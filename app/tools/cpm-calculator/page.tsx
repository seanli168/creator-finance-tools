import CPMCalculator from './CPMCalculator';

export const metadata = {
  title: 'CPM Calculator - Creator Finance Tools',

  description:
    'Calculate CPM using impressions and advertising spend.',

  keywords: [
    'CPM Calculator',
    'Advertising CPM',
    'CPM meaning',
    'Cost per mille calculator',
    'YouTube CPM',
    'Ad CPM Calculator',
  ],

  openGraph: {
    title: 'CPM Calculator - Creator Finance Tools',

    description:
      'Calculate CPM using impressions and advertising spend.',

    url:
      'https://creator-finance-tools.vercel.app/tools/cpm-calculator',

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

        name: 'What is CPM?',

        acceptedAnswer: {
          '@type': 'Answer',

          text:
            'CPM stands for Cost Per Mille and measures advertising cost per 1,000 impressions.',
        },
      },

      {
        '@type': 'Question',

        name: 'How do you calculate CPM?',

        acceptedAnswer: {
          '@type': 'Answer',

          text:
            'CPM is calculated by dividing advertising cost by impressions and multiplying by 1,000.',
        },
      },

      {
        '@type': 'Question',

        name: 'What is a good CPM?',

        acceptedAnswer: {
          '@type': 'Answer',

          text:
            'A good CPM depends on industry and audience targeting, but many niches range between $2 and $30 CPM.',
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

      <CPMCalculator />
    </>
  );
}