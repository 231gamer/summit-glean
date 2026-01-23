/**
 * Barrel export for colleges data
 * Centralized re-export of all colleges-related data
 */

export { programCategories, featuredPrograms } from "./colleges/programs";
export { schools } from "./colleges/schools";
export { statistics } from "./colleges/statistics";
export { facultyMembers } from "./colleges/faculty";
export { pathfinderQuestions, pathfinderResults } from "./colleges/pathfinder";
export { faqs, testimonials } from "./colleges/index";

// Re-export types for convenience
export type {
  Program,
  ProgramCategory,
  School,
  Statistic,
  FacultyMember,
  PathfinderQuestion,
  PathfinderOption,
  PathfinderResult,
  FAQ,
  Testimonial,
  PathfinderResultsMap,
} from "@/types/colleges";
