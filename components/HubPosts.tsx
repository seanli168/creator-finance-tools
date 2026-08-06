import Link from "next/link";
import { getAllPosts } from "@/lib/posts";


export default function HubPosts({
  keyword,
}: {
  keyword: string;
}) {


  const k =
    (keyword || "")
      .toLowerCase();



  const posts = getAllPosts()
    .filter((post) => {


      const category =
        (post.category || "")
          .toLowerCase();



      const title =
        (post.title || "")
          .toLowerCase();



      const description =
        (post.description || "")
          .toLowerCase();



      const tags =
        Array.isArray(post.tags)
          ? post.tags.join(" ").toLowerCase()
          : "";



      return (

        category.includes(k) ||

        title.includes(k) ||

        description.includes(k) ||

        tags.includes(k)

      );


    })
    .slice(0, 12);




  if(posts.length === 0){

    return null;

  }




  return (

    <section className="mt-16">


      <h2 className="text-3xl font-bold">

        Related Articles

      </h2>



      <div className="grid md:grid-cols-3 gap-6 mt-8">


        {
          posts.map((post)=>(

            <Link

              key={post.slug}

              href={`/blog/${post.slug}`}

              className="border rounded-xl p-6 hover:border-black transition"

            >


              <h3 className="font-semibold text-lg">

                {post.title}

              </h3>



              <p className="text-gray-500 mt-3">

                {post.description}

              </p>



            </Link>

          ))
        }


      </div>


    </section>

  );

}