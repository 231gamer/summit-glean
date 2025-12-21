import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface ProgressStepsProps {
  steps: string[];
  currentStep: number;
  className?: string;
}

export function ProgressSteps({ steps, currentStep, className }: ProgressStepsProps) {
  return (
    <div className={cn("w-full", className)}>
      {/* Progress Bar */}
      <div className="relative mb-8">
        <div className="absolute top-4 left-0 right-0 h-0.5 bg-border" />
        <div 
          className="absolute top-4 left-0 h-0.5 bg-accent transition-all duration-500"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />
        
        <div className="relative flex justify-between">
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep;
            
            return (
              <div key={step} className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 border-2",
                    isCompleted && "bg-accent border-accent text-accent-foreground",
                    isCurrent && "bg-primary border-primary text-primary-foreground scale-110",
                    !isCompleted && !isCurrent && "bg-background border-border text-muted-foreground"
                  )}
                >
                  {isCompleted ? <Check className="h-4 w-4" /> : index + 1}
                </div>
                <span
                  className={cn(
                    "mt-2 text-xs font-medium text-center max-w-[80px]",
                    isCurrent ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {step}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
  label?: string;
}

export function FormProgress({ currentStep, totalSteps, label }: FormProgressProps) {
  const percentage = ((currentStep + 1) / totalSteps) * 100;
  
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">
          {label || `Step ${currentStep + 1} of ${totalSteps}`}
        </span>
        <span className="font-semibold text-primary">{Math.round(percentage)}% Complete</span>
      </div>
      <div className="h-2 bg-border rounded-full overflow-hidden">
        <div 
          className="h-full bg-accent transition-all duration-500 ease-out rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
