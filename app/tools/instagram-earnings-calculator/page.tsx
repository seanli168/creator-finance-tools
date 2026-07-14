import InstagramEarningsCalculator from './InstagramEarningsCalculator';

export const metadata = {
  title:
    'Instagram Earnings Calculator - Creator Finance Tools',

  description:
    'Estimate Instagram influencer earnings using followers and engagement rate.',

  keywords: [
    'Instagram Earnings Calculator',
    'Instagram Money Calculator',
    'Instagram influencer earnings',
    'Instagram sponsorship calculator',
    'Instagram engagement calculator',
  ],

  openGraph: {
    title:
      'Instagram Earnings Calculator - Creator Finance Tools',

    description:
      'Estimate Instagram influencer earnings using followers and engagement rate.',

    url:
      'https://creatorfinancehub.com/tools/instagram-earnings-calculator',

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

        name: 'How much do Instagram influencers make?',

        acceptedAnswer: {
          '@type': 'Answer',

          text:
            'Instagram influencer earnings vary based on followers, engagement rate, niche, and sponsorship deals.',
        },
      },

      {
        '@type': 'Question',

        name: 'What affects Instagram sponsorship rates?',

        acceptedAnswer: {
          '@type': 'Answer',

          text:
            'Engagement rate, audience demographics, niche, and content quality all affect sponsorship pricing.',
        },
      },

      {
        '@type': 'Question',

        name: 'How do influencers calculate Instagram earnings?',

        acceptedAnswer: {
          '@type': 'Answer',

          text:
            'Creators estimate earnings based on followers, engagement, and average sponsorship CPM or campaign rates.',
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

      <InstagramEarningsCalculator />
    </>
  );
}