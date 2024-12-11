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
        <Label className="flex items-center gap-2 text-2xl font-semibold">
          <PenBox className="w-6 h-6" />
          Entry Title
        </Label>
        <Input
          placeholder="Give your entry a meaningful title based on your reflection"
          className="border-0 bg-white text-xl font-medium placeholder:text-gray-400"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </CardContent>
  </Card>
);