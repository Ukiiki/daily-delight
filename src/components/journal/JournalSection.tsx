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

  return (
    <div className="space-y-2">
      <Label 
        className="flex items-center gap-2 text-sm font-medium"
        style={{ color: theme.colors.foreground }}
      >
        <Icon className="w-4 h-4" />
        {label}
      </Label>
      <Textarea
        placeholder={placeholder}
        className="min-h-[100px] resize-none rounded-lg p-3 w-full transition-colors border-[1.5px]"
        value={value}
        onChange={(e) => {
          e.target.style.height = 'inherit';
          e.target.style.height = `${e.target.scrollHeight}px`;
          onChange(e.target.value);
        }}
        style={{
          backgroundColor: theme.colors.card,
          borderColor: `${theme.colors.primary.DEFAULT}15`,
          color: theme.colors.foreground,
          height: 'auto',
          minHeight,
        }}
      />
    </div>
  );
}