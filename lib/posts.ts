import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";


const postsDirectory = path.join(
  process.cwd(),
  "content",
  "blog"
);



export type Post = {

  slug: string;

  title: string;

  description: string;

  date: string;

  category: string;

  tags: string[];

  contentHtml?: string;

};





/**
 * 获取全部文章
 */
export function getAllPosts(): Post[] {


  if (!fs.existsSync(postsDirectory)) {

    return [];

  }



  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter(

      (fileName) =>

        fileName.endsWith(".md") &&
        !fileName.startsWith("_")

    );





  const allPosts = fileNames.map(

    (fileName) => {


      const slug =
        fileName.replace(
          /\.md$/,
          ""
        );



      const fullPath =
        path.join(
          postsDirectory,
          fileName
        );



      const fileContents =
        fs.readFileSync(
          fullPath,
          "utf8"
        );



      const matterResult =
        matter(fileContents);




      return {


        slug,



        title:
          matterResult.data.title ||
          "Untitled Article",



        description:
          matterResult.data.description ||
          "",



        date:
          matterResult.data.date ||
          new Date().toISOString(),



        category:
          matterResult.data.category ||
          "",



        tags:

          Array.isArray(
            matterResult.data.tags
          )

            ? matterResult.data.tags

            : [],


      };

    }

  );






  return allPosts.sort(

    (a, b) =>

      new Date(b.date).getTime() -

      new Date(a.date).getTime()

  );


}







/**
 * 根据 slug 获取单篇文章
 */
export async function getPostBySlug(

  slug: string

): Promise<Post | null> {



  const fullPath =
    path.join(

      postsDirectory,

      `${slug}.md`

    );





  if (!fs.existsSync(fullPath)) {

    return null;

  }






  const fileContents =

    fs.readFileSync(

      fullPath,

      "utf8"

    );





  const matterResult =

    matter(fileContents);







  const processedContent =

    await remark()

      .use(html)

      .process(

        matterResult.content

      );







  return {



    slug,




    title:

      matterResult.data.title ||

      "Untitled Article",





    description:

      matterResult.data.description ||

      "",





    date:

      matterResult.data.date ||

      new Date().toISOString(),





    category:

      matterResult.data.category ||

      "",





    tags:

      Array.isArray(

        matterResult.data.tags

      )

        ? matterResult.data.tags

        : [],





    contentHtml:

      processedContent.toString(),



  };


}