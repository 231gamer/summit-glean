/**
 * School/College data for the Colleges page
 * Contains information about all academic schools and colleges
 */

import type { School } from "@/types/colleges";

/**
 * Academic schools and colleges within the university
 * Each school contains programs and research centers
 */
export const schools: School[] = [
  {
    name: "School of Business",
    category: "academic",
    description:
      "Developing professionals in leadership, entrepreneurship, finance, and organizational management.",
    programs: [
      "Accounting & Finance",
      "Procurement and Supply Chain",
      "Human Resources Management",
      "Management of International Organizations",
      "Entrepreneurship and Innovation",
      "Economics and Statistics",
      "Project Management",
      "International Business & Management",
      "Monitoring and Evaluation",
    ],
    type: "undergraduate",
    duration: "3.5 years",
    creditHours: "110-122",
    location: "Main Campus",
    website: "lcc.edu.lr",
    contactEmail: "lccedu1997@gmail.com",
    researchCenters: [
      "Business Innovation Hub",
      "Entrepreneurship Center",
      "Economic Policy Unit",
    ],
    degreeCount: 9 // ADD THIS
  },
  {
    name: "School of Agriculture",
    category: "academic",
    description:
      "Promoting sustainable agriculture, agribusiness growth, and food security through applied training.",
    programs: [
      "General Agriculture",
      "Agri-Business Management",
      "Agri Economics",
    ],
    type: "undergraduate",
    duration: "3 years",
    creditHours: "110-128",
    location: "Main Campus, Dixville Branch",
    website: "lcc.edu.lr",
    contactEmail: "lccedu1997@gmail.com",
    researchCenters: [
      "Sustainable Farming Unit",
      "Food Security Research Center",
    ],
    degreeCount: 3 // ADD THIS
  },
  {
    name: "School of Science & Technology",
    category: "academic",
    description:
      "Equipping students with technical and analytical skills for the digital and information-driven world.",
    programs: [
      "Computer Networking",
      "Data Science & Analytics",
      "Management Information System",
      "Telecommunication",
      "Fashion & Garment Design",
    ],
    type: "undergraduate",
    duration: "4 years",
    creditHours: "120-144",
    location: "Main Campus",
    website: "lcc.edu.lr",
    contactEmail: "lccedu1997@gmail.com",
    researchCenters: [
      "ICT Innovation Lab",
      "Data & Systems Research Unit",
    ],
    degreeCount: 5 // ADD THIS
  },
  {
    name: "School of Christian Education",
    category: "academic",
    description:
      "Training faith-based educators and church leaders grounded in biblical and academic principles.",
    programs: [
      "Christian Education",
      "Pastoral Theology",
      "Church Administration & Management",
    ],
    type: "undergraduate",
    duration: "3 years",
    creditHours: "120-144",
    location: "Main Campus, Dixville Branch",
    website: "lcc.edu.lr",
    contactEmail: "lccedu1997@gmail.com",
    researchCenters: [
      "Biblical Studies Center",
      "Faith & Leadership Institute",
    ],
    degreeCount: 3 // ADD THIS
  },
  {
    name: "School of Public Health & Environmental Science",
    category: "academic",
    description:
      "Preparing practitioners to address public health challenges and environmental sustainability.",
    programs: [
      "Public Health",
      "Environmental Science",
    ],
    type: "undergraduate",
    duration: "3.5 years",
    creditHours: "120-144",
    location: "Main Campus",
    website: "lcc.edu.lr",
    contactEmail: "lccedu1997@gmail.com",
    researchCenters: [
      "Community Health Research Unit",
      "Environmental Impact Lab",
    ],
    degreeCount: 2 // ADD THIS
  },
  {
    name: "School of Liberal Arts",
    category: "academic",
    description:
      "Fostering critical thinking, communication, governance, and creative professional skills.",
    programs: [
      "Criminal Justice",
      "Public Administration",
      "Communication Arts",
    ],
    type: "undergraduate",
    duration: "3 years",
    creditHours: "120-144",
    location: "Main Campus, Dixville Branch",
    website: "lcc.edu.lr",
    contactEmail: "lccedu1997@gmail.com",
    researchCenters: [
      "Governance & Policy Center",
      "Creative Arts Studio",
    ],
    degreeCount: 3 // ADD THIS
  },
  {
    name: "School of Education",
    category: "academic",
    description:
      "Preparing competent educators and academic leaders for all levels of the education system.",
    programs: [
      "Early Childhood Education",
      "Primary Education",
      "Secondary Education",
      "Education Management & Supervision",
      "Guidance and Counseling",
    ],
    type: "undergraduate",
    duration: "3 years",
    creditHours: "120-144",
    location: "Main Campus, Dixville Branch",
    website: "lcc.edu.lr",
    contactEmail: "lccedu1997@gmail.com",
    researchCenters: [
      "Teacher Development Center",
      "Educational Research Unit",
    ],
    degreeCount: 5 // ADD THIS
  },
  {
    name: "School of Continuing Education",
    category: "continuing",
    description:
      "Offering flexible, skill-based programs for career advancement and lifelong learning.",
    programs: [
      "Advanced Microsoft Excel",
      "Banking and Finance",
      "Compliance Management",
      "Data Analysis Using SPSS",
      "Digital Marketing Essentials",
      "Public Speaking",
      "Business Management",
      "Environmental Assessment",
      "Financial Management",
      "Hospitality Management",
      "QuickBooks Essentials",
      "Logistics and Supply Chain Management",
      "Microsoft Office Suits",
      "Monitoring and Evaluation",
      "Procurement and Contract Management",
      "Project Management",
      "Proposal Writing",
      "Public Relations and Media",
      "Public Sector Management",
      "Strategic Management",
      "Web Development Using WordPress",
    ],
    type: "undergraduate",
    duration: "3–12 months",
    creditHours: "varies",
    location: "Main Campus, Dixville Branch",
    website: "lcc.edu.lr",
    contactEmail: "lccedu1997@gmail.com",
    researchCenters: [
      "Professional Skills Lab",
      "Workforce Development Unit",
    ],
    degreeCount: 22 // ADD THIS
  },
];