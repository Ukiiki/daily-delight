import React from 'react';
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
}) => {
  return (
    <div className="space-y-3">
      <Label className="flex items-center gap-2 text-base font-medium text-gray-700">
        <Icon className="w-5 h-5" />
        {label}
      </Label>
      <Textarea
        placeholder={placeholder}
        className="min-h-[100px] resize-none rounded-md p-3 w-full border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:border-gray-400 focus:ring-0 transition-colors"
        value={value}
        onChange={(e) => {
          e.target.style.height = 'inherit';
          e.target.style.height = `${e.target.scrollHeight}px`;
          onChange(e.target.value);
        }}
        style={{
          height: 'auto',
          minHeight,
        }}
      />
    </div>
  );
}