/**
 * Pathfinder quiz tool data for the Colleges page
 * Questions, options, and program recommendations
 */

import {
  Lightbulb,
  Heart,
  Briefcase,
  Sparkles,
} from "lucide-react";
import type {
  PathfinderQuestion,
  PathfinderResultsMap,
} from "@/types/colleges";

/**
 * Quiz questions for the Pathfinder tool
 * Three progressive questions to guide students to suitable programs
 */
export const pathfinderQuestions: PathfinderQuestion[] = [
  {
    question: "What interests you most?",
    options: [
      {
        id: "tech",
        label: "Technology & Innovation",
        icon: Lightbulb,
        description: "Computers, engineering, AI",
      },
      {
        id: "health",
        label: "Healthcare & Science",
        icon: Heart,
        description: "Medicine, biology, research",
      },
      {
        id: "business",
        label: "Business & Leadership",
        icon: Briefcase,
        description: "Management, finance, entrepreneurship",
      },
      {
        id: "arts",
        label: "Arts & Humanities",
        icon: Sparkles,
        description: "Design, literature, social sciences",
      },
    ],
  },
  {
    question: "What's your preferred learning style?",
    options: [
      {
        id: "hands-on",
        label: "Hands-on Labs",
        description: "Practical, experimental learning",
      },
      {
        id: "research",
        label: "Research Papers",
        description: "Theoretical, academic focus",
      },
      {
        id: "group",
        label: "Group Projects",
        description: "Collaborative, team-based",
      },
      {
        id: "online",
        label: "Online Modules",
        description: "Flexible, self-paced",
      },
    ],
  },
  {
    question: "Career goal timeframe?",
    options: [
      {
        id: "immediate",
        label: "Immediate employment",
        description: "Ready-to-work skills",
      },
      {
        id: "advanced",
        label: "Advanced degree",
        description: "Graduate school preparation",
      },
      {
        id: "research-career",
        label: "Research career",
        description: "Academic or industrial research",
      },
      {
        id: "entrepreneur",
        label: "Entrepreneurship",
        description: "Start your own venture",
      },
    ],
  },
];

/**
 * Pathfinder results mapping by interest category
 * Maps each interest category to recommended programs with match percentages
 */
export const pathfinderResults: PathfinderResultsMap = {
  tech: [
    {
      title: "Computer Science",
      degree: "B.S. / M.S.",
      match: 95,
      description: "AI, Software Engineering, Cybersecurity",
    },
    {
      title: "Data Science",
      degree: "M.S.",
      match: 88,
      description: "Big Data Analytics, Machine Learning",
    },
    {
      title: "Information Systems",
      degree: "B.S.",
      match: 82,
      description: "Business Technology, IT Management",
    },
  ],
  health: [
    {
      title: "Biomedical Engineering",
      degree: "B.S.",
      match: 92,
      description: "Medical Devices, Healthcare Technology",
    },
    {
      title: "Nursing",
      degree: "B.S.N.",
      match: 89,
      description: "Clinical Practice, Healthcare Leadership",
    },
    {
      title: "Public Health",
      degree: "M.P.H.",
      match: 85,
      description: "Epidemiology, Health Policy",
    },
  ],
  business: [
    {
      title: "Business Administration",
      degree: "MBA",
      match: 96,
      description: "Leadership, Strategic Management",
    },
    {
      title: "Finance",
      degree: "B.S.",
      match: 88,
      description: "Investment Banking, Financial Analysis",
    },
    {
      title: "Marketing",
      degree: "B.S.",
      match: 84,
      description: "Digital Marketing, Brand Strategy",
    },
  ],
  arts: [
    {
      title: "English",
      degree: "B.A.",
      match: 90,
      description: "Literature, Writing, Critical Analysis",
    },
    {
      title: "Psychology",
      degree: "B.A.",
      match: 87,
      description: "Human Behavior, Mental Health",
    },
    {
      title: "History",
      degree: "B.A.",
      match: 83,
      description: "Historical Analysis, Cultural Studies",
    },
  ],
};
