import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">
              <span className="text-orange-600">AAL</span>goritm
              <span className="text-orange-600">()</span>
              <div className="flex flex-col text-sm items-start">
                <span>&#123; return</span>
                <span>innovation; &#125;</span>
              </div>
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Hem
          </Link>

          <Link
            to="/about-us"
            onClick={() => window.scrollTo(0, 0)}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Om oss
          </Link>
          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Kontakt
          </Link>
          <ThemeToggle />
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-6 mt-12">
              <Link
                to="/"
                onClick={handleLinkClick}
                className="text-lg font-medium transition-colors hover:text-primary flex items-center py-2"
              >
                Hem
              </Link>
              <div className="h-px bg-muted" />

              <Link
                to="/about-us"
                onClick={handleLinkClick}
                className="text-lg font-medium transition-colors hover:text-primary flex items-center py-2"
              >
                Om oss
              </Link>
              <div className="h-px bg-muted" />

              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="text-lg font-medium transition-colors hover:text-primary flex items-center py-2"
              >
                Kontakt
              </Link>
              <div className="h-px bg-muted" />

              <div className="mt-2">
                <ThemeToggle />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
