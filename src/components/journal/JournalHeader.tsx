import React from 'react';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { SaveAll } from 'lucide-react';

interface JournalHeaderProps {
  title: string;
  onTitleChange: (value: string) => void;
  saveMessage: string;
  isSaving: boolean;
}

export const JournalHeader: React.FC<JournalHeaderProps> = ({
  title,
  onTitleChange,
  saveMessage,
  isSaving
}) => (
  <div className="space-y-6">
    <h1 className="text-2xl font-semibold text-center text-foreground">Daily Delight</h1>
    <div className="flex flex-col items-center gap-4">
      <Input
        placeholder="Untitled Entry"
        className="max-w-xs text-2xl font-semibold text-center bg-transparent border-none hover:bg-secondary/5 focus:bg-secondary/5 transition-colors placeholder:text-muted-foreground/50"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      {saveMessage && (
        <div className="fixed top-4 right-4 z-50 transition-opacity duration-300">
          <Alert className="bg-secondary/10 border-none shadow-sm">
            <AlertDescription className="flex items-center gap-2 text-sm text-secondary">
              {isSaving && <SaveAll className="w-4 h-4 animate-spin" />}
              {saveMessage}
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  </div>
);