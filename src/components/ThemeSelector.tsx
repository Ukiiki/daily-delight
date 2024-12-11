import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Palette } from "lucide-react";
import { themes } from "@/config/themes";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";

interface ThemeSelectorProps {
  currentTheme: string;
  onThemeSelect: (themeName: string) => void;
  isAutoTheme: boolean;
  onAutoThemeChange: (auto: boolean) => void;
}

export function ThemeSelector({
  currentTheme,
  onThemeSelect,
  isAutoTheme,
  onAutoThemeChange,
}: ThemeSelectorProps) {
  const regularThemes = themes.filter((theme) => !theme.seasonal);
  const seasonalThemes = themes.filter((theme) => theme.seasonal);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="w-9 h-9">
          <Palette className="h-4 w-4" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[240px]">
        <div className="flex items-center justify-between px-2 py-2">
          <span className="text-sm">Auto Seasonal</span>
          <Switch
            checked={isAutoTheme}
            onCheckedChange={(checked) => {
              onAutoThemeChange(checked);
              localStorage.setItem("autoTheme", JSON.stringify(checked));
            }}
          />
        </div>
        <DropdownMenuSeparator />
        {!isAutoTheme && (
          <>
            {regularThemes.map((theme) => (
              <DropdownMenuItem
                key={theme.name}
                onClick={() => onThemeSelect(theme.name)}
                className={cn(
                  "flex items-center gap-4 cursor-pointer",
                  currentTheme === theme.name && "bg-accent"
                )}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: theme.colors.primary.DEFAULT }}
                  />
                  <div
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: theme.colors.secondary.DEFAULT }}
                  />
                  <div
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: theme.colors.background }}
                  />
                </div>
                <span className="flex-1">{theme.label}</span>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <div className="px-2 py-1.5 text-sm font-semibold">Seasonal</div>
            {seasonalThemes.map((theme) => (
              <DropdownMenuItem
                key={theme.name}
                onClick={() => onThemeSelect(theme.name)}
                className={cn(
                  "flex items-center gap-4 cursor-pointer",
                  currentTheme === theme.name && "bg-accent"
                )}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: theme.colors.primary.DEFAULT }}
                  />
                  <div
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: theme.colors.secondary.DEFAULT }}
                  />
                  <div
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: theme.colors.background }}
                  />
                </div>
                <span className="flex-1">{theme.label}</span>
              </DropdownMenuItem>
            ))}
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}