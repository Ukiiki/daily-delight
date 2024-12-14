import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./components/AuthProvider";
import { ThemeProvider } from "./components/ThemeProvider";
import NewEntry from "./pages/NewEntry";
import Auth from "./pages/Auth";
import { useAuth } from "@/components/AuthProvider";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { session } = useAuth();
  
  if (!session) {
    return <Navigate to="/auth" replace />;
  }
  return children;
};

function AppRoutes() {
  const { session } = useAuth();

  return (
    <Routes>
      <Route 
        path="/auth" 
        element={session ? <Navigate to="/" replace /> : <Auth />} 
      />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <NewEntry />
          </ProtectedRoute>
        }
      />
      {/* Catch all route - redirect to auth if not logged in, otherwise to home */}
      <Route 
        path="*" 
        element={session ? <Navigate to="/" replace /> : <Navigate to="/auth" replace />} 
      />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ThemeProvider>
            <AuthProvider>
              <Toaster />
              <Sonner />
              <AppRoutes />
            </AuthProvider>
          </ThemeProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;