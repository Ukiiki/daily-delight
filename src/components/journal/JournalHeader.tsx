import React from 'react';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { SaveAll } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';

interface JournalHeaderProps {
  title: string;
  onTitleChange: (value: string) => void;
  saveMessage: string;
  isSaving: boolean;
  onSave: () => void;
}

export const JournalHeader: React.FC<JournalHeaderProps> = ({
  title,
  onTitleChange,
  saveMessage,
  isSaving,
  onSave
}) => {
  const { theme } = useTheme();

  const inputStyle = {
    backgroundColor: theme.name === "Classic" ? "#ffffff" :
                    theme.name === "Sepia" ? `${theme.colors.primary.DEFAULT}10` :
                    theme.name === "Nightfall" ? theme.colors.muted.DEFAULT :
                    theme.colors.background,
    border: theme.name === "Classic" ? "1px solid #1a1a1a20" :
            theme.name === "Sepia" ? `1px solid ${theme.colors.primary.DEFAULT}40` :
            theme.name === "Nightfall" ? "1px solid #ffffff20" :
            `1px solid ${theme.colors.foreground}20`,
    color: theme.colors.foreground,
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 
          className="text-3xl font-bold"
          style={{ color: theme.colors.primary.DEFAULT }}
        >
          Daily Delight
        </h1>
        <Button 
          onClick={onSave}
          disabled={isSaving}
          className="gap-2"
          style={{
            backgroundColor: theme.colors.primary.DEFAULT,
            color: theme.colors.primary.foreground,
          }}
        >
          <SaveAll className="w-4 h-4" />
          Save Entry
        </Button>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Input
          placeholder="Untitled Entry"
          className="w-full max-w-2xl text-3xl font-bold text-center overflow-visible h-auto py-3 rounded-md"
          value={title}
          onChange={(e) => onTitleChange(e.target.value.slice(0, 100))}
          maxLength={100}
          style={inputStyle}
        />
        {saveMessage && (
          <div className="fixed top-4 right-4 z-50">
            <Alert className="border-none shadow-sm" style={{
              backgroundColor: `${theme.colors.primary.DEFAULT}20`,
            }}>
              <AlertDescription className="flex items-center gap-2 text-sm" style={{
                color: theme.colors.primary.DEFAULT,
              }}>
                {isSaving && <SaveAll className="w-4 h-4 animate-spin" />}
                {saveMessage}
              </AlertDescription>
            </Alert>
          </div>
        )}
      </div>
    </div>
  );
};