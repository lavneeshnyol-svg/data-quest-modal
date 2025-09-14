import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, MapPin, Clock, MessageCircle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const experts = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "Senior ML Data Scientist",
    location: "San Francisco, CA",
    rating: 4.9,
    reviews: 127,
    hourlyRate: "$150-200",
    avatar: "SC",
    specialties: ["Conversational AI", "Emotional Support", "Healthcare NLP"],
    experience: "8+ years",
    description: "Specialized in creating high-quality conversational datasets for healthcare and emotional support applications.",
    availability: "Available in 2 weeks"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    title: "Data Annotation Lead",
    location: "Austin, TX",
    rating: 4.8,
    reviews: 89,
    hourlyRate: "$120-180",
    avatar: "MR",
    specialties: ["Multi-turn Conversations", "Code Generation", "Technical Documentation"],
    experience: "6+ years",
    description: "Expert in generating complex multi-turn conversations and technical content for LLM training.",
    availability: "Available immediately"
  },
  {
    id: 3,
    name: "Dr. Priya Patel",
    title: "NLP Research Scientist",
    location: "Boston, MA",
    rating: 5.0,
    reviews: 156,
    hourlyRate: "$180-250",
    avatar: "PP",
    specialties: ["Data Rating", "Quality Assurance", "Bias Detection"],
    experience: "10+ years",
    description: "Former Google Research scientist specializing in data quality and bias detection for large language models.",
    availability: "Available in 1 week"
  },
  {
    id: 4,
    name: "Alex Kim",
    title: "AI Data Engineer",
    location: "Seattle, WA",
    rating: 4.7,
    reviews: 94,
    hourlyRate: "$130-170",
    avatar: "AK",
    specialties: ["Data Annotation", "Sentiment Analysis", "Social Media Data"],
    experience: "5+ years",
    description: "Specializes in large-scale data annotation projects and sentiment analysis for social platforms.",
    availability: "Available in 3 weeks"
  }
];

export default function Experts() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => navigate("/")}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Expert Match Results</h1>
            <p className="text-muted-foreground mt-1">
              We found {experts.length} experts that match your requirements
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {experts.map((expert) => (
            <Card key={expert.id} className="bg-gradient-card hover:shadow-elegant transition-smooth">
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={`/experts/${expert.avatar}.jpg`} alt={expert.name} />
                    <AvatarFallback className="bg-gradient-primary text-white font-semibold text-lg">
                      {expert.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">{expert.name}</h3>
                    <p className="text-muted-foreground font-medium">{expert.title}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
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
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-primary">{expert.hourlyRate}</p>
                    <p className="text-sm text-muted-foreground">per hour</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">{expert.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {expert.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{expert.experience}</span>
                    </div>
                    <span>•</span>
                    <span>{expert.availability}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2 pt-2">
                  <Button className="flex-1 bg-gradient-primary hover:shadow-glow transition-smooth">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Expert
                  </Button>
                  <Button variant="outline" className="px-4">
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Not seeing the right match? Let us know your specific requirements.
          </p>
          <Button variant="outline" className="mr-4">
            Refine Search
          </Button>
          <Button className="bg-gradient-primary hover:shadow-glow transition-smooth">
            Request Custom Match
          </Button>
        </div>
      </div>
    </div>
  );
}