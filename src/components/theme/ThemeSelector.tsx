import { themes } from "@/config/theme/themes";
import { ThemePreview } from "./ThemePreview";
import { ThemeKey } from "@/config/theme/types";

interface ThemeSelectorProps {
  currentTheme: ThemeKey;
  onThemeSelect: (theme: ThemeKey) => void;
}

export function ThemeSelector({ currentTheme, onThemeSelect }: ThemeSelectorProps) {
  return (
    <div className="grid grid-cols-1 gap-8">
      {(Object.entries(themes) as [ThemeKey, typeof themes[ThemeKey]][]).map(([key, theme]) => (
        <ThemePreview
          key={key}
          theme={theme}
          isActive={currentTheme === key}
          onClick={() => onThemeSelect(key)}
        />
      ))}
    </div>
  );
}