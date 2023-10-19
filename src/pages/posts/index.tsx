import { GetStaticProps } from 'next';

import { Post } from '@/libs/types';
import { getAllPosts } from '@/libs/api';
import { POST_FILEDS } from '@/libs/const';
import usePostsByTag from '@/libs/hooks/usePostsByTag';

import Banner from '@/components/posts/Banner';
import Page from '@/components/posts/Page';
import Card from '@/components/posts/Card';

const Posts = ({ posts: allPosts }: { posts: Post[] }) => {
  const { tags, currentTag, posts, onTagChange } = usePostsByTag(allPosts);

  return (
    <main>
      <Banner title="Posts" tags={tags} currentTag={currentTag} onTagChange={onTagChange} />
      <Page>
        {posts.map((post, i) => (
          <Card key={`${post.title}_${i}`} href={`/posts/${post.slug}`} post={post} />
        ))}
      </Page>
    </main>
  );
};

export default Posts;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts('posts', POST_FILEDS);

  return {
    props: {
      posts,
    },
  };
};
