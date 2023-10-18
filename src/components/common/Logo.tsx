import styled from 'styled-components';

const Container = styled.div``;

const Text = styled.span`
  line-height: 1;
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

const Logo = () => {
  return (
    <Container>
      <Text>
        <span>heekang</span>
        <span>Shin</span>
      </Text>
    </Container>
  );
};

export default Logo;
