import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import { ThemeSelector } from "@/components/theme/ThemeSelector";

const Settings = () => {
  const { themeKey, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-8 gradient-text">Appearance Settings</h1>
        
        <Tabs defaultValue="themes" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="themes">Themes</TabsTrigger>
            <TabsTrigger value="customize">Customize</TabsTrigger>
          </TabsList>

          <TabsContent value="themes" className="space-y-8 animate-fade-up">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Choose Your Reading Theme</h2>
              <p className="text-muted-foreground mb-8">
                Select a theme that provides the most comfortable reading experience for your Bible study sessions.
              </p>
              <ThemeSelector
                currentTheme={themeKey}
                onThemeSelect={setTheme}
              />
            </Card>
          </TabsContent>

          <TabsContent value="customize">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Customize Your Experience</h2>
              <p className="text-muted-foreground">
                Additional customization options will be available in future updates.
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

export default Settings;