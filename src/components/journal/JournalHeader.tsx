import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { SaveAll } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';

interface JournalHeaderProps {
  saveMessage: string;
  isSaving: boolean;
  onSave: () => void;
  title: string;
}

export const JournalHeader: React.FC<JournalHeaderProps> = ({
  saveMessage,
  isSaving,
  onSave,
  title
}) => {
  const { theme } = useTheme();

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center gap-6">
        <h1 
          className="text-3xl font-bold text-center w-full" 
          style={{ color: theme.colors.primary.DEFAULT }}
        >
          {title || 'Daily Delight'}
        </h1>
        <div className="w-full flex justify-end">
          <Button 
            onClick={onSave}
            disabled={isSaving}
            className="gap-2 transition-colors duration-300"
            style={{
              backgroundColor: theme.colors.primary.DEFAULT,
              color: theme.colors.primary.foreground,
            }}
          >
            <SaveAll className="w-4 h-4" />
            Save Entry
          </Button>
        </div>
      </div>
      {saveMessage && (
        <div className="fixed top-4 right-4 z-50">
          <Alert 
            className="border-none shadow-sm transition-colors duration-300" 
            style={{
              backgroundColor: `${theme.colors.primary.DEFAULT}20`,
            }}
          >
            <AlertDescription 
              className="flex items-center gap-2 text-sm"
              style={{
                color: theme.colors.primary.DEFAULT,
              }}
            >
              {isSaving && <SaveAll className="w-4 h-4 animate-spin" />}
              {saveMessage}
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
};