import Link from 'next/link';

import styled from 'styled-components';

import { wrapStyle } from '@/styles';

import Logo from './Logo';
import ThemeBtn from './ThemeBtn';
import SearchBtn from './SearchBtn';

const Container = styled.header`
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  ${wrapStyle};
`;

const RightLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const GNB = styled.ul`
  display: flex;
  align-items: center;
  gap: 18px;
  font-weight: 500;

  li:hover {
    color: ${(props) => props.theme.global.mainColor};
  }
`;

const Line = styled.div`
  border-right: 1px solid ${(props) => props.theme.global.borderColor};
  height: 20px;
`;

const BtnBox = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Link href="/">
          <Logo />
        </Link>
        <RightLayout>
          <GNB>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
            <li>
              <Link href="/posts">POSTS</Link>
            </li>
            <li>
              <Link href="/projects">PROJECTS</Link>
            </li>
          </GNB>
          <Line />
          <BtnBox>
            <li>
              <ThemeBtn />
            </li>
            <li>
              <SearchBtn />
            </li>
          </BtnBox>
        </RightLayout>
      </Wrapper>
    </Container>
  );
};

export default Header;
