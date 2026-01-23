/**
 * Type definitions for the Colleges page
 * Centralized types for all colleges-related entities
 */

import type { LucideIcon } from "lucide-react";

/**
 * Represents a single academic program
 * @property {number} id - Unique identifier for the program
 * @property {string} title - Program name (e.g., "Computer Science")
 * @property {string} degree - Degree type (e.g., "Bachelor of Science")
 * @property {string} school - School/College offering the program
 * @property {string} description - Brief program description
 * @property {boolean} featured - Whether program is featured on the home page
 * @property {string} image - URL to program image/banner
 * @property {string} [duration] - Program duration (e.g., "4 years")
 * @property {"Full-time" | "Part-time" | "Online"} [format] - Program delivery format
 * @property {string} [applicationDeadline] - Application deadline date
 * @property {string} [tuition] - Annual tuition cost
 * @property {number} [enrollmentCount] - Current enrollment numbers
 */
export interface Program {
  id: number;
  title: string;
  degree: string;
  school: string;
  description: string;
  featured: boolean;
  image: string;
  duration?: string;
  format?: "Full-time" | "Part-time" | "Online";
  applicationDeadline?: string;
  tuition?: string;
  enrollmentCount?: number;
}

/**
 * Represents a program category for filtering/browsing
 * @property {LucideIcon} icon - Icon component from lucide-react
 * @property {string} title - Category display name
 * @property {string} description - Category description
 * @property {string} badge - Display badge (e.g., "65+ programs")
 * @property {string} href - Link to filtered program list
 * @property {string} color - Tailwind color classes for background
 * @property {string} iconColor - Tailwind color classes for icon
 * @property {boolean} [comingSoon] - Whether this category is coming soon
 */
export interface ProgramCategory {
  icon: LucideIcon;
  title: string;
  description: string;
  badge: string;
  href: string;
  color: string;
  iconColor: string;
  comingSoon?: boolean;
}

/**
 * Represents an academic school/college within the university
 * @property {string} name - Official school name
 * @property {string} description - School mission and overview
 * @property {string[]} programs - List of program names offered
 * @property {"both" | "undergraduate" | "graduate"} type - Degree levels offered
 * @property {string} [duration] - Program duration (e.g., "4 years", "3.5 years")
 * @property {string} [creditHours] - Credit hours required (e.g., "120-144")
 * @property {string} [location] - Campus location
 * @property {string} [website] - School website URL
 * @property {string} [contactEmail] - Main contact email
 * @property {string[]} [researchCenters] - List of research centers/labs
 */
export interface School {
  name: string;
  description: string;
  programs: string[];
  type: "both" | "undergraduate" | "graduate";
  duration?: string;
  creditHours?: string;
  location?: string;
  website?: string;
  contactEmail?: string;
  researchCenters?: string[];
}

/**
 * Represents a key university statistic
 * @property {string} label - Statistic label (e.g., "Programs Offered")
 * @property {string} value - Numeric or text value (e.g., "145+")
 * @property {LucideIcon} icon - Icon component
 * @property {string} [description] - Optional detailed description
 */
export interface Statistic {
  label: string;
  value: string;
  icon: LucideIcon;
  description?: string;
}

/**
 * Represents faculty member information
 * @property {string} name - Faculty member's full name
 * @property {string} title - Job title (e.g., "Professor of Computer Science")
 * @property {string} department - Department/School affiliation
 * @property {string} image - URL to faculty photo
 * @property {string[]} researchInterests - List of research areas
 * @property {string} email - Faculty email address
 */
export interface FacultyMember {
  name: string;
  title: string;
  department: string;
  image: string;
  researchInterests: string[];
  email: string;
}

/**
 * Single question in the Pathfinder quiz tool
 * @property {string} question - Question text
 * @property {PathfinderOption[]} options - Available answer options
 */
export interface PathfinderQuestion {
  question: string;
  options: PathfinderOption[];
}

/**
 * Single answer option for Pathfinder question
 * @property {string} id - Unique option identifier
 * @property {string} label - Display text for option
 * @property {string} [description] - Optional description
 * @property {LucideIcon} [icon] - Optional icon component
 */
export interface PathfinderOption {
  id: string;
  label: string;
  description?: string;
  icon?: LucideIcon;
}

/**
 * Pathfinder recommendation result
 * @property {string} title - Program title
 * @property {string} degree - Degree type
 * @property {number} match - Match percentage (0-100)
 * @property {string} description - Brief program description
 */
export interface PathfinderResult {
  title: string;
  degree: string;
  match: number;
  description: string;
}

/**
 * FAQ item for Q&A section
 * @property {string} question - Question text
 * @property {string} answer - Answer text
 */
export interface FAQ {
  question: string;
  answer: string;
}

/**
 * Student or alumni testimonial
 * @property {string} quote - Testimonial text
 * @property {string} name - Person's name
 * @property {string} program - Program/Class year
 * @property {string} image - URL to person's photo
 * @property {string} currentRole - Current job title/role
 */
export interface Testimonial {
  quote: string;
  name: string;
  program: string;
  image: string;
  currentRole: string;
}

/**
 * Pathfinder results mapping by interest category
 * Maps interest type to array of recommended programs
 */
export type PathfinderResultsMap = Record<string, PathfinderResult[]>;
