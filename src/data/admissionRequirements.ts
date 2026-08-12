import { admissionRequirements } from "./admissions";

/**
 * Admission Requirements page data.
 * Reuses the real, existing `admissionRequirements` list from `./admissions`
 * (the same source used by the home page Admissions section) rather than
 * duplicating it.
 */
export interface RequirementCategory {
  title: string;
  description: string;
  items: string[];
  isPlaceholder?: boolean;
}

export const requirementCategories: RequirementCategory[] = [
  {
    title: "Required Documents",
    description:
      "All applicants to Liberia Christian College must submit the following to the Admissions Office.",
    items: admissionRequirements,
  },
  {
    title: "Program-Specific Requirements",
    description:
      "Some programs — particularly in Christian Education, Science & Technology, and Continuing Education — may have additional entry requirements. Review your chosen program's page for details, or contact the Admissions Office to confirm.",
    items: [],
    isPlaceholder: true,
  },
];
