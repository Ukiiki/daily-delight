import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/components/AuthProvider";
import { supabase } from "@/integrations/supabase/client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type SoapFormValues = {
  title: string;
  scripture: string;
  observation: string;
  application: string;
  prayer: string;
};

export default function Index() {
  const { session } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<SoapFormValues>({
    defaultValues: {
      title: "",
      scripture: "",
      observation: "",
      application: "",
      prayer: "",
    },
  });

  // Auto-save functionality
  useEffect(() => {
    const subscription = form.watch(async (value) => {
      if (!session?.user) return;
      
      // Only save if there's actual content
      if (Object.values(value).some(v => v?.trim())) {
        try {
          await supabase.from("soap_entries").upsert({
            user_id: session.user.id,
            ...value,
            date: new Date().toISOString(),
          });
        } catch (error) {
          console.error("Error saving entry:", error);
          toast({
            title: "Error saving entry",
            description: "Your entry could not be saved. Please try again.",
            variant: "destructive",
          });
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [form.watch, session?.user, toast]);

  if (!session) {
    navigate("/auth");
    return null;
  }

  return (
    <div className="container max-w-4xl py-8 space-y-8">
      <h1 className="text-4xl font-bold gradient-text">SOAP Journal Entry</h1>
      
      <Form {...form}>
        <form className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter a title for your entry (optional)" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="scripture"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Scripture</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Enter the Bible passage you're studying"
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="observation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Observation</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="What does this passage say? What do you notice?"
                    className="min-h-[150px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="application"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Application</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="How can you apply this passage to your life?"
                    className="min-h-[150px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="prayer"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prayer</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Write your prayer response"
                    className="min-h-[150px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}