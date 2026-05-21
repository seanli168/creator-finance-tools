import { allPosts } from './data'; // 如果你有单独数据文件
import { Feed } from 'feed';

export const GET = async () => {
  const feed = new Feed({
    title: 'Creator Finance Tools Blog',
    description: 'Creator economy guides and monetization tools',
    id: 'https://creator-finance-tools.vercel.app/',
    link: 'https://creator-finance-tools.vercel.app/',
    language: 'en',
  });

  allPosts.forEach(post => {
    feed.addItem({
      title: post.title,
      id: `https://creator-finance-tools.vercel.app${post.href}`,
      link: `https://creator-finance-tools.vercel.app${post.href}`,
      description: post.description,
      date: new Date(),
    });
  });

  return new Response(feed.rss2(), {
    headers: { 'Content-Type': 'application/rss+xml' },
  });
};