export type BorderColor = "base" | "strong" | "muted" | "solid";

const borderColorCss: Record<BorderColor, string> = {
  base: "border-base",
  strong: "border-strong",
  muted: "border-muted",
  solid: "border-solid"
};

export const getBorderColor = (borderColor?: BorderColor): string => {
  return borderColor ? borderColorCss[borderColor] : "";
};
