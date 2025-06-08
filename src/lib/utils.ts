// Utility function for className merging (Tailwind/React projects)
export function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}

// Adjust a hex color by percentage (-100 to 100)
export function adjustColor(hex: string, percent: number) {
  // Remove the # if present
  hex = hex.replace('#', '');

  // Convert to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Adjust each component
  const adjustedR = Math.max(0, Math.min(255, r + (r * percent / 100)));
  const adjustedG = Math.max(0, Math.min(255, g + (g * percent / 100)));
  const adjustedB = Math.max(0, Math.min(255, b + (b * percent / 100)));

  // Convert back to hex
  const rHex = Math.round(adjustedR).toString(16).padStart(2, '0');
  const gHex = Math.round(adjustedG).toString(16).padStart(2, '0');
  const bHex = Math.round(adjustedB).toString(16).padStart(2, '0');

  return `#${rHex}${gHex}${bHex}`;
}
