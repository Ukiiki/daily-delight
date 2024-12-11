import SOAPJournalEntry from "@/components/SOAPJournalEntry";

export default function NewEntry() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8">New Journal Entry</h1>
      <SOAPJournalEntry />
    </div>
  );
}