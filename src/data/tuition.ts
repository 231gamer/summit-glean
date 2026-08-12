/**
 * Tuition & Fees data.
 * Real per-program dollar figures are not yet available in the repository,
 * so this ships as a clearly labeled "coming soon" structure rather than
 * fabricated numbers. The academic year lives in one place (`currentAcademicYear`)
 * so it never needs to be hardcoded inside a component.
 */
export interface FeeLineItem {
  label: string;
  amount?: string;
  note?: string;
}

export interface FeeCategory {
  title: string;
  items: FeeLineItem[];
}

export interface AcademicYearTuition {
  academicYear: string;
  isPlaceholder: boolean;
  categories: FeeCategory[];
}

/**
 * Program-specific tuition/fees, keyed by the program's slug (see
 * `src/lib/slug.ts`) rather than duplicating program data. Empty until
 * real per-program figures are confirmed.
 */
export interface ProgramTuition {
  programSlug: string;
  academicYear: string;
  tuition?: string;
  fees?: string;
}

export const currentAcademicYear = "2026–2027";

export const tuitionByYear: AcademicYearTuition[] = [
  {
    academicYear: currentAcademicYear,
    isPlaceholder: true,
    categories: [
      {
        title: "Tuition",
        items: [{ label: "Per Semester", note: "Tuition information coming soon" }],
      },
      {
        title: "Registration Fees",
        items: [{ label: "New Student Registration", note: "Coming soon" }],
      },
      {
        title: "Technology & Student Fees",
        items: [{ label: "Student Services & Technology Fee", note: "Coming soon" }],
      },
      {
        title: "Other Mandatory Fees",
        items: [{ label: "Library & Laboratory Fees", note: "Coming soon" }],
      },
    ],
  },
];

export const programTuition: ProgramTuition[] = [];

export const admissionsContact = {
  email: "lccedu1997@gmail.com",
  phones: ["(+231) 777-947739", "(+231) 778-747451"],
};
