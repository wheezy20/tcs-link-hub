/* TCS Link Hub — link data
 * Edit this file to add, remove, or update links without touching HTML.
 * Each entry:
 *   label      → button text
 *   url        → destination ("#" when not live yet)
 *   iconName   → Lucide icon name (https://lucide.dev/icons)
 *   active     → true = clickable link, false = disabled
 *   comingSoon → optional, shows a "Coming Soon" badge on disabled buttons
 */
const links = [
  { label: "Inquiry Form", url: "https://admissions.tcsch.edu.gh/inquiry", iconName: "file-text", active: true },
  { label: "Admissions Portal", url: "https://admissions.tcsch.edu.gh/apply", iconName: "graduation-cap", active: true },
  { label: "Career & Job Openings", url: "#", iconName: "briefcase", active: false, comingSoon: true },
  { label: "School Gallery", url: "#", iconName: "image", active: false, comingSoon: true },
  { label: "Visit Us", url: "https://maps.app.goo.gl/HtHD46jHLVhT5mDAA", iconName: "map-pin", active: true }
];