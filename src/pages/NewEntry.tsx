import SOAPJournalEntry from "@/components/SOAPJournalEntry";

export default function NewEntry() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8">Daily Delight</h1>
      <SOAPJournalEntry />
    </div>
  );
}