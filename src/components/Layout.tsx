import styled from 'styled-components';

const Container = styled.div``;

const Layout = ({ children }: { children: any }) => {
  return <Container>{children}</Container>;
};

export default Layout;
