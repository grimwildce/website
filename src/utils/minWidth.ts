export type MinWidth = "small" | "medium" | "large";

const minWidthCss: Record<MinWidth, string> = {
  small: "min-w-32",
  medium: "min-w-64",
  large: "min-w-80"
};

export const getMinWidth = (width?: MinWidth): string => {
  return width ? minWidthCss[width] : "";
};
