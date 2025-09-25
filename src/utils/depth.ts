export type DepthValue = 1 | 2 | 3;

const depthCss: Record<DepthValue, string> = {
  1: "bg-panel-1",
  2: "bg-panel-2",
  3: "bg-panel-3"
};

export const getDepth = (depth?: number): string => {
  // Ensure depth is a number and default to 1 if undefined or NaN
  const normalized = typeof depth === "number" && !isNaN(depth) ? depth : 1;
  // Wrap the value to 1, 2, or 3
  const wrapped: DepthValue = (((((normalized - 1) % 3) + 3) % 3) + 1) as DepthValue;
  return depthCss[wrapped];
};
