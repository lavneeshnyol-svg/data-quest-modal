import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Database, Users, Zap } from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  const features = [
    {
      icon: Brain,
      title: "Expert AI Trainers",
      description: "Access vetted professionals specializing in LLM training data"
    },
    {
      icon: Database,
      title: "Custom Data Creation",
      description: "Generate exactly the data you need for your specific use case"
    },
    {
      icon: Users,
      title: "Scalable Teams",
      description: "From small projects to enterprise-scale data generation"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Get high-quality data delivered on your timeline"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-6 pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Premium Data for 
            <span className="block bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Next-Gen LLMs
            </span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Connect with expert data creators who understand your LLM training needs. 
            Get custom datasets tailored to your specific requirements with enterprise-grade quality.
          </p>
          <Button 
            onClick={onGetStarted}
            size="lg"
            className="bg-white text-primary hover:bg-blue-50 hover:shadow-glow transition-smooth text-lg px-8 py-6 font-semibold"
          >
            Get Started Today
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/15 transition-smooth">
              <feature.icon className="w-8 h-8 text-blue-200 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-blue-200 text-sm">
            Trusted by leading AI companies and research institutions
          </p>
          <div className="flex justify-center items-center space-x-8 mt-6 opacity-60">
            <div className="bg-white/20 px-4 py-2 rounded text-white font-medium">OpenAI</div>
            <div className="bg-white/20 px-4 py-2 rounded text-white font-medium">Anthropic</div>
            <div className="bg-white/20 px-4 py-2 rounded text-white font-medium">Cohere</div>
            <div className="bg-white/20 px-4 py-2 rounded text-white font-medium">Scale AI</div>
          </div>
        </div>
      </div>
    </div>
  );
}