import fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';

import { MarkdownFolder } from './types';

const mdDirectory = join(process.cwd(), 'md');

export function getMarkdownBySlug(slug: string, folder: MarkdownFolder, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(mdDirectory, folder, `${realSlug}.md`);

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

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

  return items;
}

export function getMarkdownSlugs(folder: MarkdownFolder) {
  const path = join(mdDirectory, folder);
  return fs.readdirSync(path);
}

export function getAllMarkdowns(folder: MarkdownFolder, fields: string[] = []) {
  const slugs = getMarkdownSlugs(folder);
  const markdowns = slugs
    .map((slug) => getMarkdownBySlug(slug, folder, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return markdowns;
}
