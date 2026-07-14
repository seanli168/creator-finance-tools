import CPMCalculator from './CPMCalculator';

export const metadata = {
  title: 'CPM Calculator - Creator Finance Tools',

  description:
    'Calculate CPM from advertising cost and impressions.',

  keywords: [
    'CPM Calculator',
    'Advertising CPM',
    'Calculate CPM',
    'CPM Formula',
  ],

  openGraph: {
    title: 'CPM Calculator - Creator Finance Tools',

    description:
      'Calculate CPM using ad spend and impressions.',

    url:
      'https://creatorfinancehub.com/tools/cpm-calculator',

    siteName: 'Creator Finance Tools',

    type: 'website',
  },
};

export default function Page() {
  return <CPMCalculator />;
}