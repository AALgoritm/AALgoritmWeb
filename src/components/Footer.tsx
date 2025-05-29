import { Github, Mail, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <div className="font-bold">
              <span className="text-orange-600">AAL</span>
              goritm
              <span className="text-orange-600">()</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} AALgoritm. Alla rättigheter förbehålls.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Kontakt
            </a>
            <a
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Integritetspolicy
            </a>
            <a
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Villkor
            </a>
          </div>

          <div className="flex space-x-3">
            <a
              href="https://github.com/aalgoritm"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">Github</span>
            </a>
            <a
              href="https://twitter.com/aalgoritm"
              className="text-muted-foreground hover:text-foreground"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="mailto:kontakt@aalgoritm.se"
              className="text-muted-foreground hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
