import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "./input";
import { Label } from "./label";
import { Check, AlertCircle } from "lucide-react";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
  isValid?: boolean;
}

const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, helperText, isValid, className, required, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <Label className="text-primary-dark font-semibold flex items-center gap-1">
          {label}
          {required && <span className="text-destructive">*</span>}
        </Label>
        <div className="relative">
          <Input
            ref={ref}
            className={cn(
              "pr-10 transition-all duration-200",
              error && "border-destructive focus-visible:ring-destructive/25",
              isValid && "border-success focus-visible:ring-success/25",
              className
            )}
            {...props}
          />
          {isValid && !error && (
            <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-success" />
          )}
          {error && (
            <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-destructive" />
          )}
        </div>
        {error && (
          <p className="text-sm text-destructive flex items-center gap-1">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="text-sm text-muted-foreground">{helperText}</p>
        )}
      </div>
    );
  }
);
FormField.displayName = "FormField";

interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
  maxLength?: number;
  showCount?: boolean;
}

const TextareaField = React.forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  ({ label, error, helperText, maxLength, showCount, className, required, value, ...props }, ref) => {
    const charCount = typeof value === 'string' ? value.length : 0;
    
    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label className="text-primary-dark font-semibold flex items-center gap-1">
            {label}
            {required && <span className="text-destructive">*</span>}
          </Label>
          {showCount && maxLength && (
            <span className={cn(
              "text-xs",
              charCount > maxLength ? "text-destructive" : "text-muted-foreground"
            )}>
              {charCount}/{maxLength}
            </span>
          )}
        </div>
        <textarea
          ref={ref}
          value={value}
          className={cn(
            "flex min-h-[120px] w-full rounded-lg border-2 border-input bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
            error && "border-destructive focus-visible:ring-destructive/25",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-sm text-destructive flex items-center gap-1">
            <AlertCircle className="h-3.5 w-3.5" />
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="text-sm text-muted-foreground">{helperText}</p>
        )}
      </div>
    );
  }
);
TextareaField.displayName = "TextareaField";

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  helperText?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

const SelectField = React.forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ label, error, helperText, options, placeholder, className, required, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <Label className="text-primary-dark font-semibold flex items-center gap-1">
          {label}
          {required && <span className="text-destructive">*</span>}
        </Label>
        <select
          ref={ref}
          className={cn(
            "flex h-11 w-full rounded-lg border-2 border-input bg-background px-4 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 appearance-none cursor-pointer",
            error && "border-destructive focus-visible:ring-destructive/25",
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="text-sm text-destructive flex items-center gap-1">
            <AlertCircle className="h-3.5 w-3.5" />
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="text-sm text-muted-foreground">{helperText}</p>
        )}
      </div>
    );
  }
);
SelectField.displayName = "SelectField";

export { FormField, TextareaField, SelectField };
