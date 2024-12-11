import { createContext, useContext, useEffect, useState } from "react";
import { Theme, defaultTheme, themes } from "@/config/themes";

type ThemeContextType = {
  theme: Theme;
  setTheme: (themeName: string) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  setTheme: () => null,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      const found = themes.find((t) => t.name === savedTheme);
      if (found) setThemeState(found);
    }
  }, []);

  const setTheme = (themeName: string) => {
    const newTheme = themes.find((t) => t.name === themeName);
    if (newTheme) {
      setThemeState(newTheme);
      localStorage.setItem("theme", themeName);
      
      // Update CSS variables
      const root = document.documentElement;
      Object.entries(newTheme.colors).forEach(([key, value]) => {
        if (typeof value === 'object') {
          Object.entries(value).forEach(([subKey, subValue]) => {
            root.style.setProperty(
              `--${key}${subKey === 'DEFAULT' ? '' : `-${subKey}`}`,
              subValue
            );
          });
        } else {
          root.style.setProperty(`--${key}`, value);
        }
      });
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};