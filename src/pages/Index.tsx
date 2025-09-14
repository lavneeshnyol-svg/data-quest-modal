import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { ProductCapabilitiesSection } from "@/components/ProductCapabilitiesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TopExpertsSection } from "@/components/TopExpertsSection";
import { Footer } from "@/components/Footer";
import { DataRequestModal } from "@/components/DataRequestModal";
import { LoadingScreen } from "@/components/LoadingScreen";

interface FormData {
  kindOfData: string;
  taskType: string;
  numberOfDataPoints: string;
  urgency: string;
  language: string;
}

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userType, setUserType] = useState<"Customer" | "Expert">("Customer");
  const navigate = useNavigate();

  const handleExploreExperts = () => {
    setIsModalOpen(true);
  };

  const handleFormSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    setIsModalOpen(false);
    setIsLoading(true);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
    navigate("/experts");
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  if (userType === "Expert") {
    return (
      <div className="min-h-screen bg-background">
        <Navigation 
          onExploreExperts={handleExploreExperts}
          userType={userType}
          onUserTypeChange={setUserType}
        />
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">Expert Portal</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Join our network of AI experts and contribute to the future of LLM training.
          </p>
          <div className="max-w-2xl mx-auto bg-gradient-card rounded-2xl p-8 shadow-card">
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-muted-foreground">
              The expert registration portal is currently under development. 
              We'll notify you as soon as it's available.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navigation 
        onExploreExperts={handleExploreExperts}
        userType={userType}
        onUserTypeChange={setUserType}
      />
      <HeroSection onExploreExperts={handleExploreExperts} />
      <CapabilitiesSection />
      <ProductCapabilitiesSection />
      <ProjectsSection />
      <TopExpertsSection />
      <Footer onExploreExperts={handleExploreExperts} />
      <DataRequestModal 
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onSubmit={handleFormSubmit}
      />
    </>
  );
};

export default Index;
