import { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import { Post, PostNavigationItem } from '@/libs/types';
import PostBody from './PostBody';
import PostNavigation from './PostNavigation';
import ResponsiveImage from '../ui/ResponsiveImage';

import { wrapStyle } from '@/styles';

const Layout = styled.div`
  ${wrapStyle};
  display: flex;
  align-items: flex-start;
  padding-top: 100px;
  gap: 60px;
`;

const Container = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 38px;
  font-weight: 700;
`;

const Info = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 10px;
  font-size: 16px;
  color: ${(props) => props.theme.global.lightTextColor};
`;

const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Tag = styled.span`
  color: ${(props) => props.theme.global.lightTextColor};
`;

const CoverImage = styled.div`
  margin-top: 40px;
`;

const Content = styled.div`
  margin-top: 160px;
`;

const PostViewer = ({ post }: { post: Post }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [navItems, setNavItems] = useState<PostNavigationItem[]>([]);

  useEffect(() => {
    if (contentRef.current) {
      const h1s = contentRef.current.querySelectorAll('h1');
      const newNavItems = [] as PostNavigationItem[];

      h1s.forEach((h1) => {
        newNavItems.push({ text: h1.innerText, top: h1.offsetTop });
      });

      setNavItems(newNavItems);
    }
  }, [contentRef]);

  return (
    <Layout>
      <Container>
        <Title>{post.title}</Title>
        <Info>
          <span>{post.category.toUpperCase()}</span>
          <span>{`·`}</span>
          <span>{post.date.replaceAll('-', '.')}</span>
          <span>{`·`}</span>
          <Tags>
            {post.tags.map((tag) => (
              <Tag key={`${tag}`}>
                {'#'}
                {tag}
              </Tag>
            ))}
          </Tags>
        </Info>
        <CoverImage>
          <ResponsiveImage src={post.coverImage} alt={post.title} />
        </CoverImage>
        <Content ref={contentRef}>
          <PostBody content={post.content} />
        </Content>
      </Container>
      <PostNavigation navItems={navItems} />
    </Layout>
  );
};

export default PostViewer;
