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
      className="p-4 cursor-pointer transition-all duration-300 hover:scale-[1.02] relative overflow-hidden min-h-[300px]"
      style={{ backgroundColor: theme.background }}
      onClick={onClick}
    >
      {isActive && (
        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-500" />
      )}
      
      <div className="space-y-3" style={{ color: theme.textColor }}>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-base font-semibold">{theme.name}</h3>
        </div>

        <div className="space-y-3">
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <BookOpen className="w-3 h-3" style={{ color: theme.primary }} />
              <span className="text-sm font-medium">Scripture</span>
            </div>
            <Input
              readOnly
              value="For God so loved..."
              style={{ 
                backgroundColor: theme.inputBackground,
                color: theme.textColor,
                borderColor: `${theme.textColor}20`
              }}
              className="w-full text-xs h-7"
            />
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3" style={{ color: theme.primary }} />
              <span className="text-sm font-medium">Observation</span>
            </div>
            <Textarea
              readOnly
              placeholder="Enter observations..."
              style={{ 
                backgroundColor: theme.inputBackground,
                color: theme.textColor,
                borderColor: `${theme.textColor}20`
              }}
              className="w-full text-xs min-h-[40px] resize-none"
            />
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <PenBox className="w-3 h-3" style={{ color: theme.primary }} />
              <span className="text-sm font-medium">Application</span>
            </div>
            <Textarea
              readOnly
              placeholder="How to apply..."
              style={{ 
                backgroundColor: theme.inputBackground,
                color: theme.textColor,
                borderColor: `${theme.textColor}20`
              }}
              className="w-full text-xs min-h-[40px] resize-none"
            />
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Heart className="w-3 h-3" style={{ color: theme.primary }} />
              <span className="text-sm font-medium">Prayer</span>
            </div>
            <Textarea
              readOnly
              placeholder="Write prayer..."
              style={{ 
                backgroundColor: theme.inputBackground,
                color: theme.textColor,
                borderColor: `${theme.textColor}20`
              }}
              className="w-full text-xs min-h-[40px] resize-none"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}