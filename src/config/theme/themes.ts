import { ThemeConfig } from './types';
import { classicTheme } from './themes/classic';
import { creamTheme } from './themes/cream';
import { warmWhiteTheme } from './themes/warm-white';
import { sepiaTheme } from './themes/sepia';
import { nightfallTheme } from './themes/nightfall';

export const themes: ThemeConfig = {
  classic: classicTheme,
  cream: creamTheme,
  warmWhite: warmWhiteTheme,
  sepia: sepiaTheme,
  nightfall: nightfallTheme,
};

export const defaultTheme = themes.classic;