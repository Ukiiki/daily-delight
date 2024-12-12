import { ThemeConfig } from './types';

export const themes: ThemeConfig = {
  classic: {
    name: 'Classic',
    background: '#FAFBFF',
    textColor: '#1A1A1A',
    primary: '#2D3648',
    inputBackground: '#FFFFFF',
  },
  cream: {
    name: 'Cream',
    background: '#F8F3E9',
    textColor: '#2D3648',
    primary: '#4A4235',
    inputBackground: '#FFFFFF',
  },
  warmWhite: {
    name: 'Warm White',
    background: '#FAF9F6',
    textColor: '#2D3648',
    primary: '#4A5568',
    inputBackground: '#FFFFFF',
  },
  sepia: {
    name: 'Sepia',
    background: '#F4ECD8',
    textColor: '#4A4235',
    primary: '#8B4513',
    inputBackground: '#FFFFFF',
  },
  nightfall: {
    name: 'Nightfall',
    background: '#292524',
    textColor: '#E7E5E4',
    primary: '#E7E5E4',
    inputBackground: '#1C1917',
  },
};

export const defaultTheme = themes.classic;