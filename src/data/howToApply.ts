/**
 * Detailed step-by-step data for the How to Apply page.
 * This is a more granular walkthrough than the 3-step `admissionSteps`
 * summary in `./admissions` (used on the home page) — both are kept since
 * they serve different levels of detail, not duplicate sources of truth.
 */
export interface ApplicationStep {
  number: string;
  title: string;
  description: string;
}

export const applicationSteps: ApplicationStep[] = [
  {
    number: "01",
    title: "Choose Your Program",
    description: "Browse our Colleges & Schools and Programs to find the field of study that fits your goals.",
  },
  {
    number: "02",
    title: "Review Admission Requirements",
    description: "Check the general and program-specific requirements so you know what to prepare.",
  },
  {
    number: "03",
    title: "Prepare Your Information",
    description: "Gather your academic credentials, identification, photographs, and letters of recommendation.",
  },
  {
    number: "04",
    title: "Complete the Online Application",
    description: "Fill out the application form with your personal, academic, and program information.",
  },
  {
    number: "05",
    title: "Review Your Application",
    description: "Double-check your details and selected program before submitting.",
  },
  {
    number: "06",
    title: "Submit",
    description: "Submit your application and await confirmation from the Admissions Office.",
  },
];

export const applicationTips: string[] = [
  "Review your information carefully before moving to the next step.",
  "Make sure all required documents are ready before you start.",
  "Use accurate, current contact information so Admissions can reach you.",
  "Confirm your selected program before submitting your application.",
];
