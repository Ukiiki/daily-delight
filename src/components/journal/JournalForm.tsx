import React from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { BookOpen, Eye, PenBox, Heart } from 'lucide-react';
import { JournalSection } from './JournalSection';
import { useTheme } from '@/components/ThemeProvider';
import { JournalFormData } from './hooks/useJournalForm';

interface JournalFormProps {
  formData: JournalFormData;
  onFieldChange: (field: keyof JournalFormData) => (value: string) => void;
}

export const JournalForm: React.FC<JournalFormProps> = ({
  formData,
  onFieldChange
}) => {
  const { theme } = useTheme();

  return (
    <Card 
      className="p-8 rounded-[24px] border-[1.5px] transition-all duration-300"
      style={{
        backgroundColor: theme.colors.card,
        borderColor: theme.colors.foreground,
        color: theme.colors.foreground,
      }}
    >
      <div className="space-y-8">
        <JournalSection
          label="Scripture"
          icon={BookOpen}
          value={formData.scripture}
          onChange={onFieldChange('scripture')}
          placeholder="Enter the Bible passage you're studying"
          minHeight="100px"
        />

        <JournalSection
          label="Observation"
          icon={Eye}
          value={formData.observation}
          onChange={onFieldChange('observation')}
          placeholder="Enter your observations..."
          minHeight="150px"
        />

        <JournalSection
          label="Application"
          icon={PenBox}
          value={formData.application}
          onChange={onFieldChange('application')}
          placeholder="How can you apply this..."
          minHeight="150px"
        />

        <JournalSection
          label="Prayer"
          icon={Heart}
          value={formData.prayer}
          onChange={onFieldChange('prayer')}
          placeholder="Write your prayer..."
          minHeight="150px"
        />

        <div className="pt-6 border-t border-gray-100">
          <Input
            placeholder="Give your entry a title"
            className="w-full text-2xl font-medium text-center h-auto py-3 rounded-lg transition-colors duration-300"
            value={formData.title}
            onChange={(e) => onFieldChange('title')(e.target.value.slice(0, 100))}
            maxLength={100}
            style={{
              backgroundColor: theme.colors.card,
              borderColor: `${theme.colors.primary.DEFAULT}15`,
              color: theme.colors.foreground,
            }}
          />
        </div>
      </div>
    </Card>
  );
};