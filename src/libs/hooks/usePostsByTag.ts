import { useMemo, useRef, useState } from 'react';

import { Post } from '../types';
import { arrayMerge } from '../utils';

function usePostsByTag(allPosts: Post[]) {
  const tags = useRef(arrayMerge(allPosts.map((post) => post.tags))).current;
  const [currentTag, setCurrentTag] = useState('all');

  const filteredPosts = useMemo(() => {
    if (currentTag === 'all') return allPosts;
    return allPosts.filter((post) => post.tags.includes(currentTag));
  }, [allPosts, currentTag]);

  const onTagChange = (newTag: string) => {
    setCurrentTag(newTag);
  };

  return {
    tags,
    currentTag,
    posts: filteredPosts,
    onTagChange,
  };
}

export default usePostsByTag;
