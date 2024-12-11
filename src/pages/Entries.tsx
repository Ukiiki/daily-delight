import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Entries() {
  const navigate = useNavigate();

  const { data: entries, isLoading } = useQuery({
    queryKey: ["soap-entries"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("soap_entries")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as Tables<"soap_entries">[];
    },
  });

  if (isLoading) {
    return (
      <div className="container mx-auto p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Journal Entries</h1>
          <Skeleton className="h-10 w-32" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-48" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Journal Entries</h1>
        <Button onClick={() => navigate("/")} className="gap-2">
          <Plus className="w-4 h-4" />
          New Entry
        </Button>
      </div>

      {entries?.length === 0 ? (
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground">No entries yet. Create your first journal entry!</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {entries?.map((entry) => (
            <Card
              key={entry.id}
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => navigate(`/entries/${entry.id}`)}
            >
              <CardHeader>
                <CardTitle className="line-clamp-2">{entry.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {format(new Date(entry.created_at), "MMMM d, yyyy")}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">
                  {entry.scripture}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}