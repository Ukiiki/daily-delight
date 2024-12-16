import React from 'react';
import { JournalHeader } from './JournalHeader';
import { JournalForm } from './JournalForm';
import { useJournalForm } from './hooks/useJournalForm';

export function JournalEntry() {
  const {
    formData,
    isSaving,
    saveMessage,
    handleFieldChange,
    saveEntry
  } = useJournalForm();

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <JournalHeader
        saveMessage={saveMessage}
        isSaving={isSaving}
        onSave={saveEntry}
        title={formData.title}
      />

      <JournalForm 
        formData={formData}
        onFieldChange={handleFieldChange}
      />
    </div>
  );
}