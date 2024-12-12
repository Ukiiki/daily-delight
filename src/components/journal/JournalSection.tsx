import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { LucideIcon } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

interface JournalSectionProps {
  label: string;
  icon: LucideIcon;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  minHeight?: string;
}

export const JournalSection: React.FC<JournalSectionProps> = ({
  label,
  icon: Icon,
  value,
  onChange,
  placeholder,
  minHeight = "100px"
}) => {
  const { theme } = useTheme();
  
  const inputStyle = {
    backgroundColor: theme.name === "Classic" ? "#ffffff" :
                    theme.name === "Sepia" ? `${theme.colors.primary.DEFAULT}10` :
                    theme.name === "Nightfall" ? theme.colors.muted.DEFAULT :
                    theme.colors.background,
    border: theme.name === "Classic" ? "1px solid #1a1a1a20" :
            theme.name === "Sepia" ? `1px solid ${theme.colors.primary.DEFAULT}40` :
            theme.name === "Nightfall" ? "1px solid #ffffff20" :
            `1px solid ${theme.colors.foreground}20`,
    color: theme.colors.foreground,
  };

  return (
    <div className="space-y-3">
      <Label 
        className="flex items-center gap-2 text-base font-medium"
        style={{ color: theme.colors.primary.DEFAULT }}
      >
        <Icon className="w-5 h-5" />
        {label}
      </Label>
      <Textarea
        placeholder={placeholder}
        className="min-h-[100px] resize-none rounded-md p-3"
        value={value}
        onChange={(e) => {
          e.target.style.height = 'inherit';
          e.target.style.height = `${e.target.scrollHeight}px`;
          onChange(e.target.value);
        }}
        style={{
          ...inputStyle,
          height: 'auto',
          minHeight,
        }}
      />
    </div>
  );
};