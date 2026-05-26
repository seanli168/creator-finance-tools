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
  const fileNames =
    fs.readdirSync(postsDirectory);

    const filteredFileNames = fileNames.filter(
  (fileName) =>
    !fileName.startsWith('_')
);

  const allPosts = filteredFileNames.map((fileName) => {
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

  return allPosts;
}

export async function getPostBySlug(
  slug: string
) {
  const fullPath = path.join(
    postsDirectory,
    `${slug}.md`
  );

  const fileContents = fs.readFileSync(
    fullPath,
    'utf8'
  );

  const matterResult =
    matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml =
    processedContent.toString();

  return {
    slug,

    contentHtml,

    ...(matterResult.data as {
      title: string;
      date: string;
      description: string;
    }),
  };
}