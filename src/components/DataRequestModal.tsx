import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface DataRequestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: FormData) => void;
}

interface FormData {
  kindOfData: string;
  taskType: string;
  numberOfDataPoints: string;
  urgency: string;
  language: string;
}

const taskTypes = [
  "Prompt Response Pair Generation",
  "Multi-turn conversation generation", 
  "Data Rating and Ranking",
  "Data Annotation"
];

export function DataRequestModal({ open, onOpenChange, onSubmit }: DataRequestModalProps) {
  const [formData, setFormData] = useState<FormData>({
    kindOfData: "",
    taskType: "",
    numberOfDataPoints: "",
    urgency: "",
    language: ""
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.kindOfData.trim()) {
      newErrors.kindOfData = "Kind of data is required";
    }
    if (!formData.taskType) {
      newErrors.taskType = "Task type is required";
    }
    if (!formData.numberOfDataPoints.trim()) {
      newErrors.numberOfDataPoints = "Number of data points is required";
    } else if (isNaN(Number(formData.numberOfDataPoints)) || Number(formData.numberOfDataPoints) <= 0) {
      newErrors.numberOfDataPoints = "Please enter a valid number";
    }
    if (!formData.urgency.trim()) {
      newErrors.urgency = "Urgency is required";
    }
    if (!formData.language.trim()) {
      newErrors.language = "Language is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-gradient-card border-0 shadow-elegant">
        <DialogHeader className="text-center space-y-3">
          <DialogTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Tell us about your data needs
          </DialogTitle>
          <p className="text-muted-foreground">
            Help us find the perfect experts for your LLM training data requirements
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-2">
            <Label htmlFor="kindOfData" className="text-sm font-medium">
              Kind of Data
            </Label>
            <Textarea
              id="kindOfData"
              placeholder="e.g., Emotional Support"
              value={formData.kindOfData}
              onChange={(e) => updateField("kindOfData", e.target.value)}
              className={`resize-none transition-smooth ${errors.kindOfData ? 'border-destructive' : ''}`}
              rows={3}
            />
            {errors.kindOfData && (
              <p className="text-sm text-destructive">{errors.kindOfData}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="taskType" className="text-sm font-medium">
              Task Type
            </Label>
            <Select 
              value={formData.taskType} 
              onValueChange={(value) => updateField("taskType", value)}
            >
              <SelectTrigger className={`transition-smooth ${errors.taskType ? 'border-destructive' : ''}`}>
                <SelectValue placeholder="Select task type" />
              </SelectTrigger>
              <SelectContent className="bg-popover border shadow-elegant">
                {taskTypes.map((type) => (
                  <SelectItem key={type} value={type} className="focus:bg-accent">
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.taskType && (
              <p className="text-sm text-destructive">{errors.taskType}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="numberOfDataPoints" className="text-sm font-medium">
              Number of Data Points
            </Label>
            <Input
              id="numberOfDataPoints"
              type="number"
              placeholder="e.g., 10000"
              value={formData.numberOfDataPoints}
              onChange={(e) => updateField("numberOfDataPoints", e.target.value)}
              className={`transition-smooth ${errors.numberOfDataPoints ? 'border-destructive' : ''}`}
            />
            {errors.numberOfDataPoints && (
              <p className="text-sm text-destructive">{errors.numberOfDataPoints}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="urgency" className="text-sm font-medium">
              Urgency (in weeks)
            </Label>
            <Input
              id="urgency"
              type="number"
              placeholder="e.g., 4"
              value={formData.urgency}
              onChange={(e) => updateField("urgency", e.target.value)}
              className={`transition-smooth ${errors.urgency ? 'border-destructive' : ''}`}
            />
            {errors.urgency && (
              <p className="text-sm text-destructive">{errors.urgency}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="language" className="text-sm font-medium">
              Language of Data
            </Label>
            <Select 
              value={formData.language} 
              onValueChange={(value) => updateField("language", value)}
            >
              <SelectTrigger className={`transition-smooth ${errors.language ? 'border-destructive' : ''}`}>
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent className="bg-popover border shadow-elegant">
                {["English", "Spanish", "French", "German", "Mandarin", "Japanese", "Korean", "Arabic", "Hindi", "Portuguese"].map((language) => (
                  <SelectItem key={language} value={language} className="focus:bg-accent">
                    {language}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.language && (
              <p className="text-sm text-destructive">{errors.language}</p>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-primary hover:shadow-glow transition-smooth font-semibold"
          >
            Find Relevant Experts
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}