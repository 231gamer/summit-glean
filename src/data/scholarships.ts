import { Award, HandHeart, Landmark, Sparkles, type LucideIcon } from "lucide-react";

/**
 * Scholarships & Financial Aid page data.
 * No confirmed LCC scholarship programs or eligibility rules exist in the
 * repository yet, so every category ships as an "information coming soon"
 * placeholder rather than invented offerings.
 */
export interface ScholarshipCategory {
  icon: LucideIcon;
  title: string;
  description: string;
  isPlaceholder: boolean;
}

export const scholarshipCategories: ScholarshipCategory[] = [
  {
    icon: Award,
    title: "Academic Scholarships",
    description: "Recognition-based support for outstanding academic achievement. Details coming soon.",
    isPlaceholder: true,
  },
  {
    icon: HandHeart,
    title: "Need-Based Assistance",
    description: "Support for students demonstrating financial need. Details coming soon.",
    isPlaceholder: true,
  },
  {
    icon: Landmark,
    title: "Institutional Scholarships",
    description: "Opportunities funded directly by Liberia Christian College. Details coming soon.",
    isPlaceholder: true,
  },
  {
    icon: Sparkles,
    title: "Special Opportunities",
    description: "Partner and community-sponsored opportunities. Details coming soon.",
    isPlaceholder: true,
  },
];

export const financialAidSteps: string[] = [
  "Review the scholarship and financial aid opportunities listed above.",
  "Confirm your eligibility for the relevant program or opportunity.",
  "Gather the information the Admissions Office requests to evaluate your request.",
  "Contact the Admissions Office to discuss your options and next steps.",
];
