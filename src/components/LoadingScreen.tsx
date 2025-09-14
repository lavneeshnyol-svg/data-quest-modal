import { useEffect, useState } from "react";
import { Loader2, Search, Users, CheckCircle } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    { icon: Search, text: "Analyzing your requirements", duration: 2000 },
    { icon: Users, text: "Matching with expert profiles", duration: 2500 },
    { icon: CheckCircle, text: "Verifying qualifications", duration: 2000 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        setTimeout(onComplete, 1000);
      }
    }, steps[currentStep]?.duration || 2000);

    return () => clearTimeout(timer);
  }, [currentStep, onComplete]);

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="relative">
          <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl"></div>
          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <Loader2 className="w-16 h-16 text-white mx-auto mb-6 animate-spin" />
            
            <h2 className="text-2xl font-bold text-white mb-6">
              Finding Perfect Experts
            </h2>
            
            <div className="space-y-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === currentStep;
                const isCompleted = index < currentStep;
                
                return (
                  <div 
                    key={index}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-smooth ${
                      isActive ? 'bg-white/20' : isCompleted ? 'bg-white/10' : 'opacity-50'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${
                      isCompleted ? 'text-green-300' : 'text-blue-200'
                    }`} />
                    <span className="text-white text-sm font-medium">
                      {step.text}
                    </span>
                    {isActive && (
                      <Loader2 className="w-4 h-4 text-white animate-spin ml-auto" />
                    )}
                    {isCompleted && (
                      <CheckCircle className="w-4 h-4 text-green-300 ml-auto" />
                    )}
                  </div>
                );
              })}
            </div>
            
            <p className="text-blue-200 text-sm mt-6">
              This may take a few moments...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}