import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/components/ThemeProvider";
import { Card } from "@/components/ui/card";

const AuthPage = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div 
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors"
      style={{ backgroundColor: theme.colors.background }}
    >
      <Card 
        className="max-w-md w-full space-y-8 p-8 shadow-sm transition-all duration-300"
        style={{
          backgroundColor: theme.colors.background,
          borderColor: `${theme.colors.primary.DEFAULT}20`,
          color: theme.colors.foreground,
        }}
      >
        <div className="text-center">
          <h1 
            className="text-3xl font-bold"
            style={{ color: theme.colors.primary.DEFAULT }}
          >
            Daily Delight
          </h1>
          <p 
            className="mt-2 text-sm"
            style={{ color: theme.colors.secondary.DEFAULT }}
          >
            Sign in or create an account
          </p>
        </div>
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: theme.colors.primary.DEFAULT,
                  brandAccent: theme.colors.secondary.DEFAULT,
                  inputBackground: `${theme.colors.primary.DEFAULT}10`,
                  inputBorder: `${theme.colors.primary.DEFAULT}20`,
                  inputText: theme.colors.foreground,
                  inputLabelText: theme.colors.foreground,
                }
              }
            },
            className: {
              container: 'space-y-4',
              button: 'w-full px-4 py-2 text-sm font-medium rounded-md transition-colors',
              input: 'w-full px-3 py-2 rounded-md transition-colors',
              label: 'block text-sm font-medium mb-1',
            }
          }}
          theme="custom"
          providers={[]}
          redirectTo={window.location.origin}
        />
      </Card>
    </div>
  );
};

export default AuthPage;