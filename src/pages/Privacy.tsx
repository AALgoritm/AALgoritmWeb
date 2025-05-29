import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <>
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Integritetspolicy</h1>

        <div className="prose prose-orange dark:prose-invert max-w-none">
          <p className="text-lg mb-6">
            Senast uppdaterad: {new Date().toLocaleDateString("sv-SE")}
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Inledning</h2>
          <p>
            AALgoritm ("vi", "oss", eller "vår") respekterar din integritet och
            är engagerad i att skydda dina personuppgifter. Denna
            integritetspolicy informerar dig om hur vi hanterar dina
            personuppgifter när du besöker vår webbplats och informerar dig om
            dina rättigheter och hur lagen skyddar dig.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Insamling av personuppgifter
          </h2>
          <p>
            Vi kan samla in, använda, lagra och överföra olika typer av
            personuppgifter om dig, inklusive:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Identitetsuppgifter (namn, företagsnamn)</li>
            <li>Kontaktuppgifter (e-postadress, telefonnummer)</li>
            <li>Tekniska uppgifter (IP-adress, webbläsartyp och version)</li>
            <li>
              Användningsuppgifter (information om hur du använder vår
              webbplats)
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Hur vi använder dina personuppgifter
          </h2>
          <p>Vi använder dina personuppgifter endast för följande ändamål:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>För att besvara dina frågor eller förfrågningar</li>
            <li>För att leverera tjänster du har begärt</li>
            <li>För att förbättra vår webbplats och tjänster</li>
            <li>
              För att skicka relevant information om våra tjänster (endast om du
              har samtyckt till detta)
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Cookies och spårningstekniker
          </h2>
          <p>
            Vår webbplats använder cookies för att förbättra din upplevelse.
            Cookies är små textfiler som lagras på din enhet när du besöker vår
            webbplats. Du kan justera dina webbläsarinställningar för att neka
            cookies, men detta kan påverka funktionaliteten på vår webbplats.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Delning av data</h2>
          <p>
            Vi delar inte dina personuppgifter med tredje part utan ditt
            samtycke, förutom när det krävs enligt lag eller för att skydda våra
            rättigheter.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Datasäkerhet</h2>
          <p>
            Vi har implementerat lämpliga säkerhetsåtgärder för att förhindra
            att dina personuppgifter går förlorade, används eller nås på ett
            obehörigt sätt. Vi begränsar åtkomsten till dina personuppgifter
            till de anställda och tredje parter som har ett verkligt behov av
            att känna till dem.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Dina rättigheter</h2>
          <p>
            Enligt dataskyddslagstiftningen har du flera rättigheter, inklusive
            rätten att:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Begära tillgång till dina personuppgifter</li>
            <li>Begära rättelse av dina personuppgifter</li>
            <li>Begära radering av dina personuppgifter</li>
            <li>Invända mot behandlingen av dina personuppgifter</li>
            <li>Begära begränsning av behandlingen av dina personuppgifter</li>
            <li>Begära överföring av dina personuppgifter</li>
            <li>Dra tillbaka ditt samtycke</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Ändringar i integritetspolicyn
          </h2>
          <p>
            Vi kan uppdatera vår integritetspolicy från tid till annan. Vi
            kommer att meddela dig om eventuella ändringar genom att publicera
            den nya integritetspolicyn på denna sida.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Kontakta oss</h2>
          <p>
            Om du har några frågor om denna integritetspolicy eller hur vi
            hanterar dina personuppgifter, vänligen kontakta oss på:
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

export default Privacy;
