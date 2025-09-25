export type SpacingSize = "none" | "small" | "medium" | "large";
export type SpacingDirection = "col" | "row";

const rowSpacingCss: Record<SpacingSize, string> = {
  none: "",
  small: "space-x-2",
  medium: "space-x-4",
  large: "space-x-8"
};

const colSpacingCss: Record<SpacingSize, string> = {
  none: "",
  small: "space-y-2",
  medium: "space-y-4",
  large: "space-y-8"
};

const spacingSizeCss: Record<SpacingDirection, Record<SpacingSize, string>> = {
  col: colSpacingCss,
  row: rowSpacingCss
};

export const getSpacingSize = (spacing?: SpacingSize, direction?: SpacingDirection): string => {
  return spacingSizeCss[direction || "col"][spacing || "none"];
};
