import lightTheme from './light';
import darkTheme from './dark';
import { BlogTheme } from '@/libs/types';

export function getTheme(theme: BlogTheme) {
  if (theme === 'dark') return darkTheme;
  return lightTheme;
}
