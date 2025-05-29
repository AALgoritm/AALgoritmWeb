import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <>
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Allmänna villkor</h1>

        <div className="prose prose-orange dark:prose-invert max-w-none">
          <p className="text-lg mb-6">
            Senast uppdaterad: {new Date().toLocaleDateString("sv-SE")}
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduktion</h2>
          <p>
            Dessa allmänna villkor gäller för användning av AALgoritms ("vi",
            "oss", "vår") webbplats och tjänster. Genom att använda vår
            webbplats eller anlita våra tjänster godkänner du dessa villkor i
            sin helhet. Om du inte godkänner dessa villkor, vänligen avstå från
            att använda vår webbplats eller våra tjänster.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Tjänster</h2>
          <p>
            AALgoritm erbjuder systemutveckling och digitala lösningar för
            företag. Våra specifika leveranser, tidsramar och priser avtalas
            skriftligt i separata projektavtal med varje kund.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            3. Immateriella rättigheter
          </h2>
          <p>
            Allt innehåll på denna webbplats, inklusive men inte begränsat till
            text, grafik, logotyper, bilder, ljud, video och programvara, är
            AALgoritms egendom och skyddas av svenska och internationella
            upphovsrättslagar.
          </p>
          <p className="mt-4">
            Vid leverans av kundprojekt regleras de immateriella rättigheterna i
            det specifika projektavtalet. Om inget annat anges överförs
            rättigheterna till utvecklad kod och lösningar till kunden efter
            full betalning.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            4. Ansvarsbegränsning
          </h2>
          <p>
            AALgoritm gör sitt yttersta för att säkerställa att informationen på
            denna webbplats är korrekt, men garanterar inte att den är felfri
            eller komplett. Vi ansvarar inte för eventuella förluster eller
            skador som kan uppstå genom användning av informationen på denna
            webbplats.
          </p>
          <p className="mt-4">
            För levererade tjänster och produkter ansvarar vi enligt vad som
            överenskommits i respektive kundavtal. Vår totala ansvarsskyldighet
            överstiger dock aldrig det belopp som kunden betalat för de aktuella
            tjänsterna.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            5. Betalningsvillkor
          </h2>
          <p>Om inget annat avtalats gäller följande betalningsvillkor:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Fakturering sker månadsvis i efterskott för löpande arbete</li>
            <li>
              För fasta prisprojekt faktureras 40% vid projektstart, 30% vid
              halvtid och 30% vid leverans
            </li>
            <li>Betalningsvillkor är 30 dagar netto</li>
            <li>
              Vid försenad betalning debiteras dröjsmålsränta enligt räntelagen
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Sekretess</h2>
          <p>
            AALgoritm förbinder sig att hantera all kundinformation
            konfidentiellt. Vi kommer inte att dela, sälja eller på annat sätt
            avslöja kundspecifik information till tredje part utan kundens
            skriftliga medgivande, såvida vi inte är skyldiga enligt lag.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            7. Support och garanti
          </h2>
          <p>
            För utvecklade lösningar erbjuder vi en garantiperiod på 30 dagar
            efter leverans, under vilken vi åtgärdar eventuella fel som omfattas
            av den ursprungliga kravspecifikationen utan extra kostnad.
            Ytterligare support och underhåll kan avtalas separat.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Uppsägning</h2>
          <p>
            Vid löpande avtal har båda parter rätt att säga upp avtalet med 30
            dagars skriftlig uppsägningstid. Vid tidsbegränsade projekt gäller
            de avslutsdatum som specificerats i projektavtalet. Vid förtida
            avslut av ett projekt debiteras kunden för redan utfört arbete.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Force majeure</h2>
          <p>
            AALgoritm är inte ansvarig för förseningar eller bristande
            uppfyllelse av våra åtaganden om detta beror på omständigheter
            utanför vår kontroll, såsom naturkatastrofer, krig, terrorism,
            strejk, lockout, brand, sjukdom eller myndighetsåtgärder.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            10. Ändringar av villkoren
          </h2>
          <p>
            Vi förbehåller oss rätten att när som helst ändra dessa villkor.
            Ändringar träder i kraft omedelbart när de publiceras på
            webbplatsen. För pågående kundprojekt gäller dock de villkor som var
            aktuella vid projektavtalets ingående.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            11. Tillämplig lag och tvistlösning
          </h2>
          <p>
            Dessa villkor regleras av svensk lag. Eventuella tvister ska i
            första hand lösas genom förhandling mellan parterna. Om förhandling
            inte leder till en lösning ska tvisten avgöras av svensk allmän
            domstol.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            12. Kontaktinformation
          </h2>
          <p>
            Om du har frågor angående dessa villkor, vänligen kontakta oss på:
          </p>
          <p className="mt-4">
            <strong>AALgoritm</strong>
            <br />
            E-post: info@aalgoritm.se
            <br />
            Adress: Drottninggatan 12, 702 10 Örebro
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
