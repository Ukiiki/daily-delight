import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "@/components/ThemeProvider";
import { themes } from "@/config/themes";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BookOpen, Eye, PenBox, Heart } from "lucide-react";

const Settings = () => {
  const { theme, setTheme, isAutoTheme, setIsAutoTheme } = useTheme();

  const ThemePreviewCard = ({ previewTheme }: { previewTheme: typeof themes[0] }) => {
    const isActive = theme.name === previewTheme.name;
    
    return (
      <Card
        className={cn(
          "p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] group",
          isActive && "ring-2 ring-primary shadow-lg",
          "animate-fade-up"
        )}
        onClick={() => setTheme(previewTheme.name)}
        style={{
          backgroundColor: previewTheme.colors.background,
          color: previewTheme.colors.primary.DEFAULT,
        }}
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">{previewTheme.label}</h3>
            {previewTheme.seasonal && (
              <span className="text-xs px-2 py-1 rounded-full"
                style={{
                  backgroundColor: previewTheme.colors.muted.DEFAULT,
                  color: previewTheme.colors.muted.foreground,
                }}>
                Seasonal
              </span>
            )}
          </div>
          
          {/* Color Palette Preview */}
          <div className="flex items-center space-x-2 mb-6">
            {Object.entries(previewTheme.colors).map(([key, value]) => (
              typeof value === 'string' ? (
                <div
                  key={key}
                  className="w-8 h-8 rounded-full border transition-transform group-hover:scale-110"
                  style={{ backgroundColor: value }}
                  title={key}
                />
              ) : (
                <div
                  key={key}
                  className="w-8 h-8 rounded-full border transition-transform group-hover:scale-110"
                  style={{ backgroundColor: value.DEFAULT }}
                  title={key}
                />
              )
            ))}
          </div>

          {/* Interface Preview */}
          <div className="space-y-6 rounded-lg p-4"
            style={{ backgroundColor: previewTheme.colors.muted.DEFAULT }}>
            
            {/* Scripture Section Preview */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium"
                style={{ color: previewTheme.colors.primary.DEFAULT }}>
                <BookOpen className="w-4 h-4" />
                Scripture
              </div>
              <div className="text-sm italic"
                style={{ color: previewTheme.colors.secondary.DEFAULT }}>
                "For I know the plans I have for you," declares the LORD...
              </div>
            </div>

            {/* Observation Preview */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium"
                style={{ color: previewTheme.colors.primary.DEFAULT }}>
                <Eye className="w-4 h-4" />
                Observation
              </div>
              <Input
                className="text-sm h-8 border"
                placeholder="Enter your observations..."
                style={{
                  backgroundColor: previewTheme.colors.background,
                  borderColor: previewTheme.colors.muted.DEFAULT,
                  color: previewTheme.colors.primary.DEFAULT,
                }}
                readOnly
              />
            </div>

            {/* Action Buttons Preview */}
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                className="text-xs"
                style={{
                  backgroundColor: previewTheme.colors.primary.DEFAULT,
                  color: previewTheme.colors.primary.foreground,
                }}
              >
                Save Entry
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-xs"
                style={{
                  borderColor: previewTheme.colors.primary.DEFAULT,
                  color: previewTheme.colors.primary.DEFAULT,
                }}
              >
                Preview
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );
  };

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {themes.map((t) => (
                <ThemePreviewCard key={t.name} previewTheme={t} />
              ))}
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