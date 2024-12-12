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
      className="p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] relative overflow-hidden min-h-[500px]"
      style={{ backgroundColor: theme.background }}
      onClick={onClick}
    >
      {isActive && (
        <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-green-500" />
      )}
      
      <div className="space-y-6" style={{ color: theme.textColor }}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">{theme.name}</h3>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" style={{ color: theme.primary }} />
              <span className="font-medium">Scripture</span>
            </div>
            <Input
              readOnly
              value="For God so loved the world..."
              style={{ 
                backgroundColor: theme.inputBackground,
                color: theme.textColor,
                borderColor: `${theme.textColor}20`
              }}
              className="w-full text-sm"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" style={{ color: theme.primary }} />
              <span className="font-medium">Observation</span>
            </div>
            <Textarea
              readOnly
              placeholder="Enter your observations..."
              style={{ 
                backgroundColor: theme.inputBackground,
                color: theme.textColor,
                borderColor: `${theme.textColor}20`
              }}
              className="w-full text-sm min-h-[80px] resize-none"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <PenBox className="w-4 h-4" style={{ color: theme.primary }} />
              <span className="font-medium">Application</span>
            </div>
            <Textarea
              readOnly
              placeholder="How can you apply this..."
              style={{ 
                backgroundColor: theme.inputBackground,
                color: theme.textColor,
                borderColor: `${theme.textColor}20`
              }}
              className="w-full text-sm min-h-[80px] resize-none"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4" style={{ color: theme.primary }} />
              <span className="font-medium">Prayer</span>
            </div>
            <Textarea
              readOnly
              placeholder="Write your prayer..."
              style={{ 
                backgroundColor: theme.inputBackground,
                color: theme.textColor,
                borderColor: `${theme.textColor}20`
              }}
              className="w-full text-sm min-h-[80px] resize-none"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}