import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { LucideIcon } from 'lucide-react';

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
}) => (
  <div className="space-y-3">
    <Label className="flex items-center gap-2 text-base font-medium text-foreground">
      <Icon className="w-5 h-5" />
      {label}
    </Label>
    <Textarea
      placeholder={placeholder}
      className="min-h-[100px] bg-card text-card-foreground border-0 placeholder:text-muted-foreground/50 resize-none overflow-hidden"
      value={value}
      onChange={(e) => {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`;
        onChange(e.target.value);
      }}
      style={{ height: 'auto', minHeight: minHeight }}
    />
  </div>
);