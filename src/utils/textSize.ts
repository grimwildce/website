export type TextSize = "small" | "medium" | "large";

const textSizeCss: Record<TextSize, string> = {
  small: "text-sm",
  medium: "text-base",
  large: "text-lg"
};

export const getTextSize = (size?: TextSize): string => {
  return size ? textSizeCss[size] : "";
};
