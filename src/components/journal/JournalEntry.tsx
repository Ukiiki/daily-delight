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
    <div className="max-w-3xl mx-auto space-y-8">
      <JournalHeader
        title={formData.title}
        onTitleChange={handleFieldChange('title')}
        saveMessage={saveMessage}
        isSaving={isSaving}
        onSave={saveEntry}
      />

      <Card 
        className="p-8 shadow-sm transition-all duration-300"
        style={{
          backgroundColor: theme.colors.background,
          borderColor: `${theme.colors.primary.DEFAULT}20`,
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
            placeholder="What does this passage say? What do you notice?"
            minHeight="150px"
          />

          <JournalSection
            label="Application"
            icon={PenBox}
            value={formData.application}
            onChange={handleFieldChange('application')}
            placeholder="How can you apply this passage to your life?"
            minHeight="150px"
          />

          <JournalSection
            label="Prayer"
            icon={Heart}
            value={formData.prayer}
            onChange={handleFieldChange('prayer')}
            placeholder="Write your prayer response"
            minHeight="150px"
          />
        </div>
      </Card>
    </div>
  );
}