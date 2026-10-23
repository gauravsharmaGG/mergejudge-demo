// Small helper used by the demo: clamps a page number into range.
export function clampPage(page, total) {
  if (total <= 0) return 1;
  return Math.min(Math.max(page, 1), total);
}
