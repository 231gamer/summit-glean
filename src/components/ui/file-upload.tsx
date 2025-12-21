import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Upload, X, File, Image, FileText } from "lucide-react";
import { Button } from "./button";

interface FileUploadProps {
  label: string;
  accept?: string;
  maxSize?: number; // in MB
  multiple?: boolean;
  helperText?: string;
  onFilesChange?: (files: File[]) => void;
}

export function FileUpload({
  label,
  accept = "*/*",
  maxSize = 10,
  multiple = false,
  helperText,
  onFilesChange,
}: FileUploadProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFiles = useCallback((newFiles: FileList | null) => {
    if (!newFiles) return;
    
    const fileArray = Array.from(newFiles);
    const validFiles: File[] = [];
    
    for (const file of fileArray) {
      if (file.size > maxSize * 1024 * 1024) {
        setError(`File "${file.name}" exceeds ${maxSize}MB limit`);
        continue;
      }
      validFiles.push(file);
    }
    
    const updatedFiles = multiple ? [...files, ...validFiles] : validFiles.slice(0, 1);
    setFiles(updatedFiles);
    onFilesChange?.(updatedFiles);
    if (validFiles.length > 0) setError(null);
  }, [files, maxSize, multiple, onFilesChange]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  }, [handleFiles]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    onFilesChange?.(newFiles);
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith("image/")) return Image;
    if (type.includes("pdf") || type.includes("document")) return FileText;
    return File;
  };

  return (
    <div className="space-y-3">
      <label className="text-sm font-semibold text-primary-dark">{label}</label>
      
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={cn(
          "relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 cursor-pointer",
          isDragging 
            ? "border-accent bg-accent/5" 
            : "border-primary/30 hover:border-primary/50 bg-background"
        )}
      >
        <input
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={(e) => handleFiles(e.target.files)}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        
        <div className="flex flex-col items-center gap-3">
          <div className={cn(
            "w-14 h-14 rounded-full flex items-center justify-center transition-colors",
            isDragging ? "bg-accent/20" : "bg-primary/10"
          )}>
            <Upload className={cn(
              "h-6 w-6",
              isDragging ? "text-accent" : "text-primary"
            )} />
          </div>
          <div>
            <p className="font-medium text-foreground">
              Drop files here or <span className="text-primary">browse</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {helperText || `Maximum file size: ${maxSize}MB`}
            </p>
          </div>
        </div>
      </div>

      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}

      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file, index) => {
            const FileIcon = getFileIcon(file.type);
            return (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileIcon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{file.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => removeFile(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
