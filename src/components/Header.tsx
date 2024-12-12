import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useTheme } from "./ThemeProvider";

const Header = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Error signing out");
    } else {
      toast.success("Signed out successfully");
      navigate("/");
    }
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-colors"
      style={{
        backgroundColor: `${theme.colors.background}CC`,
        borderColor: `${theme.colors.primary.DEFAULT}20`
      }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div 
          className="font-semibold text-xl"
          style={{ color: theme.colors.primary.DEFAULT }}
        >
          Daily Delight
        </div>
        <Button 
          variant="outline"
          onClick={handleSignOut}
          className="text-sm hover:bg-primary/10 transition-colors"
          style={{
            borderColor: `${theme.colors.primary.DEFAULT}20`,
            color: theme.colors.foreground
          }}
        >
          Sign Out
        </Button>
      </div>
    </header>
  );
};

export default Header;