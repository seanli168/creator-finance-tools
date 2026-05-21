import Link from 'next/link';

const allPosts = [
  { title: 'CPM vs RPM', href: '/blog/cpm-vs-rpm', tags: ['finance','youtube'] },
  { title: 'Highest RPM YouTube Niches', href: '/blog/highest-rpm-youtube-niches', tags: ['youtube','business'] },
  { title: 'Finance YouTube RPM', href: '/blog/youtube-rpm-finance', tags: ['finance','youtube'] },
  { title: 'TikTok Creator Fund RPM', href: '/blog/tiktok-creator-fund', tags: ['tiktok','finance'] },
  { title: 'Instagram Sponsorship Rates', href: '/blog/instagram-sponsorship', tags: ['instagram','marketing'] },
];

export async function generateStaticParams() {
  const tags = Array.from(new Set(allPosts.flatMap(p => p.tags)));
  return tags.map(tag => ({ tag }));
}

export async function generateMetadata({ params }: { params: { tag: string } }) {
  return {
    title: `#${params.tag} Articles - Creator Finance Tools`,
    description: `All articles tagged with #${params.tag} in creator economy.`,
  };
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const posts = allPosts.filter(p => p.tags.includes(params.tag));

  if (!posts.length) return <p className="p-6">No posts found.</p>;

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold mb-8">#{params.tag} Articles</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {posts.map(post => (
          <Link key={post.href} href={post.href} className="border rounded-2xl p-6 hover:border-black transition">
            <h3 className="text-2xl font-semibold">{post.title}</h3>
          </Link>
        ))}
      </div>
    </main>
  );
}