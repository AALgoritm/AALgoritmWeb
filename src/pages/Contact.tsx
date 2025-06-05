import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Namnet måste vara minst 2 tecken.",
  }),
  email: z.string().email({
    message: "Ange en giltig e-postadress.",
  }),
  company: z.string().optional(),
  message: z.string().min(10, {
    message: "Meddelandet måste vara minst 10 tecken.",
  }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    alert("Tack för ditt meddelande! Vi återkommer så snart som möjligt.");
    form.reset();
  }

  return (
    <>
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4 py-12 text-center">
          <Badge variant="outline" className="px-3 py-1 text-sm">
            Kontakt
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4 dark:text-gray-200">
            Hör av dig till <span className="text-orange-600">AAL</span>
            goritm
            <span className="text-orange-600">()</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-[700px] mb-8">
            Vi ser fram emot att diskutera hur vi kan hjälpa ditt företag med
            moderna tekniska lösningar. Kontakta oss idag!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
          <Card className="flex flex-col items-center text-center p-6">
            <Mail className="h-12 w-12 text-orange-600 mb-4" />
            <h2 className="text-xl font-bold mb-2">E-post</h2>
            <p className="text-muted-foreground mb-4">
              Skicka ett mail så återkommer vi inom 24 timmar
            </p>
            <a
              href="mailto:kontakt@aalgoritm.se"
              className="text-orange-600 hover:underline"
            >
              kontakt@aalgoritm.se
            </a>
          </Card>

          <Card className="flex flex-col items-center text-center p-6">
            <Phone className="h-12 w-12 text-orange-600 mb-4" />
            <h2 className="text-xl font-bold mb-2">Telefon</h2>
            <p className="text-muted-foreground mb-4">
              Tillgängliga vardagar 9:00-17:00
            </p>
            <a
              href="tel:+46701234567"
              className="text-orange-600 hover:underline"
            >
              070-123 45 67
            </a>
          </Card>

          <Card className="flex flex-col items-center text-center p-6">
            <MapPin className="h-12 w-12 text-orange-600 mb-4" />
            <h2 className="text-xl font-bold mb-2">Besök oss</h2>
            <p className="text-muted-foreground mb-4">Vi finns i Örebro</p>
            <address className="not-italic text-orange-600">
              Drottninggatan 12
              <br />
              702 10 Örebro
            </address>
          </Card>
        </div>

        <div className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-6">Skicka ett meddelande</h2>
              <p className="text-muted-foreground mb-6">
                Har du frågor om våra tjänster eller vill diskutera ett
                potentiellt samarbete? Fyll i formuläret så hör vi av oss inom
                kort.
              </p>

              <div className="bg-orange-100 dark:bg-orange-900/20 p-6 rounded-lg">
                <h3 className="font-bold mb-2 flex items-center">
                  <Send className="h-4 w-4 mr-2" /> Snabbt svar garanterat
                </h3>
                <p className="text-sm">
                  Vi värdesätter din tid och strävar efter att ge snabb
                  återkoppling på alla förfrågningar.
                </p>
              </div>
            </div>

            <div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Namn</FormLabel>
                        <FormControl>
                          <Input placeholder="Ditt namn" {...field} />
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
                        <FormLabel>E-post</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="din.email@exempel.se"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Företag (valfritt)</FormLabel>
                        <FormControl>
                          <Input placeholder="Ditt företag" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Meddelande</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Beskriv vad du är intresserad av..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full">
                    Skicka meddelande
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>

        <div className="py-10">
          <h2 className="text-3xl font-bold mb-6">Hitta hit</h2>
          <div className="w-full h-[400px] rounded-lg overflow-hidden bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2418.18674877038!2d15.20948137726888!3d59.27277981554586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465c14e23062191d%3A0xb16c0249033098fa!2sDrottninggatan%2012%2C%20702%2010%20%C3%96rebro!5e1!3m2!1ssv!2sse!4v1748518575305!5m2!1ssv!2sse"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="py-10">
          <h2 className="text-3xl font-bold mb-6">Vanliga frågor</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">
                Hur lång tid tar det att utveckla en applikation?
              </h3>
              <p className="text-muted-foreground">
                Utvecklingstiden varierar beroende på projektets omfattning.
                Kontakta oss för en specifik uppskattning baserad på dina behov.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">
                Vilka tekniker arbetar ni med?
              </h3>
              <p className="text-muted-foreground">
                Vi arbetar med moderna tekniker som React, Node.js, .NET och
                molnlösningar som AWS och Azure. Vi anpassar tekniken efter
                projektets behov.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">
                Kan ni hjälpa oss med underhåll efter lansering?
              </h3>
              <p className="text-muted-foreground">
                Absolut! Vi erbjuder underhållsavtal och löpande support för
                alla våra utvecklade lösningar.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
