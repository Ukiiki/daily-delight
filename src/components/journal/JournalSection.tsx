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
    <div className="space-y-3">
      <Label 
        className="flex items-center gap-2 text-base font-medium"
        style={{ color: theme.colors.foreground }}
      >
        <Icon className="w-5 h-5" />
        {label}
      </Label>
      <Textarea
        placeholder={placeholder}
        className="min-h-[100px] resize-none rounded-xl p-4 w-full transition-colors border-[1px]"
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