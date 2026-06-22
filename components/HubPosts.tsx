import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function HubPosts({
keyword,
title,
}: {
keyword: string[];
title: string;
}) {
const posts = getAllPosts()
.filter((post) =>
keyword.some((k) =>
(
post.title +
' ' +
post.description
)
.toLowerCase()
.includes(k.toLowerCase())
)
)
.slice(0, 12);

if (posts.length === 0) {
return null;
}

return ( <section className="mt-20"> <h2 className="text-3xl font-bold">
{title} </h2>


  <div className="grid md:grid-cols-2 gap-6 mt-8">
    {posts.map((post) => (
      <Link
        key={post.slug}
        href={`/blog/${post.slug}`}
        className="border rounded-xl p-6 hover:border-black transition"
      >
        <h3 className="font-semibold">
          {post.title}
        </h3>

        <p className="mt-2 text-gray-600">
          {post.description}
        </p>
      </Link>
    ))}
  </div>
</section>


);
}
