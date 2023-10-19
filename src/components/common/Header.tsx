import Link from 'next/link';

import styled from 'styled-components';

import { wrapStyle } from '@/styles';

import Logo from './Logo';
import ThemeBtn from './ThemeBtn';
import SearchBtn from './SearchBtn';
import { useRouter } from 'next/router';
import { HEADER_HEIGHT } from '@/libs/const';

const Container = styled.header`
  position: sticky;
  top: 0;
  font-size: 15px;
  background-color: ${(props) => `${props.theme.global.bgColor}CC`};
  backdrop-filter: saturate(180%) blur(8px);
  z-index: 9999;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${`${HEADER_HEIGHT}px`};
  ${wrapStyle};
`;

const RightLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const GNB = styled.nav`
  display: flex;
  align-items: center;
  gap: 18px;
  font-weight: 500;

  li:hover {
    color: ${(props) => props.theme.global.mainColor};
  }
`;

const SLink = styled(Link)<{ $isCurrent?: boolean }>`
  color: ${(props) => (props.$isCurrent ? props.theme.global.mainColor : props.theme.global.textColor)};
  &:hover {
    text-decoration: ${(props) => (props.$isCurrent ? 'none' : 'underline')};
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
  const router = useRouter();
  const rootPath = router.pathname.split('/')[1];

  return (
    <Container>
      <Wrapper>
        <Link href="/">
          <Logo />
        </Link>
        <RightLayout>
          <GNB>
            <SLink href="/about" $isCurrent={rootPath === 'about'}>
              ABOUT
            </SLink>
            <SLink href="/posts" $isCurrent={rootPath === 'posts'}>
              POSTS
            </SLink>
            <SLink href="/projects" $isCurrent={rootPath === 'projects'}>
              PROJECTS
            </SLink>
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
