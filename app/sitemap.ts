import { MetadataRoute } from 'next';
import { blogPosts } from '@/app/data/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    'https://creator-finance-tools.vercel.app';

  const blogUrls = blogPosts.map((post) => ({
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

    ...blogUrls,
  ];
}