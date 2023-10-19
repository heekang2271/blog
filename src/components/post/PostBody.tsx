import 'github-markdown-css';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${(props) => props.theme.global.bgColor};
  color: ${(props) => props.theme.global.textColor};
  line-height: 1.5;
  font-size: 18px;
  word-break: keep-all;
  font-family: 'Figtree', 'Pretendard', sans-serif;

  h1,
  h2,
  h3,
  h4,
  h5 {
    border: none;
  }

  @media (prefers-color-scheme: dark) {
  }
`;

const PostBody = ({ content }: { content: string }) => {
  return (
    <>
      <Container className="markdown-body" dangerouslySetInnerHTML={{ __html: content }}></Container>
    </>
  );
};

export default PostBody;
