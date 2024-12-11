import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PenBox } from 'lucide-react';

interface TitleSectionProps {
  value: string;
  onChange: (value: string) => void;
}

export const TitleSection: React.FC<TitleSectionProps> = ({ value, onChange }) => (
  <Card className="shadow-none border-0 bg-gray-50/50">
    <CardContent className="pt-6">
      <div className="space-y-3">
        <Label className="flex items-center gap-2 text-base font-medium">
          <PenBox className="w-5 h-5" />
          Entry Title
        </Label>
        <Input
          placeholder="Give your entry a meaningful title based on your reflection"
          className="border-0 bg-white text-base text-gray-600 placeholder:text-gray-400 w-full h-auto py-3 overflow-visible"
          value={value}
          onChange={(e) => onChange(e.target.value.slice(0, 100))}
          maxLength={100}
        />
      </div>
    </CardContent>
  </Card>
);