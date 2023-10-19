import styled from 'styled-components';

import Header from './Header';

const Container = styled.div`
  padding-bottom: 120px;
`;

const Layout = ({ children }: { children: any }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default Layout;
