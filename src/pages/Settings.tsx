import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "@/components/ThemeProvider";
import { themes } from "@/config/themes";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";

const Settings = () => {
  const { theme, setTheme, isAutoTheme, setIsAutoTheme } = useTheme();

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

          <TabsContent value="themes">
            <div className="grid gap-8">
              {/* Auto Theme Toggle */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Automatic Theme</h3>
                  <div className="flex items-center space-x-2">
                    <label className="text-sm text-muted-foreground">
                      Change theme based on season
                    </label>
                    <input
                      type="checkbox"
                      checked={isAutoTheme}
                      onChange={(e) => {
                        setIsAutoTheme(e.target.checked);
                        localStorage.setItem("autoTheme", JSON.stringify(e.target.checked));
                      }}
                      className="toggle"
                    />
                  </div>
                </div>
              </Card>

              {/* Theme Preview Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {themes.map((t) => (
                  <Card
                    key={t.name}
                    className={cn(
                      "p-6 cursor-pointer transition-all hover:scale-105",
                      theme.name === t.name && "ring-2 ring-primary"
                    )}
                    onClick={() => setTheme(t.name)}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">{t.label}</h3>
                        {t.seasonal && (
                          <span className="text-xs bg-muted px-2 py-1 rounded-full">
                            Seasonal
                          </span>
                        )}
                      </div>
                      
                      {/* Theme Preview */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <div
                            className="w-8 h-8 rounded-full border"
                            style={{ backgroundColor: t.colors.primary.DEFAULT }}
                          />
                          <div
                            className="w-8 h-8 rounded-full border"
                            style={{ backgroundColor: t.colors.secondary.DEFAULT }}
                          />
                          <div
                            className="w-8 h-8 rounded-full border"
                            style={{ backgroundColor: t.colors.background }}
                          />
                        </div>
                        
                        {/* Preview Text */}
                        <div
                          className="p-4 rounded-lg"
                          style={{ backgroundColor: t.colors.background }}
                        >
                          <div
                            className="text-sm font-medium mb-2"
                            style={{ color: t.colors.primary.DEFAULT }}
                          >
                            Preview Text
                          </div>
                          <div
                            className="text-xs"
                            style={{ color: t.colors.secondary.DEFAULT }}
                          >
                            This is how your content will look with this theme.
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="customize">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Custom Theme</h3>
              <p className="text-muted-foreground mb-4">
                Customize your theme colors and preview them in real-time.
              </p>
              <div className="space-y-6">
                {/* Color Pickers */}
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Primary Color</label>
                    <input
                      type="color"
                      value={theme.colors.primary.DEFAULT}
                      onChange={() => {}} // To be implemented
                      className="w-12 h-12 rounded cursor-pointer"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Secondary Color</label>
                    <input
                      type="color"
                      value={theme.colors.secondary.DEFAULT}
                      onChange={() => {}} // To be implemented
                      className="w-12 h-12 rounded cursor-pointer"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Background Color</label>
                    <input
                      type="color"
                      value={theme.colors.background}
                      onChange={() => {}} // To be implemented
                      className="w-12 h-12 rounded cursor-pointer"
                    />
                  </div>
                </div>

                {/* Preview Section */}
                <Card className="p-6 mt-8">
                  <h4 className="text-md font-semibold mb-4">Live Preview</h4>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-background">
                      <h5 className="text-primary text-lg font-semibold">
                        Sample Heading
                      </h5>
                      <p className="text-secondary mt-2">
                        This is how your content will appear with the selected colors.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Settings;