import { JournalEntry } from "@/components/journal/JournalEntry";
import Header from "@/components/Header";
import { useTheme } from "@/components/ThemeProvider";

export default function NewEntry() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.background }}>
      <Header />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 
          className="text-3xl font-bold mb-8"
          style={{ color: theme.colors.primary.DEFAULT }}
        >
          New Journal Entry
        </h1>
        <JournalEntry />
      </div>
    </div>
  );
}