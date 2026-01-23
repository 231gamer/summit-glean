/**
 * Statistics and metrics data for the Colleges page
 * Key university statistics displayed throughout the page
 */

import {
  GraduationCap,
  Users,
  DollarSign,
  Briefcase,
  Globe,
  MapPin,
} from "lucide-react";
import type { Statistic } from "@/types/colleges";

/**
 * University statistics displayed on the page
 * Includes enrollment, employment, funding, and other key metrics
 */
export const statistics: Statistic[] = [
  {
    label: "Programs Offered",
    value: "145+",
    icon: GraduationCap,
    description: "Across 8 schools & colleges",
  },
  {
    label: "Student-Faculty Ratio",
    value: "10:1",
    icon: Users,
    description: "Personalized attention",
  },
  {
    label: "Research Funding",
    value: "$68M",
    icon: DollarSign,
    description: "Annual research expenditure",
  },
  {
    label: "Employment Rate",
    value: "96%",
    icon: Briefcase,
    description: "Within 6 months of graduation",
  },
  {
    label: "International Students",
    value: "25%",
    icon: Globe,
    description: "From 70+ countries",
  },
  {
    label: "Campus Size",
    value: "250 acres",
    icon: MapPin,
    description: "State-of-the-art facilities",
  },
];
