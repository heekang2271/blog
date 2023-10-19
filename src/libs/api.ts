import fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';

import { Post, PostFolder } from './types';

const mdDirectory = join(process.cwd(), 'md');

export function getPostBySlug(slug: string, folder: PostFolder, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(mdDirectory, folder, `${realSlug}.md`);

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {} as Post;

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items as Post;
}

export function getPostSlugs(folder: PostFolder) {
  const path = join(mdDirectory, folder);
  return fs.readdirSync(path);
}

export function getAllPosts(folder: PostFolder, fields: string[] = []) {
  const slugs = getPostSlugs(folder);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, folder, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => {
      if (post2.fixed && !post1.fixed) return 1;
      if (post1.fixed && !post2.fixed) return -1;
      return post1.date > post2.date ? -1 : 1;
    });
  return posts;
}
