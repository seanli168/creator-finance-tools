import { MetadataRoute } from 'next';

const youtubePages = [
  '10k',
  '50k',
  '100k',
  '500k',
  '1-million',
  '5-million',
  '10-million',
  '50-million',
];

const tiktokPages = [
  '10k',
  '50k',
  '100k',
  '500k',
  '1-million',
  '5-million',
  '10-million',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const dynamicPages = youtubePages.map((value) => ({
    url: `https://creator-finance-tools.vercel.app/youtube-views/${value}`,
    lastModified: new Date(),
  }));
const dynamicTikTokPages = tiktokPages.map((value) => ({
  url: `https://creator-finance-tools.vercel.app/tiktok-views/${value}`,
  lastModified: new Date(),
}));

  return [
    {
      url: 'https://creator-finance-tools.vercel.app',
      lastModified: new Date(),
    },
    {
      url: 'https://creator-finance-tools.vercel.app/tools',
      lastModified: new Date(),
    },
    {
      url: 'https://creator-finance-tools.vercel.app/about',
      lastModified: new Date(),
    },
    {
      url: 'https://creator-finance-tools.vercel.app/contact',
      lastModified: new Date(),
    },
    {
      url: 'https://creator-finance-tools.vercel.app/privacy-policy',
      lastModified: new Date(),
    },
    {
      url: 'https://creator-finance-tools.vercel.app/tools/youtube-money-calculator',
      lastModified: new Date(),
    },
    {
      url: 'https://creator-finance-tools.vercel.app/tools/tiktok-money-calculator',
      lastModified: new Date(),
    },
    {
      url: 'https://creator-finance-tools.vercel.app/tools/cpm-calculator',
      lastModified: new Date(),
    },

    ...dynamicPages,
    ...dynamicTikTokPages,
  ];
}