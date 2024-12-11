import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ThemeSelector } from "./ThemeSelector";
import { useTheme } from "./ThemeProvider";

const Header = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Error signing out");
    } else {
      toast.success("Signed out successfully");
      navigate("/auth");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-semibold text-xl gradient-text">YourBrand</div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm hover:text-primary transition-colors">Features</a>
          <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeSelector
            currentTheme={theme.name}
            onThemeSelect={setTheme}
          />
          <Button 
            variant="outline"
            onClick={handleSignOut}
            className="text-sm"
          >
            Sign Out
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;