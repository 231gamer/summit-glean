export interface Testimonial {
  name: string;
  program: string;
  year: string;
  quote: string;
  image: string;
  currentRole?: string;
  rating?: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Samuel K. Johnson",
    program: "BSc Computer Science",
    year: "Class of 2022",
    quote:
      "The hands-on learning and access to modern labs prepared me for real-world challenges. The affordable tuition made quality education accessible to me.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop&crop=face",
    currentRole: "Software Engineer at Tech Liberia",
    rating: 5
  },
  {
    name: "Martha W. Kollie",
    program: "BSc Biology Education",
    year: "Class of 2021",
    quote:
      "The lecturers were supportive, and the learning environment pushed me to grow academically. The Christian values integrated into our education shaped my character.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=200&h=200&fit=crop&crop=face",
    currentRole: "High School Biology Teacher",
    rating: 5
  },
  {
    name: "Joseph T. Doe",
    program: "BSc Business Administration",
    year: "Class of 2023",
    quote:
      "Studying here gave me confidence, skills, and a strong academic foundation. The career-focused programs directly prepared me for the job market.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&fit=crop&crop=face",
    currentRole: "Business Analyst at Liberian Enterprises",
    rating: 5
  },
];