import { MetadataRoute } from 'next';

import { getAllPosts } from '@/lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    'https://creatorfinancehub.com';

  const posts = getAllPosts();

  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,

    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,

      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/blog`,

      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/tools/rpm-calculator`,

      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/tools/youtube-money-calculator`,

      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/tools/instagram-earnings-calculator`,

      lastModified: new Date(),
    },

    ...blogUrls,

    {
  url: `${baseUrl}/tools/tiktok-money-calculator`,
  lastModified: new Date(),
},

{
  url: `${baseUrl}/tools/cpm-calculator`,
  lastModified: new Date(),
},
  ];
}