export type SpacingSize = "none" | "xs" | "sm" | "md" | "lg";
export type SpacingDirection = "col" | "row";

const rowSpacingCss: Record<SpacingSize, string> = {
  none: "",
  xs: "space-x-2",
  sm: "space-x-4",
  md: "space-x-8",
  lg: "space-x-12"
};

const colSpacingCss: Record<SpacingSize, string> = {
  none: "",
  xs: "space-y-2",
  sm: "space-y-4",
  md: "space-y-8",
  lg: "space-y-12"
};

const spacingSizeCss: Record<SpacingDirection, Record<SpacingSize, string>> = {
  col: colSpacingCss,
  row: rowSpacingCss
};

export const getSpacingSize = (spacing?: SpacingSize, direction?: SpacingDirection): string => {
  return spacingSizeCss[direction || "col"][spacing || "none"];
};
