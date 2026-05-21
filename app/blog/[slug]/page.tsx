import { blogPosts } from '@/app/data/blogData';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold">Post not found</h1>
        <p className="mt-6">Slug: {slug}</p>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold">{post.title}</h1>

      <p className="mt-8 text-xl text-gray-600">{post.description}</p>

      <div className="mt-10 border rounded-2xl p-6">
        <h2 className="text-2xl font-semibold">Average RPM</h2>
        <p className="mt-4 text-3xl font-bold">{post.rpm}</p>
      </div>
    </main>
  );
}