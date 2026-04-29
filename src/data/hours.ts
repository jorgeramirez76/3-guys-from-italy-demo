/**
 * Hours verified 2026-04-29 from Tripadvisor + Restaurantji.
 *
 * Sources:
 *  - https://www.tripadvisor.com/Restaurant_Review-g46539-d1942025-Reviews-Three_Guys_from_Italy-Kenilworth_New_Jersey.html
 *  - https://www.restaurantji.com/nj/kenilworth/three-guys-from-italy-/
 */
export type DayHours = {
  day: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
  label: string;
};

export const HOURS_VERIFIED = true;

const WEEKDAY = "11:00 AM – 9:00 PM";
const SUNDAY = "2:00 PM – 8:30 PM";

export const HOURS: DayHours[] = [
  { day: "Mon", label: WEEKDAY },
  { day: "Tue", label: WEEKDAY },
  { day: "Wed", label: WEEKDAY },
  { day: "Thu", label: WEEKDAY },
  { day: "Fri", label: WEEKDAY },
  { day: "Sat", label: WEEKDAY },
  { day: "Sun", label: SUNDAY },
];

/** Human-readable one-liner for compact UI cells. */
export const HOURS_ONE_LINE = "Mon–Sat 11 AM – 9 PM · Sun 2 – 8:30 PM";
