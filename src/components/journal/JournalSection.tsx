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
  <Card className="shadow-none border-0 bg-gray-50/50">
    <CardContent className="pt-6">
      <div className="space-y-3">
        <Label className="flex items-center gap-2 text-base font-medium">
          <Icon className="w-5 h-5" />
          {label}
        </Label>
        <Textarea
          placeholder={placeholder}
          className={`min-h-[${minHeight}] border-0 bg-white resize-none text-gray-600 placeholder:text-gray-400`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </CardContent>
  </Card>
);