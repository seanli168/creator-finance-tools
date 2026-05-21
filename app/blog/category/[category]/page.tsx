import Link from 'next/link';

const allPosts = [
  {
    title: 'CPM vs RPM: What’s the Difference?',
    href: '/blog/cpm-vs-rpm',
    category: 'youtube',
  },
  {
    title: 'Highest RPM YouTube Niches',
    href: '/blog/highest-rpm-youtube-niches',
    category: 'youtube',
  },
  {
    title: 'Finance YouTube RPM',
    href: '/blog/youtube-rpm-finance',
    category: 'youtube',
  },
  {
    title: 'TikTok Creator Fund RPM',
    href: '/blog/tiktok-creator-fund',
    category: 'tiktok',
  },
  {
    title: 'TikTok RPM Analysis',
    href: '/blog/tiktok-rpm-analysis',
    category: 'tiktok',
  },
  {
    title: 'Instagram Sponsorship Rates',
    href: '/blog/instagram-sponsorship',
    category: 'instagram',
  },
];

export async function generateStaticParams() {
  const categories = Array.from(
    new Set(allPosts.map((p) => p.category))
  );
  return categories.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}) {
  return {
    title: `${params.category.toUpperCase()} Articles - Creator Finance Tools`,
    description: `All ${params.category} related guides, RPM and monetization tips.`,
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const posts = allPosts.filter((p) => p.category === params.category);

  if (!posts.length) return <p className="p-6">No posts found.</p>;

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold mb-8">
        {params.category.toUpperCase()} Guides
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <Link
            key={post.href}
            href={post.href}
            className="border rounded-2xl p-6 hover:border-black transition"
          >
            <h3 className="text-2xl font-semibold">{post.title}</h3>
          </Link>
        ))}
      </div>
    </main>
  );
}