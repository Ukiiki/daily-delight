import { ThemeConfig } from './types';

export const themes: ThemeConfig = {
  classic: {
    name: 'Classic',
    background: '#FAFBFF',
    textColor: '#1A1A1A',
    primary: '#2D3648',
    inputBackground: '#FFFFFF',
    colors: {
      background: '#FAFBFF',
      foreground: '#1A1A1A',
      primary: {
        DEFAULT: '#2D3648',
        foreground: '#FFFFFF',
      },
      secondary: {
        DEFAULT: '#64748B',
        foreground: '#FFFFFF',
      },
      muted: {
        DEFAULT: '#F1F5F9',
        foreground: '#64748B',
      },
      accent: {
        DEFAULT: '#F8FAFC',
        foreground: '#0F172A',
      },
    },
  },
  cream: {
    name: 'Cream',
    background: '#F8F3E9',
    textColor: '#2D3648',
    primary: '#4A4235',
    inputBackground: '#FFFFFF',
    colors: {
      background: '#F8F3E9',
      foreground: '#2D3648',
      primary: {
        DEFAULT: '#4A4235',
        foreground: '#FFFFFF',
      },
      secondary: {
        DEFAULT: '#64748B',
        foreground: '#FFFFFF',
      },
      muted: {
        DEFAULT: '#F1F5F9',
        foreground: '#64748B',
      },
      accent: {
        DEFAULT: '#F8FAFC',
        foreground: '#0F172A',
      },
    },
  },
  warmWhite: {
    name: 'Warm White',
    background: '#FAF9F6',
    textColor: '#2D3648',
    primary: '#4A5568',
    inputBackground: '#FFFFFF',
    colors: {
      background: '#FAF9F6',
      foreground: '#2D3648',
      primary: {
        DEFAULT: '#4A5568',
        foreground: '#FFFFFF',
      },
      secondary: {
        DEFAULT: '#64748B',
        foreground: '#FFFFFF',
      },
      muted: {
        DEFAULT: '#F1F5F9',
        foreground: '#64748B',
      },
      accent: {
        DEFAULT: '#F8FAFC',
        foreground: '#0F172A',
      },
    },
  },
  sepia: {
    name: 'Sepia',
    background: '#F4ECD8',
    textColor: '#4A4235',
    primary: '#8B4513',
    inputBackground: '#FFFFFF',
    colors: {
      background: '#F4ECD8',
      foreground: '#4A4235',
      primary: {
        DEFAULT: '#8B4513',
        foreground: '#FFFFFF',
      },
      secondary: {
        DEFAULT: '#64748B',
        foreground: '#FFFFFF',
      },
      muted: {
        DEFAULT: '#F1F5F9',
        foreground: '#64748B',
      },
      accent: {
        DEFAULT: '#F8FAFC',
        foreground: '#0F172A',
      },
    },
  },
  nightfall: {
    name: 'Nightfall',
    background: '#292524',
    textColor: '#E7E5E4',
    primary: '#E7E5E4',
    inputBackground: '#1C1917',
    colors: {
      background: '#292524',
      foreground: '#E7E5E4',
      primary: {
        DEFAULT: '#E7E5E4',
        foreground: '#1C1917',
      },
      secondary: {
        DEFAULT: '#A8A29E',
        foreground: '#1C1917',
      },
      muted: {
        DEFAULT: '#1C1917',
        foreground: '#A8A29E',
      },
      accent: {
        DEFAULT: '#292524',
        foreground: '#E7E5E4',
      },
    },
  },
};

export const defaultTheme = themes.classic;