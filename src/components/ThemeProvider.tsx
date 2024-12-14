import React, { createContext, useContext, ReactNode } from 'react';

interface ThemeContextType {
  theme: {
    colors: {
      primary: {
        DEFAULT: string;
        foreground: string;
      };
      secondary: {
        DEFAULT: string;
        foreground: string;
      };
      background: string;
      foreground: string;
      card: string;
      cardForeground: string;
      border: string;
      input: string;
    };
  };
}

const defaultTheme = {
  colors: {
    primary: {
      DEFAULT: '#000000',
      foreground: '#FFFFFF'
    },
    secondary: {
      DEFAULT: '#000000',
      foreground: '#FFFFFF'
    },
    background: '#FFFFFF',
    foreground: '#000000',
    card: '#FFFFFF',
    cardForeground: '#000000',
    border: '#E5E7EB',
    input: '#FFFFFF',
  },
};

const ThemeContext = createContext<ThemeContextType>({ theme: defaultTheme });

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={{ theme: defaultTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};