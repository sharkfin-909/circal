export { hexToRgb, rgbToRgba };
function hexToRgb(hex: string) {
  // Remove the '#' if present
  hex = hex.replace(/^#/, "");

  // Parse 3-digit hex (#RGB) into 6-digit format (#RRGGBB)
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  // Convert to RGB values
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgb(${r}, ${g}, ${b})`;
}

function rgbToRgba(rgb: string, alpha: number) {
  if (!/^rgb\(\d{1,3},\s*\d{1,3},\s*\d{1,3}\)$/.test(rgb)) {
    throw new Error("Invalid RGB format. Expected 'rgb(r, g, b)'.");
  }
  if (alpha < 0 || alpha > 1) {
    throw new Error("Alpha must be between 0 and 1.");
  }

  // Extract r, g, b values
  const [r, g, b] = rgb.match(/\d+/g)!.map(Number);
  let res = `rgba(${r}, ${g}, ${b}, ${alpha})`;
  return res;
}
