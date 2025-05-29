import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Lightbulb, Zap } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center space-y-4 py-12 text-center">
          <Badge variant="outline" className="px-3 py-1 text-sm">
            Välkommen till
          </Badge>
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl mb-4 dark:text-gray-200">
            <span className="text-orange-600">AAL</span>
            goritm
            <span className="text-orange-600">()</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-[700px] mb-8">
            Vi erbjuder eleganta och moderna lösningar som driver ditt företags
            digitala utveckling framåt.
          </p>
          <div className="flex flex-wrap justify-center gap-4 ">
            <Link
              to="/contact"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <Button size="lg" className="cursor-pointer">
                Kom igång
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link
              to="/about-us"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <Button variant="outline" size="lg" className="cursor-pointer">
                Läs mer
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
          <Card className="flex flex-col">
            <CardHeader className="space-y-1">
              <div className="h-10 w-10 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center mb-2">
                <Zap className="h-5 w-5 text-orange-600" />
              </div>
              <CardTitle>Snabb prestanda</CardTitle>
              <CardDescription>
                Optimerade lösningar som levererar blixtsnabba resultat.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                Våra system är designade med prestanda i åtanke, vilket
                säkerställer de mest effektiva lösningarna för ditt företag.
              </p>
            </CardContent>
            <CardFooter className="pt-2">
              <Button variant="ghost" className="p-0 h-auto cursor-pointer">
                Läs mer <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader className="space-y-1">
              <div className="h-10 w-10 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center mb-2">
                <Code className="h-5 w-5 text-orange-600" />
              </div>
              <CardTitle>Ren kod</CardTitle>
              <CardDescription>
                Eleganta implementationer med moderna kodprinciper.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                Vi betonar ren, läsbar kod som följer best practices och moderna
                utvecklingsstandarder.
              </p>
            </CardContent>
            <CardFooter className="pt-2">
              <Button variant="ghost" className="p-0 h-auto cursor-pointer">
                Läs mer <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader className="space-y-1">
              <div className="h-10 w-10 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center mb-2">
                <Lightbulb className="h-5 w-5 text-orange-600" />
              </div>
              <CardTitle>Innovativa metoder</CardTitle>
              <CardDescription>
                Kreativa lösningar på utmanande problem.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                Vi utforskar unika och innovativa sätt att lösa dina digitala
                behov.
              </p>
            </CardContent>
            <CardFooter className="pt-2">
              <Button variant="ghost" className="p-0 h-auto cursor-pointer">
                Läs mer <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
