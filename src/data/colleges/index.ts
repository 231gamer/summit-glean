/**
 * FAQs and testimonials data for the Colleges page
 * Frequently asked questions and student success stories
 */

import type { FAQ, Testimonial } from "@/types/colleges";

/**
 * Frequently asked questions about admissions and programs
 * Displayed in accordion component
 */
export const faqs: FAQ[] = [
  {
    question: "How do I choose the right program?",
    answer:
      "Use our Pathfinder tool above or speak with an academic advisor. Consider your career goals, learning preferences, and available time commitment. Our admissions team is also available for personalized guidance.",
  },
  {
    question: "What are the admission requirements?",
    answer:
      "Requirements vary by program. Generally, undergraduate programs require high school transcripts, standardized test scores, and essays. Graduate programs may require previous degree transcripts, GRE/GMAT scores, and letters of recommendation.",
  },
  {
    question: "Is financial aid available?",
    answer:
      "Yes! We offer various forms of financial aid including scholarships, grants, work-study programs, and loans. Over 70% of our students receive some form of financial assistance. Visit our Financial Aid office for more information.",
  },
  {
    question: "Can I visit campus before applying?",
    answer:
      "Absolutely! We offer daily campus tours, open houses, and virtual visit options. Schedule your visit through our admissions page to explore our facilities and meet current students and faculty.",
  },
  {
    question: "Are there online program options?",
    answer:
      "Yes, we offer fully online and hybrid programs across multiple disciplines. These programs maintain the same academic rigor and faculty quality as our on-campus offerings while providing flexibility for working professionals.",
  },
];

/**
 * Student and alumni testimonials
 * Success stories highlighting program impact and outcomes
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "The interdisciplinary approach to learning here prepared me for real-world challenges in ways I never expected. The faculty mentorship was invaluable.",
    name: "Alexandra Chen",
    program: "Computer Science, Class of 2023",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    currentRole: "Software Engineer at TechCorp",
  },
  {
    quote:
      "The research opportunities and faculty mentorship transformed my career trajectory completely. The hands-on projects were particularly valuable.",
    name: "Marcus Johnson",
    program: "Biomedical Engineering, Class of 2022",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    currentRole: "Research Scientist at BioMed Labs",
  },
];
