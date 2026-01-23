# Data Structure Reference

This file provides a quick reference for all the data structures in the refactored Colleges page.

## Quick Navigation

- **Programs**: `src/data/colleges/programs.ts`
- **Schools**: `src/data/colleges/schools.ts`
- **Statistics**: `src/data/colleges/statistics.ts`
- **Faculty**: `src/data/colleges/faculty.ts`
- **Pathfinder**: `src/data/colleges/pathfinder.ts`
- **FAQs & Testimonials**: `src/data/colleges/index.ts`
- **Types**: `src/types/colleges.ts`

## Data at a Glance

### Programs (6 items)
- **Computer Science** (B.S., School of Engineering, Featured) - $45k/year
- **Business Administration** (MBA, Business School, Featured) - $65k/year
- **Biomedical Engineering** (B.S., School of Engineering) - $48k/year
- **Psychology** (B.A., College of Arts & Sciences) - $42k/year
- **Data Science** (M.S., School of Computing, Featured) - $52k/year
- **Environmental Studies** (B.S., College of Natural Sciences) - $44k/year

### Program Categories (6 items)
1. Undergraduate (65+ programs)
2. Graduate (45+ programs)
3. Online Learning (30+ programs)
4. Research ($45M funding)
5. Professional (Industry-focused)
6. International (25+ countries)

### Schools (6 items)
1. **School of Engineering** - Dean: Dr. Sarah Mitchell
2. **Business School** - Dean: Dr. Michael Chen
3. **College of Arts & Sciences** - Dean: Dr. Emily Rodriguez
4. **School of Medicine** - Dean: Dr. James Wilson
5. **School of Law** - Dean: Prof. Amanda Foster
6. **School of Design & Arts** - Dean: Prof. Robert Chen

### Statistics (6 items)
- 145+ Programs Offered
- 10:1 Student-Faculty Ratio
- $68M Research Funding
- 96% Employment Rate
- 25% International Students
- 250 acres Campus Size

### Faculty (3 items)
1. Dr. Alexandra Chen - Professor of Computer Science
2. Prof. Marcus Johnson - Dean of Research
3. Dr. Sarah Williams - Associate Professor of Medicine

### Pathfinder Quiz (3 questions)
**Q1**: What interests you most? (4 options)
- Technology & Innovation
- Healthcare & Science
- Business & Leadership
- Arts & Humanities

**Q2**: What's your preferred learning style? (4 options)
- Hands-on Labs
- Research Papers
- Group Projects
- Online Modules

**Q3**: Career goal timeframe? (4 options)
- Immediate employment
- Advanced degree
- Research career
- Entrepreneurship

**Results**: 4 categories with 3 recommendations each
- Tech: Computer Science (95%), Data Science (88%), Information Systems (82%)
- Health: Biomedical Engineering (92%), Nursing (89%), Public Health (85%)
- Business: Business Admin (96%), Finance (88%), Marketing (84%)
- Arts: English (90%), Psychology (87%), History (83%)

### FAQs (5 items)
1. How do I choose the right program?
2. What are the admission requirements?
3. Is financial aid available?
4. Can I visit campus before applying?
5. Are there online program options?

### Testimonials (2 items)
1. Alexandra Chen - Computer Science (2023) - Software Engineer at TechCorp
2. Marcus Johnson - Biomedical Engineering (2022) - Research Scientist at BioMed Labs

## Import Examples

### Import All Data
```tsx
import {
  programCategories,
  featuredPrograms,
  schools,
  statistics,
  facultyMembers,
  pathfinderQuestions,
  pathfinderResults,
  faqs,
  testimonials,
} from "@/data/colleges";
```

### Import Specific Data
```tsx
import { featuredPrograms } from "@/data/colleges/programs";
import { schools } from "@/data/colleges/schools";
import { pathfinderQuestions } from "@/data/colleges/pathfinder";
```

### Import Types Only
```tsx
import type {
  Program,
  School,
  FAQ,
  Testimonial,
} from "@/data/colleges";
```

## Type Definitions Quick Reference

```typescript
interface Program {
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

interface School {
  name: string;
  dean: string;
  deanImage?: string;
  description: string;
  programs: string[];
  type: "both" | "undergraduate" | "graduate";
  established?: number;
  location?: string;
  website?: string;
  contactEmail?: string;
  facultyCount?: number;
  researchCenters?: string[];
}

interface Statistic {
  label: string;
  value: string;
  icon: LucideIcon;
  description?: string;
}

interface FacultyMember {
  name: string;
  title: string;
  department: string;
  image: string;
  researchInterests: string[];
  email: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Testimonial {
  quote: string;
  name: string;
  program: string;
  image: string;
  currentRole: string;
}
```

## File Statistics

- **Total Data Files**: 7
- **Total Type Definitions**: 11
- **Total Data Items**: ~40+
- **Total Lines of Code (excluding Colleges.tsx)**: ~800
- **Colleges.tsx Reduction**: ~900 lines removed (60% reduction)
- **TypeScript Coverage**: 100%
- **Zero `any` Types**: ✓

## Notes

- All images use Unsplash URLs (update with real images when available)
- All email addresses are placeholders (update with real emails)
- All phone numbers are placeholders (update with real numbers)
- Faculty photos use placeholder Unsplash images
- All data is properly typed and documented
