import styled from 'styled-components';

import Header from './Header';

const Container = styled.div``;

const Layout = ({ children }: { children: any }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default Layout;
