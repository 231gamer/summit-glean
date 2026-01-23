/**
 * Faculty and academic personnel data for the Colleges page
 * Information about notable faculty members and their research interests
 */

import type { FacultyMember } from "@/types/colleges";

/**
 * Featured faculty members displayed on the page
 * Includes research interests and contact information
 */
export const facultyMembers: FacultyMember[] = [
  {
    name: "Dr. Alexandra Chen",
    title: "Professor of Computer Science",
    department: "School of Engineering",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    researchInterests: [
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Vision",
    ],
    email: "alexandra.chen@university.edu",
  },
  {
    name: "Prof. Marcus Johnson",
    title: "Dean of Research",
    department: "College of Arts & Sciences",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    researchInterests: [
      "Cognitive Psychology",
      "Behavioral Economics",
      "Research Methodology",
    ],
    email: "marcus.johnson@university.edu",
  },
  {
    name: "Dr. Sarah Williams",
    title: "Associate Professor of Medicine",
    department: "School of Medicine",
    image:
      "https://images.unsplash.com/photo-1551836026-d5c2c0b4d4a1?w=100&h=100&fit=crop&crop=face",
    researchInterests: ["Neurology", "Medical Imaging", "Clinical Trials"],
    email: "sarah.williams@university.edu",
  },
];
