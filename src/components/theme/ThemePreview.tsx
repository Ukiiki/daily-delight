import { Theme } from "@/config/theme/types";
import { Card } from "@/components/ui/card";
import { BookOpen, Eye, PenBox, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ThemePreviewProps {
  theme: Theme;
  isActive: boolean;
  onClick: () => void;
}

export function ThemePreview({ theme, isActive, onClick }: ThemePreviewProps) {
  return (
    <Card
      className="p-4 cursor-pointer transition-all duration-300 hover:scale-[1.02] relative overflow-hidden min-h-[200px]"
      style={{ 
        backgroundColor: theme.background,
        border: `1px solid ${theme.textColor}20`
      }}
      onClick={onClick}
    >
      {isActive && (
        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-500" />
      )}
      
      <div className="space-y-2" style={{ color: theme.textColor }}>
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-sm font-medium">{theme.name}</h3>
        </div>

        <div className="space-y-2">
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <BookOpen className="w-3 h-3" style={{ color: theme.primary }} />
              <span className="text-xs font-medium">Scripture</span>
            </div>
            <Input
              readOnly
              value="For God so loved the world..."
              style={{ 
                backgroundColor: theme.inputBackground || theme.background,
                color: theme.textColor,
                borderColor: theme.name === "Sepia" ? theme.primary + "80" : `${theme.textColor}20`,
                borderWidth: "1px",
                fontSize: "0.75rem",
                padding: "0.375rem 0.5rem"
              }}
              className="w-full h-6 text-xs"
            />
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3" style={{ color: theme.primary }} />
              <span className="text-xs font-medium">Observation</span>
            </div>
            <Textarea
              readOnly
              placeholder="Enter your observations..."
              style={{ 
                backgroundColor: theme.inputBackground || theme.background,
                color: theme.textColor,
                borderColor: theme.name === "Sepia" ? theme.primary + "80" : `${theme.textColor}20`,
                borderWidth: "1px",
                fontSize: "0.75rem",
                padding: "0.375rem 0.5rem",
                minHeight: "1.5rem",
                height: "1.5rem"
              }}
              className="w-full text-xs resize-none"
            />
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <PenBox className="w-3 h-3" style={{ color: theme.primary }} />
              <span className="text-xs font-medium">Application</span>
            </div>
            <Textarea
              readOnly
              placeholder="How can you apply this..."
              style={{ 
                backgroundColor: theme.inputBackground || theme.background,
                color: theme.textColor,
                borderColor: theme.name === "Sepia" ? theme.primary + "80" : `${theme.textColor}20`,
                borderWidth: "1px",
                fontSize: "0.75rem",
                padding: "0.375rem 0.5rem",
                minHeight: "1.5rem",
                height: "1.5rem"
              }}
              className="w-full text-xs resize-none"
            />
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Heart className="w-3 h-3" style={{ color: theme.primary }} />
              <span className="text-xs font-medium">Prayer</span>
            </div>
            <Textarea
              readOnly
              placeholder="Write your prayer..."
              style={{ 
                backgroundColor: theme.inputBackground || theme.background,
                color: theme.textColor,
                borderColor: theme.name === "Sepia" ? theme.primary + "80" : `${theme.textColor}20`,
                borderWidth: "1px",
                fontSize: "0.75rem",
                padding: "0.375rem 0.5rem",
                minHeight: "1.5rem",
                height: "1.5rem"
              }}
              className="w-full text-xs resize-none"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}