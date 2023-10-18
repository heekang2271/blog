import { useMemo } from 'react';

import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

import { themeState } from '@/libs/atoms';
import { BlogTheme } from '@/libs/types';

import IconBtn from '../ui/IconBtn';

const Container = styled.button`
  min-width: 20px;
  font-size: 18px;
`;

const ThemeBtn = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  const currentTheme = useMemo(() => (theme.system === 'pending' ? undefined : theme.mode), [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const mode = prev.mode === 'dark' ? 'light' : ('dark' as BlogTheme);
      return {
        ...prev,
        mode,
      };
    });
  };

  return (
    <IconBtn size={18} bgSize={36} onClick={toggleTheme}>
      {currentTheme && <>{currentTheme === 'dark' ? <BsSunFill /> : <BsMoonFill />}</>}
    </IconBtn>
  );
};

export default ThemeBtn;
