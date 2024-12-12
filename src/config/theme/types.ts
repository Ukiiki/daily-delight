export interface Theme {
  name: string;
  background: string;
  textColor: string;
  primary: string;
  inputBackground: string;
}

export type ThemeKey = 'classic' | 'cream' | 'warmWhite' | 'sepia' | 'nightfall';

export type ThemeConfig = {
  [key in ThemeKey]: Theme;
};