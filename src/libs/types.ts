export type BlogTheme = 'light' | 'dark';
export type PostFolder = 'about' | 'posts' | 'projects';

export interface Post {
  title: string;
  excerpt: string;
  date: string;
  fixed: boolean;
  category: PostFolder;
  coverImage: string;
  tags: string[];
  content: string;
  [index: string]: any;
}
