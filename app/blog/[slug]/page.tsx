export const dynamicParams = false;

import { Metadata } from 'next';
import { blogPosts } from '@/app/data/blogData';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts.find(
    (p) => p.slug === params.slug
  );

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} (2026 Guide)`,
    description: post.description,
  };
}

export default function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find(
    (p) => p.slug === params.slug
  );

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">
        {post.title}
      </h1>

      <p className="mt-8 text-xl text-gray-600">
        {post.description}
      </p>

      <p className="mt-6 text-3xl font-bold">
        Estimated RPM: {post.rpm}
      </p>

      <section className="mt-16">
        <h2 className="text-3xl font-bold">
          Why Is RPM Different?
        </h2>

        <p className="mt-6 text-lg text-gray-700 leading-8">
          RPM depends on audience location, advertiser demand,
          and content niche. Finance, AI, investing, and
          software niches usually have significantly higher RPM
          than entertainment categories.
        </p>
      </section>
    </main>
  );
}