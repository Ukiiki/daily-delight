import React, { useState } from 'react';
import { BookOpen, Eye, PenBox, Heart } from 'lucide-react';
import { JournalHeader } from './journal/JournalHeader';
import { JournalSection } from './journal/JournalSection';
import { TitleSection } from './journal/TitleSection';

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

  const handleFieldChange = (field: string) => (value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
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
      <JournalHeader
        title={formData.title}
        onTitleChange={handleFieldChange('title')}
        saveMessage={saveMessage}
        isSaving={isSaving}
      />

      <div className="space-y-6">
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

        <TitleSection
          value={formData.title}
          onChange={handleFieldChange('title')}
        />
      </div>
    </div>
  );
}