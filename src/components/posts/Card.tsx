import Link from 'next/link';
import styled from 'styled-components';
import { FiExternalLink } from 'react-icons/fi';
import { BsPinAngleFill } from 'react-icons/bs';

import { Post } from '@/libs/types';

import ResponsiveImage from '../ui/ResponsiveImage';

const CoverImage = styled.div`
  position: relative;
  width: 100%;
  height: 160px;
  border-radius: 12px;
  overflow: hidden;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 0;
  line-height: 1.2;
  min-height: 120px;

  & > div {
    display: flex;
    flex-direction: column;
  }
`;

const Date = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.global.lightTextColor};
  margin-top: 20px;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    color: ${(props) => props.theme.global.lightTextColor};
    font-size: 16px;
  }
`;

const Except = styled.span`
  font-size: 16px;
  color: #ffffff;
`;

const Tags = styled.div`
  display: flex;
  column-gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const Tag = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.global.lightTextColor};
`;

const CoverExcept = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const CoverIconBox = styled.div`
  display: flex;
  justify-content: flex-end;

  svg {
    font-size: 24px;
    color: #ffffff;
  }
`;

const Container = styled(Link)`
  &:hover {
    ${CoverExcept} {
      display: flex;
    }
  }
`;

interface CardProps {
  href: string;
  post: Post;
}

const Card = ({ post, href }: CardProps) => {
  const date = post.date.replaceAll('-', '.');
  return (
    <Container href={href}>
      <CoverImage>
        <ResponsiveImage src={post.coverImage} isFull={true} alt={post.title} />
        <CoverExcept>
          <CoverIconBox>
            <FiExternalLink />
          </CoverIconBox>
          <Except>{post.excerpt}</Except>
        </CoverExcept>
      </CoverImage>
      <Body>
        <div>
          <Title>
            {post.fixed && <BsPinAngleFill />}
            <span>{post.title}</span>
          </Title>
          <Tags>
            {post.tags.map((tag) => (
              <Tag key={`${post.title}_${tag}`}>{`#${tag}`}</Tag>
            ))}
          </Tags>
        </div>
        <Date>{date}</Date>
      </Body>
    </Container>
  );
};

export default Card;
