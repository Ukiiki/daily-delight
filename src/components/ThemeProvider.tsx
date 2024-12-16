import React, { createContext, useContext, ReactNode } from 'react';
import { themeColors } from '@/lib/theme';

interface ThemeContextType {
  theme: typeof themeColors;
}

const ThemeContext = createContext<ThemeContextType>({ theme: themeColors });

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={{ theme: themeColors }}>
      {children}
    </ThemeContext.Provider>
  );
};