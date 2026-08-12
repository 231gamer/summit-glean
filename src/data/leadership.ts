/**
 * Leadership data for the About > Leadership page.
 * Single source of truth — do not hardcode leadership info in JSX.
 *
 * No confirmed leadership names/photos exist in the repository yet, so
 * entries are marked `isPlaceholder: true` until real institutional
 * information is supplied. Replace `image` and `name` directly here.
 */
export interface LeadershipMember {
  id: string;
  name: string;
  title: string;
  image?: string;
  shortBio?: string;
  order: number;
  isPlaceholder?: boolean;
}

export const leadership: LeadershipMember[] = [
  {
    id: "president",
    name: "Office of the President",
    title: "President",
    shortBio:
      "Liberia Christian College is led by a President who guides the institution's academic mission, spiritual formation, and long-term growth. A full biography will be published here once confirmed by the President's office.",
    order: 1,
    isPlaceholder: true,
  },
];
