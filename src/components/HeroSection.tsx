import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

interface HeroSectionProps {
  onExploreExperts: () => void;
}

export function HeroSection({ onExploreExperts }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-hero text-white py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Winning{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                LLM training
              </span>
              <div className="absolute -top-2 -right-8 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
            </span>
            {" "}at{" "}
            <span className="relative">
              all touchpoints
              <div className="absolute -bottom-2 -left-8 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Crafting premium training data with expert human intelligence, 
            cutting-edge technology and the promise of quality.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              onClick={onExploreExperts}
              size="lg"
              className="bg-white text-primary hover:bg-blue-50 hover:shadow-glow transition-smooth text-lg px-8 py-6 font-semibold"
            >
              Explore Experts
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 transition-smooth text-lg px-8 py-6"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="text-blue-200 text-sm mb-8">
            The AI-fueled data partner of choice
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
            {["OpenAI", "Anthropic", "Google", "Microsoft", "Meta", "Cohere"].map((company) => (
              <div key={company} className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg text-white font-medium">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}