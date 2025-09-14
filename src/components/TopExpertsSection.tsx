import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, MapPin, Shield, GraduationCap, Languages } from "lucide-react";

export function TopExpertsSection() {
  const topExperts = [
    {
      name: "Dr. Sarah Chen",
      title: "Senior ML Data Scientist",
      location: "San Francisco, CA",
      avatar: "SC",
      rating: 4.9,
      reviews: 127,
      hourlyRate: "$150-200",
      summary: "Healthcare NLP specialist with 8+ years creating medical conversation datasets",
      skills: ["Healthcare NLP", "Medical AI", "Conversational Design"],
      education: "PhD Computer Science, Stanford",
      languages: ["English", "Mandarin", "Cantonese"],
      verified: true
    },
    {
      name: "Marcus Rodriguez",
      title: "Technical Content Expert",
      location: "Austin, TX",
      avatar: "MR",
      rating: 4.8,
      reviews: 89,
      hourlyRate: "$120-180",
      summary: "Code generation and technical documentation specialist for enterprise AI",
      skills: ["Code Generation", "Technical Writing", "Multi-language"],
      education: "MS Software Engineering, UT Austin",
      languages: ["English", "Spanish"],
      verified: true
    },
    {
      name: "Dr. Priya Patel",
      title: "AI Research Scientist",
      location: "London, UK",
      avatar: "PP",
      rating: 5.0,
      reviews: 156,
      hourlyRate: "$180-250",
      summary: "Former Google Research scientist specializing in bias detection and quality assurance",
      skills: ["Bias Detection", "Quality Assurance", "Research"],
      education: "PhD AI/ML, Cambridge University",
      languages: ["English", "Hindi", "Gujarati"],
      verified: true
    },
    {
      name: "Prof. James Liu",
      title: "Financial AI Consultant",
      location: "Singapore",
      avatar: "JL",
      rating: 4.9,
      reviews: 203,
      hourlyRate: "$200-300",
      summary: "Financial services AI expert with regulatory compliance expertise",
      skills: ["Financial AI", "Regulatory Compliance", "Risk Assessment"],
      education: "PhD Finance, NUS Business School",
      languages: ["English", "Mandarin", "Malay"],
      verified: true
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our Top Experts
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get a sneak peek at some of our highest-rated experts across different domains. 
            Each expert is thoroughly vetted for skills, education, and language proficiency.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {topExperts.map((expert, index) => (
            <Card key={index} className="border shadow-card hover:shadow-elegant transition-smooth">
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={`/experts/${expert.avatar}.jpg`} alt={expert.name} />
                    <AvatarFallback className="bg-gradient-primary text-white font-semibold text-lg">
                      {expert.avatar}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-xl font-bold text-foreground">{expert.name}</h3>
                      {expert.verified && (
                        <Shield className="w-5 h-5 text-green-500" />
                      )}
                    </div>
                    <p className="text-muted-foreground font-medium mb-2">{expert.title}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{expert.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{expert.rating}</span>
                        <span>({expert.reviews} reviews)</span>
                      </div>
                    </div>
                    
                    <p className="text-foreground text-sm leading-relaxed">{expert.summary}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-bold text-primary">{expert.hourlyRate}</p>
                    <p className="text-sm text-muted-foreground">per hour</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Skills */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                    <Shield className="w-4 h-4 mr-1 text-green-500" />
                    Verified Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {expert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                    <GraduationCap className="w-4 h-4 mr-1 text-blue-500" />
                    Verified Education
                  </h4>
                  <p className="text-sm text-muted-foreground">{expert.education}</p>
                </div>

                {/* Languages */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                    <Languages className="w-4 h-4 mr-1 text-purple-500" />
                    Verified Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {expert.languages.map((language, langIndex) => (
                      <Badge key={langIndex} variant="outline" className="text-xs">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}