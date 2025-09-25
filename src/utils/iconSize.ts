export type IconSizeValue = "small" | "medium" | "large";

const iconSizeCss: Record<IconSizeValue, string> = {
  small: "size-3",
  medium: "size-4",
  large: "size-5"
};

export const getIconSize = (size?: IconSizeValue) => {
  return iconSizeCss[size || "medium"];
};
