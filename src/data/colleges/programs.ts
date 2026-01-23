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
  // ===== SCHOOL OF SCIENCE & TECHNOLOGY =====
  {
    id: 1,
    title: "Computer Networking",
    degree: "Bachelor of Science",
    school: "School of Science & Technology",
    description:
      "Build and manage secure computer networks with practical, industry-focused training.",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
    duration: "4 years",
    format: "Full-time",
    applicationDeadline: "Aug 30",
    tuition: "Varies",
    enrollmentCount: 120,
  },
  {
    id: 2,
    title: "Data Science & Analytics",
    degree: "Bachelor of Science",
    school: "School of Science & Technology",
    description:
      "Learn data analysis, visualization, and decision-making using modern analytical tools.",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    duration: "4 years",
    format: "Full-time",
    applicationDeadline: "Aug 30",
    tuition: "Varies",
    enrollmentCount: 95,
  },
  {
    id: 3,
    title: "Management Information System",
    degree: "Bachelor of Science",
    school: "School of Science & Technology",
    description:
      "Combine business strategy with information systems for organizational efficiency.",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
    duration: "4 years",
    format: "Full-time",
    applicationDeadline: "Aug 30",
    tuition: "Varies",
    enrollmentCount: 110,
  },
  {
    id: 4,
    title: "Telecommunication",
    degree: "Bachelor of Science",
    school: "School of Science & Technology",
    description:
      "Study communication systems, networking infrastructure, and digital transmission.",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=400&h=250&fit=crop",
    duration: "4 years",
    format: "Full-time",
    applicationDeadline: "Aug 30",
    tuition: "Varies",
    enrollmentCount: 80,
  },

  // ===== SCHOOL OF BUSINESS =====
  {
    id: 5,
    title: "Accounting & Finance",
    degree: "Bachelor of Science",
    school: "School of Business",
    description:
      "Gain strong financial, accounting, and auditing skills for modern organizations.",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
    duration: "4 years",
    format: "Full-time",
    applicationDeadline: "Aug 30",
    tuition: "Varies",
    enrollmentCount: 200,
  },
  {
    id: 6,
    title: "Procurement and Supply Chain",
    degree: "Bachelor of Science",
    school: "School of Business",
    description:
      "Learn sourcing, logistics, and supply chain optimization in public and private sectors.",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop",
    duration: "4 years",
    format: "Full-time",
    applicationDeadline: "Aug 30",
    tuition: "Varies",
    enrollmentCount: 140,
  },
  {
    id: 7,
    title: "Human Resources Management",
    degree: "Bachelor of Science",
    school: "School of Business",
    description:
      "Develop expertise in workforce planning, labor relations, and organizational behavior.",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=250&fit=crop",
    duration: "4 years",
    format: "Full-time",
    applicationDeadline: "Aug 30",
    tuition: "Varies",
    enrollmentCount: 130,
  },
  {
    id: 8,
    title: "Entrepreneurship and Innovation",
    degree: "Bachelor of Science",
    school: "School of Business",
    description:
      "Build, launch, and manage innovative ventures with practical business skills.",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
    duration: "4 years",
    format: "Full-time",
    applicationDeadline: "Aug 30",
    tuition: "Varies",
    enrollmentCount: 160,
  },

  // ===== SCHOOL OF AGRICULTURE =====
  {
    id: 9,
    title: "General Agriculture",
    degree: "Bachelor of Science",
    school: "School of Agriculture",
    description:
      "Study crop production, livestock management, and sustainable farming systems.",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&h=250&fit=crop",
    duration: "4 years",
    format: "Full-time",
    applicationDeadline: "Aug 30",
    tuition: "Varies",
    enrollmentCount: 150,
  },
  {
    id: 10,
    title: "Agri-Business Management",
    degree: "Bachelor of Science",
    school: "School of Agriculture",
    description:
      "Focus on agricultural economics, marketing, and farm business operations.",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=250&fit=crop",
    duration: "4 years",
    format: "Full-time",
    applicationDeadline: "Aug 30",
    tuition: "Varies",
    enrollmentCount: 120,
  },

  // ===== SCHOOL OF EDUCATION =====
  {
    id: 11,
    title: "Early Childhood Education",
    degree: "Bachelor of Education",
    school: "School of Education",
    description:
      "Prepare to educate and nurture young learners using modern teaching methods.",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&h=250&fit=crop",
    duration: "4 years",
    format: "Full-time",
    applicationDeadline: "Aug 30",
    tuition: "Varies",
    enrollmentCount: 170,
  },
  {
    id: 12,
    title: "Secondary Education",
    degree: "Bachelor of Education",
    school: "School of Education",
    description:
      "Train as a professional secondary school teacher with subject specialization.",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop",
    duration: "4 years",
    format: "Full-time",
    applicationDeadline: "Aug 30",
    tuition: "Varies",
    enrollmentCount: 140,
  },

  // ===== CONTINUING EDUCATION (CERTIFICATES) =====
  {
    id: 13,
    title: "Project Management",
    degree: "Certificate",
    school: "School of Continuing Education",
    description:
      "Gain practical skills to plan, execute, and manage projects successfully.",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop",
    duration: "6 months",
    format: "Part-time",
    applicationDeadline: "Rolling",
    tuition: "Varies",
    enrollmentCount: 90,
  },
  {
    id: 14,
    title: "Digital Marketing Essentials",
    degree: "Certificate",
    school: "School of Continuing Education",
    description:
      "Learn online marketing, social media strategy, and digital branding fundamentals.",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?w=400&h=250&fit=crop",
    duration: "3 months",
    format: "Part-time",
    applicationDeadline: "Rolling",
    tuition: "Varies",
    enrollmentCount: 110,
  }

];
