import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import {
  getAllPosts,
  getPostBySlug,
} from '@/lib/posts';

import RelatedPosts from '@/components/RelatedPosts';
import RelatedToolsByKeyword from '@/components/RelatedToolsByKeyword';

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

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'This article does not exist.',
    };
  }

  return {
    title: post.title,
    description: post.description,

    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
    },

    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">

      {/* Title */}
      <h1 className="text-5xl font-bold leading-tight">
        {post.title}
      </h1>

      {/* Date */}
      <p className="mt-4 text-gray-500 text-sm">
        {post.date}
      </p>

      {/* Content */}
      <div
        className="prose prose-lg max-w-none mt-12 prose-a:text-blue-600 prose-a:underline"
        dangerouslySetInnerHTML={{
          __html: post.contentHtml,
        }}
      />

      {/* Related Tools (SEO internal linking boost) */}
      <RelatedToolsByKeyword
        title={post.title}
      />

      {/* Related Posts (cluster linking) */}
      <RelatedPosts
        currentSlug={slug}
      />

    </main>
  );
}