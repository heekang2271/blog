import { useEffect } from 'react';

import { useRecoilState } from 'recoil';
import { setCookie } from 'cookies-next';
import { ThemeProvider as SC_ThemeProvider } from 'styled-components';

import { themeState } from '@/libs/atoms';
import { COOKEY_KEY } from '@/libs/const';
import { BlogTheme } from '@/libs/types';
import { getCookieOption } from '@/libs/utils';

import { getTheme } from '@/styles/theme';

interface ThemeProviderProps {
  theme?: BlogTheme;
  children: React.ReactNode;
}

const ThemeProvider = ({ theme: themeType, children }: ThemeProviderProps) => {
  const [currentTheme, setTheme] = useRecoilState(themeState);
  const theme = currentTheme.system === 'pending' ? getTheme(themeType ?? 'light') : getTheme(currentTheme.mode);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme((prev) => ({
        ...prev,
        system: 'dark',
      }));
    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme((prev) => ({
        ...prev,
        system: 'light',
      }));
    }
  }, [setTheme]);

  useEffect(() => {
    if (themeType === 'light') {
      return setTheme((prev) => ({ ...prev, mode: 'light' }));
    }
    if (themeType === 'dark') {
      return setTheme((prev) => ({ ...prev, mode: 'dark' }));
    }
    if (currentTheme.system === 'light') {
      return setTheme((prev) => ({ ...prev, mode: 'light' }));
    }
    if (currentTheme.system === 'dark') {
      return setTheme((prev) => ({ ...prev, mode: 'dark' }));
    }
    setTheme((prev) => ({ ...prev, mode: 'dark' }));
  }, [themeType, currentTheme.system, setTheme]);

  useEffect(() => {
    if (currentTheme.mode === 'light') {
      setCookie(COOKEY_KEY.THEME, 'light', getCookieOption());
    }
    if (currentTheme.mode === 'dark') {
      setCookie(COOKEY_KEY.THEME, 'dark', getCookieOption());
    }
  }, [currentTheme.mode]);

  return <SC_ThemeProvider theme={theme}>{children}</SC_ThemeProvider>;
};

export default ThemeProvider;
