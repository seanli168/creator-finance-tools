import { Metadata } from 'next';

import {
  getAllPosts,
  getPostBySlug,
} from '@/lib/posts';

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  return {
    title: post.title,

    description: post.description,
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">
        {post.title}
      </h1>

      <div
  className="prose prose-lg max-w-none mt-12"
  dangerouslySetInnerHTML={{
    __html: post.contentHtml,
  }}
/>
    </main>
  );
}