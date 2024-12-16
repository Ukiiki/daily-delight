import React, { useState, useCallback } from 'react';
import { BookOpen, Eye, PenBox, Heart } from 'lucide-react';
import { JournalHeader } from './JournalHeader';
import { JournalSection } from './JournalSection';
import debounce from 'lodash/debounce';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Card } from '@/components/ui/card';
import { useTheme } from '@/components/ThemeProvider';
import { Input } from '@/components/ui/input';

export function JournalEntry() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    title: '',
    scripture: '',
    observation: '',
    application: '',
    prayer: ''
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const saveEntry = async () => {
    try {
      setIsSaving(true);
      
      const {
        data: { user },
        error: authError
      } = await supabase.auth.getUser();

      if (authError || !user) {
        toast.error("Please sign in to save your journal entry");
        return;
      }

      const { error } = await supabase
        .from('soap_entries')
        .insert({
          user_id: user.id,
          title: formData.title || 'Untitled Entry',
          scripture: formData.scripture,
          observation: formData.observation,
          application: formData.application,
          prayer: formData.prayer
        });

      if (error) throw error;

      toast.success("Entry saved successfully");
      navigate('/');
      
    } catch (error) {
      toast.error("Error saving entry. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const showSaveMessage = useCallback(
    debounce(() => {
      setIsSaving(true);
      setSaveMessage('Saving...');
      setTimeout(() => {
        setIsSaving(false);
        setSaveMessage('Entry saved');
        setTimeout(() => setSaveMessage(''), 1000);
      }, 500);
    }, 1000),
    []
  );

  const handleFieldChange = (field: string) => (value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    showSaveMessage();
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex justify-end">
        <JournalHeader
          saveMessage={saveMessage}
          isSaving={isSaving}
          onSave={saveEntry}
          title={formData.title}
        />
      </div>

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
            onChange={handleFieldChange('scripture')}
            placeholder="Enter the Bible passage you're studying"
            minHeight="100px"
          />

          <JournalSection
            label="Observation"
            icon={Eye}
            value={formData.observation}
            onChange={handleFieldChange('observation')}
            placeholder="Enter your observations..."
            minHeight="150px"
          />

          <JournalSection
            label="Application"
            icon={PenBox}
            value={formData.application}
            onChange={handleFieldChange('application')}
            placeholder="How can you apply this..."
            minHeight="150px"
          />

          <JournalSection
            label="Prayer"
            icon={Heart}
            value={formData.prayer}
            onChange={handleFieldChange('prayer')}
            placeholder="Write your prayer..."
            minHeight="150px"
          />

          <div className="pt-6 border-t border-gray-100">
            <Input
              placeholder="Give your entry a title"
              className="w-full text-2xl font-medium text-center h-auto py-3 rounded-lg transition-colors duration-300"
              value={formData.title}
              onChange={(e) => handleFieldChange('title')(e.target.value.slice(0, 100))}
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
    </div>
  );
}
