import React from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const useTheme = () => {
  return {
    theme: {
      colors: {
        background: '#ffffff',
        foreground: '#000000',
        primary: {
          DEFAULT: '#000000',
          foreground: '#ffffff'
        },
        secondary: {
          DEFAULT: '#666666'
        }
      }
    }
  };
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return <>{children}</>;
};