import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";

const Settings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-8">Settings</h1>
        
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="general">General</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-8">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">General Settings</h2>
              <p className="text-muted-foreground">
                Configure your general application settings here.
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

export default Settings;