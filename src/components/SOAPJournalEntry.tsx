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
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Daily Delight</h1>
        <Input
          placeholder="Untitled Entry"
          className="max-w-xs text-lg bg-transparent border-none focus:border-none hover:bg-secondary/5 focus:bg-secondary/5 transition-colors placeholder:text-muted-foreground/50"
          value={formData.title}
          onChange={handleChange('title')}
        />
        {saveMessage && (
          <Alert className="w-auto">
            <AlertDescription className="flex items-center gap-2">
              {isSaving ? <SaveAll className="w-4 h-4 animate-spin" /> : null}
              {saveMessage}
            </AlertDescription>
          </Alert>
        )}
      </div>

      <div className="space-y-6">
        <Card className="shadow-none border-0 bg-gray-50/50">
          <CardContent className="pt-6">
            <div className="space-y-3">
              <Label className="flex items-center gap-2 text-base font-medium">
                <BookOpen className="w-5 h-5" />
                Scripture
              </Label>
              <Textarea
                placeholder="Enter the Bible passage you're studying"
                className="min-h-[100px] border-0 bg-white resize-none text-gray-600 placeholder:text-gray-400"
                value={formData.scripture}
                onChange={handleChange('scripture')}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-none border-0 bg-gray-50/50">
          <CardContent className="pt-6">
            <div className="space-y-3">
              <Label className="flex items-center gap-2 text-base font-medium">
                <Eye className="w-5 h-5" />
                Observation
              </Label>
              <Textarea
                placeholder="What does this passage say? What do you notice?"
                className="min-h-[150px] border-0 bg-white resize-none text-gray-600 placeholder:text-gray-400"
                value={formData.observation}
                onChange={handleChange('observation')}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-none border-0 bg-gray-50/50">
          <CardContent className="pt-6">
            <div className="space-y-3">
              <Label className="flex items-center gap-2 text-base font-medium">
                <PenBox className="w-5 h-5" />
                Application
              </Label>
              <Textarea
                placeholder="How can you apply this passage to your life?"
                className="min-h-[150px] border-0 bg-white resize-none text-gray-600 placeholder:text-gray-400"
                value={formData.application}
                onChange={handleChange('application')}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-none border-0 bg-gray-50/50">
          <CardContent className="pt-6">
            <div className="space-y-3">
              <Label className="flex items-center gap-2 text-base font-medium">
                <Heart className="w-5 h-5" />
                Prayer
              </Label>
              <Textarea
                placeholder="Write your prayer response"
                className="min-h-[150px] border-0 bg-white resize-none text-gray-600 placeholder:text-gray-400"
                value={formData.prayer}
                onChange={handleChange('prayer')}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-none border-0 bg-gray-50/50">
          <CardContent className="pt-6">
            <div className="space-y-3">
              <Label className="flex items-center gap-2 text-base font-medium">
                <PenBox className="w-5 h-5" />
                Entry Title
              </Label>
              <Input
                placeholder="Give your entry a meaningful title based on your reflection"
                className="border-0 bg-white text-gray-600 placeholder:text-gray-400"
                value={formData.title}
                onChange={handleChange('title')}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}