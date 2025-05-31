import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Code, Briefcase } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4 py-12 text-center">
          <Badge variant="outline" className="px-3 py-1 text-sm">
            Om oss
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4 dark:text-gray-200">
            Vilka vi är på <span className="text-orange-600">AAL</span>
            goritm
            <span className="text-orange-600">()</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-[700px] mb-8">
            Tre passionerade systemutvecklare med ett gemensamt mål: att skapa
            moderna och effektiva lösningar för ditt företag.
          </p>
        </div>

        <div className="py-10">
          <h2 className="text-3xl font-bold mb-6">Vår berättelse</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                AALgoritm grundades av Alexander, Andreas och Ludvig – tre
                systemutvecklare med en gemensam vision om att leverera
                högkvalitativa tekniska lösningar för företag.
              </p>
              <p className="text-lg mb-4">
                Vi påbörjade vår resa inom teknikbranschen med övertygelsen att
                moderna applikationer inte bara ska fungera bra, utan också vara
                användarvänliga och byggas med ren kod som håller över tid.
              </p>
              <p className="text-lg">
                Vårt namn "AALgoritm" representerar inte bara våra initialer,
                utan också vår metodiska approach till problemlösning och
                utveckling.
              </p>
            </div>
            <div className="bg-orange-100 dark:bg-orange-900/20 rounded-lg p-8 flex flex-col items-center justify-center text-center">
              <Users className="h-16 w-16 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Grundat 2025</h3>
              <p className="text-muted-foreground">
                Från idé till verklighet – vår passion för teknologi driver oss
                framåt.
              </p>
            </div>
          </div>
        </div>

        <div className="py-10">
          <h2 className="text-3xl font-bold mb-6">Vårt team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background border rounded-lg p-6 flex flex-col items-center text-center">
              <div className="h-24 w-24 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-orange-600">A</span>
              </div>
              <h3 className="text-xl font-bold">Alexander</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">
                Systemutvecklare & Grundare
              </p>
              <p className="text-sm">
                Fullstack-utvecklare med öga för detaljer och innovativa
                lösningar. Specialiserad på att bygga broar mellan teknik och
                affärsbehov.
              </p>
            </div>

            <div className="bg-background border rounded-lg p-6 flex flex-col items-center text-center">
              <div className="h-24 w-24 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-orange-600">A</span>
              </div>
              <h3 className="text-xl font-bold">Andreas</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">
                Systemutvecklare & Grundare
              </p>
              <p className="text-sm">
                Fullstack-utvecklare med fokus på användarvänliga och
                tillgängliga gränssnitt. Förespråkare för clean code och moderna
                ramverk.
              </p>
            </div>

            <div className="bg-background border rounded-lg p-6 flex flex-col items-center text-center">
              <div className="h-24 w-24 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-orange-600">L</span>
              </div>
              <h3 className="text-xl font-bold">Ludvig</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">
                Systemutvecklare & Grundare
              </p>
              <p className="text-sm">
                Fullstack-utvecklare och expert på backend-utveckling och
                systemarkitektur. Brinner för prestandaoptimering och skalbar
                infrastruktur.
              </p>
            </div>
          </div>
        </div>

        <div className="py-10">
          <h2 className="text-3xl font-bold mb-6">Våra värderingar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="h-12 w-12 shrink-0 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                <Code className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Kvalitet framför allt
                </h3>
                <p className="text-muted-foreground">
                  Vi kompromissar aldrig med kvaliteten. Varje rad kod vi
                  skriver är genomtänkt och testad för att säkerställa robusta
                  lösningar som håller länge.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-12 w-12 shrink-0 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Kunddriven utveckling
                </h3>
                <p className="text-muted-foreground">
                  Vi tror på nära samarbete med våra kunder. Genom att förstå
                  era behov kan vi leverera lösningar som verkligen gör skillnad
                  för er verksamhet.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Redo att digitalisera din verksamhet?
          </h2>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto mb-6">
            Vi hjälper dig att ta nästa steg i din digitala resa. Kontakta oss
            idag för att diskutera hur vi kan stötta ditt företag.
          </p>
          <Link
            to="/contact"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <Button size="lg" className="cursor-pointer">
              Kontakta oss
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
