import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { BookOpen, Eye, PenBox, Heart, SaveAll } from 'lucide-react';

export default function SOAPJournalEntry() {
  const [formData, setFormData] = useState({
    title: '',
    scripture: '',
    observation: '',
    application: '',
    prayer: ''
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));

    // Simulate auto-save
    setIsSaving(true);
    setSaveMessage('Saving...');
    setTimeout(() => {
      setIsSaving(false);
      setSaveMessage('Entry saved');
      setTimeout(() => setSaveMessage(''), 2000);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 flex-1">
          <h1 className="text-4xl font-bold text-primary">Daily Delight</h1>
          <Input
            placeholder="Untitled Entry"
            className="max-w-xs text-lg bg-transparent border-none focus:border-none hover:bg-secondary/10 focus:bg-secondary/10 transition-colors placeholder:text-muted-foreground/50"
            value={formData.title}
            onChange={handleChange('title')}
            aria-label="Quick title"
          />
        </div>
        {saveMessage && (
          <Alert className="w-auto">
            <AlertDescription className="flex items-center gap-2">
              {isSaving ? (
                <SaveAll className="w-4 h-4 animate-spin" />
              ) : null}
              {saveMessage}
            </AlertDescription>
          </Alert>
        )}
      </div>

      <Card className="shadow-sm">
        <CardContent className="pt-6">
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Scripture
            </Label>
            <Textarea
              placeholder="Enter the Bible passage you're studying"
              className="min-h-[100px]"
              value={formData.scripture}
              onChange={handleChange('scripture')}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardContent className="pt-6">
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Observation
            </Label>
            <Textarea
              placeholder="What does this passage say? What do you notice?"
              className="min-h-[150px]"
              value={formData.observation}
              onChange={handleChange('observation')}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardContent className="pt-6">
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <PenBox className="w-4 h-4" />
              Application
            </Label>
            <Textarea
              placeholder="How can you apply this passage to your life?"
              className="min-h-[150px]"
              value={formData.application}
              onChange={handleChange('application')}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardContent className="pt-6">
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Prayer
            </Label>
            <Textarea
              placeholder="Write your prayer response"
              className="min-h-[150px]"
              value={formData.prayer}
              onChange={handleChange('prayer')}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardContent className="pt-6">
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              Title your reflection
            </Label>
            <Input
              placeholder="What theme or insight emerged from your study today?"
              className="text-lg"
              value={formData.title}
              onChange={handleChange('title')}
              aria-label="Main title input"
            />
            <p className="text-sm text-muted-foreground">
              Take a moment to reflect on your study and give it a meaningful title
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}