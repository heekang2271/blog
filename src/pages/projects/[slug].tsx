import PostViewer from '@/components/post/PostViewer';
import { getAllPosts, getPostBySlug } from '@/libs/api';
import { POST_FILEDS } from '@/libs/const';
import { markdownToHtml } from '@/libs/markdownToHtml';
import { Post as PostType } from '@/libs/types';

const Post = ({ post }: { post: PostType }) => {
  return <PostViewer post={post} />;
};

export default Post;

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, 'projects', [...POST_FILEDS, 'content']);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts('projects', ['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
