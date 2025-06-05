import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

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
            <Link
              to="/contact"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Kontakt
            </Link>
            <Link
              to="/privacy"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Integritetspolicy
            </Link>
            <Link
              to="/terms"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Villkor
            </Link>
          </div>

          <div className="flex space-x-3">
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
