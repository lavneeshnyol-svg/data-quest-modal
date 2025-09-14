import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users, Target } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Healthcare Conversational AI",
      client: "Leading Healthcare Platform",
      description: "Created 500K+ medical conversation datasets for patient support chatbot with 99.8% accuracy in symptom recognition.",
      tags: ["Healthcare", "Conversational AI", "Medical NLP"],
      metrics: {
        dataPoints: "500K+",
        duration: "8 weeks",
        experts: "120+",
        accuracy: "99.8%"
      }
    },
    {
      title: "Multilingual Code Assistant",
      client: "Global Tech Company",
      description: "Developed comprehensive code generation datasets across 15 programming languages with expert-validated solutions.",
      tags: ["Code Generation", "Multi-language", "Technical"],
      metrics: {
        dataPoints: "2M+",
        duration: "12 weeks",
        experts: "200+",
        accuracy: "99.5%"
      }
    },
    {
      title: "Financial Advisory Training",
      client: "Fortune 500 Bank",
      description: "Built specialized financial advice datasets with regulatory compliance and risk assessment capabilities.",
      tags: ["Finance", "Compliance", "Risk Assessment"],
      metrics: {
        dataPoints: "300K+",
        duration: "6 weeks",
        experts: "80+",
        accuracy: "99.9%"
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Amazing GenAI Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped leading AI companies and research institutions 
            build world-class LLMs with our premium training data.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-smooth group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth">
                    {project.title}
                  </CardTitle>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                </div>
                <p className="text-sm text-primary font-medium">{project.client}</p>
                <p className="text-muted-foreground leading-relaxed mt-3">{project.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{project.metrics.dataPoints} data points</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{project.metrics.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{project.metrics.experts} experts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                    <span className="text-muted-foreground">{project.metrics.accuracy} accuracy</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-gradient-primary hover:shadow-glow transition-smooth">
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
}