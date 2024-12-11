import React from 'react';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { SaveAll } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
}) => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold text-foreground">Daily Delight</h1>
      <Button 
        onClick={onSave}
        disabled={isSaving}
        className="gap-2"
      >
        <SaveAll className="w-4 h-4" />
        Save Entry
      </Button>
    </div>
    <div className="flex flex-col items-center gap-4">
      <Input
        placeholder="Untitled Entry"
        className="w-full max-w-2xl text-3xl font-bold text-center bg-transparent border-none hover:bg-secondary/5 focus:bg-secondary/5 transition-colors placeholder:text-muted-foreground/50 overflow-visible h-auto py-3"
        value={title}
        onChange={(e) => onTitleChange(e.target.value.slice(0, 100))}
        maxLength={100}
      />
      {saveMessage && (
        <div className="fixed top-4 right-4 z-50">
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