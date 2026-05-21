export const dynamic = 'force-static';

import { blogPosts } from '@/app/data/blogData';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = blogPosts.find(
    (p) => p.slug === slug
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
        {post.rpm}
      </p>
    </main>
  );
}