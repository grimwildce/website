export type TextSize = "x-small" | "small" | "medium" | "large";

const textSizeCss: Record<TextSize, string> = {
  "x-small": "text-xs",
  small: "text-sm",
  medium: "text-base",
  large: "text-lg"
};

export const getTextSize = (size?: TextSize): string => {
  return size ? textSizeCss[size] : "";
};
