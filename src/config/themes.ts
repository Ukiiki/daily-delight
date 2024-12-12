export type ThemeColors = {
  background: string;
  foreground: string;
  primary: {
    DEFAULT: string;
    foreground: string;
  };
  secondary: {
    DEFAULT: string;
    foreground: string;
  };
  muted: {
    DEFAULT: string;
    foreground: string;
  };
  accent: {
    DEFAULT: string;
    foreground: string;
  };
  card: {
    DEFAULT: string;
    foreground: string;
  };
  popover: {
    DEFAULT: string;
    foreground: string;
  };
};

export type Theme = {
  name: string;
  label: string;
  colors: ThemeColors;
  seasonal?: boolean;
};

// Split themes into separate files for better organization
import { classicTheme } from './themes/classic';
import { creamTheme } from './themes/cream';
import { warmWhiteTheme } from './themes/warm-white';
import { sepiaTheme } from './themes/sepia';
import { nightfallTheme } from './themes/nightfall';
import { springTheme } from './themes/spring';
import { summerTheme } from './themes/summer';
import { fallTheme } from './themes/fall';
import { winterTheme } from './themes/winter';
import { christmasTheme } from './themes/christmas';
import { easterTheme } from './themes/easter';

export const themes: Theme[] = [
  classicTheme,
  creamTheme,
  warmWhiteTheme,
  sepiaTheme,
  nightfallTheme,
  springTheme,
  summerTheme,
  fallTheme,
  winterTheme,
  christmasTheme,
  easterTheme,
];

export const defaultTheme = themes[0];