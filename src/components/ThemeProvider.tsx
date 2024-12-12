import React, { createContext, useContext, ReactNode } from 'react';

interface ThemeContextType {
  theme: {
    colors: {
      primary: {
        DEFAULT: string;
      };
      background: string;
      foreground: string;
    };
  };
}

const defaultTheme = {
  colors: {
    primary: {
      DEFAULT: '#3b82f6',
    },
    background: '#ffffff',
    foreground: '#000000',
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