import { atom } from 'recoil';
import { BlogTheme } from './types';

export const themeState = atom<{ mode: BlogTheme; system: 'pending' | BlogTheme }>({
  key: 'themeState',
  default: {
    mode: 'light',
    system: 'pending',
  },
});
