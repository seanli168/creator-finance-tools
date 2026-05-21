const dynamicBlogPages = [
  'youtube-rpm-finance',
  'youtube-rpm-business',
  'youtube-rpm-gaming',
  'youtube-rpm-education',
];

export default function sitemap() {
  const dynamicPages = dynamicBlogPages.map(
    (slug) => ({
      url: `https://creator-finance-tools.vercel.app/blog/${slug}`,
      lastModified: new Date(),
    })
  );

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
      url: 'https://creator-finance-tools.vercel.app/blog',
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
      url: 'https://creator-finance-tools.vercel.app/blog/cpm-vs-rpm',
      lastModified: new Date(),
    },

    {
      url: 'https://creator-finance-tools.vercel.app/blog/highest-rpm-youtube-niches',
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

    {
      url: 'https://creator-finance-tools.vercel.app/tools/rpm-calculator',
      lastModified: new Date(),
    },

    {
      url: 'https://creator-finance-tools.vercel.app/tools/engagement-rate-calculator',
      lastModified: new Date(),
    },

    {
      url: 'https://creator-finance-tools.vercel.app/tools/sponsorship-calculator',
      lastModified: new Date(),
    },

    {
      url: 'https://creator-finance-tools.vercel.app/tools/twitch-money-calculator',
      lastModified: new Date(),
    },

    {
      url: 'https://creator-finance-tools.vercel.app/tools/affiliate-income-calculator',
      lastModified: new Date(),
    },

    ...dynamicPages,
  ];
}