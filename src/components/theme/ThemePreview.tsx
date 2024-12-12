import { Theme } from "@/config/theme/types";
import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

interface ThemePreviewProps {
  theme: Theme;
  isActive: boolean;
  onClick: () => void;
}

export function ThemePreview({ theme, isActive, onClick }: ThemePreviewProps) {
  return (
    <Card
      className="cursor-pointer transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
      style={{ 
        backgroundColor: theme.background,
        border: theme.name === "Classic" ? "2px solid #1a1a1a20" :
                theme.name === "Sepia" ? `2px solid ${theme.primary}40` :
                theme.name === "Nightfall" ? "2px solid #ffffff20" :
                `2px solid ${theme.textColor}10`,
        borderRadius: "12px",
        minHeight: "140px",
      }}
      onClick={onClick}
    >
      {isActive && (
        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-500" />
      )}
      
      <div 
        className="flex flex-col items-center justify-center p-4 space-y-2" 
        style={{ color: theme.textColor }}
      >
        <BookOpen 
          className="w-6 h-6 mb-1" 
          style={{ color: theme.primary }} 
        />
        <h3 className="text-lg font-medium">{theme.name}</h3>
        <div 
          className="text-sm mt-1 px-3 py-1.5 rounded-md w-full text-center"
          style={{ 
            backgroundColor: theme.inputBackground || theme.background,
            border: theme.name === "Sepia" ? `1px solid ${theme.primary}80` :
                    theme.name === "Classic" ? "1px solid #1a1a1a20" :
                    theme.name === "Nightfall" ? "1px solid #ffffff20" :
                    `1px solid ${theme.textColor}20`,
          }}
        >
          Sample Text
        </div>
      </div>
    </Card>
  );
}