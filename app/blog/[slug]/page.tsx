import { Metadata } from 'next';
import { notFound } from 'next/navigation';

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
params: { slug: string };
}): Promise<Metadata> {
const post = await getPostBySlug(
params.slug
);

if (!post) {
return {
title: 'Post Not Found',
};
}

return {
title: post.title,
description: post.description,
};
}

export default async function BlogPage({
params,
}: {
params: { slug: string };
}) {
const post = await getPostBySlug(
params.slug
);

if (!post) {
notFound();
}

return ( <main className="max-w-4xl mx-auto px-6 py-16"> <h1 className="text-5xl font-bold">
{post.title} </h1>


  <div
    className="prose prose-lg max-w-none mt-12 prose-a:text-blue-600 prose-a:underline"
    dangerouslySetInnerHTML={{
      __html: post.contentHtml,
    }}
  />
</main>


);
}
