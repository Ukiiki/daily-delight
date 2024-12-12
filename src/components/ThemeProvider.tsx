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
      DEFAULT: '#1a1a1a',
      foreground: '#ffffff'
    },
    secondary: {
      DEFAULT: '#6b7280',
      foreground: '#ffffff'
    },
    background: '#ffffff',
    foreground: '#1a1a1a',
    card: '#ffffff',
    cardForeground: '#1a1a1a',
    border: '#e5e7eb',
    input: '#f3f4f6',
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