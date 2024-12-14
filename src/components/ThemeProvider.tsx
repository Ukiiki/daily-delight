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
      DEFAULT: '#1A1F2C',
      foreground: '#FFFFFF'
    },
    secondary: {
      DEFAULT: '#9b87f5',
      foreground: '#FFFFFF'
    },
    background: '#FFFFFF',
    foreground: '#1A1F2C',
    card: '#FFFFFF',
    cardForeground: '#1A1F2C',
    border: '#E5E7EB',
    input: '#F6F6F7',
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