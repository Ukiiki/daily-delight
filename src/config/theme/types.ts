export interface Theme {
  name: string;
  background: string;
  textColor: string;
  primary: string;
  inputBackground: string;
  colors: {
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
  };
}

export type ThemeKey = 
  | 'classic' 
  | 'cream' 
  | 'warmWhite' 
  | 'sepia' 
  | 'nightfall';

export type ThemeConfig = {
  [key in ThemeKey]: Theme;
};