import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { SaveAll } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';

interface JournalHeaderProps {
  saveMessage: string;
  isSaving: boolean;
  onSave: () => void;
}

export const JournalHeader: React.FC<JournalHeaderProps> = ({
  saveMessage,
  isSaving,
  onSave
}) => {
  const { theme } = useTheme();

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
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