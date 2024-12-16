import { useState, useCallback } from 'react';
import debounce from 'lodash/debounce';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export interface JournalFormData {
  title: string;
  scripture: string;
  observation: string;
  application: string;
  prayer: string;
}

export function useJournalForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<JournalFormData>({
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

  const handleFieldChange = (field: keyof JournalFormData) => (value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    showSaveMessage();
  };

  return {
    formData,
    isSaving,
    saveMessage,
    handleFieldChange,
    saveEntry
  };
}