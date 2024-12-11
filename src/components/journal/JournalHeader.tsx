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
      <Input
        placeholder="New Journal Entry"
        className="text-3xl font-bold text-foreground bg-transparent border-none hover:bg-secondary/5 focus:bg-secondary/5 transition-colors placeholder:text-foreground max-w-[800px] px-0 h-auto py-3"
        value={title}
        onChange={(e) => onTitleChange(e.target.value.slice(0, 100))}
        maxLength={100}
        role="heading"
        aria-level={1}
      />
      <Button 
        onClick={onSave}
        disabled={isSaving}
        className="gap-2"
      >
        <SaveAll className="w-4 h-4" />
        Save Entry
      </Button>
    </div>
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
);