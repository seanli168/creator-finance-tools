import Link from 'next/link';

const posts = [
  {
    title: 'CPM vs RPM: What’s the Difference?',
    description:
      'Learn how CPM and RPM affect creator earnings.',
    href: '/blog/cpm-vs-rpm',
  },

  {
    title: 'Highest RPM YouTube Niches',
    description:
      'Discover the most profitable YouTube niches for creators.',
    href: '/blog/highest-rpm-youtube-niches',
  },
];

export const metadata = {
  title: 'Creator Blog',
  description:
    'Creator economy guides, monetization tips, and SEO resources.',
};

export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <section className="text-center">
        <h1 className="text-5xl font-bold">
          Creator Blog
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Creator monetization guides, YouTube SEO tips,
          RPM strategies, and creator economy insights.
        </p>
      </section>

      <section className="mt-20">
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="border rounded-2xl p-8 hover:border-black transition"
            >
              <h2 className="text-2xl font-semibold">
                {post.title}
              </h2>

              <p className="mt-4 text-gray-600">
                {post.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}