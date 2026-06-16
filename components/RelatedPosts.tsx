import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function RelatedPosts({
currentSlug,
}: {
currentSlug: string;
}) {
const posts = getAllPosts()
.filter(
(post) => post.slug !== currentSlug
)
.slice(0, 4);

return ( <section className="mt-20"> <h2 className="text-3xl font-bold">
Related Articles </h2>


  <div className="mt-8 grid md:grid-cols-2 gap-6">
    {posts.map((post) => (
      <Link
        key={post.slug}
        href={`/blog/${post.slug}`}
        className="border rounded-xl p-6 hover:border-black"
      >
        <h3 className="font-semibold">
          {post.title}
        </h3>

        <p className="text-gray-500 mt-2">
          {post.description}
        </p>
      </Link>
    ))}
  </div>
</section>


);
}
