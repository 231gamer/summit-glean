import { BookOpen, Briefcase, Users, type LucideIcon } from "lucide-react";

/**
 * Future-ready category shell for the Faculty & Staff directory.
 * No real faculty/staff profiles exist in the repository yet — this
 * intentionally holds no fabricated people, only the categories the
 * directory will eventually be organized into.
 */
export interface FacultyStaffCategory {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const facultyStaffCategories: FacultyStaffCategory[] = [
  {
    icon: BookOpen,
    title: "Faculty",
    description: "Instructors and professors across LCC's Colleges & Schools.",
  },
  {
    icon: Briefcase,
    title: "Administrative Staff",
    description: "Leaders overseeing academic and institutional operations.",
  },
  {
    icon: Users,
    title: "Support Staff",
    description: "The broader team supporting student life and campus operations.",
  },
];
