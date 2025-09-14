import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Globe, GraduationCap, Star, TrendingUp } from "lucide-react";

export function CapabilitiesSection() {
  const capabilities = [
    {
      icon: Users,
      title: "Expert Network",
      description: "Access to 50,000+ vetted AI data professionals worldwide",
      stats: [
        { label: "Languages", value: "150+", icon: Globe },
        { label: "PhD holders", value: "2,500+", icon: GraduationCap },
        { label: "5-star experts", value: "15,000+", icon: Star }
      ]
    },
    {
      icon: TrendingUp,
      title: "Quality Assurance",
      description: "Multi-layer validation ensuring enterprise-grade data quality",
      stats: [
        { label: "Accuracy rate", value: "99.7%", icon: Star },
        { label: "Quality checks", value: "5 layers", icon: TrendingUp },
        { label: "Turnaround", value: "24-48h", icon: Users }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Unmatched Expert Capabilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our diverse network of experts brings deep domain knowledge and linguistic expertise 
            to create the highest quality training data for your LLM projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {capabilities.map((capability, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-smooth">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">{capability.title}</CardTitle>
                </div>
                <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {capability.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center p-4 rounded-lg bg-white/50">
                      <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Expert Categories */}
        <div className="bg-white rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Ready Experts by Specialization
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">Language Skills</h4>
              <div className="space-y-2">
                {[
                  { lang: "English", count: "12,500+" },
                  { lang: "Mandarin", count: "8,200+" },
                  { lang: "Spanish", count: "6,800+" },
                  { lang: "French", count: "4,100+" },
                  { lang: "German", count: "3,900+" }
                ].map((item) => (
                  <div key={item.lang} className="flex justify-between items-center">
                    <span className="text-muted-foreground">{item.lang}</span>
                    <Badge variant="secondary">{item.count}</Badge>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Professional Skills</h4>
              <div className="space-y-2">
                {[
                  { skill: "Healthcare", count: "2,100+" },
                  { skill: "Legal", count: "1,800+" },
                  { skill: "Finance", count: "2,400+" },
                  { skill: "Technology", count: "3,200+" },
                  { skill: "Education", count: "1,900+" }
                ].map((item) => (
                  <div key={item.skill} className="flex justify-between items-center">
                    <span className="text-muted-foreground">{item.skill}</span>
                    <Badge variant="secondary">{item.count}</Badge>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Education Level</h4>
              <div className="space-y-2">
                {[
                  { level: "PhD", count: "2,500+" },
                  { level: "Master's", count: "15,200+" },
                  { level: "Bachelor's", count: "28,800+" },
                  { level: "Professional Cert.", count: "3,500+" }
                ].map((item) => (
                  <div key={item.level} className="flex justify-between items-center">
                    <span className="text-muted-foreground">{item.level}</span>
                    <Badge variant="secondary">{item.count}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button className="bg-gradient-primary hover:shadow-glow transition-smooth">
              View All Expert Categories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}