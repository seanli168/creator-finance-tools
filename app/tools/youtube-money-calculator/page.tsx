import YouTubeMoneyCalculator from './YouTubeMoneyCalculator';

export const metadata = {
  title:
    'YouTube Money Calculator - Creator Finance Tools',

  description:
    'Estimate YouTube earnings using CPM and total views.',

  keywords: [
    'YouTube Money Calculator',
    'YouTube Earnings Calculator',
    'YouTube CPM Calculator',
    'YouTube RPM',
    'How much do YouTubers make',
  ],

  openGraph: {
    title:
      'YouTube Money Calculator - Creator Finance Tools',

    description:
      'Estimate YouTube earnings using CPM and total views.',

    url:
      'https://creator-finance-tools.vercel.app/tools/youtube-money-calculator',

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

        name: 'How much do YouTubers make per 1000 views?',

        acceptedAnswer: {
          '@type': 'Answer',

          text:
            'Most YouTubers earn between $1 and $20 RPM depending on niche and audience location.',
        },
      },

      {
        '@type': 'Question',

        name: 'What is YouTube RPM?',

        acceptedAnswer: {
          '@type': 'Answer',

          text:
            'YouTube RPM measures creator earnings per 1,000 video views after YouTube takes its revenue share.',
        },
      },

      {
        '@type': 'Question',

        name: 'What is a good CPM on YouTube?',

        acceptedAnswer: {
          '@type': 'Answer',

          text:
            'A good YouTube CPM can range from $5 to $30 depending on niche and advertiser demand.',
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

      <YouTubeMoneyCalculator />
    </>
  );
}