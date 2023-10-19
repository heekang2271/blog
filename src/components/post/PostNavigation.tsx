import { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import { PostNavigationItem } from '@/libs/types';
import { HEADER_HEIGHT } from '@/libs/const';

const Container = styled.nav`
  position: sticky;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  padding-left: 24px;
  min-width: 220px;
  border-left: 1px solid ${(props) => props.theme.global.borderColor};
  color: ${(props) => props.theme.global.lightTextColor};
`;

const HyperLink = styled.button<{ $isView: boolean }>`
  color: ${(props) => (props.$isView ? props.theme.global.textColor : props.theme.global.lightTextColor)};
  font-size: ${(props) => (props.$isView ? '17px' : '16px')};
  transition: font-size 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.global.textColor};
    font-size: 17px;
  }
`;

const PostNavigation = ({ navItems }: { navItems: PostNavigationItem[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [viewIndex, setViewIndex] = useState(-1);
  const [style, setStyle] = useState({
    render: false,
    top: 0,
  });

  const onClick = (top: number) => {
    window.scrollTo(0, top - HEADER_HEIGHT);
  };

  useEffect(() => {
    if (ref.current) {
      setStyle({
        render: true,
        top: ref.current.offsetTop,
      });
    }
  }, [ref]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      let newNavIndex = -1;
      navItems.forEach((navItem, i) => {
        if (scrollY >= navItem.top - HEADER_HEIGHT) {
          newNavIndex = i;
        }
      });
      setViewIndex(newNavIndex);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <Container ref={ref} {...(style.render && { style: { top: `${style.top}px` } })}>
      {navItems.map((navItem, i) => (
        <HyperLink key={`hyperlink${i}`} $isView={viewIndex === i} onClick={() => onClick(navItem.top)}>
          {navItem.text}
        </HyperLink>
      ))}
    </Container>
  );
};

export default PostNavigation;
