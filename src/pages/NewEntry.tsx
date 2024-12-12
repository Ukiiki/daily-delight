import { JournalEntry } from "@/components/journal/JournalEntry";
import Header from "@/components/Header";
import { useTheme } from "@/components/ThemeProvider";

export default function NewEntry() {
  const { theme } = useTheme();

  return (
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{ 
        backgroundColor: theme.colors.background,
        color: theme.colors.foreground 
      }}
    >
      <Header />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <JournalEntry />
      </div>
    </div>
  );
}