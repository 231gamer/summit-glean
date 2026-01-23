/**
 * School/College data for the Colleges page
 * Contains information about all academic schools and colleges
 */

import type { School } from "@/types/colleges";

/**
 * Academic schools and colleges within the university
 * Each school contains dean info, programs, and research centers
 */
export const schools: School[] = [
  {
    name: "School of Engineering",
    dean: "Dr. Sarah Mitchell",
    deanImage:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face",
    description:
      "Leading innovation in technology, bioengineering, and sustainable design with world-class research facilities.",
    programs: [
      "Computer Science",
      "Mechanical Engineering",
      "Biomedical Engineering",
      "Civil Engineering",
      "Electrical Engineering",
      "Chemical Engineering",
    ],
    type: "both",
    established: 1955,
    location: "Engineering Quad",
    website: "engineering.university.edu",
    contactEmail: "engineering@university.edu",
    facultyCount: 145,
    researchCenters: [
      "AI Research Center",
      "Sustainable Energy Lab",
      "Biotech Innovation Hub",
    ],
  },
  {
    name: "Business School",
    dean: "Dr. Michael Chen",
    deanImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    description:
      "Developing tomorrow's business leaders with a global perspective through experiential learning.",
    programs: [
      "Business Administration",
      "Finance",
      "Marketing",
      "Entrepreneurship",
      "Supply Chain Management",
      "Data Analytics",
    ],
    type: "both",
    established: 1972,
    location: "Business District",
    website: "business.university.edu",
    contactEmail: "business@university.edu",
    facultyCount: 89,
    researchCenters: [
      "Center for Entrepreneurship",
      "Financial Markets Lab",
      "Leadership Institute",
    ],
  },
  {
    name: "College of Arts & Sciences",
    dean: "Dr. Emily Rodriguez",
    deanImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
    description:
      "Exploring the humanities, social sciences, and natural world through interdisciplinary studies.",
    programs: [
      "Psychology",
      "Biology",
      "English",
      "History",
      "Chemistry",
      "Political Science",
      "Mathematics",
      "Physics",
    ],
    type: "undergraduate",
    established: 1890,
    location: "Main Quad",
    website: "artsci.university.edu",
    contactEmail: "artsci@university.edu",
    facultyCount: 210,
    researchCenters: [
      "Humanities Center",
      "Social Science Research Lab",
      "Environmental Studies Institute",
    ],
  },
  {
    name: "School of Medicine",
    dean: "Dr. James Wilson",
    deanImage:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
    description:
      "Training the next generation of healthcare professionals through innovative medical education.",
    programs: [
      "Medicine",
      "Nursing",
      "Public Health",
      "Pharmacology",
      "Physical Therapy",
      "Medical Research",
    ],
    type: "graduate",
    established: 1925,
    location: "Medical Campus",
    website: "medicine.university.edu",
    contactEmail: "medicine@university.edu",
    facultyCount: 320,
    researchCenters: [
      "Cancer Research Center",
      "Neuroscience Institute",
      "Public Health Lab",
    ],
  },
  {
    name: "School of Law",
    dean: "Prof. Amanda Foster",
    deanImage:
      "https://images.unsplash.com/photo-1551836026-d5c2c0b4d4a1?w=100&h=100&fit=crop&crop=face",
    description:
      "Preparing advocates for justice and legal excellence through rigorous academic programs.",
    programs: [
      "Juris Doctor",
      "Legal Studies",
      "International Law",
      "Environmental Law",
      "Business Law",
    ],
    type: "graduate",
    established: 1908,
    location: "Law Quad",
    website: "law.university.edu",
    contactEmail: "law@university.edu",
    facultyCount: 75,
    researchCenters: [
      "Center for Justice Reform",
      "International Law Institute",
      "Legal Technology Lab",
    ],
  },
  {
    name: "School of Design & Arts",
    dean: "Prof. Robert Chen",
    deanImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    description:
      "Fostering creativity and innovation in visual, performing, and digital arts.",
    programs: [
      "Fine Arts",
      "Graphic Design",
      "Architecture",
      "Music",
      "Film Studies",
      "Digital Media",
    ],
    type: "both",
    established: 1985,
    location: "Arts District",
    website: "design.university.edu",
    contactEmail: "design@university.edu",
    facultyCount: 68,
    researchCenters: [
      "Digital Arts Lab",
      "Urban Design Center",
      "Creative Entrepreneurship Hub",
    ],
  },
];
