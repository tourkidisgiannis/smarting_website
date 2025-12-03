'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Το όνομα πρέπει να έχει τουλάχιστον 2 χαρακτήρες.' }),
  phone: z.string().min(10, { message: 'Το τηλέφωνο πρέπει να είναι έγκυρο.' }),
  service: z.string().min(1, { message: 'Παρακαλώ επιλέξτε υπηρεσία.' }),
  message: z.string().min(10, { message: 'Το μήνυμα πρέπει να έχει τουλάχιστον 10 χαρακτήρες.' }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would send data to an API
    console.log(values);
    toast.success('Το μήνυμα στάλθηκε επιτυχώς!', {
      description: 'Θα επικοινωνήσουμε μαζί σας σύντομα.',
    });
    form.reset();
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
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Επιλέξτε υπηρεσία" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="electrical">Ηλεκτρολογική Υποστήριξη</SelectItem>
                  <SelectItem value="network">Δίκτυα & Καλωδιώσεις</SelectItem>
                  <SelectItem value="cctv">CCTV & Κάμερες</SelectItem>
                  <SelectItem value="security">Συστήματα Ασφαλείας</SelectItem>
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

        <Button type="submit" className="w-full" size="lg">
          Αποστολή Μηνύματος
        </Button>
      </form>
    </Form>
  );
}
