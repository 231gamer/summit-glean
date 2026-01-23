/**
 * Program data for the Colleges page
 * Contains program categories and featured programs
 */

import {
  GraduationCap,
  BookOpen,
  Monitor,
  Microscope,
  Briefcase,
  Globe,
} from "lucide-react";
import type { Program, ProgramCategory } from "@/types/colleges";

/**
 * Program categories for filtering and browsing
 * Organized by degree level, format, and focus area
 */
export const programCategories: ProgramCategory[] = [
  {
    icon: GraduationCap,
    title: "Undergraduate",
    description: "Bachelor's degrees & foundational programs",
    badge: "75+ programs",
    href: "/programs?level=undergraduate",
    color: "bg-blue-50 border-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: BookOpen,
    title: "Graduate",
    description: "Master's, Doctoral & advanced studies",
    badge: "Coming Soon",
    href: "/programs?level=graduate",
    color: "bg-purple-50 border-purple-100",
    iconColor: "text-purple-600",
    comingSoon: true,
  },
  {
    icon: Monitor,
    title: "Online Learning",
    description: "Flexible online & hybrid options",
    badge: "30+ programs",
    href: "/programs?format=online",
    color: "bg-green-50 border-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Microscope,
    title: "Research",
    description: "Cutting-edge research opportunities",
    badge: "$45M funding",
    href: "/research",
    color: "bg-amber-50 border-amber-100",
    iconColor: "text-amber-600",
  },
  {
    icon: Briefcase,
    title: "Professional",
    description: "Executive education & certificates",
    badge: "Industry-focused",
    href: "/programs?type=professional",
    color: "bg-red-50 border-red-100",
    iconColor: "text-red-600",
  },
  {
    icon: Globe,
    title: "International",
    description: "Study abroad & global programs",
    badge: "25+ countries",
    href: "/international",
    color: "bg-cyan-50 border-cyan-100",
    iconColor: "text-cyan-600",
  },
];

/**
 * Featured programs displayed in carousel on home page
 * Includes detailed metadata for program cards
 */
export const featuredPrograms: Program[] = [
  {
    id: 1,
    title: "Computer Science",
    degree: "Bachelor of Science",
    school: "School of Engineering",
    description:
      "Develop expertise in algorithms, AI, and software engineering with hands-on projects.",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop",
    duration: "4 years",
    format: "Full-time",
    applicationDeadline: "Jan 15, 2024",
    tuition: "$45,000/year",
    enrollmentCount: 320,
  },
  {
    id: 2,
    title: "Business Administration",
    degree: "Master of Business Administration",
    school: "Business School",
    description:
      "Transform your career with our globally recognized MBA program.",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
    duration: "2 years",
    format: "Full-time",
    applicationDeadline: "Mar 1, 2024",
    tuition: "$65,000/year",
    enrollmentCount: 180,
  },
  {
    id: 3,
    title: "Biomedical Engineering",
    degree: "Bachelor of Science",
    school: "School of Engineering",
    description:
      "Bridge biology and engineering to create innovative healthcare solutions.",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop",
    duration: "4 years",
    format: "Full-time",
    applicationDeadline: "Feb 1, 2024",
    tuition: "$48,000/year",
    enrollmentCount: 150,
  },
  {
    id: 4,
    title: "Psychology",
    degree: "Bachelor of Arts",
    school: "College of Arts & Sciences",
    description: "Understand human behavior and prepare for careers in mental health.",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop",
    duration: "4 years",
    format: "Full-time",
    applicationDeadline: "Jan 31, 2024",
    tuition: "$42,000/year",
    enrollmentCount: 280,
  },
  {
    id: 5,
    title: "Data Science",
    degree: "Master of Science",
    school: "School of Computing",
    description: "Master the art of extracting insights from complex data sets.",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    duration: "1.5 years",
    format: "Full-time",
    applicationDeadline: "Dec 15, 2023",
    tuition: "$52,000/year",
    enrollmentCount: 120,
  },
  {
    id: 6,
    title: "Environmental Studies",
    degree: "Bachelor of Science",
    school: "College of Natural Sciences",
    description:
      "Address global environmental challenges through interdisciplinary research.",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop",
    duration: "4 years",
    format: "Full-time",
    applicationDeadline: "Feb 15, 2024",
    tuition: "$44,000/year",
    enrollmentCount: 90,
  },
  {
    id: 7,
    title: "Mechanical Engineering",
    degree: "Bachelor of Science",
    school: "School of Engineering",
    description:
      "Design and build mechanical systems from robotics to renewable energy solutions.",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=250&fit=crop",
    duration: "4 years",
    format: "Full-time",
    applicationDeadline: "Jan 31, 2024",
    tuition: "$47,000/year",
    enrollmentCount: 210,
  },
  {
    id: 8,
    title: "Marketing & Communications",
    degree: "Bachelor of Arts",
    school: "Business School",
    description:
      "Master digital marketing, brand management, and corporate communications strategies.",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    duration: "4 years",
    format: "Full-time",
    applicationDeadline: "Feb 28, 2024",
    tuition: "$41,000/year",
    enrollmentCount: 380,
  },
  {
    id: 9,
    title: "Chemistry",
    degree: "Bachelor of Science",
    school: "College of Natural Sciences",
    description:
      "Explore molecular interactions and chemical innovations with state-of-the-art labs.",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1576091160399-3c3bf2a0b5b2?w=400&h=250&fit=crop",
    duration: "4 years",
    format: "Full-time",
    applicationDeadline: "Jan 25, 2024",
    tuition: "$45,000/year",
    enrollmentCount: 165,
  },
  {
    id: 10,
    title: "Nursing",
    degree: "Bachelor of Science",
    school: "School of Health Sciences",
    description:
      "Prepare for a rewarding healthcare career with clinical training and mentorship.",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1631217314831-c02b2e9de868?w=400&h=250&fit=crop",
    duration: "4 years",
    format: "Full-time",
    applicationDeadline: "Mar 15, 2024",
    tuition: "$46,000/year",
    enrollmentCount: 240,
  },
  {
    id: 11,
    title: "English Literature",
    degree: "Bachelor of Arts",
    school: "College of Arts & Sciences",
    description:
      "Analyze great works of literature and develop critical thinking and writing skills.",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&h=250&fit=crop",
    duration: "4 years",
    format: "Full-time",
    applicationDeadline: "Feb 20, 2024",
    tuition: "$40,000/year",
    enrollmentCount: 195,
  },
  {
    id: 12,
    title: "Economics",
    degree: "Bachelor of Arts",
    school: "Business School",
    description:
      "Understand global markets, policy, and economic systems shaping our world.",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf35f?w=400&h=250&fit=crop",
    duration: "4 years",
    format: "Full-time",
    applicationDeadline: "Feb 10, 2024",
    tuition: "$42,500/year",
    enrollmentCount: 220,
  },
];
