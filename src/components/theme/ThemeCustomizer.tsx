import { ThemePreview } from "./ThemePreview";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface CustomTheme {
  background: string;
  textColor: string;
  primary: string;
}

interface ThemeCustomizerProps {
  theme: CustomTheme;
  onChange: (theme: CustomTheme) => void;
}

export function ThemeCustomizer({ theme, onChange }: ThemeCustomizerProps) {
  const handleColorChange = (key: keyof CustomTheme) => (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...theme,
      [key]: e.target.value,
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="background">Background Color</Label>
          <div className="flex gap-4">
            <Input
              id="background"
              type="color"
              value={theme.background}
              onChange={handleColorChange("background")}
              className="w-20 h-10 p-1"
            />
            <Input
              type="text"
              value={theme.background}
              onChange={handleColorChange("background")}
              className="flex-1"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="textColor">Text Color</Label>
          <div className="flex gap-4">
            <Input
              id="textColor"
              type="color"
              value={theme.textColor}
              onChange={handleColorChange("textColor")}
              className="w-20 h-10 p-1"
            />
            <Input
              type="text"
              value={theme.textColor}
              onChange={handleColorChange("textColor")}
              className="flex-1"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="primary">Primary Color</Label>
          <div className="flex gap-4">
            <Input
              id="primary"
              type="color"
              value={theme.primary}
              onChange={handleColorChange("primary")}
              className="w-20 h-10 p-1"
            />
            <Input
              type="text"
              value={theme.primary}
              onChange={handleColorChange("primary")}
              className="flex-1"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Preview</h3>
        <ThemePreview
          theme={{
            name: "Custom",
            background: theme.background,
            textColor: theme.textColor,
            primary: theme.primary,
            inputBackground: theme.background,
          }}
          isActive={false}
          onClick={() => {}}
        />
      </div>
    </div>
  );
}