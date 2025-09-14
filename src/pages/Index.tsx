import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeroSection } from "@/components/HeroSection";
import { DataRequestModal } from "@/components/DataRequestModal";
import { LoadingScreen } from "@/components/LoadingScreen";

interface FormData {
  kindOfData: string;
  taskType: string;
  numberOfDataPoints: string;
  urgency: string;
}

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
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

  return (
    <>
      <HeroSection onGetStarted={handleGetStarted} />
      <DataRequestModal 
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onSubmit={handleFormSubmit}
      />
    </>
  );
};

export default Index;
