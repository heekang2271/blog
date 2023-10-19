import styled from 'styled-components';

import { wrapStyle } from '@/styles';

const Container = styled.div`
  height: 240px;
`;

const Wrapper = styled.div`
  ${wrapStyle};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 48px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 18px;
`;

const Tag = styled.button<{ $isCurrent?: boolean }>`
  font-size: 18px;
  color: ${(props) => (props.$isCurrent ? props.theme.global.textColor : props.theme.global.lightTextColor)};
  font-weight: ${(props) => (props.$isCurrent ? 600 : 400)};

  &:hover {
    text-decoration: ${(props) => (props.$isCurrent ? 'none' : 'underline')};
  }
`;

interface BannerProps {
  title: string;
  tags: string[];
  currentTag: string;
  onTagChange: (newTag: string) => void;
}

const Banner = ({ title, tags, currentTag, onTagChange }: BannerProps) => {
  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
        <Tags>
          <Tag $isCurrent={currentTag === 'all'} onClick={() => onTagChange('all')}>
            <span>{'#'}</span>
            <span>All {title}</span>
          </Tag>
          {tags.map((tag) => (
            <Tag key={tag} $isCurrent={currentTag === tag} onClick={() => onTagChange(tag)}>
              <span>{'#'}</span>
              <span>{tag}</span>
            </Tag>
          ))}
        </Tags>
      </Wrapper>
    </Container>
  );
};

export default Banner;
