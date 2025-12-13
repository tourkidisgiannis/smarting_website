"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { categories } from "@/data/categories";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Το όνομα πρέπει να έχει τουλάχιστον 2 χαρακτήρες." }),
  email: z.string().email({ message: "Παρακαλώ εισάγετε ένα έγκυρο email." }),
  phone: z.string().min(10, { message: "Το τηλέφωνο πρέπει να είναι έγκυρο." }),
  service: z.string().min(1, { message: "Παρακαλώ επιλέξτε υπηρεσία." }),
  message: z
    .string()
    .min(10, {
      message: "Το μήνυμα πρέπει να έχει τουλάχιστον 10 χαρακτήρες.",
    }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.message || "Something went wrong");
      }

      toast.success("Το μήνυμα στάλθηκε επιτυχώς!", {
        description: "Θα επικοινωνήσουμε μαζί σας σύντομα.",
      });
      form.reset();
    } catch (error: any) {
      console.error("Submission error:", error);
      toast.error("Σφάλμα αποστολής", {
        description:
          error.message ||
          "Υπήρξε πρόβλημα κατά την αποστολή του μηνύματος. Παρακαλώ δοκιμάστε ξανά ή καλέστε μας.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ονοματεπώνυμο</FormLabel>
              <FormControl>
                <Input placeholder="Γιάννης Παπαδόπουλος" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="email@example.com"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Τηλέφωνο</FormLabel>
              <FormControl>
                <Input placeholder="6912345678" type="tel" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ενδιαφέρομαι για</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Επιλέξτε υπηρεσία" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="max-h-[250px] bg-popover">
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.title}
                    </SelectItem>
                  ))}
                  <SelectItem value="other">Άλλο</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Μήνυμα</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Περιγράψτε μας τι χρειάζεστε..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full"
          size="lg"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Αποστολή..." : "Αποστολή Μηνύματος"}
        </Button>
      </form>
    </Form>
  );
}
