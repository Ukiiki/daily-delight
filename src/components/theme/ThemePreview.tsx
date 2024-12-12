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
      className="p-2 cursor-pointer transition-all duration-300 hover:scale-[1.02] relative overflow-hidden min-h-[200px]"
      style={{ backgroundColor: theme.background }}
      onClick={onClick}
    >
      {isActive && (
        <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-green-500" />
      )}
      
      <div className="space-y-2" style={{ color: theme.textColor }}>
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-sm font-semibold">{theme.name}</h3>
        </div>

        <div className="space-y-2">
          <div className="space-y-0.5">
            <div className="flex items-center gap-1">
              <BookOpen className="w-2.5 h-2.5" style={{ color: theme.primary }} />
              <span className="text-xs font-medium">Scripture</span>
            </div>
            <Input
              readOnly
              value="For God so loved..."
              style={{ 
                backgroundColor: theme.inputBackground,
                color: theme.textColor,
                borderColor: `${theme.textColor}20`
              }}
              className="w-full text-[10px] h-5 px-1"
            />
          </div>

          <div className="space-y-0.5">
            <div className="flex items-center gap-1">
              <Eye className="w-2.5 h-2.5" style={{ color: theme.primary }} />
              <span className="text-xs font-medium">Observation</span>
            </div>
            <Textarea
              readOnly
              placeholder="Enter observations..."
              style={{ 
                backgroundColor: theme.inputBackground,
                color: theme.textColor,
                borderColor: `${theme.textColor}20`
              }}
              className="w-full text-[10px] min-h-[24px] resize-none px-1 py-0.5"
            />
          </div>

          <div className="space-y-0.5">
            <div className="flex items-center gap-1">
              <PenBox className="w-2.5 h-2.5" style={{ color: theme.primary }} />
              <span className="text-xs font-medium">Application</span>
            </div>
            <Textarea
              readOnly
              placeholder="How to apply..."
              style={{ 
                backgroundColor: theme.inputBackground,
                color: theme.textColor,
                borderColor: `${theme.textColor}20`
              }}
              className="w-full text-[10px] min-h-[24px] resize-none px-1 py-0.5"
            />
          </div>

          <div className="space-y-0.5">
            <div className="flex items-center gap-1">
              <Heart className="w-2.5 h-2.5" style={{ color: theme.primary }} />
              <span className="text-xs font-medium">Prayer</span>
            </div>
            <Textarea
              readOnly
              placeholder="Write prayer..."
              style={{ 
                backgroundColor: theme.inputBackground,
                color: theme.textColor,
                borderColor: `${theme.textColor}20`
              }}
              className="w-full text-[10px] min-h-[24px] resize-none px-1 py-0.5"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}