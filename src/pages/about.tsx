import { GetStaticProps } from 'next';

import styled from 'styled-components';

import { getPostBySlug } from '@/libs/api';
import { markdownToHtml } from '@/libs/markdownToHtml';

import PostBody from '@/components/post/PostBody';

import { wrapStyle } from '@/styles';

const Container = styled.div`
  ${wrapStyle};
  padding-top: 100px;
`;

const About = ({ content }: { content: string }) => {
  return (
    <Container>
      <PostBody content={content} />
    </Container>
  );
};

export default About;

export const getStaticProps: GetStaticProps = async () => {
  const about = getPostBySlug('about', 'about', ['content']);
  const content = await markdownToHtml(about.content || '');

  return {
    props: {
      content,
    },
  };
};
