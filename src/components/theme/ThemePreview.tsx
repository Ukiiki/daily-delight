import { Theme } from "@/config/theme/types";
import { Card } from "@/components/ui/card";
import { BookOpen, Eye, PenBox, Heart } from "lucide-react";

interface ThemePreviewProps {
  theme: Theme;
  isActive: boolean;
  onClick: () => void;
}

export function ThemePreview({ theme, isActive, onClick }: ThemePreviewProps) {
  return (
    <Card
      className="p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
      style={{ backgroundColor: theme.background }}
      onClick={onClick}
    >
      {isActive && (
        <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-green-500" />
      )}
      
      <div className="space-y-4" style={{ color: theme.textColor }}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{theme.name}</h3>
        </div>

        <div className="space-y-4 text-sm">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" style={{ color: theme.primary }} />
            <span className="font-medium">John 3:16</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" style={{ color: theme.primary }} />
              <span className="font-medium">Observation</span>
            </div>
            <p className="text-sm opacity-80">
              God's love for the world is demonstrated through...
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <PenBox className="w-4 h-4" style={{ color: theme.primary }} />
              <span className="font-medium">Application</span>
            </div>
            <p className="text-sm opacity-80">
              I can share this love by...
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4" style={{ color: theme.primary }} />
              <span className="font-medium">Prayer</span>
            </div>
            <p className="text-sm opacity-80">
              Dear Lord, help me to...
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}