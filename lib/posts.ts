import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(
  process.cwd(),
  'content',
  'blog'
);

export function getAllPosts() {
  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter(
      (fileName) =>
        fileName.endsWith('.md') &&
        !fileName.startsWith('_')
    );

  const allPosts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');

    const fullPath = path.join(
      postsDirectory,
      fileName
    );

    const fileContents = fs.readFileSync(
      fullPath,
      'utf8'
    );

    const matterResult =
      matter(fileContents);

    return {
      slug,

      ...(matterResult.data as {
        title: string;
        date: string;
        description: string;
      }),
    };
  });

  return allPosts.sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );
}

export async function getPostBySlug(
  slug: string
) {
  const fullPath = path.join(
    postsDirectory,
    `${slug}.md`
  );

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(
    fullPath,
    'utf8'
  );

  const matterResult =
    matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  return {
    slug,

    contentHtml:
      processedContent.toString(),

    ...(matterResult.data as {
      title: string;
      date: string;
      description: string;
    }),
  };
}