import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import { ThemeSelector } from "@/components/theme/ThemeSelector";
import { ThemeKey } from "@/config/theme/types";

const Settings = () => {
  const { themeKey, setTheme } = useTheme();

  const handleThemeSelect = (theme: ThemeKey) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-8 gradient-text">Appearance Settings</h1>
        
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Choose Your Reading Theme</h2>
          <p className="text-muted-foreground mb-8">
            Select a theme that provides the most comfortable reading experience for your Bible study sessions.
          </p>
          <ThemeSelector
            currentTheme={themeKey as ThemeKey}
            onThemeSelect={handleThemeSelect}
          />
        </Card>
      </main>
    </div>
  );
}

export default Settings;