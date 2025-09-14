import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, FileText, Star, GitBranch, Bot, Zap } from "lucide-react";

export function ProductCapabilitiesSection() {
  const capabilities = [
    {
      icon: MessageSquare,
      title: "Prompt Response Pairs (PRP)",
      description: "High-quality prompt-response datasets tailored for instruction tuning and fine-tuning",
      features: ["Custom domain expertise", "Multi-turn conversations", "Quality validation"]
    },
    {
      icon: FileText,
      title: "Data Annotation",
      description: "Comprehensive labeling and annotation services for training data preparation",
      features: ["Sentiment analysis", "Named entity recognition", "Content categorization"]
    },
    {
      icon: Star,
      title: "Response Rating & Ranking",
      description: "Expert evaluation and ranking of model outputs for RLHF and preference learning",
      features: ["Human preference data", "Quality scoring", "Comparative analysis"]
    },
    {
      icon: GitBranch,
      title: "Multi-turn Conversations",
      description: "Complex dialogue datasets for advanced conversational AI development",
      features: ["Context awareness", "Dialogue coherence", "Multi-domain coverage"]
    },
    {
      icon: Bot,
      title: "Agentic Workflows",
      description: "Specialized datasets for training autonomous AI agents and tool-using models",
      features: ["Tool integration", "Decision trees", "Action sequences"]
    },
    {
      icon: Zap,
      title: "Real-time Generation",
      description: "On-demand data creation with rapid turnaround for urgent project needs",
      features: ["24/7 availability", "Scalable teams", "Quality guarantee"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Product Capabilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From basic annotation to complex agentic workflows, we deliver every type of training data 
            your LLM development requires with enterprise-grade quality and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <Card key={index} className="border shadow-card hover:shadow-elegant transition-smooth group">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">{capability.title}</CardTitle>
                <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Data Points Delivered", value: "50M+" },
            { label: "Active Projects", value: "1,200+" },
            { label: "Quality Score", value: "99.7%" },
            { label: "Delivery Time", value: "24-48h" }
          ].map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}